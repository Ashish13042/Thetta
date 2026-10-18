"use client"

import React, { useState, useEffect } from "react"
import { X, ArrowRight, CheckCircle2, Mail, ExternalLink } from "lucide-react"

// Custom window event helper to trigger the drawer from any component
export function openContactDrawer() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("thetta:open-contact-drawer"))
  }
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const PROJECT_TYPES = [
  "E-Commerce Store",
  "Web Platform / App",
  "Design System / UI",
  "Full-Stack Engineering",
]

export function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [selectedType, setSelectedType] = useState("E-Commerce Store")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Listen for global open event
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true)
      setIsSubmitted(false)
    }

    window.addEventListener("thetta:open-contact-drawer", handleOpen)
    return () => {
      window.removeEventListener("thetta:open-contact-drawer", handleOpen)
    }
  }, [])

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false)
      }
      window.addEventListener("keydown", handleKeyDown)
      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleKeyDown)
      }
    } else {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return

    setIsSubmitting(true)
    // Lightweight local submission feedback
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Dimmed Backdrop */}
      <div
        onClick={closeDrawer}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/65 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-over Drawer Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Let's Talk - Contact Thetta"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[480px] bg-[#0c0c0c] text-white border-l border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col justify-between transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF3214] animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF3214] uppercase">
              // LET&apos;S TALK
            </span>
          </div>

          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close contact drawer"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6">
          {!isSubmitted ? (
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase leading-[1.1]">
                START A PROJECT <br />
                WITH THETTA.
              </h2>

              <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                Leave your email below. We review inquiries personally and get back within 24 hours with project scope and availability.
              </p>

              {/* Inquiry Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Project Type Pills */}
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2.5">
                    What are you looking to build?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                          selectedType === type
                            ? "bg-[#FF3214] text-white border border-[#FF3214] font-semibold shadow-sm"
                            : "bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="drawer-email"
                    className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2"
                  >
                    Your Email Address <span className="text-[#FF3214]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="drawer-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="founder@yourbrand.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 focus:border-[#FF3214] focus:ring-1 focus:ring-[#FF3214] text-white placeholder-neutral-500 text-sm font-sans outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Optional Message / Brief */}
                <div>
                  <label
                    htmlFor="drawer-message"
                    className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2"
                  >
                    Project Details / Vision (Optional)
                  </label>
                  <textarea
                    id="drawer-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your brand, timeline, or current website..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#FF3214] focus:ring-1 focus:ring-[#FF3214] text-white placeholder-neutral-500 text-sm font-sans outline-none resize-none transition-colors"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#FF3214] hover:bg-[#e02600] disabled:opacity-70 text-white font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,50,20,0.35)] transition-all duration-300 active:scale-[0.99] cursor-pointer"
                >
                  <span>{isSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          ) : (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                INQUIRY RECEIVED
              </h3>
              <p className="mt-3 text-neutral-300 text-xs sm:text-sm font-light max-w-xs leading-relaxed">
                Thank you. We have received your inquiry for <strong>{selectedType}</strong>. Our team will review your project and get back to <strong>{email}</strong> within 24 hours.
              </p>
              <button
                type="button"
                onClick={closeDrawer}
                className="mt-8 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                CLOSE WINDOW
              </button>
            </div>
          )}
        </div>

        {/* Drawer Black Footer with Direct Contacts & Socials */}
        <div className="bg-[#050505] border-t border-white/10 p-6 sm:p-8">
          <div className="flex flex-col gap-5">
            {/* Direct Email */}
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                DIRECT INQUIRIES
              </span>
              <a
                href="mailto:ashish@thetta.tech"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-[#FF3214] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#FF3214]" />
                <span>ashish@thetta.tech</span>
                <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-[#FF3214] transition-colors" />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                OFFICIAL CHANNELS
              </span>

              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a
                  href="https://instagram.com/thetta.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors group"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FF3214] transition-colors" />
                  <span className="font-mono text-[11px]">Instagram</span>
                </a>

                <span className="text-neutral-700">·</span>

                {/* Twitter / X */}
                <a
                  href="https://x.com/Ashish_rawat10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors group"
                >
                  <TwitterIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FF3214] transition-colors" />
                  <span className="font-mono text-[11px]">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
