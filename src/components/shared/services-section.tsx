"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"

interface ServiceItem {
  id: string
  title: string
  description: string
  cardBrand: string
  cardBadge: string
  mockupTitle: string
  mockupQuote: string
  previewImage: string
  subImage: string
}

const SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "LOGO & BRANDING",
    description:
      "With our commitment to crafting distinctive visual identities, we build comprehensive brand guidelines and logos that resonate with your target market.",
    cardBrand: "NIHOMA",
    cardBadge: "STUDIO",
    mockupTitle: "BRAND IDENTITY & STATIONERY",
    mockupQuote:
      "Crafting timeless design systems and visual standards that elevate brand perception across every touchpoint.",
    previewImage: "/portfolio-cards.jpg",
    subImage: "/portfolio-box.jpg",
  },
  {
    id: "02",
    title: "WEB DESIGN",
    description:
      "With our commitment to creativity, innovation and order, we work closely with you to produce a website that fits your unique needs and vision.",
    cardBrand: "KONTAKO",
    cardBadge: "CONTACT",
    mockupTitle: "THE FUTURE OF HOME LIVING",
    mockupQuote:
      "Kontako is committed to providing the best advice in meeting your property needs for your future.",
    previewImage: "/kontako-cabin.jpg",
    subImage: "/kontako-cabin.jpg",
  },
  {
    id: "03",
    title: "MOBILE APP",
    description:
      "With our commitment to seamless UX and digital finesse, we build high-performing mobile applications that deliver effortless, delightful interactions.",
    cardBrand: "ORBITECH",
    cardBadge: "FINTECH",
    mockupTitle: "NEXT-GEN MOBILE INTERFACE",
    mockupQuote:
      "Delivering fluid animations, biometric authentication, and intuitive navigation across iOS and Android.",
    previewImage: "/hero-orb.jpg",
    subImage: "/portfolio-keytag.jpg",
  },
  {
    id: "04",
    title: "ILLUSTRATION",
    description:
      "With our commitment to artistic narrative and visual depth, we craft bespoke illustrations and 3D visual assets that make your brand unmistakable.",
    cardBrand: "ARTISAN",
    cardBadge: "3D & ART",
    mockupTitle: "BESPOKE VISUAL STORYTELLING",
    mockupQuote:
      "Translating abstract product concepts into compelling, memorable visual illustrations and iconography.",
    previewImage: "/portfolio-box.jpg",
    subImage: "/portfolio-mug.jpg",
  },
  {
    id: "05",
    title: "DEVELOPMENT",
    description:
      "With our commitment to cutting-edge web architecture, we build blazing-fast, scalable digital platforms using modern frameworks and best engineering practices.",
    cardBrand: "ROOLLAND",
    cardBadge: "SYSTEMS",
    mockupTitle: "FULL-STACK DIGITAL SYSTEMS",
    mockupQuote:
      "Engineering robust frontend code and backend APIs designed for sub-second speeds and flawless uptime.",
    previewImage: "/roolland-lawyer.jpg",
    subImage: "/kontako-cabin.jpg",
  },
]

function ServiceMockupCard({ item }: { item: ServiceItem }) {
  return (
    <div className="rounded-2xl bg-white p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65)] border border-neutral-200/90 overflow-hidden flex flex-col">
      {/* Header bar */}
      <div className="px-2 py-1.5 flex items-center justify-between bg-neutral-900 rounded-t-lg">
        <span className="text-[8px] font-bold tracking-wider text-white/80 uppercase">MENU</span>
        <span className="text-[9px] font-extrabold tracking-widest text-white uppercase">{item.cardBrand}</span>
        <span className="bg-[#ff2a00] text-white px-2 py-0.5 rounded-full text-[7px] font-bold tracking-wider uppercase">
          {item.cardBadge}
        </span>
      </div>

      {/* Preview image */}
      <div className="relative h-[115px] xl:h-[125px] w-full overflow-hidden bg-neutral-900">
        <Image src={item.previewImage} alt={item.title} fill className="object-cover object-center transition-transform duration-700 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
        <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white uppercase leading-tight">
          {item.mockupTitle}
        </div>
      </div>

      {/* Quote */}
      <div className="p-2.5 bg-white text-neutral-800">
        <p className="text-[8px] font-medium leading-relaxed text-neutral-600">
          &ldquo;{item.mockupQuote}&rdquo;
        </p>
      </div>

      {/* Sub-thumbnail */}
      <div className="relative h-[48px] w-full rounded-md overflow-hidden bg-neutral-200">
        <Image src={item.subImage} alt={`${item.title} detail`} fill className="object-cover object-center opacity-90 transition-transform duration-700 hover:scale-105" />
      </div>
    </div>
  )
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>("02")

  return (
    <section id="service" className="w-full pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 relative">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 mb-12 sm:mb-16 md:mb-20">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#ff2a00] uppercase font-sans mb-4 sm:mb-5">
          <span>//</span>
          <span>OUR SERVICES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-[-0.035em] text-[#0f0f0f] leading-[1.04] uppercase max-w-5xl">
          OUR AREA OF SPECIALIZATION
        </h2>
      </div>

      {/* Service rows */}
      <div className="w-full flex flex-col">
        {SERVICES.map((item) => {
          const isActive = activeId === item.id

          if (isActive) {
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className="w-full bg-black text-white relative z-20 py-8 sm:py-10 md:py-12 transition-all duration-300 ease-out shadow-2xl cursor-default"
              >
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-0 relative">
                  {/* Title */}
                  <div className="lg:w-[28%] shrink-0">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
                      {item.title}
                    </h3>
                  </div>

                  {/* Floating card (desktop only) */}
                  <div className="hidden lg:block lg:w-[22%] relative shrink-0">
                    <div
                      key={`card-${item.id}`}
                      className="absolute -top-[135px] left-0 w-[205px] xl:w-[225px] rounded-2xl z-30 transition-transform duration-300 hover:scale-[1.03] animate-service-card"
                    >
                      <ServiceMockupCard item={item} />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="lg:w-[8%] shrink-0">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#ff2a00] font-sans inline-block">
                      {item.id}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="lg:w-[34%] pr-4 sm:pr-8">
                    <p key={`desc-${item.id}`} className="text-neutral-300 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed animate-service-content">
                      {item.description}
                    </p>
                  </div>

                  {/* Action button */}
                  <div className="lg:w-[8%] flex justify-end shrink-0">
                    <a
                      href="#contact"
                      key={`btn-${item.id}`}
                      aria-label={`Explore ${item.title}`}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ff2a00] hover:bg-[#e02600] text-white flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer animate-button-pop"
                    >
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>

                  {/* Mobile preview card */}
                  <div className="block lg:hidden mt-3 pt-3 border-t border-neutral-800 animate-service-card">
                    <ServiceMockupCard item={item} />
                  </div>
                </div>
              </div>
            )
          }

          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveId(item.id)}
              onClick={() => setActiveId(item.id)}
              className="w-full border-b border-neutral-200/90 py-6 sm:py-7 md:py-8 cursor-pointer transition-colors duration-200 hover:bg-black/[0.03] group"
            >
              <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
                <div className="w-[60%] sm:w-[45%] lg:w-[28%] shrink-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 uppercase group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="hidden lg:block lg:w-[22%] shrink-0" />
                <div className="w-[20%] sm:w-[15%] lg:w-[8%] shrink-0">
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-400 font-sans group-hover:text-neutral-700 transition-colors">
                    {item.id}
                  </span>
                </div>
                <div className="hidden lg:block lg:w-[34%]" />
                <div className="w-[20%] sm:w-[15%] lg:w-[8%] flex justify-end shrink-0">
                  <div className="p-2 text-neutral-800 group-hover:text-black transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
