import Image from "next/image"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { ThettaLogo } from "@/components/thetta-logo"
import { ServicesSection } from "@/components/services-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { FooterSection } from "@/components/footer-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-cream-grid text-[#0f0f0f] font-sans selection:bg-[#ff2a00] selection:text-white">
      {/* Navigation Header */}
      <header className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-6 flex items-center justify-between">
        {/* Brand Logo with Cursive Theta mark */}
        <div className="flex items-center">
          <ThettaLogo className="w-7 h-9 text-neutral-950" />
        </div>

        {/* Right Aligned Navigation Group */}
        <div className="flex items-center gap-8 sm:gap-10 md:gap-12">
          <nav className="hidden md:flex items-center gap-8 text-[15px]">
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

        {/* ========================================================= */}
        {/* // OUR PROJECT SECTION (Exact match to design screenshot) */}
        {/* ========================================================= */}
        <section id="project" className="mt-16 sm:mt-24 md:mt-32 pt-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold tracking-wider text-[#ff2a00] uppercase font-sans">
              <span>//</span>
              <span>OUR PROJECT</span>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-4 text-neutral-800">
              <button
                type="button"
                aria-label="Previous Project"
                className="p-2 text-neutral-400 hover:text-black transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                type="button"
                aria-label="Next Project"
                className="p-2 text-neutral-900 hover:text-[#ff2a00] transition-colors cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            {/* ---------------- PROJECT 1: KONTAKO ---------------- */}
            <div className="flex flex-col group">
              {/* Outer Mockup Card Frame */}
              <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#edf1f4] p-5 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Inner Website Card Window */}
                <div className="rounded-2xl sm:rounded-[1.25rem] bg-white overflow-hidden shadow-lg border border-neutral-100/80 flex flex-col">
                  {/* Mockup Hero Image Container */}
                  <div className="relative h-[280px] sm:h-[330px] md:h-[370px] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src="/kontako-cabin.jpg"
                      alt="Kontako - The Future of Home Living"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />

                    {/* Mockup Header */}
                    <div className="relative z-10 px-6 py-4 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase">
                        MENU
                      </span>
                      <span className="text-xs font-extrabold tracking-widest text-white uppercase">
                        KONTAKO
                      </span>
                      <span className="bg-[#ff2a00] text-white px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase shadow-sm">
                        CONTACT US
                      </span>
                    </div>

                    {/* Mockup Hero Title */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none uppercase max-w-[280px] sm:max-w-xs">
                        THE FUTURE <br />
                        OF HOME LIVING<span className="text-[#ff2a00]">.</span>
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-neutral-300 max-w-xs mt-2.5 font-normal leading-relaxed">
                        Trust us with your dreams! We are ready to help you build the dream property that will be your future.
                      </p>
                    </div>

                    {/* Inner Mockup Floating Action Arrow */}
                    <div className="absolute bottom-6 right-6 z-10">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ff2a00] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Mockup Lower Testimonial Area */}
                  <div className="p-6 sm:p-8 bg-white flex flex-col items-center text-center">
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#ff2a00] tracking-widest uppercase mb-3">
                      FULFILL YOUR DREAMS
                    </span>
                    <blockquote className="text-xs sm:text-sm md:text-[15px] font-semibold text-neutral-800 max-w-md leading-relaxed tracking-tight mb-5">
                      &ldquo; Kontako is committed to providing the best service in meeting your property needs for your future &rdquo;
                    </blockquote>

                    {/* Testimonial Author */}
                    <div className="flex items-center gap-2.5 mb-6">
                      <div className="w-7 h-7 rounded-full bg-neutral-200 overflow-hidden relative border border-neutral-300">
                        <div className="w-full h-full bg-gradient-to-tr from-amber-600 to-rose-400" />
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-bold text-neutral-900 leading-tight">
                          Kianna Curtis
                        </div>
                        <div className="text-[9px] text-neutral-400 font-medium">
                          Founder of Kontako
                        </div>
                      </div>
                    </div>

                    {/* Bottom Tag */}
                    <span className="text-[8px] sm:text-[9px] font-bold text-[#ff2a00] tracking-wider uppercase opacity-90">
                      WHY DOES IT HAVE TO BE KONTAKO?
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Info & Floating Button */}
              <div className="mt-5 sm:mt-6 px-3 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 uppercase">
                    KONTAKO
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-400 tracking-wider uppercase mt-1">
                    REAL ESTATE LANDING PAGE
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="View Kontako Project"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#ff2a00] text-white flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 group-hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* ---------------- PROJECT 2: ROOLLAND ---------------- */}
            <div className="flex flex-col group">
              {/* Outer Mockup Card Frame */}
              <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#edf1f4] p-5 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                {/* Inner Website Card Window */}
                <div className="rounded-2xl sm:rounded-[1.25rem] bg-white overflow-hidden shadow-lg border border-neutral-100/80 p-5 sm:p-7 md:p-8 flex flex-col justify-between min-h-[500px]">
                  {/* Mockup Header */}
                  <div>
                    <div className="flex items-center justify-between text-xs pb-5 border-b border-neutral-100">
                      <span className="font-extrabold tracking-tight text-neutral-900 text-sm uppercase">
                        ROOLLAND
                      </span>
                      <div className="flex flex-col gap-1 cursor-pointer">
                        <div className="w-4 h-0.5 bg-neutral-900" />
                        <div className="w-4 h-0.5 bg-neutral-900" />
                      </div>
                      <span className="border border-neutral-300 rounded-full px-3 py-1 text-[9px] font-bold text-neutral-700 tracking-wider uppercase">
                        CONTACT US
                      </span>
                    </div>

                    {/* Mockup Headline */}
                    <div className="text-center my-6 sm:my-8">
                      <span className="text-[9px] sm:text-[10px] font-bold text-neutral-400 tracking-widest uppercase block mb-1">
                        WE BUILD BRIDGES BETWEEN
                      </span>
                      <h4 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-neutral-900 tracking-tight leading-[0.95] uppercase">
                        PROBLEM <br />
                        SOLUTION
                      </h4>
                    </div>

                    {/* Tags Row */}
                    <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-bold text-neutral-400 tracking-wider uppercase mb-4 px-1">
                      <span>A TEAM DEDICATED TO</span>
                      <span>SOLVE YOUR PROBLEM</span>
                    </div>

                    {/* Mockup Portrait Image */}
                    <div className="relative h-[200px] sm:h-[240px] md:h-[270px] w-full rounded-xl overflow-hidden bg-neutral-900 shadow-inner">
                      <Image
                        src="/roolland-lawyer.jpg"
                        alt="Roolland Law Firm Team"
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Mockup Lower Content */}
                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                      <span className="text-[9px] font-bold text-neutral-400 tracking-wider uppercase shrink-0 sm:pt-0.5">
                        ABOUT US
                      </span>
                      <p className="text-[10px] sm:text-[11px] font-bold text-neutral-800 leading-snug uppercase">
                        WE UNDERSTAND <span className="text-neutral-400 font-semibold">THAT EVERY LEGAL CASE IS UNIQUE, AND THAT IS WHY WE STRIVE TO PROVIDE SOLUTIONS TAILORED TO YOUR SPECIFIC NEEDS</span> AND INTERESTS
                      </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-100">
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                          284
                        </div>
                        <div className="text-[9px] text-neutral-400 font-medium tracking-tight mt-0.5">
                          Case Resolved
                        </div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                          84%
                        </div>
                        <div className="text-[9px] text-neutral-400 font-medium tracking-tight mt-0.5">
                          Case Win Rate
                        </div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
                          $28 B
                        </div>
                        <div className="text-[9px] text-neutral-400 font-medium tracking-tight mt-0.5">
                          Our Case Results
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Info & White Button */}
              <div className="mt-5 sm:mt-6 px-3 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 uppercase">
                    ROOLLAND
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-neutral-400 tracking-wider uppercase mt-1">
                    LAW FIRM LANDING PAGE
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="View Roolland Project"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-105 group-hover:scale-105 group-hover:border-neutral-300 active:scale-95 cursor-pointer"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* // THE AGENCY SECTION (Exact match to design screenshot)  */}
      {/* ========================================================= */}
      <section
        id="about"
        className="relative w-full bg-[#050505] text-white pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32 overflow-hidden"
      >
        {/* Background Image: Dark Fluid Silk Waves */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/agency-dark-bg.jpg"
            alt="Dark fluid silk waves texture"
            fill
            className="object-cover object-center opacity-70 pointer-events-none select-none"
            priority
          />
          {/* Subtle gradient vignette to blend seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#050505] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
          {/* Section Header Tag */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#ff2a00] uppercase font-sans mb-6 sm:mb-8">
            <span>//</span>
            <span>THE AGENCY</span>
          </div>

          {/* Main Vision Statement Headline */}
          <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-semibold text-white tracking-[-0.03em] leading-[1.08] uppercase max-w-6xl">
            THETTA IS A VISIONARY DESIGN AGENCY
            <br className="hidden md:inline" /> THAT BREATHES LIFE INTO IDEAS AND
            <br className="hidden md:inline" /> TRANSFORMS THEM INTO EXTRAORDINARY
            <br className="hidden md:inline" /> REALITIES.
          </h2>

          {/* Sub-row: CTA Button & Mission Paragraph */}
          <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-6xl">
            {/* Action CTA: Red Round Button with Outer Ring + Text */}
            <div className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="p-1 rounded-full border border-neutral-700/80 group-hover:border-[#ff2a00] transition-colors">
                <button
                  type="button"
                  aria-label="Let's talk now"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#ff2a00] hover:bg-[#e02600] text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
              <span className="text-[#ff2a00] font-bold text-xs sm:text-sm tracking-wider uppercase select-none">
                LET&apos;S TALK NOW
              </span>
            </div>

            {/* Supporting Description */}
            <p className="text-neutral-300 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-md">
              Thetta is a visionary design agency that breathes life into ideas and transforms them into extraordinary realities.
            </p>
          </div>
        </div>

        {/* Showcase Portfolio Cards Carousel / Row */}
        <div className="relative z-10 mt-16 sm:mt-20 lg:mt-28 w-full">
          <div className="flex items-center justify-center gap-5 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar px-6 sm:px-10 py-4">
            {/* Card 1: Nihoma Box Packaging (left peeking card) */}
            <div className="w-[240px] sm:w-[280px] lg:w-[320px] h-[340px] sm:h-[400px] lg:h-[450px] flex-shrink-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative shadow-2xl group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <Image
                src="/portfolio-box.jpg"
                alt="Nihoma Packaging Design"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card 2: Orange Business Cards (centered left card) */}
            <div className="w-[280px] sm:w-[340px] lg:w-[400px] h-[340px] sm:h-[400px] lg:h-[450px] flex-shrink-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative shadow-2xl bg-[#ff5500] group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <Image
                src="/portfolio-cards.jpg"
                alt="Brand Stationery & Business Cards"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card 3: Orange Keycard / Luggage Tag (centered right card) */}
            <div className="w-[280px] sm:w-[340px] lg:w-[400px] h-[340px] sm:h-[400px] lg:h-[450px] flex-shrink-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative shadow-2xl bg-[#ff5500] group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <Image
                src="/portfolio-keytag.jpg"
                alt="Nihoma Keychain Tag"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card 4: Red Ceramic Coffee Mug (right peeking card) */}
            <div className="w-[240px] sm:w-[280px] lg:w-[320px] h-[340px] sm:h-[400px] lg:h-[450px] flex-shrink-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative shadow-2xl bg-[#f5f5f5] group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
              <Image
                src="/portfolio-mug.jpg"
                alt="Ceramic Merchandise Mug"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Centered Portfolio CTA Button */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center px-4">
            <button
              type="button"
              className="px-7 py-3 rounded-full border border-neutral-700/80 bg-neutral-950/70 hover:bg-neutral-900 hover:border-neutral-500 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 shadow-xl backdrop-blur-md cursor-pointer flex items-center gap-2 group"
            >
              <span>See our portfolio</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* ========================================================= */}
      {/* // OUR SERVICES SECTION (Exact match to design screenshot)*/}
      {/* ========================================================= */}
      <ServicesSection />

      {/* ========================================================= */}
      {/* // TESTIMONIAL SECTION (Martin Rosser / Pentlar)          */}
      {/* ========================================================= */}
      <TestimonialSection />

      {/* ========================================================= */}
      {/* // FOOTER SECTION (THETTA COLLABORATE & THETTA—2023)       */}
      {/* ========================================================= */}
      <FooterSection />
    </div>
  )
}

