import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone, MapPin, ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/site"
import { getCityContent, serviceAreaContent } from "@/data/serviceAreaContent"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Icon } from "@/components/ui/Icon"
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"
import { FinalCTA } from "@/components/sections/FinalCTA"

type Props = { params: { city: string } }

export function generateStaticParams() {
  return serviceAreaContent.map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const c = getCityContent(params.city)
  if (!c) return {}
  return {
    title: `HVAC Service in ${c.city}`,
    description: c.metaDescription,
  }
}

export default function CityPage({ params }: Props) {
  const c = getCityContent(params.city)
  if (!c) notFound()

  return (
    <>
      <LocalBusinessSchema city={c.city} />

      {/* Hero */}
      <section className="bg-hero-dark text-white pt-14 md:pt-20 pb-14 md:pb-16">
        <Container>
          <Link href="/" className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55 hover:text-accent transition-colors mb-5">
            ← All areas
          </Link>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {c.city}, CA · {siteConfig.serviceArea}
          </div>
          <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95] max-w-[820px]">
            HVAC service in {c.city}.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed max-w-[640px]">
            {siteConfig.businessName} services every street in {c.city}. Same trucks, same standard, every visit.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Button href="/contact#book" size="lg">Schedule Service →</Button>
            <Button href={`tel:${siteConfig.phoneClean}`} variant="ghost" size="lg" external={false}>
              <Phone className="h-4 w-4 mr-2" aria-hidden />
              {siteConfig.phone}
            </Button>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20 bg-light">
        <Container size="narrow">
          <div className="text-base md:text-lg text-slate-700 leading-relaxed space-y-5">
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Services in this city */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dark">In {c.city}</div>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-dark tracking-[-0.015em] leading-[1.05] max-w-[640px]">
            Services available in {c.city}.
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group card-light hover:-translate-y-0.5 hover:border-primary p-5"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display font-bold text-base text-dark">
                  {s.name} in {c.city}
                </div>
                <div className="mt-1 text-sm text-slate-600">{s.description}</div>
                <span className="mt-3 inline-flex items-center gap-1 font-display font-bold text-sm text-primary">
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Other cities */}
      <section className="py-12 md:py-16 bg-light">
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dark">Also serving</div>
          <h2 className="mt-3 font-display font-extrabold text-2xl md:text-3xl text-dark tracking-[-0.015em] leading-[1.05]">
            Nearby cities in {siteConfig.serviceArea}.
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {serviceAreaContent
              .filter((other) => other.slug !== c.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/areas/${other.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-accent/10 px-4 py-2.5 font-display font-bold text-sm text-dark hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 text-slate-400" aria-hidden />
                  {other.city}
                </Link>
              ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
