import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { ServiceCard } from "@/components/cards/ServiceCard"
import { FinalCTA } from "@/components/sections/FinalCTA"

export const metadata: Metadata = {
  title: "Services",
  description: `Repair, install, and maintenance for HVAC systems across ${siteConfig.serviceArea}.`,
}

export default function ServicesIndex() {
  return (
    <>
      <section className="bg-hero-dark text-white pt-16 md:pt-24 pb-20">
        <Container>
          <div className="max-w-[760px]">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Services</div>
            <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
              Everything we do.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed">
              Six service lines, one crew, one standard. Click any service for what we cover, what it costs, and what to expect.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-20 bg-light">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {siteConfig.services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  )
}
