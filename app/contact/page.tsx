import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Clock } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { ContactForm } from "@/components/forms/ContactForm"
import { BookingWidget } from "@/components/forms/BookingWidget"

export const metadata: Metadata = {
  title: "Contact",
  description: `Call, email, or fill out the form. ${siteConfig.businessName} responds within 24 hours.`,
}

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden text-white pt-14 md:pt-20 pb-12">
        <Image
          src="/photos/thermostat.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] -z-20"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/40"
        />
        <Container>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Contact</div>
          <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95]">
            Let&rsquo;s get you comfortable.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed max-w-[640px]">
            Call, email, or fill out the form. We respond within 24 hours.
          </p>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12">
            {/* Left — info */}
            <div className="card-light p-6 md:p-7 space-y-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-2">Phone</div>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="font-display font-extrabold text-3xl md:text-4xl text-dark hover:text-accent-dark tabular-nums transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <div className="mt-1 text-sm text-slate-500">{siteConfig.hours.emergency}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-2">Email</div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-display font-bold text-lg md:text-xl text-dark hover:text-accent-dark transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-2">Address</div>
                  <div className="flex items-start gap-2 text-sm text-dark">
                    <MapPin className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" aria-hidden />
                    <span>{siteConfig.address}</span>
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-2">Hours</div>
                  <div className="flex items-start gap-2 text-sm text-dark">
                    <Clock className="h-4 w-4 text-slate-400 mt-0.5 shrink-0" aria-hidden />
                    <div>
                      <div>Mon–Fri, {siteConfig.hours.weekdays}</div>
                      <div className="text-slate-500">Sat–Sun, {siteConfig.hours.weekend.toLowerCase()}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <div className="text-sm text-slate-600">Or just book a call directly</div>
                <a
                  href={siteConfig.integrations.calendly.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-700 hover:border-accent hover:text-accent-dark transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Pick a time on the calendar →
                </a>
              </div>
            </div>

            {/* Right — form */}
            <ContactForm />
          </div>
        </Container>
      </section>

      <section id="book" className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-[760px] mx-auto text-center mb-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dark">Online booking</div>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-dark tracking-[-0.015em] leading-[1.05]">
              Pick a time. Confirm. Done.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Same dispatch system our techs use. SMS confirmation, calendar invite, and a real human on the other end.
            </p>
          </div>
          <div className="max-w-[640px] mx-auto">
            <BookingWidget />
          </div>
        </Container>
      </section>
    </>
  )
}
