"use client"

import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { openContactDrawer } from "@/src/components/shared/contact-drawer"

interface ProjectShowcase {
  id: string
  number: string
  title: string
  category: string
  services: string
  description: string
  image: string
  alt: string
  liveUrl: string
}

const FEATURED_PROJECT: ProjectShowcase = {
  id: "meeram",
  number: "01",
  title: "Meeram Haute Parfumerie",
  category: "Luxury Fragrance E-Commerce",
  services: "Architecture · UI/UX Design · Headless Storefront",
  description:
    "A bespoke digital flagship for a luxury perfume house, featuring refined editorial typography, interactive scent-profile discovery, and seamless Shopify & Razorpay checkout integration.",
  image: "/meeram-coffret.jpg",
  alt: "Meeram Haute Parfumerie bespoke digital storefront",
  liveUrl: "https://meeramfragrances.com/",
}

const SECONDARY_PROJECTS: ProjectShowcase[] = [
  {
    id: "drip-studios",
    number: "02",
    title: "Drip Studios",
    category: "Streetwear & Apparel",
    services: "Shopify Storefront · Drop Engine · Design System",
    description:
      "A cutting-edge digital storefront and drop lookbook system tailored for an emerging streetwear fashion label with fluid mobile-first checkout.",
    image: "/drip-studios.jpg",
    alt: "Drip Studios Streetwear e-commerce storefront",
    liveUrl: "https://dripdrip.in/",
  },
  {
    id: "my-otaku-world",
    number: "03",
    title: "My Otaku World",
    category: "Anime & Pop-Culture Media",
    services: "Full-Stack Engineering · Editorial CMS · Edge Delivery",
    description:
      "A high-traffic pop-culture media and editorial hub engineered with rich media galleries, community rankings, and sub-second edge performance.",
    image: "/myotakuworld.jpg",
    alt: "My Otaku World editorial media platform",
    liveUrl: "https://myotakuworld.com/",
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
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF3214]" />
          <span>SELECTED WORK / 2026</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-white/10">
          <div className="max-w-3xl">
            <h2 className="text-[32px] sm:text-5xl md:text-6xl lg:text-[68px] font-semibold text-white tracking-[-0.03em] leading-[1.05] uppercase">
              DIGITAL EXPERIENCES,
              <br />
              BUILT TO MAKE AN IMPACT.
            </h2>
            <p className="mt-6 text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              From thoughtful design to high-performance development, we turn ideas into digital products people love to use.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors group pb-1 border-b border-white/20 hover:border-[#FF3214]"
            >
              <span>Explore our work</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF3214] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 1. LARGE FEATURED PROJECT: MEERAM */}
        <div className="mt-12 sm:mt-16">
          <a
            href={FEATURED_PROJECT.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-[2rem] sm:rounded-[2.5rem] bg-[#121212]/90 border border-white/10 hover:border-white/25 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Top Browser Bar */}
            <div className="px-6 sm:px-8 py-4 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="ml-3 font-mono text-[11px] text-neutral-400 hidden sm:inline">
                  meeramfragrances.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-[#FF3214] tracking-widest font-semibold uppercase">
                  FEATURED CASE STUDY
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase text-neutral-300 group-hover:text-white transition-colors">
                  <span>Visit Live</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3214] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>

            {/* Split Content: Large Visual + Editorial Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
              {/* Project Image */}
              <div className="lg:col-span-7 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                <Image
                  src={FEATURED_PROJECT.image}
                  alt={FEATURED_PROJECT.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Details */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xs font-mono text-[#FF3214] font-semibold">
                      {FEATURED_PROJECT.number} —
                    </span>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                      {FEATURED_PROJECT.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-[#FF3214] transition-colors">
                    {FEATURED_PROJECT.title}
                  </h3>

                  <p className="text-xs font-mono text-neutral-400 mt-2 tracking-wide">
                    {FEATURED_PROJECT.services}
                  </p>

                  <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mt-4">
                    {FEATURED_PROJECT.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>DEPLOYED &amp; LIVE</span>
                  <span className="text-white group-hover:text-[#FF3214] flex items-center gap-1 transition-colors">
                    <span>EXPLORE PROJECT</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* 2. TWO ASYMMETRIC SECONDARY PROJECTS: DRIP STUDIOS & MY OTAKU WORLD */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {SECONDARY_PROJECTS.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-[2rem] sm:rounded-[2.5rem] bg-[#121212]/90 border border-white/10 hover:border-white/25 overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Browser Bar */}
              <div className="px-6 py-3.5 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>Visit Live</span>
                  <ArrowUpRight className="w-3 h-3 text-[#FF3214] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Visual Showcase */}
              <div className="p-6 sm:p-8">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-6">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs font-mono text-[#FF3214] font-semibold">
                    {project.number} —
                  </span>
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF3214] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-neutral-400 mt-1 tracking-wide">
                  {project.services}
                </p>

                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mt-3">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-8 py-3.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400 bg-white/[0.01]">
                <span>CASE STUDY</span>
                <span className="text-white group-hover:text-[#FF3214] flex items-center gap-1 transition-colors">
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* 3. RESTRAINED MINIMALIST BOTTOM CTA */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#FF3214] mb-2 font-semibold">
              START A CONVERSATION
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Have a project in mind? Let&apos;s talk.
            </h3>
            <p className="text-neutral-400 text-sm font-light mt-1">
              We collaborate with visionary brands worldwide.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              openContactDrawer()
            }}
            className="flex items-center gap-4 group cursor-pointer w-fit shrink-0"
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
        </div>
      </div>
    </section>
  )
}
