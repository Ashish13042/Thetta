"use client"

import { ArrowUpRight } from "lucide-react"

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  )
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.53l5.88 3.25-5.88 3.24z" />
    </svg>
  )
}

export function FooterSection() {
  return (
    <footer className="w-full bg-black text-white pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28 md:pb-36 overflow-hidden relative selection:bg-[#ff2a00] selection:text-white">
      {/* Upper Content Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-8">
          {/* Left Column: Brand & Headline */}
          <div className="max-w-2xl">
            {/* Small Brand Tag */}
            <div className="text-sm font-extrabold tracking-widest text-white uppercase mb-6 sm:mb-8 font-sans">
              THETTA
            </div>

            {/* Headline with Orange Circle Button */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-[1.1] uppercase">
              <span className="inline-flex items-center flex-wrap gap-3.5 sm:gap-4 align-middle">
                <span>COLLABORATE WITH</span>
                <a
                  href="#contact"
                  aria-label="Start your design journey"
                  className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-[#ff2a00] hover:bg-[#e02600] text-white inline-flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer -my-2"
                >
                  <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.4]" />
                </a>
              </span>
              <span className="block mt-1 sm:mt-2">THETTA AND START YOUR</span>
              <span className="block mt-1 sm:mt-2">DESIGN JOURNEY</span>
            </h2>
          </div>

          {/* Right Column: Navigation Links, Socials & Copyright */}
          <div className="flex flex-col lg:items-end justify-between pt-2">
            {/* Top Navigation Links */}
            <nav className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-9 text-[11px] sm:text-xs font-bold tracking-wider text-neutral-300 uppercase">
              <a
                href="#privacy"
                className="hover:text-white transition-colors cursor-pointer"
              >
                PRIVACY POLICY
              </a>
              <a
                href="#terms"
                className="hover:text-white transition-colors cursor-pointer"
              >
                TERM &amp; CONDITION
              </a>
              <a
                href="#about"
                className="hover:text-white transition-colors cursor-pointer"
              >
                ABOUT US
              </a>
              <a
                href="#faq"
                className="hover:text-white transition-colors cursor-pointer"
              >
                FAQ
              </a>
            </nav>

            {/* Social Media Icons */}
            <div className="flex items-center gap-6 sm:gap-8 text-neutral-300 mt-10 sm:mt-12 md:mt-14">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-white hover:scale-110 transition-all cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-white hover:scale-110 transition-all cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="hover:text-white hover:scale-110 transition-all cursor-pointer"
              >
                <TwitterIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-white hover:scale-110 transition-all cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
            </div>

            {/* Copyright Statement */}
            <div className="text-xs sm:text-[13px] font-medium text-neutral-400 mt-6 sm:mt-8 tracking-tight">
              &copy; 2023 THETTA INC. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Giant Bottom Display Typography with generous space and padding */}
      <div className="w-full select-none pointer-events-none mt-24 sm:mt-36 md:mt-44 relative flex justify-center items-center px-4 sm:px-6">
        <h1 className="text-[12vw] sm:text-[12.5vw] md:text-[13vw] font-black tracking-[-0.035em] leading-normal text-white text-center uppercase whitespace-nowrap opacity-95">
          THETTA—2023
        </h1>
      </div>
    </footer>
  )
}
