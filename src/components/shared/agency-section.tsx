"use client"

import Image from "next/image"
import {
  ArrowRight,
  ShoppingBag,
  Layers,
  Code2,
  Smartphone,
  Zap,
  CheckCircle2,
  Gauge,
  Sliders,
  Terminal,
} from "lucide-react"

interface MetricItem {
  number: string
  label: string
  subtext: string
}

const AGENCY_METRICS: MetricItem[] = [
  {
    number: "99+",
    label: "LIGHTHOUSE BENCHMARK",
    subtext: "Guaranteed top-tier Core Web Vitals score",
  },
  {
    number: "2–4 WKS",
    label: "RAPID PRODUCTION SPRINT",
    subtext: "From concept architecture to deployment",
  },
  {
    number: "FULL-STACK",
    label: "ZERO PAGE-BUILDER BLOAT",
    subtext: "Custom React & Next.js architectures",
  },
  {
    number: "100%",
    label: "FLUID MOBILE COMMERCE",
    subtext: "Designed for thumb-zone conversion",
  },
]

export function AgencySection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050505] text-white pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/agency-dark-bg.jpg"
          alt="Dark fluid silk waves texture"
          fill
          className="object-cover object-center opacity-70 pointer-events-none select-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/75 via-[#050505]/40 to-[#050505] pointer-events-none" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Section tag */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#FF3214] uppercase font-sans mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FF3214] animate-pulse" />
          <span>// THE AGENCY & CAPABILITIES</span>
        </div>

        {/* Punchy Value Proposition Headline */}
        <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-semibold text-white tracking-[-0.03em] leading-[1.08] uppercase max-w-6xl">
          WE ARCHITECT HIGH-CONVERTING E-COMMERCE STORES
          <br className="hidden md:inline" /> AND MODERN WEB PLATFORMS
          <br className="hidden md:inline" /> BUILT TO SCALE.
        </h2>

        {/* CTA + Scope Breakdown Row */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-6xl">
          {/* Red ring CTA with diagonal arrow hover */}
          <a
            href="#contact"
            className="flex items-center gap-4 group cursor-pointer w-fit"
            aria-label="Start a conversation with Thetta"
          >
            <div className="p-1 rounded-full border border-neutral-700/80 group-hover:border-[#FF3214] transition-colors">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FF3214] hover:bg-[#e02600] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,50,20,0.4)] transition-all duration-300 group-hover:scale-105 active:scale-95 cursor-pointer">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-rotate-45" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#FF3214] font-bold text-xs sm:text-sm tracking-wider uppercase select-none">
                LET&apos;S TALK NOW
              </span>
              <span className="text-neutral-400 text-[11px] uppercase tracking-widest">
                Start Your Project
              </span>
            </div>
          </a>

          {/* Scope details sub-paragraph */}
          <p className="text-neutral-300 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-md">
            From headless Shopify and custom React architectures to bespoke UI/UX design. We partner with ambitious founders to engineer fast, conversion-optimized digital experiences that turn visitors into loyal customers.
          </p>
        </div>

        {/* 4 Core Guarantees & Metrics Strip */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AGENCY_METRICS.map((item, idx) => (
            <div
              key={item.label}
              className="flex flex-col border-l border-white/10 pl-4 sm:pl-6 group transition-colors hover:border-[#FF3214]"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-[11px] font-mono text-[#FF3214] font-semibold">
                  0{idx + 1} /
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-[#FF3214] transition-colors">
                  {item.number}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mt-2">
                {item.label}
              </span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-light mt-1">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Digital & Web Deliverables Showcase */}
      <div className="relative z-10 mt-14 sm:mt-18 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF3214]">
              // CORE DELIVERABLES
            </span>
            <span className="text-neutral-400 text-xs">— Built For Real-World Scale</span>
          </div>
          <span className="hidden sm:inline-block text-neutral-400 text-xs font-mono">
            01 — 04 DISCIPLINES
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CARD 1: E-COMMERCE ARCHITECTURE */}
          <div className="group relative rounded-[2rem] bg-[#121212] border border-white/10 hover:border-[#FF3214]/60 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[11px] font-mono font-semibold text-[#FF3214] tracking-wider">
                CARD 01
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                SHOPIFY LIVE
              </span>
            </div>

            {/* Visual Micro-Mockup: E-Commerce Mobile Product & Cart */}
            <div className="my-6 relative w-full h-[220px] rounded-2xl bg-[#0c0c0c] border border-white/10 p-4 flex flex-col justify-between overflow-hidden group-hover:border-white/20 transition-colors">
              {/* Subtle Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3214]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  MEERAM / LUXURY OUD
                </span>
                <span className="text-[11px] font-bold text-[#FF3214]">$185.00</span>
              </div>

              {/* Product preview silhouette & badge */}
              <div className="relative flex items-center justify-center py-2">
                <div className="w-24 h-24 rounded-xl bg-gradient-to-b from-neutral-800/80 to-neutral-900 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden">
                  <Image
                    src="/meeram-slide-oud.png"
                    alt="Meeram Oud Perfume"
                    width={96}
                    height={96}
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Add to Cart button */}
              <div className="flex items-center gap-2">
                <div className="flex-1 py-2 rounded-xl bg-[#FF3214] hover:bg-[#e02600] text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-md">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ADD TO CART</span>
                </div>
                <div className="px-2.5 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-mono text-emerald-400">
                  +42% CVR
                </div>
              </div>
            </div>

            {/* Label & Caption Below */}
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF3214] transition-colors">
                E-Commerce Architecture
              </h3>
              <p className="text-xs font-mono text-[#FF3214] mt-0.5">
                Shopify / Headless
              </p>
              <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                High-converting headless storefronts with instant edge checkout and fluid mobile carts.
              </p>
            </div>
          </div>

          {/* CARD 2: UI/UX & DESIGN SYSTEMS (Signature Orange Card) */}
          <div className="group relative rounded-[2rem] bg-gradient-to-br from-[#FF3214] to-[#cc2408] text-white p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-black/15">
              <span className="text-[11px] font-mono font-semibold text-white/90 tracking-wider">
                CARD 02
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/20 border border-black/10 text-[10px] font-mono text-white">
                <Sliders className="w-2.5 h-2.5" />
                DESIGN TOKENS
              </span>
            </div>

            {/* Visual Micro-Mockup: Design System Tokens & Buttons */}
            <div className="my-6 relative w-full h-[220px] rounded-2xl bg-[#0e0e0e] border border-black/20 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400">
                  tokens/theme.config
                </span>
                <span className="text-[9px] font-mono text-[#FF3214] bg-[#FF3214]/10 px-1.5 py-0.5 rounded">
                  v2.4
                </span>
              </div>

              {/* Color Swatch Row */}
              <div className="flex items-center gap-2">
                <div className="flex-1 p-2 rounded-lg bg-[#FF3214] text-white text-[9px] font-mono font-bold text-center">
                  #FF3214
                </div>
                <div className="flex-1 p-2 rounded-lg bg-[#101010] border border-white/20 text-neutral-300 text-[9px] font-mono text-center">
                  #101010
                </div>
                <div className="flex-1 p-2 rounded-lg bg-[#F1F0EA] text-neutral-900 text-[9px] font-mono font-bold text-center">
                  #F1F0EA
                </div>
              </div>

              {/* Micro-Interactive Component Tokens */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10 text-[11px]">
                  <span className="text-neutral-300">Dark Mode System</span>
                  <div className="w-8 h-4 rounded-full bg-[#FF3214] relative p-0.5">
                    <div className="w-3 h-3 rounded-full bg-white ml-auto" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 px-1">
                  <span>Font: Inter Bold</span>
                  <span className="text-emerald-400">AA Accessible</span>
                </div>
              </div>
            </div>

            {/* Label & Caption Below */}
            <div>
              <h3 className="text-lg font-bold text-white">
                UI/UX & Design Systems
              </h3>
              <p className="text-xs font-mono text-black/80 font-bold mt-0.5">
                Figma / Design Tokens
              </p>
              <p className="text-xs text-white/90 mt-2 font-normal leading-relaxed">
                Bespoke component libraries, micro-interactions, and scalable design token architecture.
              </p>
            </div>
          </div>

          {/* CARD 3: FULL-STACK ENGINEERING */}
          <div className="group relative rounded-[2rem] bg-[#121212] border border-white/10 hover:border-[#FF3214]/60 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[11px] font-mono font-semibold text-[#FF3214] tracking-wider">
                CARD 03
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                <Terminal className="w-2.5 h-2.5 text-emerald-400" />
                API ROUTE
              </span>
            </div>

            {/* Visual Micro-Mockup: Next.js Code Window */}
            <div className="my-6 relative w-full h-[220px] rounded-2xl bg-[#090909] border border-white/10 p-3.5 flex flex-col justify-between font-mono text-[11px] overflow-hidden group-hover:border-white/20 transition-colors">
              {/* Window dots */}
              <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[10px] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                </div>
                <span>app/api/checkout.ts</span>
              </div>

              {/* Code snippet */}
              <div className="space-y-1 text-[10px] leading-relaxed">
                <p>
                  <span className="text-purple-400">export async function</span>{" "}
                  <span className="text-blue-400">POST</span>(req) {"{"}
                </p>
                <p className="pl-3 text-neutral-300">
                  <span className="text-purple-400">const</span> cart ={" "}
                  <span className="text-purple-400">await</span> initCheckout({"{"}
                </p>
                <p className="pl-6 text-emerald-400">
                  edge: <span className="text-amber-300">true</span>,
                </p>
                <p className="pl-6 text-emerald-400">
                  latency: <span className="text-amber-300">&quot;12ms&quot;</span>
                </p>
                <p className="pl-3 text-neutral-300">{"})"}</p>
                <p className="text-neutral-300">{"}"}</p>
              </div>

              {/* Edge speed indicator */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[9px] text-neutral-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Zap className="w-3 h-3" /> 12ms Edge Exec
                </span>
                <span className="text-neutral-400">Next.js 16</span>
              </div>
            </div>

            {/* Label & Caption Below */}
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF3214] transition-colors">
                Full-Stack Engineering
              </h3>
              <p className="text-xs font-mono text-[#FF3214] mt-0.5">
                Next.js / Custom APIs
              </p>
              <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                High-concurrency React architectures, custom edge APIs, and bulletproof integrations.
              </p>
            </div>
          </div>

          {/* CARD 4: PERFORMANCE & MOBILE-FIRST */}
          <div className="group relative rounded-[2rem] bg-[#121212] border border-white/10 hover:border-[#FF3214]/60 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[11px] font-mono font-semibold text-[#FF3214] tracking-wider">
                CARD 04
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-emerald-400">
                <Gauge className="w-2.5 h-2.5" />
                99/100 AUDIT
              </span>
            </div>

            {/* Visual Micro-Mockup: Lighthouse 99 Score & Mobile Metrics */}
            <div className="my-6 relative w-full h-[220px] rounded-2xl bg-[#0c0c0c] border border-white/10 p-4 flex flex-col justify-between overflow-hidden group-hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  LIGHTHOUSE METRICS
                </span>
                <span className="text-[10px] font-mono text-emerald-400">VERIFIED</span>
              </div>

              {/* Circular 99 Gauge */}
              <div className="flex items-center justify-center py-1">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  {/* Gauge SVG ring */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#222222"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#10b981"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="7.5"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white tracking-tight">99</span>
                    <span className="text-[9px] font-mono text-emerald-400 uppercase">Perf</span>
                  </div>
                </div>
              </div>

              {/* Metrics Pills */}
              <div className="grid grid-cols-3 gap-1.5 text-center">
                <div className="py-1 rounded bg-white/5 border border-white/5">
                  <div className="text-[10px] font-bold text-emerald-400">0.6s</div>
                  <div className="text-[8px] font-mono text-neutral-400">LCP</div>
                </div>
                <div className="py-1 rounded bg-white/5 border border-white/5">
                  <div className="text-[10px] font-bold text-emerald-400">2ms</div>
                  <div className="text-[8px] font-mono text-neutral-400">FID</div>
                </div>
                <div className="py-1 rounded bg-white/5 border border-white/5">
                  <div className="text-[10px] font-bold text-emerald-400">0.00</div>
                  <div className="text-[8px] font-mono text-neutral-400">CLS</div>
                </div>
              </div>
            </div>

            {/* Label & Caption Below */}
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF3214] transition-colors">
                Performance & Mobile-First
              </h3>
              <p className="text-xs font-mono text-[#FF3214] mt-0.5">
                99+ Lighthouse Scores
              </p>
              <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                Sub-second load times engineered for fluid mobile thumb checkout and high SEO rank.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio CTA button guiding to Hall of Fame */}
        <div className="mt-12 sm:mt-16 flex justify-center px-4">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full border border-neutral-700/80 bg-neutral-950/80 hover:bg-neutral-900 hover:border-[#FF3214]/60 text-neutral-200 hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-2xl backdrop-blur-md cursor-pointer flex items-center gap-3 group"
          >
            <span>EXPLORE HALL OF FAME WORKS</span>
            <ArrowRight className="w-4 h-4 text-[#FF3214] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

