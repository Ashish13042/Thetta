import React from "react"
import Image from "next/image"

interface ThettaLogoProps {
  className?: string
  showText?: boolean
  useImage?: boolean
}

export function ThettaLogo({
  className = "w-8 h-8",
  showText = false,
  useImage = false,
}: ThettaLogoProps) {
  if (useImage) {
    return (
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-neutral-900 flex items-center justify-center p-1">
          <Image
            src="/thetta-logo.png"
            alt="Thetta Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        {showText && (
          <span className="text-xl font-bold tracking-tight text-neutral-900">
            Thetta.
          </span>
        )}
      </div>
    )
  }

  // Crisp, scalable cursive script theta (ϑ) SVG mark
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} text-neutral-950 transition-transform duration-300 group-hover:scale-105`}
      >
        <path
          d="M32 64C28 66 23 68 20 63C17 58 20 52 25 50C33 47 43 55 45 64C47 75 49 88 56 94C63 99 72 96 76 88C82 76 81 60 76 46C70 28 58 14 43 15C31 16 23 27 25 39C27 51 36 60 48 61C59 62 70 56 79 48"
          stroke="currentColor"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-neutral-900">
          Thetta.
        </span>
      )}
    </div>
  )
}
