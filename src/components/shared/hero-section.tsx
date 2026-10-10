import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <main className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-10 sm:pt-14 md:pt-18 pb-20">
      {/* Hero Title */}
      <div className="w-full">
        <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.75rem] xl:text-[6.5rem] font-bold tracking-[-0.04em] text-[#0f0f0f] leading-[0.98] uppercase">
          <span className="inline-flex items-center flex-wrap gap-x-5 gap-y-3">
            <span>WE COMPLETE</span>

            {/* "LET'S TALK NOW" badge pill */}
            <span className="inline-flex items-center gap-3 align-middle group cursor-pointer my-1">
              <span className="p-0.5 rounded-full border border-[#ff2a00] transition-transform duration-300 group-hover:scale-105">
                <span className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#ff2a00] flex items-center justify-center text-white shadow-sm">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#ff2a00] uppercase select-none">
                LET&apos;S TALK NOW
              </span>
            </span>
          </span>
          <span className="block mt-2 sm:mt-4">YOUR CREATIVE IDEAS</span>
        </h1>

        {/* Scroll indicator + subtitle row */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex items-end justify-between gap-6">
          {/* Vertical scroll-down indicator */}
          <div className="flex flex-col items-center gap-2.5 select-none shrink-0 pl-0.5">
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

          {/* Tagline */}
          <p className="max-w-md md:max-w-lg text-[#737373] text-base sm:text-lg leading-relaxed font-normal">
            Thetta is a visionary design agency that breathes life into ideas
            and transforms them into extraordinary realities.
          </p>
        </div>
      </div>

      {/* Video showcase card */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[2.18/1] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-black mt-8 sm:mt-10 md:mt-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] group">
        <Image
          src="/hero-orb.jpg"
          alt="Thetta Creative Video Showcase"
          fill
          priority
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-[#3d2012]/65 hover:bg-[#3d2012]/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white text-base md:text-lg font-medium tracking-wide shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none"
          >
            Play
          </button>
        </div>
      </div>
    </main>
  )
}
