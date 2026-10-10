import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

interface ProjectCard {
  id: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  mockupHeader: string
  mockupCta: string
  headline: string
  headlineDot?: boolean
  description: string
  authorName: string
  authorRole: string
  authorTag: string
  bottomTag: string
  ctaStyle: "red" | "white"
  /** Optional: mockup testimonial or secondary content type */
  stats?: Array<{ value: string; label: string }>
  aboutText?: React.ReactNode
}

import React from "react"

const PROJECT_CARDS: ProjectCard[] = [
  {
    id: "kontako",
    title: "KONTAKO",
    subtitle: "REAL ESTATE LANDING PAGE",
    imageSrc: "/kontako-cabin.jpg",
    imageAlt: "Kontako - The Future of Home Living",
    mockupHeader: "KONTAKO",
    mockupCta: "CONTACT US",
    headline: "THE FUTURE\nOF HOME LIVING",
    headlineDot: true,
    description:
      "Trust us with your dreams! We are ready to help you build the dream property that will be your future.",
    authorName: "Kianna Curtis",
    authorRole: "Founder of Kontako",
    authorTag: "FULFILL YOUR DREAMS",
    bottomTag: "WHY DOES IT HAVE TO BE KONTAKO?",
    ctaStyle: "red",
  },
  {
    id: "roolland",
    title: "ROOLLAND",
    subtitle: "LAW FIRM LANDING PAGE",
    imageSrc: "/roolland-lawyer.jpg",
    imageAlt: "Roolland Law Firm Team",
    mockupHeader: "ROOLLAND",
    mockupCta: "CONTACT US",
    headline: "PROBLEM\nSOLUTION",
    description:
      "WE UNDERSTAND THAT EVERY LEGAL CASE IS UNIQUE, AND THAT IS WHY WE STRIVE TO PROVIDE SOLUTIONS TAILORED TO YOUR SPECIFIC NEEDS AND INTERESTS",
    authorName: "",
    authorRole: "",
    authorTag: "",
    bottomTag: "",
    ctaStyle: "white",
    stats: [
      { value: "284", label: "Case Resolved" },
      { value: "84%", label: "Case Win Rate" },
      { value: "$28 B", label: "Our Case Results" },
    ],
  },
]

function KontakoCard({ card }: { card: ProjectCard }) {
  return (
    <div className="flex flex-col group">
      <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#edf1f4] p-5 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="rounded-2xl sm:rounded-[1.25rem] bg-white overflow-hidden shadow-lg border border-neutral-100/80 flex flex-col">
          {/* Mockup hero image */}
          <div className="relative h-[280px] sm:h-[330px] md:h-[370px] w-full overflow-hidden bg-neutral-900">
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />

            {/* Mockup header bar */}
            <div className="relative z-10 px-6 py-4 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase">MENU</span>
              <span className="text-xs font-extrabold tracking-widest text-white uppercase">{card.mockupHeader}</span>
              <span className="bg-[#ff2a00] text-white px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase shadow-sm">
                {card.mockupCta}
              </span>
            </div>

            {/* Mockup headline */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none uppercase max-w-[280px] sm:max-w-xs">
                THE FUTURE <br />
                OF HOME LIVING<span className="text-[#ff2a00]">.</span>
              </h4>
              <p className="text-[10px] sm:text-[11px] text-neutral-300 max-w-xs mt-2.5 font-normal leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Floating action arrow */}
            <div className="absolute bottom-6 right-6 z-10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#ff2a00] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>

          {/* Testimonial area */}
          <div className="p-6 sm:p-8 bg-white flex flex-col items-center text-center">
            <span className="text-[9px] sm:text-[10px] font-bold text-[#ff2a00] tracking-widest uppercase mb-3">
              {card.authorTag}
            </span>
            <blockquote className="text-xs sm:text-sm md:text-[15px] font-semibold text-neutral-800 max-w-md leading-relaxed tracking-tight mb-5">
              &ldquo; Kontako is committed to providing the best service in meeting your property needs for your future &rdquo;
            </blockquote>

            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-7 h-7 rounded-full bg-neutral-200 overflow-hidden relative border border-neutral-300">
                <div className="w-full h-full bg-gradient-to-tr from-amber-600 to-rose-400" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-neutral-900 leading-tight">{card.authorName}</div>
                <div className="text-[9px] text-neutral-400 font-medium">{card.authorRole}</div>
              </div>
            </div>

            <span className="text-[8px] sm:text-[9px] font-bold text-[#ff2a00] tracking-wider uppercase opacity-90">
              {card.bottomTag}
            </span>
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="mt-5 sm:mt-6 px-3 flex items-center justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 uppercase">{card.title}</h3>
          <p className="text-[11px] sm:text-xs font-semibold text-neutral-400 tracking-wider uppercase mt-1">{card.subtitle}</p>
        </div>
        <button
          type="button"
          aria-label={`View ${card.title} Project`}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#ff2a00] text-white flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 group-hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ArrowUpRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

function RoollandCard({ card }: { card: ProjectCard }) {
  return (
    <div className="flex flex-col group">
      <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#edf1f4] p-5 sm:p-7 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="rounded-2xl sm:rounded-[1.25rem] bg-white overflow-hidden shadow-lg border border-neutral-100/80 p-5 sm:p-7 md:p-8 flex flex-col justify-between min-h-[500px]">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between text-xs pb-5 border-b border-neutral-100">
              <span className="font-extrabold tracking-tight text-neutral-900 text-sm uppercase">{card.mockupHeader}</span>
              <div className="flex flex-col gap-1 cursor-pointer">
                <div className="w-4 h-0.5 bg-neutral-900" />
                <div className="w-4 h-0.5 bg-neutral-900" />
              </div>
              <span className="border border-neutral-300 rounded-full px-3 py-1 text-[9px] font-bold text-neutral-700 tracking-wider uppercase">
                {card.mockupCta}
              </span>
            </div>

            <div className="text-center my-6 sm:my-8">
              <span className="text-[9px] sm:text-[10px] font-bold text-neutral-400 tracking-widest uppercase block mb-1">
                WE BUILD BRIDGES BETWEEN
              </span>
              <h4 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-neutral-900 tracking-tight leading-[0.95] uppercase">
                PROBLEM <br />
                SOLUTION
              </h4>
            </div>

            <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-bold text-neutral-400 tracking-wider uppercase mb-4 px-1">
              <span>A TEAM DEDICATED TO</span>
              <span>SOLVE YOUR PROBLEM</span>
            </div>

            <div className="relative h-[200px] sm:h-[240px] md:h-[270px] w-full rounded-xl overflow-hidden bg-neutral-900 shadow-inner">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Lower content */}
          <div className="mt-6 pt-5 border-t border-neutral-100">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <span className="text-[9px] font-bold text-neutral-400 tracking-wider uppercase shrink-0 sm:pt-0.5">
                ABOUT US
              </span>
              <p className="text-[10px] sm:text-[11px] font-bold text-neutral-800 leading-snug uppercase">
                WE UNDERSTAND{" "}
                <span className="text-neutral-400 font-semibold">
                  THAT EVERY LEGAL CASE IS UNIQUE, AND THAT IS WHY WE STRIVE TO PROVIDE SOLUTIONS TAILORED TO YOUR SPECIFIC NEEDS
                </span>{" "}
                AND INTERESTS
              </p>
            </div>

            {card.stats && (
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-100">
                {card.stats.map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">{value}</div>
                    <div className="text-[9px] text-neutral-400 font-medium tracking-tight mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="mt-5 sm:mt-6 px-3 flex items-center justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 uppercase">{card.title}</h3>
          <p className="text-[11px] sm:text-xs font-semibold text-neutral-400 tracking-wider uppercase mt-1">{card.subtitle}</p>
        </div>
        <button
          type="button"
          aria-label={`View ${card.title} Project`}
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-105 group-hover:scale-105 group-hover:border-neutral-300 active:scale-95 cursor-pointer"
        >
          <ArrowUpRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="project" className="mt-16 sm:mt-24 md:mt-32 pt-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        <div className="flex items-center gap-2 text-sm sm:text-base font-bold tracking-wider text-[#ff2a00] uppercase font-sans">
          <span>//</span>
          <span>OUR PROJECT</span>
        </div>
        <div className="flex items-center gap-4 text-neutral-800">
          <button type="button" aria-label="Previous Project" className="p-2 text-neutral-400 hover:text-black transition-colors cursor-pointer">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button type="button" aria-label="Next Project" className="p-2 text-neutral-900 hover:text-[#ff2a00] transition-colors cursor-pointer">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
        {PROJECT_CARDS.map((card) =>
          card.id === "kontako" ? (
            <KontakoCard key={card.id} card={card} />
          ) : (
            <RoollandCard key={card.id} card={card} />
          )
        )}
      </div>
    </section>
  )
}
