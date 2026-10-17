import { NextRequest, NextResponse } from "next/server"

function processHtml(html: string, targetUrl: string): string {
  const parsedTarget = new URL(targetUrl)
  const origin = parsedTarget.origin

  // 1. Inject <base href="..."> WITHOUT target="_blank" so all relative CSS, images, and fonts resolve to the origin
  if (html.includes("<head>")) {
    html = html.replace("<head>", `<head><base href="${origin}/">`)
  } else if (html.includes("<head ")) {
    html = html.replace(/<head[^>]*>/, `$&<base href="${origin}/">`)
  } else {
    html = `<base href="${origin}/">${html}`
  }

  // 2. Rewrite forms to submit back to our proxy with target="_self" so form posts stay inside the container
  html = html.replace(
    /<form\s+([^>]*?)action="\/([^"]*)"([^>]*)>/gi,
    (match, before, actionPath, after) => {
      const fullUrl = `${origin}/${actionPath}`
      return `<form ${before}action="/api/proxy?url=${encodeURIComponent(fullUrl)}" target="_self"${after}>`
    }
  )

  html = html.replace(
    /<form\s+([^>]*?)action="(https?:\/\/[^"]+)"([^>]*)>/gi,
    (match, before, actionUrl, after) => {
      return `<form ${before}action="/api/proxy?url=${encodeURIComponent(actionUrl)}" target="_self"${after}>`
    }
  )

  // 3. Rewrite internal relative links so navigation stays inside the container
  html = html.replace(
    /<a\s+([^>]*?)href="\/([^"]*)"([^>]*)>/gi,
    (match, before, hrefPath, after) => {
      if (hrefPath.startsWith("#") || hrefPath.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff2?)$/i)) {
        return match
      }
      const fullUrl = `${origin}/${hrefPath}`
      return `<a ${before}href="/api/proxy?url=${encodeURIComponent(fullUrl)}" target="_self"${after}>`
    }
  )

  return html
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const targetUrl = searchParams.get("url")

  if (!targetUrl) {
    return new NextResponse("Missing url parameter", { status: 400 })
  }

  try {
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

    let html = await res.text()
    html = processHtml(html, targetUrl)

    const headers = new Headers()
    headers.set("Content-Type", res.headers.get("Content-Type") || "text/html; charset=utf-8")
    headers.set("X-Frame-Options", "SAMEORIGIN")

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
    const parsedTarget = new URL(targetUrl)
    const body = await request.text()
    const contentType = request.headers.get("content-type") || "application/x-www-form-urlencoded"
    const clientCookie = request.headers.get("cookie") || ""

    // Forward the POST to the target URL (e.g., Shopify password form)
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

    // Capture all Set-Cookie headers from Shopify
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

      // Fetch the unlocked page with the new session cookie
      const pageRes = await fetch(redirectUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          Cookie: cookieHeader,
        },
      })

      let html = await pageRes.text()
      html = processHtml(html, redirectUrl)

      const headers = new Headers()
      headers.set("Content-Type", pageRes.headers.get("Content-Type") || "text/html; charset=utf-8")
      headers.set("X-Frame-Options", "SAMEORIGIN")

      // Forward session cookies so the browser retains access
      setCookies.forEach((sc) => {
        const adjustedCookie = sc.replace(/Domain=[^;]+;?/i, "").replace(/Secure;?/i, "")
        headers.append("Set-Cookie", adjustedCookie)
      })

      return new NextResponse(html, {
        status: 200,
        headers,
      })
    }

    let html = await postRes.text()
    html = processHtml(html, targetUrl)

    const headers = new Headers()
    headers.set("Content-Type", postRes.headers.get("Content-Type") || "text/html; charset=utf-8")
    headers.set("X-Frame-Options", "SAMEORIGIN")

    return new NextResponse(html, {
      status: postRes.status,
      headers,
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return new NextResponse(`Error submitting to target: ${message}`, { status: 500 })
  }
}
