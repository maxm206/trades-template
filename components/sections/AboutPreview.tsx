import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"

export function AboutPreview() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 bg-dark text-white">
      {/* Soft amber + primary atmosphere so the dark "owner story" section
          breaks up the white run between Reviews and ServiceAreas without
          feeling like a flat black slab. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl"
      />
      <Container>
        <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
          <div className="w-full max-w-[320px] md:w-72 aspect-square relative rounded-lg overflow-hidden border border-white/15 shadow-card-hover">
            <Image
              src="/photos/owner-demo.jpg"
              alt={`${siteConfig.ownerName}, owner of ${siteConfig.businessName}`}
              fill
              sizes="(min-width: 768px) 288px, 320px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              About the owner
            </div>
            <h2 className="mt-3 font-display font-extrabold text-3xl md:text-4xl text-white tracking-[-0.015em] leading-[1.05]">
              {siteConfig.ownerName} grew the company from one truck.
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/75 leading-relaxed max-w-[560px]">
              {siteConfig.ownerName} started installing AC units the summer he turned 19. {siteConfig.businessName} now runs five trucks and serves {siteConfig.serviceArea}. We still answer the phone the same way: a real person, on the first ring.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 font-display font-bold text-base text-accent hover:text-white transition-colors"
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
