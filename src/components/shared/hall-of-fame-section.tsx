"use client"

import React, { useState } from "react"
import Image from "next/image"
import {
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Lock,
  Layers,
} from "lucide-react"

interface ProjectItem {
  id: string
  number: string
  name: string
  category: string
  domain: string
  liveUrl: string | null
  embedUrl: string | null
  thumbnail: string
  description: string
  metrics: string
  isUpcoming?: boolean
}

const PROJECTS: ProjectItem[] = [
  {
    id: "meeram",
    number: "01",
    name: "Meeram",
    category: "Luxury Perfume E-commerce",
    domain: "meeramfragrances.com",
    liveUrl: "https://meeramfragrances.com/",
    embedUrl: "/api/proxy?url=https://meeramfragrances.com/",
    thumbnail: "/meeram-slide-oud.png",
    description:
      "A luxury fragrance house digital storefront built with editorial typography, interactive scent-profile selectors, and frictionless Shopify & Razorpay checkout integration.",
    metrics: "Luxury Fragrance · Live",
  },
  {
    id: "drip-studios",
    number: "02",
    name: "Drip Studios",
    category: "Streetwear & Apparel",
    domain: "dripdrip.in",
    liveUrl: "https://dripdrip.in/",
    embedUrl: "/api/proxy?url=https://dripdrip.in/",
    thumbnail: "/drip-studios.jpg",
    description:
      "A cutting-edge streetwear fashion label digital storefront engineered with high-impact drop lookbooks, dynamic sizing selectors, and frictionless Shopify checkout.",
    metrics: "Streetwear Apparel · Live",
  },
  {
    id: "myotakuworld",
    number: "03",
    name: "My Otaku World",
    category: "Anime & Pop-Culture Media",
    domain: "myotakuworld.com",
    liveUrl: "https://myotakuworld.com/",
    // Direct embed allows native Next.js image optimizer and hydration to render all anime media cleanly
    embedUrl: "https://myotakuworld.com/",
    thumbnail: "/myotakuworld.jpg",
    description:
      "A high-traffic editorial media portal and anime database featuring dynamic rankings, rich media galleries, community forums, and sub-second edge delivery.",
    metrics: "Editorial Platform · Live",
  },
]

type ViewportMode = "desktop" | "tablet" | "mobile"

export function HallOfFameSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewportMode, setViewportMode] = useState<ViewportMode>("desktop")
  const [refreshKey, setRefreshKey] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const activeProject = PROJECTS[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1))
  }

  const handleSelectProject = (index: number) => {
    setActiveIndex(index)
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setRefreshKey((prev) => prev + 1)
    setTimeout(() => {
      setIsRefreshing(false)
    }, 600)
  }

  return (
    <section className="relative w-full mt-12 sm:mt-16 md:mt-20">
      {/* Outer Dark Showcase Container */}
      <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-[#101010] border border-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.55)] p-5 sm:p-8 md:p-10 lg:p-12 overflow-hidden text-white">
        {/* Subtle Background Structural Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-44 bg-[#FF3214]/10 blur-[100px] pointer-events-none" />

        {/* 1. SECTION HEADER */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            {/* Small Orange Label */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#FF3214] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3214] animate-pulse" />
              <span>THETTA / SELECTED WORK</span>
            </div>

            {/* Large Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white uppercase leading-[1.05]">
              HALL OF FAME.
            </h2>

            {/* Supporting Text */}
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-neutral-400 max-w-2xl font-normal leading-relaxed">
              Explore the digital experiences we build. Every detail, every interaction, built with purpose.
            </p>
          </div>

          {/* Right: Slide Pagination & Subtle Navigation Arrows */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <div className="flex items-baseline gap-1 font-mono text-xs sm:text-sm font-semibold tracking-wider text-neutral-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full select-none">
              <span className="text-[#FF3214]">{activeProject.number}</span>
              <span className="text-neutral-500">/</span>
              <span>{String(PROJECTS.length).padStart(2, "0")}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/5 hover:bg-[#FF3214] hover:border-[#FF3214] text-neutral-200 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next project"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/5 hover:bg-[#FF3214] hover:border-[#FF3214] text-neutral-200 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. OUTER BROWSER WINDOW FRAME */}
        <div className="relative z-10 mt-8 sm:mt-10">
          <div className="w-full rounded-2xl sm:rounded-3xl bg-[#181818] border border-white/15 shadow-2xl overflow-hidden flex flex-col">
            {/* Top Toolbar */}
            <div className="w-full px-4 sm:px-6 py-3 sm:py-3.5 bg-[#141414] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 select-none">
              {/* Left: macOS Traffic Light Dots & Domain URL Bar */}
              <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-[200px]">
                {/* 3 Status Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                </div>

                {/* URL Bar */}
                <div className="flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/60 border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300 max-w-xs sm:max-w-md truncate">
                  <Lock className="w-3 h-3 text-[#27c93f] shrink-0" />
                  <span className="text-neutral-500">https://</span>
                  <span className="text-white font-medium truncate">{activeProject.domain}</span>
                </div>
              </div>

              {/* Center: Viewport Switcher (Desktop / Tablet / Mobile) */}
              <div className="flex items-center bg-black/50 border border-white/10 p-1 rounded-full order-3 sm:order-2 mx-auto sm:mx-0">
                <button
                  type="button"
                  onClick={() => setViewportMode("desktop")}
                  title="Desktop View (100%)"
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    viewportMode === "desktop"
                      ? "bg-[#FF3214] text-white shadow-sm font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewportMode("tablet")}
                  title="Tablet View (768px)"
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    viewportMode === "tablet"
                      ? "bg-[#FF3214] text-white shadow-sm font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tablet</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewportMode("mobile")}
                  title="Mobile View (390px)"
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    viewportMode === "mobile"
                      ? "bg-[#FF3214] text-white shadow-sm font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>

              {/* Right: Reload & OPEN LIVE WEBSITE Buttons */}
              <div className="flex items-center gap-2 order-2 sm:order-3">
                <button
                  type="button"
                  onClick={handleRefresh}
                  title="Reload preview"
                  aria-label="Reload preview"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                  <RotateCw
                    className={`w-3.5 h-3.5 transition-transform duration-500 ${
                      isRefreshing ? "rotate-180 text-[#FF3214]" : ""
                    }`}
                  />
                </button>

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FF3214] hover:bg-[#e02600] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>OPEN LIVE WEBSITE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* 3. CLEAN FULL-BLEED LIVE SITE VIEWPORT (Edge-to-Edge Container) */}
            <div className="w-full h-[650px] md:h-[750px] overflow-hidden bg-black relative flex justify-center">
              <div
                style={{
                  width:
                    viewportMode === "desktop"
                      ? "100%"
                      : viewportMode === "tablet"
                      ? "768px"
                      : "390px",
                  maxWidth: "100%",
                }}
                className={`h-full transition-all duration-300 ease-out mx-auto relative ${
                  viewportMode !== "desktop" ? "border-x border-white/20 shadow-2xl" : ""
                }`}
              >
                {activeProject.embedUrl ? (
                  <iframe
                    key={`${activeProject.id}-${refreshKey}`}
                    src={activeProject.embedUrl}
                    title={`${activeProject.name} Live Interactive Website`}
                    className="w-full h-full border-0 bg-white"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-between p-8 md:p-12 bg-gradient-to-br from-[#1c1c1c] via-[#121212] to-[#0a0a0a] text-white">
                    <div className="w-full flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
                        <span className="text-xs font-mono font-bold tracking-wider text-[#f59e0b] uppercase">
                          STATUS: IN DEVELOPMENT · Q1 2027
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-500">PRIVATE CLIENT STAGING</span>
                    </div>

                    <div className="my-auto flex flex-col md:flex-row items-center gap-8">
                      <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden border border-white/15 shadow-2xl">
                        <Image
                          src={activeProject.thumbnail}
                          alt="Project Thumbnail"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 text-left">
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                          {activeProject.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase mt-1">
                          {activeProject.name}
                        </h3>
                        <p className="mt-3 text-neutral-300 text-sm leading-relaxed">
                          {activeProject.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4. PROJECT SWITCHER (3 Project Cards Below Browser Preview) */}
        <div className="relative z-10 mt-8 sm:mt-10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 mb-4 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#FF3214]" />
            <span>Select Showcase Experience</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PROJECTS.map((project, index) => {
              const isSelected = index === activeIndex

              return (
                <div
                  key={project.id}
                  onClick={() => handleSelectProject(index)}
                  className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer border text-left flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#181818] border-[#FF3214] shadow-[0_10px_30px_-10px_rgba(255,50,20,0.3)] ring-1 ring-[#FF3214]"
                      : "bg-[#141414] border-white/10 hover:border-white/25 hover:bg-[#161616]"
                  }`}
                >
                  {/* Top row: Number, Category, Selection Indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 truncate">
                      {project.category}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-all ${
                        isSelected ? "bg-[#FF3214] scale-125 shadow-sm shadow-[#FF3214]" : "bg-neutral-600"
                      }`}
                    />
                  </div>

                  {/* Middle row: Thumbnail & Title */}
                  <div className="flex items-center gap-3.5 my-2">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                      <Image
                        src={project.thumbnail}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-lg font-bold text-white uppercase tracking-tight truncate group-hover:text-[#FF3214] transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-xs text-neutral-400 font-mono truncate mt-0.5">
                        {project.domain}
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Metrics */}
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="truncate">{project.metrics}</span>
                    <span className="text-neutral-500 group-hover:text-white transition-colors shrink-0 pl-1">
                      {isSelected ? "Active" : "Switch →"}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 5. BOTTOM SHOWCASE ACTIONS */}
        <div className="relative z-10 mt-8 sm:mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {activeProject.liveUrl && (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF3214] hover:bg-[#e02600] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Open Live Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            <a
              href="#projects"
              className="border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
            <span>Have a project in mind?</span>
            <a
              href="#contact"
              className="text-[#FF3214] font-bold hover:underline flex items-center gap-1 group cursor-pointer"
            >
              <span>Let&apos;s build it.</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
