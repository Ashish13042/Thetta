import Image from "next/image"
import { ArrowDown, ArrowRight } from "lucide-react"
import { ThettaLogo } from "@/components/thetta-logo"

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#0f0f0f] font-sans selection:bg-[#ff2a00] selection:text-white">
      {/* Navigation Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-6 flex items-center justify-between">
        {/* Brand Logo with Cursive Theta mark */}
        <div className="flex items-center">
          <ThettaLogo className="w-7 h-9 text-neutral-950" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-[15px]">
          <a
            href="#project"
            className="text-neutral-900 font-semibold hover:text-black transition-colors"
          >
            Project
          </a>
          <a
            href="#about"
            className="text-neutral-400 font-normal hover:text-neutral-900 transition-colors"
          >
            About
          </a>
          <a
            href="#service"
            className="text-neutral-400 font-normal hover:text-neutral-900 transition-colors"
          >
            Service
          </a>
          <a
            href="#career"
            className="text-neutral-400 font-normal hover:text-neutral-900 transition-colors"
          >
            Career
          </a>
        </nav>

        {/* Contact CTA */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="bg-[#ff2a00] hover:bg-[#e02600] text-white px-7 py-2.5 rounded-full text-[14px] font-medium transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
          >
            <span>Contact</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Main Hero Container */}
      <main className="relative max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-10 sm:pt-14 md:pt-18 pb-20">
        {/* Left Vertical Indicator: Scroll Down */}
        <div className="hidden lg:flex flex-col items-center gap-3 absolute left-6 xl:left-10 top-[28%] -translate-y-1/2">
          <span className="text-[12px] font-medium tracking-[0.18em] text-[#ff715b] uppercase [writing-mode:vertical-rl] rotate-180 select-none">
            Scroll Down
          </span>
          <div className="w-[1px] h-9 bg-[#ff715b]" />
          <ArrowDown className="w-3.5 h-3.5 text-[#ff715b]" />
        </div>

        {/* Hero Title Section */}
        <div className="w-full">
          <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.75rem] xl:text-[6.5rem] font-bold tracking-[-0.04em] text-[#0f0f0f] leading-[0.98] uppercase">
            <span className="inline-flex items-center flex-wrap gap-x-5 gap-y-3">
              <span>WE COMPLETE</span>
              
              {/* "LET'S TALK NOW" Badge / Pill */}
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

          {/* Subtitle / Description Right-Aligned */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex justify-start md:justify-end">
            <p className="max-w-md md:max-w-lg text-[#737373] text-base sm:text-lg leading-relaxed font-normal">
              Thetta is a visionary design agency that breathes life into ideas and transforms them into extraordinary realities.
            </p>
          </div>
        </div>

        {/* Visual Showcase Card with Glowing Orb & Play Button */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[2.18/1] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-black mt-12 sm:mt-16 md:mt-20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] group">
          <Image
            src="/hero-orb.jpg"
            alt="Thetta Creative Video Showcase"
            fill
            priority
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />

          {/* Frosted Amber Glass "Play" Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <button
              type="button"
              className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-[#3d2012]/65 hover:bg-[#3d2012]/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white text-base md:text-lg font-medium tracking-wide shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none"
            >
              Play
            </button>
          </div>
        </div>

        {/* Client Logos Row */}
        <div className="mt-14 sm:mt-18 md:mt-22 pt-4 pb-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-items-center gap-10 md:gap-14 opacity-90">
          {/* Logo 1: PAPERZ */}
          <div className="flex items-center gap-2.5 group cursor-pointer hover:opacity-100 transition-opacity">
            <div className="w-6 h-7 bg-neutral-900 rounded-sm relative overflow-hidden flex items-end justify-start p-1">
              <div className="w-2.5 h-2.5 bg-white absolute top-0 right-0" />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-tight text-neutral-900 uppercase leading-none">
                PAPERZ
              </div>
              <div className="text-[9px] text-neutral-400 tracking-tight font-medium mt-0.5">
                Leading Paper Company
              </div>
            </div>
          </div>

          {/* Logo 2: Dorfus */}
          <div className="cursor-pointer hover:opacity-100 transition-opacity">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Dorfus
            </span>
          </div>

          {/* Logo 3: Martino */}
          <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity">
            <div className="flex items-end gap-1 h-6">
              <div className="w-1.5 h-6 bg-neutral-900 rounded-full" />
              <div className="w-1.5 h-4 bg-neutral-900 rounded-full" />
              <div className="w-1.5 h-5 bg-neutral-900 rounded-full" />
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-neutral-900 leading-none">
                Martino
              </div>
              <div className="text-[9px] text-neutral-400 tracking-tight font-medium mt-0.5">
                Colors of your life
              </div>
            </div>
          </div>

          {/* Logo 4: square */}
          <div className="flex items-center gap-2.5 group cursor-pointer hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 border-[3.5px] border-neutral-900 flex items-center justify-center">
              <div className="w-2 h-2 bg-neutral-900" />
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-neutral-900 leading-none">
                square
              </div>
              <div className="text-[9px] text-neutral-400 tracking-tight font-medium mt-0.5">
                Real Estate Solution
              </div>
            </div>
          </div>

          {/* Logo 5: Gobona */}
          <div className="flex items-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity col-span-2 sm:col-span-1">
            <div className="flex flex-col gap-0.5 -rotate-12">
              <div className="w-5 h-1.5 bg-neutral-900 rounded-sm" />
              <div className="w-6 h-1.5 bg-neutral-900 rounded-sm ml-1" />
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-neutral-900 leading-none">
                Gobona
              </div>
              <div className="text-[9px] text-neutral-400 tracking-tight font-medium mt-0.5">
                Your Trusted Carrier
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
