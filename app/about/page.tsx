import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Icon } from "@/components/ui/Icon"
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder"
import { FinalCTA } from "@/components/sections/FinalCTA"

export const metadata: Metadata = {
  title: "About",
  description: `Meet the team behind ${siteConfig.businessName}. Locally owned, licensed since ${siteConfig.founded}, serving ${siteConfig.serviceArea}.`,
}

const VALUES = [
  {
    icon: "phone",
    title: "Real people answer",
    body: "First ring during business hours. Live dispatch after hours. No phone tree.",
  },
  {
    icon: "shield",
    title: "Licensed and insured",
    body: `${siteConfig.license}. Workers comp + general liability on every truck.`,
  },
  {
    icon: "check",
    title: "Honest math, every time",
    body: "We tell you when a $20 part fixes it instead of a new system. That earns long customers.",
  },
  {
    icon: "wrench",
    title: "Right the first time",
    body: "Most repairs done in one visit. Most installs done in one day. Done correctly.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-hero-dark text-white pt-14 md:pt-20 pb-14 md:pb-16">
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">About</div>
          <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95] max-w-[820px]">
            Meet the team behind {siteConfig.businessName}.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed max-w-[640px]">
            Locally owned. Licensed since {siteConfig.founded}. Five trucks, one crew, one standard.
          </p>
        </Container>
      </section>

      {/* Owner story */}
      <section className="py-14 md:py-20 bg-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start">
            <PhotoPlaceholder
              description={`${siteConfig.ownerName} portrait`}
              aspect="portrait"
              tone="primary"
              className="w-full max-w-[360px] lg:w-80"
            />
            <div className="text-base md:text-lg text-slate-700 leading-relaxed space-y-5 max-w-[680px]">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dark">
                Owner story
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-dark tracking-[-0.015em] leading-[1.05]">
                {siteConfig.ownerName} grew the company from one truck.
              </h2>
              <p>
                {siteConfig.ownerName} started installing AC units the summer he turned 19. He worked his way up from helper to lead tech to operations manager at a {siteConfig.serviceArea} HVAC company before he started {siteConfig.businessName} in {siteConfig.founded}. The first year was one truck, one customer at a time, and a phone he answered himself at 9pm.
              </p>
              <p>
                Today the company runs five trucks and serves {siteConfig.serviceArea}, but the standard hasn&rsquo;t changed. We answer the phone live during business hours. We give written estimates before any work. We tell you the truth about whether a system needs repair or replacement, even when the answer is the cheaper one for you. That&rsquo;s how we&rsquo;ve grown — by treating each customer like they&rsquo;re our only one.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dark">Our values</div>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-dark tracking-[-0.015em] leading-[1.05] max-w-[640px]">
            What we won&rsquo;t compromise on.
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl bg-light border border-slate-200 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={v.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display font-bold text-lg text-dark">{v.title}</h3>
                <p className="mt-1 text-sm md:text-base text-slate-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team gallery — placeholders */}
      <section className="py-14 md:py-20 bg-light">
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dark">The crew</div>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-dark tracking-[-0.015em] leading-[1.05]">
            Real photos from a half-day on-site shoot.
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <PhotoPlaceholder description="Lead tech" aspect="portrait" tone="primary" />
            <PhotoPlaceholder description="Truck #3" aspect="portrait" tone="accent" />
            <PhotoPlaceholder description="Job site install" aspect="portrait" tone="primary" />
            <PhotoPlaceholder description="Team huddle" aspect="portrait" tone="accent" />
          </div>
        </Container>
      </section>

      {/* Stock vs real */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dark">Real vs stock</div>
          <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-dark tracking-[-0.015em] leading-[1.05] max-w-[640px]">
            Stock photos kill conversion. Real photos build trust.
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-2">
                Stock photo
              </div>
              <PhotoPlaceholder
                description="Generic smiling tech, watermark visible"
                aspect="landscape"
                tone="neutral"
              />
              <p className="mt-3 text-sm text-slate-600">
                Looks like every other HVAC site. Buyers can tell.
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-2">
                Real photo
              </div>
              <PhotoPlaceholder
                description="Tech standing next to actual truck on a real driveway"
                aspect="landscape"
                tone="primary"
              />
              <p className="mt-3 text-sm text-slate-600">
                Specific. Verifiable. Local. Converts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* License + cert */}
      <section className="py-14 md:py-20 bg-light">
        <Container size="narrow">
          <div className="rounded-xl bg-white border border-slate-200 shadow-card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-2">
                License &amp; insurance
              </div>
              <div className="font-display font-extrabold text-xl md:text-2xl text-dark">
                {siteConfig.license}
              </div>
              <div className="text-sm text-slate-600 mt-1">
                Workers comp + general liability on every job.
              </div>
            </div>
            <Button href="/contact" size="md">Get in touch →</Button>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
