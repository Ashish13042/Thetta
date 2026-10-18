import React from "react"

export function ClientLogos() {
  return (
    <div className="mt-14 sm:mt-18 md:mt-24 pt-4 pb-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
        {/* LEFT SIDE: CLIENT BRANDS */}
        <div className="lg:pr-8">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#ff2a00] uppercase font-sans mb-4">
            <span>//</span>
            <span>CLIENT BRANDS</span>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-2">
            {/* 1. Meeram */}
            <a
              href="https://meeramfragrances.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Meeram Fragrances"
              className="flex items-center gap-2.5 group cursor-pointer hover:opacity-100 transition-opacity flex-1 min-w-[130px]"
            >
              <div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center text-white font-serif font-bold text-sm tracking-tighter shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                M
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-[15px] font-bold tracking-tight text-neutral-900 leading-tight truncate group-hover:text-[#ff2a00] transition-colors">
                  MEERAM
                </div>
                <div className="text-[10px] text-neutral-500 tracking-tight font-medium mt-0.5 truncate">
                  Haute Parfumerie
                </div>
              </div>
            </a>

            {/* Separator Line */}
            <div className="w-[1px] h-7 sm:h-8 bg-neutral-300/80 shrink-0 hidden sm:block mx-2" />

            {/* 2. Drip Studios */}
            <a
              href="https://dripdrip.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Drip Studios"
              className="flex items-center gap-2.5 group cursor-pointer hover:opacity-100 transition-opacity flex-1 min-w-[130px]"
            >
              <div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-[15px] font-bold tracking-tight text-neutral-900 leading-tight truncate group-hover:text-[#ff2a00] transition-colors">
                  DRIP STUDIOS
                </div>
                <div className="text-[10px] text-neutral-500 tracking-tight font-medium mt-0.5 truncate">
                  Streetwear &amp; Apparel
                </div>
              </div>
            </a>

            {/* Separator Line */}
            <div className="w-[1px] h-7 sm:h-8 bg-neutral-300/80 shrink-0 hidden sm:block mx-2" />

            {/* 3. My Otaku World */}
            <a
              href="https://myotakuworld.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My Otaku World"
              className="flex items-center gap-2.5 group cursor-pointer hover:opacity-100 transition-opacity flex-1 min-w-[130px]"
            >
              <div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-[15px] font-bold tracking-tight text-neutral-900 leading-tight truncate group-hover:text-[#ff2a00] transition-colors">
                  MY OTAKU WORLD
                </div>
                <div className="text-[10px] text-neutral-500 tracking-tight font-medium mt-0.5 truncate">
                  Anime &amp; Media Portal
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: PLATFORMS & ARCHITECTURE */}
        <div className="lg:pl-8 lg:border-l lg:border-neutral-300/80">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#ff2a00] uppercase font-sans mb-4">
            <span>//</span>
            <span>PLATFORMS &amp; ARCHITECTURE</span>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-2">
            {/* 1. Shopify */}
            <a
              href="https://www.shopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shopify E-Commerce"
              className="flex items-center gap-2.5 group cursor-pointer hover:opacity-100 transition-opacity flex-1 min-w-[130px]"
            >
              <svg viewBox="0 0 24 28" className="w-5 h-6 text-neutral-900 shrink-0 fill-current group-hover:scale-105 transition-transform" aria-hidden="true">
                <path d="M19.9 5.3c-.05-.03-.1-.04-.15-.04l-2.8-.2c-.05-.4-1.2-4.1-3.6-4.5-.4-.1-.8-.1-1.3 0-1.8.4-3.1 2.3-3.7 4.3l-2.8.2c-.2 0-.3.1-.4.2l-4.5 13.8c-.1.3 0 .6.3.7l13.5 7.1c.2.1.4.1.6 0l8.7-4.6c.2-.1.3-.3.3-.6l-3.9-16.1c-.05-.2-.15-.35-.35-.4zm-5.7-.3c.4-1.6 1.4-3.1 2.7-3.4 1 .2 1.5 2 1.6 3.4l-4.3.01v-.01zm-3.6 1.7c.3-1.1.9-2.1 1.7-2.9l-1.7 1.8v1.1zm2.3 9.4c0-.2.1-.4.2-.6l2.1-1.8c.8-.7 1.2-1.6 1.2-2.6 0-2.3-1.7-3.5-3.8-3.5-2.5 0-3.9 1.6-4.1 3.5l2.4.2c.1-.9.6-1.5 1.5-1.5.7 0 1.2.4 1.2 1.1 0 .5-.3.9-.8 1.3l-2.2 1.8c-.8.7-1.3 1.7-1.3 2.9v.3h3.6v-1.1z" />
              </svg>
              <div className="min-w-0">
                <div className="text-sm sm:text-[15px] font-bold tracking-tight text-neutral-900 leading-tight truncate group-hover:text-[#ff2a00] transition-colors">
                  Shopify
                </div>
                <div className="text-[10px] text-neutral-500 tracking-tight font-medium mt-0.5 truncate">
                  Enterprise &amp; Plus
                </div>
              </div>
            </a>

            {/* Separator Line */}
            <div className="w-[1px] h-7 sm:h-8 bg-neutral-300/80 shrink-0 hidden sm:block mx-2" />

            {/* 2. Prebit */}
            <a
              href="https://prebit.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prebit AI Commerce"
              className="flex items-center gap-2.5 group cursor-pointer hover:opacity-100 transition-opacity flex-1 min-w-[130px]"
            >
              <svg viewBox="0 0 512 512" className="w-5 h-5 text-neutral-900 shrink-0 fill-current group-hover:scale-105 transition-transform" aria-hidden="true">
                <path d="M208 32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 140.9 122-70.4c15.3-8.8 34.9-3.6 43.7 11.7l16 27.7c8.8 15.3 3.6 34.9-11.7 43.7L352 256l122 70.4c15.3 8.8 20.6 28.4 11.7 43.7l-16 27.7c-8.8 15.3-28.4 20.6-43.7 11.7L304 339.1 304 480c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-140.9L86 409.6c-15.3 8.8-34.9 3.6-43.7-11.7l-16-27.7c-8.8-15.3-3.6-34.9 11.7-43.7L160 256 38 185.6c-15.3-8.8-20.5-28.4-11.7-43.7l16-27.7C51.1 98.8 70.7 93.6 86 102.4l122 70.4L208 32z" />
              </svg>
              <div className="min-w-0">
                <div className="text-sm sm:text-[15px] font-bold tracking-tight text-neutral-900 leading-tight truncate group-hover:text-[#ff2a00] transition-colors">
                  Prebit
                </div>
                <div className="text-[10px] text-neutral-500 tracking-tight font-medium mt-0.5 truncate">
                  AI Commerce Platform
                </div>
              </div>
            </a>

            {/* Separator Line */}
            <div className="w-[1px] h-7 sm:h-8 bg-neutral-300/80 shrink-0 hidden sm:block mx-2" />

            {/* 3. WooCommerce */}
            <a
              href="https://woocommerce.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WooCommerce"
              className="flex items-center gap-2.5 group cursor-pointer hover:opacity-100 transition-opacity flex-1 min-w-[130px]"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-5 text-neutral-900 shrink-0 fill-current group-hover:scale-105 transition-transform" aria-hidden="true">
                <path d="M20.25 3H3.75C2.23 3 1 4.23 1 5.75v8.5C1 15.77 2.23 17 3.75 17h2.5v3.25l3.75-3.25h10.25c1.52 0 2.75-1.23 2.75-2.75v-8.5C23 4.23 21.77 3 20.25 3zm-13.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.25 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5.25 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
              <div className="min-w-0">
                <div className="text-sm sm:text-[15px] font-bold tracking-tight text-neutral-900 leading-tight truncate group-hover:text-[#ff2a00] transition-colors">
                  WooCommerce
                </div>
                <div className="text-[10px] text-neutral-500 tracking-tight font-medium mt-0.5 truncate">
                  Open-Source Commerce
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
