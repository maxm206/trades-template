import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/config/site"
import { getServiceContent } from "@/data/services"
import { getFaqsForService } from "@/data/faqs"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Icon } from "@/components/ui/Icon"
import { FAQAccordion } from "@/components/ui/FAQAccordion"
import { FAQSchema } from "@/components/seo/FAQSchema"
import { FinalCTA } from "@/components/sections/FinalCTA"

// Map each service slug to its hero background photo.
const SERVICE_HERO_PHOTO: Record<string, string> = {
  "ac-repair": "/photos/fix.condenser.jpg",
  "ac-installation": "/photos/condensers.jpg",
  "heating-repair": "/photos/hvac.tech.jpg",
  "heating-installation": "/photos/hvac.tech.jpg",
  "mini-splits": "/photos/minisplit.room.jpg",
  "maintenance": "/photos/condenser.tech.jpg",
}

// Per-slug object-position override so the subject of the photo lands in
// the visible hero area. Defaults to object-center.
const SERVICE_HERO_POSITION: Record<string, string> = {
  "mini-splits": "object-[70%_30%]",
}

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const c = getServiceContent(params.slug)
  if (!c) return {}
  return {
    title: c.title,
    description: c.metaDescription,
  }
}

export default function ServicePage({ params }: Props) {
  const c = getServiceContent(params.slug)
  if (!c) notFound()
  const service = siteConfig.services.find((s) => s.slug === params.slug)!
  const faqs = getFaqsForService(params.slug)
  const others = siteConfig.services.filter((s) => s.slug !== params.slug).slice(0, 3)

  return (
    <>
      <FAQSchema items={faqs} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden text-white pt-14 md:pt-20 pb-16">
        <Image
          src={SERVICE_HERO_PHOTO[c.slug] || "/photos/hero.team.jpg"}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover -z-20 ${SERVICE_HERO_POSITION[c.slug] || "object-center"}`}
        />
        {/* Strong dark base so text stays readable on bright photos. */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-dark/55" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-dark/95 via-dark/85 to-dark/65"
        />
        <Container>
          <Link href="/services" className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55 hover:text-accent transition-colors mb-5">
            ← All services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-start">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent shrink-0">
              <Icon name={service.icon} className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
                {c.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed max-w-[640px]">{c.tagline}</p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button href="/contact#book" size="lg">Schedule {c.title} →</Button>
                <Button href={`tel:${siteConfig.phoneClean}`} variant="ghost" size="lg" external={false}>
                  <Phone className="h-4 w-4 mr-2" aria-hidden /> {siteConfig.phone}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Body + sidebar */}
      <section className="py-14 md:py-20 bg-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14">
            <article className="prose-custom text-base md:text-lg text-slate-700 leading-relaxed space-y-5 max-w-[680px]">
              {c.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="pt-4">
                <h2 className="font-display font-extrabold text-2xl text-dark">What&rsquo;s included</h2>
                <ul className="mt-3 space-y-2">
                  {c.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent-dark mt-0.5 shrink-0" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4">
                <h2 className="font-display font-extrabold text-2xl text-dark">What to expect</h2>
                <ol className="mt-3 space-y-2 list-decimal list-inside">
                  {c.whatToExpect.map((step, i) => (
                    <li key={i} className="text-slate-700">{step}</li>
                  ))}
                </ol>
              </div>
            </article>

            <aside className="lg:sticky lg:top-24 self-start">
              <div className="rounded-xl bg-white border border-slate-200 shadow-card p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-2">
                  Schedule {c.title}
                </div>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="block font-display font-extrabold text-2xl md:text-3xl text-dark hover:text-accent-dark transition-colors tabular-nums"
                >
                  {siteConfig.phone}
                </a>
                <div className="mt-1 text-xs text-slate-500">Live answer Mon–Fri, {siteConfig.hours.weekdays}</div>
                <div className="mt-5">
                  <Button href="/contact#book" className="w-full" size="md">Book online →</Button>
                </div>
                <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  24/7 emergency line
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <Container size="narrow">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dark mb-3">FAQ</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-dark tracking-[-0.015em]">
              Common questions about {c.title.toLowerCase()}.
            </h2>
            <div className="mt-8">
              <FAQAccordion items={faqs} />
            </div>
          </Container>
        </section>
      )}

      {/* Related */}
      <section className="py-14 md:py-20 bg-light">
        <Container>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-dark">Other services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display font-bold text-lg text-dark">{s.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.description}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-display font-bold text-sm text-primary">
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
