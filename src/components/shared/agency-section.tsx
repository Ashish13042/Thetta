import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface PortfolioCard {
  src: string
  alt: string
  bg?: string
  size: "sm" | "lg"
}

const PORTFOLIO_CARDS: PortfolioCard[] = [
  {
    src: "/portfolio-box.jpg",
    alt: "Nihoma Packaging Design",
    size: "sm",
  },
  {
    src: "/portfolio-cards.jpg",
    alt: "Brand Stationery & Business Cards",
    bg: "#ff5500",
    size: "lg",
  },
  {
    src: "/portfolio-keytag.jpg",
    alt: "Nihoma Keychain Tag",
    bg: "#ff5500",
    size: "lg",
  },
  {
    src: "/portfolio-mug.jpg",
    alt: "Ceramic Merchandise Mug",
    bg: "#f5f5f5",
    size: "sm",
  },
]

const SIZE_CLASSES = {
  sm: "w-[240px] sm:w-[280px] lg:w-[320px]",
  lg: "w-[280px] sm:w-[340px] lg:w-[400px]",
}

export function AgencySection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#050505] text-white pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/agency-dark-bg.jpg"
          alt="Dark fluid silk waves texture"
          fill
          className="object-cover object-center opacity-70 pointer-events-none select-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#050505] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        {/* Section tag */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#ff2a00] uppercase font-sans mb-6 sm:mb-8">
          <span>//</span>
          <span>THE AGENCY</span>
        </div>

        {/* Vision statement */}
        <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-semibold text-white tracking-[-0.03em] leading-[1.08] uppercase max-w-6xl">
          THETTA IS A VISIONARY DESIGN AGENCY
          <br className="hidden md:inline" /> THAT BREATHES LIFE INTO IDEAS AND
          <br className="hidden md:inline" /> TRANSFORMS THEM INTO EXTRAORDINARY
          <br className="hidden md:inline" /> REALITIES.
        </h2>

        {/* CTA + description row */}
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-6xl">
          {/* Red ring CTA */}
          <div className="flex items-center gap-4 group cursor-pointer w-fit">
            <div className="p-1 rounded-full border border-neutral-700/80 group-hover:border-[#ff2a00] transition-colors">
              <button
                type="button"
                aria-label="Let's talk now"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#ff2a00] hover:bg-[#e02600] text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
            <span className="text-[#ff2a00] font-bold text-xs sm:text-sm tracking-wider uppercase select-none">
              LET&apos;S TALK NOW
            </span>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-md">
            Thetta is a visionary design agency that breathes life into ideas
            and transforms them into extraordinary realities.
          </p>
        </div>
      </div>

      {/* Portfolio carousel */}
      <div className="relative z-10 mt-16 sm:mt-20 lg:mt-28 w-full">
        <div className="flex items-center justify-center gap-5 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar px-6 sm:px-10 py-4">
          {PORTFOLIO_CARDS.map(({ src, alt, bg, size }) => (
            <div
              key={src}
              style={bg ? { backgroundColor: bg } : undefined}
              className={`${SIZE_CLASSES[size]} h-[340px] sm:h-[400px] lg:h-[450px] flex-shrink-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative shadow-2xl group cursor-pointer transition-transform duration-500 hover:-translate-y-2`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center px-4">
          <button
            type="button"
            className="px-7 py-3 rounded-full border border-neutral-700/80 bg-neutral-950/70 hover:bg-neutral-900 hover:border-neutral-500 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 shadow-xl backdrop-blur-md cursor-pointer flex items-center gap-2 group"
          >
            <span>See our portfolio</span>
          </button>
        </div>
      </div>
    </section>
  )
}
