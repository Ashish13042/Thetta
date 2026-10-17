"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight, Calendar, Monitor, Sparkles } from "lucide-react"

interface MeeramTheme {
  id: string
  name: string
  themeTitle: string
  headline: string
  story: string
  imageSrc: string
  accentColor: string
}

const MEERAM_THEMES: MeeramTheme[] = [
  {
    id: "rose-02",
    name: "Rose 02",
    themeTitle: "THE LUMINOUS · ROSE 02",
    headline: "Soft as a secret. Bold as desire.",
    story:
      "Velvety rose petals meet glowing amber, creating an intimate signature that unfolds slowly on the skin.",
    imageSrc: "/meeram-slide-rose.png",
    accentColor: "#fb7185",
  },
  {
    id: "noir-03",
    name: "Noir 03",
    themeTitle: "THE NOCTURNAL · NOIR 03",
    headline: "Made for nights that become stories.",
    story:
      "Smoky woods and cool mineral notes deepen into a magnetic, mysterious trail made for after dark.",
    imageSrc: "/meeram-slide-noir.png",
    accentColor: "#38bdf8",
  },
  {
    id: "oud-01",
    name: "Oud 01",
    themeTitle: "THE SIGNATURE · OUD 01",
    headline: "Leave a trail they'll never forget.",
    story:
      "A scent so captivating, it lingers in the air long after you've gone. An unforgettable essence of you.",
    imageSrc: "/meeram-slide-oud.png",
    accentColor: "#f59e0b",
  },
]

export function ProjectsSection() {
  const storeUrl = "https://meeramfragrances.com/"
  const [activeThemeIndex, setActiveThemeIndex] = useState(0)
  const [prevThemeIndex, setPrevThemeIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isPaused, setIsPaused] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const goToSlide = (newIndex: number, forcedDir?: "next" | "prev") => {
    if (newIndex === activeThemeIndex) return
    const dir =
      forcedDir ||
      (newIndex > activeThemeIndex || (activeThemeIndex === MEERAM_THEMES.length - 1 && newIndex === 0)
        ? "next"
        : "prev")
    setDirection(dir)
    setPrevThemeIndex(activeThemeIndex)
    setActiveThemeIndex(newIndex)
  }

  // 5-second auto-sliding transition between the 3 authentic landing page themes
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      goToSlide((activeThemeIndex + 1) % MEERAM_THEMES.length, "next")
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused, activeThemeIndex])

  const activeTheme = MEERAM_THEMES[activeThemeIndex]

  return (
    <section id="project" className="mt-16 sm:mt-24 md:mt-32 pt-8 mb-24 sm:mb-32 md:mb-40 lg:mb-44 pb-6 sm:pb-8">
      {/* Section Header Tag */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-sm sm:text-base font-bold tracking-wider text-[#ff2a00] uppercase font-sans">
          <span>//</span>
          <span>FEATURED PROJECT</span>
        </div>
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1 group cursor-pointer"
        >
          <span>meeramfragrances.com</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Main Luxury Dark Showcase Container */}
      <div
        className="rounded-[2.25rem] sm:rounded-[3rem] bg-[#0b0c0e] text-white p-6 sm:p-10 md:p-12 lg:p-14 shadow-2xl border border-white/10 relative overflow-hidden transition-all duration-500"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle Ambient Glow */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-colors duration-700 opacity-20"
          style={{ backgroundColor: activeTheme.accentColor }}
        />

        {/* Desktop 2-Column Section / Mobile Stacked: Description on Left, Large Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Project Title & Description (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-neutral-400 uppercase mb-3">
              E-COMMERCE &nbsp;/&nbsp; UI/UX DESIGN
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white tracking-tight leading-[1.06] mb-5">
              Meeram Perfumes
            </h3>

            <p className="text-neutral-300 text-sm sm:text-[15px] leading-relaxed font-normal mb-8 max-w-lg">
              A luxurious and immersive e-commerce experience crafted for Meeram, a premium perfume
              brand. The website combines elegant visuals, smooth interactions and a refined layout
              to reflect the brand&apos;s sophistication and timeless appeal.
            </p>

            {/* Metadata Specs Row: Year, Platform, Services with small greyish vertical separator lines */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 mb-8">
              {/* Year */}
              <div className="flex items-start gap-2 sm:gap-2.5 flex-1 min-w-0">
                <Calendar className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-400 font-medium">Year</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">2026</div>
                </div>
              </div>

              {/* Small vertical greyish separator line */}
              <div className="w-[1px] h-7 sm:h-8 bg-white/10 shrink-0 mx-2 sm:mx-3" />

              {/* Platform */}
              <div className="flex items-start gap-2 sm:gap-2.5 flex-1 min-w-0 pl-1">
                <Monitor className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-400 font-medium">Platform</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Web</div>
                </div>
              </div>

              {/* Small vertical greyish separator line */}
              <div className="w-[1px] h-7 sm:h-8 bg-white/10 shrink-0 mx-2 sm:mx-3" />

              {/* Services */}
              <div className="flex items-start gap-2 sm:gap-2.5 flex-[1.2] min-w-0 pl-1">
                <Sparkles className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-400 font-medium">Services</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">
                    UI/UX Design &amp; Dev
                  </div>
                </div>
              </div>
            </div>

            {/* Single Clear "View Live Project ↗" Button */}
            <div>
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Live Project - Meeram Fragrances Website"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
              >
                <span>View Live Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Featured Project Screenshot with Hardware-Accelerated Sliding Track */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div
              className="relative rounded-[1.75rem] sm:rounded-[2.25rem] overflow-hidden border border-white/10 shadow-2xl aspect-[16/10] bg-neutral-900 group select-none"
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStartX === null) return
                const diff = touchStartX - e.changedTouches[0].clientX
                if (diff > 40) {
                  goToSlide((activeThemeIndex + 1) % MEERAM_THEMES.length, "next")
                } else if (diff < -40) {
                  goToSlide((activeThemeIndex - 1 + MEERAM_THEMES.length) % MEERAM_THEMES.length, "prev")
                }
                setTouchStartX(null)
              }}
            >
              {/* All 3 Slides Mounted for Instant GPU Compositing (Zero Flashes / 60fps on Mobile) */}
              {MEERAM_THEMES.map((theme, index) => {
                const isActive = index === activeThemeIndex
                const isPrev = index === prevThemeIndex

                let transform = "translate3d(100%, 0, 0)"
                let opacity = 0
                let zIndex = 0
                let transition = "none"

                if (isActive) {
                  transform = "translate3d(0%, 0, 0)"
                  opacity = 1
                  zIndex = 20
                  transition = "transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms ease"
                } else if (isPrev) {
                  transform = direction === "next" ? "translate3d(-100%, 0, 0)" : "translate3d(100%, 0, 0)"
                  opacity = 0
                  zIndex = 10
                  transition = "transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms ease"
                } else {
                  transform = direction === "next" ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)"
                  opacity = 0
                  zIndex = 0
                  transition = "none"
                }

                return (
                  <div
                    key={theme.id}
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      transition,
                    }}
                    className="absolute inset-0 w-full h-full will-change-[transform,opacity]"
                  >
                    <Image
                      src={theme.imageSrc}
                      alt={`${theme.themeTitle} - ${theme.headline}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      priority={index === 0}
                      loading="eager"
                      className="object-cover object-center"
                    />
                  </div>
                )
              })}

              {/* Direct Clickable Overlay */}
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Live Store - ${activeTheme.themeTitle}`}
                className="absolute inset-0 z-30 cursor-pointer"
              />

              {/* Slide Dots / Progress Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 pointer-events-none">
                {MEERAM_THEMES.map((theme, idx) => (
                  <span
                    key={theme.id}
                    style={{
                      backgroundColor: idx === activeThemeIndex ? theme.accentColor : "rgba(255,255,255,0.25)",
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeThemeIndex ? "w-6" : "w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lower Row: Display the Three Alternate Designs in a Responsive Grid Below */}
        <div className="mt-10 sm:mt-12 md:mt-14 pt-8 sm:pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-400 uppercase">
              ALTERNATE LANDING PAGE THEMES (3)
            </div>
            <div className="text-[10px] sm:text-[11px] text-neutral-400 hidden sm:block">
              Click any design to preview · Auto-transitions every 5s
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {MEERAM_THEMES.map((theme, index) => {
              const isSelected = activeThemeIndex === index

              return (
                <div
                  key={theme.id}
                  onClick={() => goToSlide(index)}
                  className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? "shadow-2xl scale-[1.02] border-opacity-100"
                      : "border-white/10 hover:border-white/30 opacity-70 hover:opacity-100"
                  }`}
                  style={{
                    borderColor: isSelected ? theme.accentColor : undefined,
                  }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={theme.imageSrc}
                      alt={theme.themeTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Active preview indicator pill */}
                    {isSelected && (
                      <div className="absolute top-3 right-3 z-10">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-black shadow-md"
                          style={{ backgroundColor: theme.accentColor }}
                        >
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Bottom caption & link */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 z-10 flex items-end justify-between gap-2">
                      <div className="min-w-0">
                        <p
                          className="text-[9px] font-bold uppercase tracking-wider truncate"
                          style={{ color: theme.accentColor }}
                        >
                          {theme.themeTitle}
                        </p>
                        <h5 className="text-xs sm:text-[13px] font-bold text-white truncate mt-0.5">
                          {theme.headline}
                        </h5>
                      </div>

                      <a
                        href={storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Visit live store for ${theme.name}`}
                        className="w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
