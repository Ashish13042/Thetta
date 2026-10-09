"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"

interface ServiceItem {
  id: string
  title: string
  description: string
  previewImage: string
  mockupTitle: string
  mockupQuote: string
}

const SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "LOGO & BRANDING",
    description:
      "With our commitment to crafting distinctive visual identities, we build comprehensive brand guidelines and logos that resonate with your target market.",
    previewImage: "/portfolio-cards.jpg",
    mockupTitle: "BRAND IDENTITY & STATIONERY",
    mockupQuote:
      "Crafting timeless design systems and visual standards that elevate brand perception across every touchpoint.",
  },
  {
    id: "02",
    title: "WEB DESIGN",
    description:
      "With our commitment to creativity, innovation and order, we work closely with you to produce a website that fits your unique needs and vision.",
    previewImage: "/kontako-cabin.jpg",
    mockupTitle: "THE FUTURE OF HOME LIVING",
    mockupQuote:
      "Kontako is committed to providing the best advice in meeting your property needs for your future.",
  },
  {
    id: "03",
    title: "MOBILE APP",
    description:
      "With our commitment to seamless UX and digital finesse, we build high-performing mobile applications that deliver effortless, delightful interactions.",
    previewImage: "/hero-orb.jpg",
    mockupTitle: "NEXT-GEN MOBILE INTERFACE",
    mockupQuote:
      "Delivering fluid animations, rock-solid responsiveness, and intuitive navigation across iOS and Android.",
  },
  {
    id: "04",
    title: "ILLUSTRATION",
    description:
      "With our commitment to artistic narrative and visual depth, we craft bespoke illustrations and 3D visual assets that make your brand unmistakable.",
    previewImage: "/portfolio-box.jpg",
    mockupTitle: "BESPOKE VISUAL STORYTELLING",
    mockupQuote:
      "Translating abstract product concepts into compelling, memorable visual illustrations and iconography.",
  },
  {
    id: "05",
    title: "DEVELOPMENT",
    description:
      "With our commitment to cutting-edge web architecture, we build blazing-fast, scalable digital platforms using modern frameworks and best engineering practices.",
    previewImage: "/roolland-lawyer.jpg",
    mockupTitle: "FULL-STACK DIGITAL SYSTEMS",
    mockupQuote:
      "Engineering robust frontend code and backend APIs designed for sub-second speeds and flawless uptime.",
  },
]

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>("02")

  return (
    <section id="service" className="w-full pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 relative">
      {/* Section Header Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 mb-12 sm:mb-16 md:mb-20">
        {/* Red Tag: // OUR SERVICES */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#ff2a00] uppercase font-sans mb-4 sm:mb-5">
          <span>//</span>
          <span>OUR SERVICES</span>
        </div>

        {/* Main Title: OUR AREA OF SPECIALIZATION */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-[-0.035em] text-[#0f0f0f] leading-[1.04] uppercase max-w-5xl">
          OUR AREA OF SPECIALIZATION
        </h2>
      </div>

      {/* Services Rows List */}
      <div className="w-full flex flex-col">
        {SERVICES.map((item) => {
          const isActive = activeId === item.id

          if (isActive) {
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className="w-full bg-black text-white relative z-20 py-8 sm:py-10 md:py-12 transition-all duration-300 shadow-xl cursor-default"
              >
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-0 relative">
                  {/* Column 1: Title (matches inactive column) */}
                  <div className="lg:w-[28%] shrink-0">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
                      {item.title}
                    </h3>
                  </div>

                  {/* Column 2: Floating Card Slot (overlaps vertically) */}
                  <div className="hidden lg:block lg:w-[22%] relative shrink-0">
                    <div className="absolute -top-[135px] left-0 w-[205px] xl:w-[225px] rounded-2xl bg-white p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-neutral-200/90 overflow-hidden flex flex-col z-30 transition-transform duration-500 hover:scale-[1.03]">
                      {/* Mockup Header Bar */}
                      <div className="px-2 py-1.5 flex items-center justify-between bg-neutral-900 rounded-t-lg">
                        <span className="text-[8px] font-bold tracking-wider text-white/80 uppercase">
                          MENU
                        </span>
                        <span className="text-[9px] font-extrabold tracking-widest text-white uppercase">
                          KONTAKO
                        </span>
                        <span className="bg-[#ff2a00] text-white px-2 py-0.5 rounded-full text-[7px] font-bold tracking-wider uppercase">
                          CONTACT
                        </span>
                      </div>

                      {/* Mockup Hero Preview Image */}
                      <div className="relative h-[115px] xl:h-[125px] w-full overflow-hidden bg-neutral-900">
                        <Image
                          src={item.previewImage}
                          alt={item.title}
                          fill
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
                        <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white uppercase leading-tight">
                          {item.mockupTitle}
                        </div>
                      </div>

                      {/* Mockup Quote / Text */}
                      <div className="p-2.5 bg-white text-neutral-800">
                        <p className="text-[8px] font-medium leading-relaxed text-neutral-600">
                          &ldquo;{item.mockupQuote}&rdquo;
                        </p>
                      </div>

                      {/* Mockup Sub-Thumbnail Card */}
                      <div className="relative h-[48px] w-full rounded-md overflow-hidden bg-neutral-200">
                        <Image
                          src={item.previewImage}
                          alt="Detail preview"
                          fill
                          className="object-cover object-bottom opacity-90"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Orange Number (perfectly aligned with inactive row numbers) */}
                  <div className="lg:w-[8%] shrink-0">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#ff2a00] font-sans">
                      {item.id}
                    </span>
                  </div>

                  {/* Column 4: Description Text */}
                  <div className="lg:w-[34%] pr-4 sm:pr-8">
                    <p className="text-neutral-300 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Column 5: Orange Circular Action Button */}
                  <div className="lg:w-[8%] flex justify-end shrink-0">
                    <a
                      href="#contact"
                      aria-label={`Explore ${item.title}`}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ff2a00] hover:bg-[#e02600] text-white flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  </div>

                  {/* Mobile Preview Thumbnail Card */}
                  <div className="block lg:hidden mt-2 pt-2 border-t border-neutral-800">
                    <div className="relative h-44 w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
                      <Image
                        src={item.previewImage}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="text-xs font-bold uppercase">{item.mockupTitle}</div>
                        <p className="text-[10px] text-neutral-300 mt-1 line-clamp-2">
                          {item.mockupQuote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          {/* Inactive Row State */}
          return (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className="w-full border-b border-neutral-200/90 py-6 sm:py-7 md:py-8 cursor-pointer transition-colors duration-200 hover:bg-black/[0.03] group"
            >
              <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
                {/* Column 1: Title */}
                <div className="w-[60%] sm:w-[45%] lg:w-[28%] shrink-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 uppercase group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Column 2: Spacer matching the floating card width on desktop */}
                <div className="hidden lg:block lg:w-[22%] shrink-0" />

                {/* Column 3: Number (aligned in the exact same column as 02) */}
                <div className="w-[20%] sm:w-[15%] lg:w-[8%] shrink-0">
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-400 font-sans group-hover:text-neutral-700 transition-colors">
                    {item.id}
                  </span>
                </div>

                {/* Column 4: Empty space matching description on active row */}
                <div className="hidden lg:block lg:w-[34%]" />

                {/* Column 5: Right Arrow */}
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
