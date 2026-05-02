import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder"

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
          <PhotoPlaceholder
            description={`${siteConfig.ownerName} portrait`}
            aspect="square"
            className="w-full max-w-[320px] md:w-72"
            tone="primary"
          />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-dark">
              About the owner
            </div>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-dark tracking-[-0.015em] leading-[1.05]">
              {siteConfig.ownerName} grew the company from one truck.
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed max-w-[560px]">
              {siteConfig.ownerName} started installing AC units the summer he turned 19. {siteConfig.businessName} now runs five trucks and serves {siteConfig.serviceArea}. We still answer the phone the same way: a real person, on the first ring.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-display font-bold text-base text-primary hover:text-accent-dark transition-colors"
            >
              Read the full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
