import { ArrowRight, ArrowUpRight } from "lucide-react"
import { HallOfFameSection } from "@/src/components/shared/hall-of-fame-section"

export function HeroSection() {
  return (
    <main className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-8 sm:pt-12 md:pt-16 pb-20">
      {/* Category Label: Snapped to vertical left edge */}
      <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ff2a00] uppercase font-sans mb-5 sm:mb-6">
        <span>//</span>
        <span>WEB DEVELOPMENT STUDIO</span>
      </div>

      {/* Main Headline */}
      <div className="w-full">
        <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-bold tracking-[-0.04em] text-[#0f0f0f] leading-[0.98] uppercase">
          <span className="inline-flex items-center flex-wrap gap-x-5 gap-y-3">
            <span>WE BUILD</span>

            {/* Circular orange button with arrow right that rotates diagonal upwards on hover + "LET'S TALK" */}
            <a
              href="#contact"
              aria-label="Let's Talk - Contact Thetta"
              className="inline-flex items-center gap-3 align-middle group cursor-pointer my-1 transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="p-0.5 rounded-full border border-[#ff2a00] transition-transform duration-300 group-hover:scale-105">
                <span className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#ff2a00] flex items-center justify-center text-white shadow-sm">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-out group-hover:-rotate-45" />
                </span>
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#ff2a00] uppercase select-none group-hover:underline">
                LET&apos;S TALK
              </span>
            </a>
          </span>

          <span className="block mt-2 sm:mt-3">WEBSITES THAT</span>
          <span className="block mt-1 sm:mt-2 text-neutral-900">MOVE BUSINESS</span>
        </h1>

        {/* Bottom Row: Snapped to 12-Column Grid */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Bottom-left: Vertical scroll-down indicator (Cols 1-2) */}
          <div className="hidden md:flex md:col-span-2 flex-col items-start gap-2.5 select-none pl-0.5">
            <span className="text-[12px] sm:text-[13px] font-medium tracking-[0.06em] text-[#ff3b1e] [writing-mode:vertical-rl] pl-0.5">
              Scroll Down
            </span>
            <svg width="12" height="52" viewBox="0 0 12 52" fill="none" className="text-[#ff3b1e]">
              <path
                d="M6 0v46m-4-5L6 46l4-5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom-right: Left-aligned content locked to Column 6/7 */}
          <div className="md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6 flex flex-col items-start text-left">
            {/* Sharpened Supporting Description */}
            <p className="max-w-xl text-[#222222] text-base sm:text-lg md:text-[19px] leading-relaxed font-normal text-left">
              We engineer fast, conversion-driven web experiences for ambitious brands—combining sharp
              design with scalable full-stack architecture.
            </p>

            {/* Supporting Statement / Compact Trust */}
            <p className="text-xs sm:text-sm font-medium text-neutral-500 tracking-wide mt-3 text-left">
              Thoughtful design. Powerful development. Built for your next stage of growth.
            </p>

            {/* Action CTA Buttons: Left-aligned with text */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
              {/* Primary CTA: START A PROJECT with ArrowRight icon */}
              <a
                href="#contact"
                className="bg-[#ff2a00] hover:bg-[#e02600] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md flex items-center gap-2 group cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              {/* Secondary CTA: EXPLORE OUR WORK */}
              <a
                href="#projects"
                className="border border-neutral-400 hover:border-neutral-900 bg-white/40 hover:bg-neutral-900/5 text-neutral-900 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Authority / Social Proof Bar */}
            <div className="mt-8 pt-5 border-t border-neutral-300/80 w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-600 uppercase select-none">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                <span>99+ Lighthouse Speed Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                <span>Trusted by 20+ Fast-Growing Brands</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Hall of Fame Website Showcase */}
      <HallOfFameSection />
    </main>
  )
}
