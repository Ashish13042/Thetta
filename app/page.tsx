import { SiteHeader } from "@/src/components/layout/site-header"
import { HeroSection } from "@/src/components/shared/hero-section"
import { ClientLogos } from "@/src/components/shared/client-logos"
import { AgencySection } from "@/src/components/shared/agency-section"
import { TestimonialSection } from "@/src/components/shared/testimonial-section"
import { FooterSection } from "@/src/components/shared/footer-section"
import { ContactDrawer } from "@/src/components/shared/contact-drawer"

export default function Page() {
  return (
    <div className="min-h-screen bg-cream-grid text-[#0f0f0f] font-sans selection:bg-[#ff2a00] selection:text-white border-t-[3px] border-[#1b3d2f]">
      <SiteHeader />

      <HeroSection />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 mb-20 sm:mb-28 md:mb-36">
        <ClientLogos />
      </div>

      <AgencySection />
      <TestimonialSection />
      <FooterSection />

      <ContactDrawer />
    </div>
  )
}
