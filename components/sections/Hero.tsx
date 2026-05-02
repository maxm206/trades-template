"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { TrustPill } from "@/components/ui/TrustPill"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-dark text-white pt-16 md:pt-20 pb-16 md:pb-24">
      {/* Atmosphere orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-40 h-[640px] w-[640px] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-32 -left-40 h-[480px] w-[480px] rounded-full bg-primary/15 blur-3xl"
      />
      <Container className="relative">
        <div className="max-w-[820px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
          >
            Licensed since {siteConfig.founded}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display font-extrabold text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em]"
          >
            {siteConfig.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-[600px] text-lg md:text-xl leading-relaxed text-white/80"
          >
            Licensed, insured, and on your side since {siteConfig.founded}. Serving {siteConfig.serviceArea}.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center"
          >
            <Button href="/contact#book" size="lg">
              Schedule Service →
            </Button>
            <Button href={`tel:${siteConfig.phoneClean}`} variant="ghost" size="lg" external={false}>
              <Phone className="h-4 w-4 mr-2" aria-hidden />
              {siteConfig.phone}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            <TrustPill iconName="star" invert>
              {siteConfig.reviewCount} 5-Star Reviews
            </TrustPill>
            <TrustPill iconName="shield" invert>
              Licensed &amp; Insured
            </TrustPill>
            <TrustPill iconName="check" invert>
              Same-Day Service
            </TrustPill>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
