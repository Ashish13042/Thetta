interface ClientLogo {
  name: string
  tagline: string
  icon: React.ReactNode
  colSpan?: string
}

import React from "react"

const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "PAPERZ",
    tagline: "Leading Paper Company",
    icon: (
      <div className="w-6 h-7 bg-neutral-900 rounded-sm relative overflow-hidden flex items-end justify-start p-1">
        <div className="w-2.5 h-2.5 bg-white absolute top-0 right-0" />
      </div>
    ),
  },
  {
    name: "Dorfus",
    tagline: "",
    icon: null,
  },
  {
    name: "Martino",
    tagline: "Colors of your life",
    icon: (
      <div className="flex items-end gap-1 h-6">
        <div className="w-1.5 h-6 bg-neutral-900 rounded-full" />
        <div className="w-1.5 h-4 bg-neutral-900 rounded-full" />
        <div className="w-1.5 h-5 bg-neutral-900 rounded-full" />
      </div>
    ),
  },
  {
    name: "square",
    tagline: "Real Estate Solution",
    icon: (
      <div className="w-6 h-6 border-[3.5px] border-neutral-900 flex items-center justify-center">
        <div className="w-2 h-2 bg-neutral-900" />
      </div>
    ),
  },
  {
    name: "Gobona",
    tagline: "Your Trusted Carrier",
    colSpan: "col-span-2 sm:col-span-1",
    icon: (
      <div className="flex flex-col gap-0.5 -rotate-12">
        <div className="w-5 h-1.5 bg-neutral-900 rounded-sm" />
        <div className="w-6 h-1.5 bg-neutral-900 rounded-sm ml-1" />
      </div>
    ),
  },
]

export function ClientLogos() {
  return (
    <div className="mt-14 sm:mt-18 md:mt-22 pt-4 pb-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-items-center gap-10 md:gap-14 opacity-90">
      {CLIENT_LOGOS.map(({ name, tagline, icon, colSpan }) => {
        // Dorfus has a special serif-only display
        if (name === "Dorfus") {
          return (
            <div key={name} className="cursor-pointer hover:opacity-100 transition-opacity">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
                {name}
              </span>
            </div>
          )
        }

        return (
          <div
            key={name}
            className={`flex items-center gap-2.5 group cursor-pointer hover:opacity-100 transition-opacity ${colSpan ?? ""}`}
          >
            {icon}
            <div>
              <div className="text-base font-bold tracking-tight text-neutral-900 leading-none">
                {name}
              </div>
              {tagline && (
                <div className="text-[9px] text-neutral-400 tracking-tight font-medium mt-0.5">
                  {tagline}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
