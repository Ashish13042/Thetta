import { SiteHeader } from "@/src/components/layout/site-header"
import { HeroSection } from "@/src/components/shared/hero-section"
import { ClientLogos } from "@/src/components/shared/client-logos"
import { ProjectsSection } from "@/src/components/shared/projects-section"
import { AgencySection } from "@/src/components/shared/agency-section"
import { ServicesSection } from "@/src/components/shared/services-section"
import { TestimonialSection } from "@/src/components/shared/testimonial-section"
import { FooterSection } from "@/src/components/shared/footer-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-cream-grid text-[#0f0f0f] font-sans selection:bg-[#ff2a00] selection:text-white">
      <SiteHeader />

      <HeroSection />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16">
        <ClientLogos />
        <ProjectsSection />
      </div>

      <AgencySection />
      <ServicesSection />
      <TestimonialSection />
      <FooterSection />
    </div>
  )
}
