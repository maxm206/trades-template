import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, Calendar, MessageCircle, Star, MapPin, Camera, Globe } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder"
import { BookingWidget } from "@/components/forms/BookingWidget"
import { GBPCard } from "@/components/sections/GBPCard"
import { ReviewCard } from "@/components/cards/ReviewCard"
import { reviews } from "@/data/reviews"

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything your site should do: online booking, AI receptionist, review generation, SEO pages, optimized Google Business Profile, real photos.",
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/\s+/g, "-")
}

function FeatureSection({
  eyebrow,
  title,
  body,
  price,
  iconName,
  children,
  invert = false,
}: {
  eyebrow: string
  title: string
  body: string
  price: string
  iconName: React.ReactNode
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <section className={invert ? "py-16 md:py-20 bg-dark text-white" : "py-16 md:py-20 bg-light"}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className={`font-mono text-[11px] uppercase tracking-[0.18em] ${invert ? "text-accent" : "text-accent-dark"}`}>
              {eyebrow}
            </div>
            <h2 className={`mt-3 font-display font-extrabold text-3xl md:text-4xl tracking-[-0.015em] leading-[1.05] ${invert ? "text-white" : "text-dark"}`}>
              {title}
            </h2>
            <p className={`mt-4 text-base md:text-lg leading-relaxed max-w-[560px] ${invert ? "text-white/75" : "text-slate-700"}`}>
              {body}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent/10 border border-accent/30 text-accent-dark px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em]">
              {iconName}
              {price}
            </div>
          </div>
          <div>{children}</div>
        </div>
      </Container>
    </section>
  )
}

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-hero-dark text-white pt-14 md:pt-20 pb-12">
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Features</div>
          <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95] max-w-[820px]">
            Everything your site should do.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed max-w-[640px]">
            This is the full Lead Engine tier with every add-on active. Use this page as a checklist for what your existing site is missing.
          </p>
        </Container>
      </section>

      {/* Online Booking */}
      <FeatureSection
        eyebrow="Online Booking"
        title="Customers schedule themselves. 24/7."
        body="An embedded calendar pulls live tech availability and lets customers book the slot that works for them. SMS + email confirmation, calendar invite, and the appointment lands directly on the dispatch board."
        price="Included in Lead Engine"
        iconName={<Calendar className="h-3 w-3" aria-hidden />}
      >
        <BookingWidget compact />
      </FeatureSection>

      {/* AI Receptionist */}
      <FeatureSection
        eyebrow="AI Receptionist"
        title="Never miss a call after 6pm."
        body="An AI agent answers calls outside business hours, books emergency appointments, captures lead info, and texts you a summary. The customer never hits voicemail. The lead never goes to your competitor."
        price="$149 / mo"
        iconName={<MessageCircle className="h-3 w-3" aria-hidden />}
        invert
      >
        <div className="rounded-2xl bg-white shadow-card-hover overflow-hidden border border-white/10">
          <div className="bg-dark text-white px-4 py-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" aria-hidden />
            <div>
              <div className="font-display font-bold text-sm">After-hours assistant</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/65">Powered by Rosie AI</div>
            </div>
          </div>
          <div className="p-4 space-y-3 bg-slate-50">
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-white border border-slate-200 px-4 py-2 text-sm text-dark max-w-[80%]">
                Hi, {siteConfig.businessName} here. How can I help?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="rounded-2xl rounded-br-md bg-primary text-white px-4 py-2 text-sm max-w-[80%]">
                Hi, our AC stopped working. Can someone come tonight?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-white border border-slate-200 px-4 py-2 text-sm text-dark max-w-[80%]">
                I&rsquo;ve booked a tech for tonight between 7-9pm. You&rsquo;ll get a confirmation text shortly.
              </div>
            </div>
          </div>
        </div>
      </FeatureSection>

      {/* Review Generation */}
      <FeatureSection
        eyebrow="Review Generation"
        title="Reviews on autopilot."
        body="Automatic SMS + email request after every completed job. Happy customers get routed to Google. Less-than-thrilled customers get routed to private feedback so you can fix it before it lands publicly."
        price="$50 / mo"
        iconName={<Star className="h-3 w-3" aria-hidden />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviews.slice(0, 2).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </FeatureSection>

      {/* SEO Pages */}
      <FeatureSection
        eyebrow="Service Area SEO Pages"
        title="One page per city, ranked for the searches that matter."
        body="Dedicated pages for every city in your service area. Each one targets the city + service combo searches your customers actually type. Real content, not duplicated boilerplate."
        price="$1,500 / 5 pages — $3,500 / 15 pages"
        iconName={<MapPin className="h-3 w-3" aria-hidden />}
        invert
      >
        <div className="grid grid-cols-2 gap-2.5">
          {siteConfig.serviceAreas.map((c) => (
            <Link
              key={c}
              href={`/areas/${slugify(c)}`}
              className="block rounded-lg bg-white/5 border border-white/15 hover:bg-white/10 hover:border-white/30 transition-colors px-4 py-3"
            >
              <div className="font-display font-bold text-white text-sm">AC Repair in {c}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/55 mt-0.5">/areas/{slugify(c)}</div>
            </Link>
          ))}
        </div>
      </FeatureSection>

      {/* GBP */}
      <GBPCard />
      <Container>
        <div className="-mt-6 text-center pb-12">
          <div className="inline-flex items-center gap-2 rounded-lg bg-accent/10 border border-accent/30 text-accent-dark px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em]">
            <Globe className="h-3 w-3" aria-hidden />
            $750
          </div>
        </div>
      </Container>

      {/* Real photos */}
      <FeatureSection
        eyebrow="Real Photo Shoot Day"
        title="Real techs. Real trucks. Real jobs."
        body="A half-day on-site shoot. 30 to 50 edited photos of your team, equipment, and work. Stock photos kill conversion. Real photos build trust faster than any ad budget."
        price="$1,200"
        iconName={<Camera className="h-3 w-3" aria-hidden />}
      >
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-2">Stock</div>
            <PhotoPlaceholder description="Generic stock" aspect="square" tone="neutral" />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-2">Real</div>
            <PhotoPlaceholder description="Your tech, your truck" aspect="square" tone="primary" />
          </div>
        </div>
      </FeatureSection>

      {/* Final CTA → tradesadvisory.com/start */}
      <section className="bg-hero-dark text-white py-20">
        <Container size="narrow">
          <div className="text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Want this for your site?</div>
            <h2 className="mt-3 font-display font-extrabold text-4xl md:text-5xl tracking-[-0.02em] leading-[0.95]">
              Let&rsquo;s talk.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/75">
              We build the sites + every feature on this page. Start with a free audit of your current setup.
            </p>
            <div className="mt-7">
              <Button href="https://tradesadvisory.com/start" external size="lg">
                Get your free audit →
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
