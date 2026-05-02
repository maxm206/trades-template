import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { ServiceCard } from "@/components/cards/ServiceCard"

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Everything we do."
          subtitle="Repair, install, and maintenance for HVAC systems across San Diego County. Same crew, same standard, every visit."
        />
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {siteConfig.services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </section>
  )
}
