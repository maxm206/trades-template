import { Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-dark text-white py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[760px] rounded-full bg-accent/15 blur-3xl"
      />
      <Container>
        <div className="text-center max-w-[760px] mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            Ready when you are
          </div>
          <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.95] text-balance">
            Ready to get comfortable?
          </h2>
          <p className="mt-5 text-lg md:text-xl text-white/75">
            Call us, or schedule online. Real reply within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center">
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 font-display font-extrabold text-2xl md:text-3xl tabular-nums text-white hover:text-accent transition-colors"
            >
              <Phone className="h-6 w-6 text-accent" aria-hidden />
              {siteConfig.phone}
            </a>
          </div>
          <div className="mt-6">
            <Button href="/contact#book" size="lg">
              Schedule Service →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
