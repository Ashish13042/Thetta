import { NextRequest, NextResponse } from "next/server"

function processHtml(html: string, targetUrl: string, proxyOrigin: string): string {
  const parsedTarget = new URL(targetUrl)
  const origin = parsedTarget.origin

  // 1. Remove meta tags that restrict framing or CSP
  html = html.replace(/<meta[^>]*http-equiv=["']?(content-security-policy|x-frame-options)["']?[^>]*>/gi, "")

  // 2. Remove target="_top", target="_parent", target="_blank" from links so they don't break out of the iframe
  html = html.replace(/\btarget=["'](_top|_parent|_blank)["']/gi, 'target="_self"')

  // 3. Rewrite internal relative & absolute links to our proxy using the FULL absolute proxyOrigin
  html = html.replace(
    /<a\s+([^>]*?)href=(["'])(.*?)\2([^>]*)>/gi,
    (match, before, quote, rawHref, after) => {
      const trimmed = rawHref.trim()
      if (
        !trimmed ||
        trimmed.startsWith("#") ||
        trimmed.startsWith("javascript:") ||
        trimmed.startsWith("mailto:") ||
        trimmed.startsWith("tel:") ||
        trimmed.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff2?)$/i)
      ) {
        return match
      }

      try {
        const resolved = new URL(trimmed, origin)
        if (resolved.origin === origin) {
          const proxiedUrl = `${proxyOrigin}/api/proxy?url=${encodeURIComponent(resolved.href)}`
          return `<a ${before}href="${proxiedUrl}" target="_self"${after}>`
        }
      } catch {
        // invalid URL, keep unchanged
      }
      return match
    }
  )

  // 4. Rewrite forms to submit to proxy using the FULL absolute proxyOrigin
  html = html.replace(
    /<form\s+([^>]*?)action=(["'])(.*?)\2([^>]*)>/gi,
    (match, before, quote, rawAction, after) => {
      try {
        const resolved = new URL(rawAction.trim(), origin)
        if (resolved.origin === origin) {
          const proxiedUrl = `${proxyOrigin}/api/proxy?url=${encodeURIComponent(resolved.href)}`
          return `<form ${before}action="${proxiedUrl}" target="_self"${after}>`
        }
      } catch {
        // invalid action, keep unchanged
      }
      return match
    }
  )

  // 5. Inject base href and capture-phase navigation script into <head>
  // Notice proxyBase is explicitly absolute (${proxyOrigin}/api/proxy?url=) so <base href> does not hijack it!
  const scriptToInject = `
    <base href="${origin}/">
    <script>
      (function() {
        var origin = "${origin}";
        var proxyBase = "${proxyOrigin}/api/proxy?url=";

        function toProxiedUrl(rawUrl) {
          if (!rawUrl) return null;
          var trimmed = rawUrl.trim();
          if (trimmed.startsWith('#') || trimmed.startsWith('javascript:') || trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) {
            return null;
          }
          try {
            var u = new URL(trimmed, origin);
            if (u.origin === origin) {
              return proxyBase + encodeURIComponent(u.href);
            }
          } catch(e) {}
          return null;
        }

        // Intercept all link clicks in capture phase (executes BEFORE any page scripts or theme listeners)
        document.addEventListener('click', function(e) {
          var a = e.target.closest('a');
          if (!a) return;
          var href = a.getAttribute('href');
          if (!href) return;

          // If it is an in-page anchor like #section or /#section
          if (href.startsWith('#')) return;

          try {
            var u = new URL(href, origin);
            if (u.origin === origin && u.hash && (u.pathname === '/' || u.pathname === window.location.pathname)) {
              var el = document.querySelector(u.hash);
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth' });
                return;
              }
            }
          } catch(err) {}

          var proxied = toProxiedUrl(href);
          if (proxied) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            window.location.href = proxied;
          }
        }, true);

        // Intercept form submissions in capture phase
        document.addEventListener('submit', function(e) {
          var form = e.target;
          var action = form.getAttribute('action') || window.location.href;
          var proxied = toProxiedUrl(action);
          if (proxied) {
            form.action = proxied;
            form.target = "_self";
          }
        }, true);

        // Override window.open so programmatic links remain inside the frame
        var _open = window.open;
        window.open = function(url, target, features) {
          var proxied = toProxiedUrl(url);
          if (proxied && (!target || target === '_self' || target === '_top' || target === '_parent')) {
            window.location.href = proxied;
            return window;
          }
          return _open.apply(this, arguments);
        };
      })();
    </script>
  `

  if (html.includes("<head>")) {
    html = html.replace("<head>", `<head>${scriptToInject}`)
  } else if (html.includes("<head ")) {
    html = html.replace(/<head[^>]*>/, `$&${scriptToInject}`)
  } else {
    html = `${scriptToInject}${html}`
  }

  return html
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const targetUrl = searchParams.get("url")

  if (!targetUrl) {
    return new NextResponse("Missing url parameter", { status: 400 })
  }

  try {
    const proxyOrigin = request.nextUrl.origin
    const clientCookie = request.headers.get("cookie") || ""
    const res = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Cookie: clientCookie,
      },
    })

    const finalUrl = res.url || targetUrl
    let html = await res.text()
    html = processHtml(html, finalUrl, proxyOrigin)

    const headers = new Headers()
    headers.set("Content-Type", res.headers.get("Content-Type") || "text/html; charset=utf-8")

    // Forward Set-Cookie headers from target
    res.headers.forEach((val, key) => {
      if (key.toLowerCase() === "set-cookie") {
        const adjustedCookie = val.replace(/Domain=[^;]+;?/i, "").replace(/Secure;?/i, "")
        headers.append("Set-Cookie", adjustedCookie)
      }
    })

    return new NextResponse(html, {
      status: res.status,
      headers,
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return new NextResponse(`Error proxying target: ${message}`, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const targetUrl = searchParams.get("url")

  if (!targetUrl) {
    return new NextResponse("Missing url parameter", { status: 400 })
  }

  try {
    const proxyOrigin = request.nextUrl.origin
    const parsedTarget = new URL(targetUrl)
    const body = await request.text()
    const contentType = request.headers.get("content-type") || "application/x-www-form-urlencoded"
    const clientCookie = request.headers.get("cookie") || ""

    const postRes = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Content-Type": contentType,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        Cookie: clientCookie,
      },
      body,
      redirect: "manual",
    })

    const setCookies: string[] = []
    postRes.headers.forEach((val, key) => {
      if (key.toLowerCase() === "set-cookie") {
        setCookies.push(val)
      }
    })

    const location = postRes.headers.get("location")
    if (location) {
      const redirectUrl = new URL(location, parsedTarget.origin).toString()
      const cookieHeader = [
        clientCookie,
        ...setCookies.map((c) => c.split(";")[0]),
      ]
        .filter(Boolean)
        .join("; ")

      const pageRes = await fetch(redirectUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          Cookie: cookieHeader,
        },
      })

      const finalUrl = pageRes.url || redirectUrl
      let html = await pageRes.text()
      html = processHtml(html, finalUrl, proxyOrigin)

      const headers = new Headers()
      headers.set("Content-Type", pageRes.headers.get("Content-Type") || "text/html; charset=utf-8")

      setCookies.forEach((sc) => {
        const adjustedCookie = sc.replace(/Domain=[^;]+;?/i, "").replace(/Secure;?/i, "")
        headers.append("Set-Cookie", adjustedCookie)
      })

      return new NextResponse(html, {
        status: 200,
        headers,
      })
    }

    const finalUrl = postRes.url || targetUrl
    let html = await postRes.text()
    html = processHtml(html, finalUrl, proxyOrigin)

    const headers = new Headers()
    headers.set("Content-Type", postRes.headers.get("Content-Type") || "text/html; charset=utf-8")

    setCookies.forEach((sc) => {
      const adjustedCookie = sc.replace(/Domain=[^;]+;?/i, "").replace(/Secure;?/i, "")
      headers.append("Set-Cookie", adjustedCookie)
    })

    return new NextResponse(html, {
      status: postRes.status,
      headers,
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return new NextResponse(`Error submitting to target: ${message}`, { status: 500 })
  }
}

