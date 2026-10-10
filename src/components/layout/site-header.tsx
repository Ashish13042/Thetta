import { ArrowRight } from "lucide-react"
import { ThettaLogo } from "@/src/components/shared/thetta-logo"

const NAV_LINKS = [
  { href: "#project", label: "Project", active: true },
  { href: "#about", label: "About", active: false },
  { href: "#service", label: "Service", active: false },
  { href: "#career", label: "Career", active: false },
] as const

export function SiteHeader() {
  return (
    <header className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-6 flex items-center justify-between">
      {/* Brand Logo */}
      <div className="flex items-center">
        <ThettaLogo className="w-7 h-9 text-neutral-950" />
      </div>

      {/* Right-aligned nav + CTA */}
      <div className="flex items-center gap-8 sm:gap-10 md:gap-12">
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          {NAV_LINKS.map(({ href, label, active }) => (
            <a
              key={href}
              href={href}
              className={
                active
                  ? "text-neutral-900 font-semibold hover:text-black transition-colors"
                  : "text-neutral-400 font-normal hover:text-neutral-900 transition-colors"
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="bg-[#ff2a00] hover:bg-[#e02600] text-white px-7 py-2.5 rounded-full text-[14px] font-medium transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
        >
          <span>Contact</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  )
}
