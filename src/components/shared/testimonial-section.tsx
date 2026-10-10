"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  quote: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "01",
    name: "Martin Rosser",
    role: "CEO, Pentlar",
    avatar: "/martin-rosser.jpg",
    quote:
      "\u201cWe are very happy to work with such an amazing team! our working experience is great. They have a deep understanding of our brand vision and values, and are able to present them in creative and impressive designs.\u201d",
  },
  {
    id: "02",
    name: "Elena Rostova",
    role: "Founder, Nihoma Studio",
    avatar: "/martin-rosser.jpg",
    quote:
      "\u201cThe collaboration with Thetta completely elevated our visual identity. Their creative instincts, precision, and speed delivered beyond our highest expectations.\u201d",
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = TESTIMONIALS[currentIndex]

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))

  return (
    <section className="w-full bg-white text-[#111111] py-20 sm:py-28 md:py-32 relative border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: avatar + nav arrows */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden relative shrink-0 shadow-sm">
                <Image src={current.avatar} alt={current.name} fill sizes="64px" className="object-cover object-center" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 leading-tight">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-neutral-400 mt-0.5">{current.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-8 sm:mt-10">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-1 text-[#ffb7a8] hover:text-[#ff2a00] transition-colors cursor-pointer group"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-1 text-[#ff2a00] hover:text-[#e02600] transition-colors cursor-pointer group"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right: quote */}
          <div className="lg:col-span-8 relative">
            <div
              className="absolute -top-10 sm:-top-14 md:-top-16 -left-4 sm:-left-8 text-[120px] sm:text-[170px] md:text-[200px] font-serif text-[#f2f2f2] leading-none select-none pointer-events-none -z-0"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="relative z-10 text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-normal leading-[1.45] text-[#222222] tracking-[-0.015em]">
              {current.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
