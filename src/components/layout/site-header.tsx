import { ThettaLogo } from "@/src/components/shared/thetta-logo"

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const

export function SiteHeader() {
  return (
    <header className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-6 flex items-center justify-between">
      {/* Brand Logo with Wordmark */}
      <a href="/" className="flex items-center" aria-label="Thetta Web Development Studio">
        <ThettaLogo className="w-7 h-9 text-neutral-950" showText={true} />
      </a>

      {/* Right-shifted nav links occupying the right space */}
      <nav className="hidden md:flex items-center gap-9 lg:gap-12 text-[15px] group/nav">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-[#1c1c1c] font-medium transition-colors hover:text-[#ff2a00] group-hover/nav:text-neutral-400 group-hover/nav:hover:text-[#1c1c1c]"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
