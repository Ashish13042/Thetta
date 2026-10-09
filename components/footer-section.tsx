"use client"

import { useEffect, useRef } from "react"
import { ArrowUp, ArrowUpRight } from "lucide-react"

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YoutubeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

// Scaled cursive script Theta (ϑ) path coordinates fitting a 1000x1100 viewBox
const THETTA_LOGO_PATH =
  "M 342 613 C 306 631, 262 648, 236 604 C 210 560, 236 508, 280 490 C 350 464, 438 534, 456 613 C 474 710, 491 824, 553 877 C 614 921, 694 895, 729 824 C 782 719, 773 578, 729 455 C 676 296, 570 173, 438 182 C 333 191, 262 288, 280 393 C 298 499, 377 578, 482 587 C 579 596, 676 543, 755 472"

// Repeating brand name elements for the curved logo ribbon
const BRAND_REPEATS = Array.from({ length: 16 }, (_, i) => ({
  id: `thetta-${i}`,
  text: "THETTA",
}))

export function FooterSection() {
  const textPathRef1 = useRef<SVGTextPathElement | null>(null)
  const textPathRef2 = useRef<SVGTextPathElement | null>(null)

  // Uninterrupted silky 60fps continuous ribbon scroll along the curved cursive theta logo
  useEffect(() => {
    let animId: number
    let offset = 0
    let lastTimestamp = performance.now()
    const speed = 0.055 // Smooth pixels per millisecond

    const frame = (now: number) => {
      const delta = now - lastTimestamp
      lastTimestamp = now

      // Dynamically calculate loop length for seamless infinite scrolling
      let loopLength = 4800
      if (textPathRef1.current) {
        const computed = textPathRef1.current.getComputedTextLength()
        if (computed > 0) loopLength = computed
      }

      offset -= speed * delta
      if (offset <= -loopLength) {
        offset += loopLength
      }

      if (textPathRef1.current) {
        textPathRef1.current.setAttribute("startOffset", `${offset}px`)
      }
      if (textPathRef2.current) {
        textPathRef2.current.setAttribute("startOffset", `${offset + loopLength}px`)
      }

      animId = requestAnimationFrame(frame)
    }

    animId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(animId)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Render repeating 'THETTA' brand along the curved ribbon
  const renderCurvedTextItems = (keyPrefix: string) => (
    <>
      {BRAND_REPEATS.map((item, idx) => (
        <tspan key={`${keyPrefix}-${item.id}-${idx}`}>
          <tspan
            className="transition-all duration-300 uppercase font-black text-[38px] tracking-[0.2em] fill-neutral-400 hover:fill-white"
          >
            {item.text}
          </tspan>
          <tspan className="fill-neutral-700 font-bold text-[32px] px-3">
            {"  ✦  "}
          </tspan>
        </tspan>
      ))}
    </>
  )

  return (
    <footer className="w-full bg-[#030303] text-white pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 relative overflow-hidden selection:bg-white selection:text-black">
      {/* Subtle background texture (Removed all orange glows) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        
        {/* Upper Layout: Side-by-side Logo and Heading (upper border removed) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-20 pb-12">
          
          {/* Logo & Headline Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-8 md:gap-12 w-full">
            
            {/* Smaller, Pitch Black Shiny Floating Logo */}
            <div className="w-[280px] sm:w-[320px] lg:w-[360px] aspect-[1000/1100] relative animate-float-logo transition-transform duration-500 shrink-0">
              <svg
                viewBox="0 0 1000 1100"
                className="w-full h-full overflow-visible select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
              >
                <defs>
                  <path id="thetta-curve" d={THETTA_LOGO_PATH} fill="none" />
                </defs>

                {/* Curve definition only - no visible underline/stroke beneath symbols & text links */}

                {/* Primary Animated Curved Text Ribbon */}
                <text className="font-sans select-none tracking-wider">
                  <textPath
                    ref={textPathRef1}
                    href="#thetta-curve"
                    startOffset="0px"
                    spacing="exact"
                  >
                    {renderCurvedTextItems("cycle1")}
                  </textPath>
                </text>

                {/* Secondary Tandem Curved Text Ribbon for Seamless Infinite Marquee */}
                <text className="font-sans select-none tracking-wider">
                  <textPath
                    ref={textPathRef2}
                    href="#thetta-curve"
                    startOffset="8500px" // Fallback; gets overwritten dynamically in JS
                    spacing="exact"
                  >
                    {renderCurvedTextItems("cycle2")}
                  </textPath>
                </text>
              </svg>

              {/* Pitch Black Shiny Central Core */}
              <div className="absolute top-[48%] left-[49%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center p-4 rounded-full bg-gradient-to-br from-neutral-800 to-black border border-neutral-700 shadow-[0_15px_30px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 group pointer-events-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-black text-white flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_5px_15px_rgba(0,0,0,0.8)] mb-2">
                  <svg
                    viewBox="0 0 100 120"
                    fill="none"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      d="M32 64C28 66 23 68 20 63C17 58 20 52 25 50C33 47 43 55 45 64C47 75 49 88 56 94C63 99 72 96 76 88C82 76 81 60 76 46C70 28 58 14 43 15C31 16 23 27 25 39C27 51 36 60 48 61C59 62 70 56 79 48"
                      stroke="currentColor"
                      strokeWidth="11"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-black tracking-widest text-white uppercase px-2">
                  THETTA
                </span>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col max-w-2xl text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm font-bold tracking-widest text-neutral-400 uppercase mb-4 md:mb-6">
                <span className="text-white">//</span>
                <span>CONNECT &amp; COLLABORATE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05]">
                COLLABORATE WITH THETTA AND START YOUR DESIGN JOURNEY
              </h2>
            </div>

          </div>

          {/* Contact Action CTA */}
          <div className="flex items-center justify-center lg:justify-end shrink-0 w-full lg:w-auto mt-6 lg:mt-0">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-[0_10px_25px_rgba(255,255,255,0.2)] flex items-center gap-2 group cursor-pointer"
            >
              <span>Let&apos;s Talk Now</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Social Icons positioned just above the line on the right */}
        <div className="flex justify-end pb-3">
          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-neutral-400 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="text-neutral-400 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-neutral-400 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-neutral-400 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>


        {/* Lower Direct Links & Accessible Navigation */}
        <div className="pt-8 border-t border-neutral-800/60 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          {/* Left Column: Brand Statement */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-black text-white tracking-widest uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              THETTA.
            </span>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-400 font-medium">
              A Visionary Digital Design Agency
            </span>
          </div>

          {/* Center Column: Direct Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-semibold tracking-wider uppercase text-neutral-400">
            <a href="#project" className="hover:text-white transition-colors">Projects</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#service" className="hover:text-white transition-colors">Services</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Right Column: Copyright & Back to Top */}
          <div className="flex items-center gap-5">
            <span className="text-neutral-500">
              &copy; {new Date().getFullYear()} Thetta Inc. All Rights Reserved.
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-gradient-to-br from-neutral-800 to-black hover:from-neutral-700 hover:to-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white transition-all duration-300 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:scale-105"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
