import { Hero } from "@/components/sections/Hero"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { ReviewsSection } from "@/components/sections/ReviewsSection"
import { GBPCard } from "@/components/sections/GBPCard"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <ReviewsSection />
      <GBPCard />
      <AboutPreview />
      <ServiceAreasSection />
      <FinalCTA />
    </>
  )
}
