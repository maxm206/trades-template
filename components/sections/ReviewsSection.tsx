import { Star } from "lucide-react"
import { siteConfig } from "@/config/site"
import { reviews } from "@/data/reviews"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { ReviewCard } from "@/components/cards/ReviewCard"

export function ReviewsSection() {
  if (!siteConfig.features.reviewsSection) return null
  return (
    <section className="py-16 md:py-24 bg-light">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            eyebrow="Reviews"
            title="What customers say."
            subtitle="Real reviews from real customers. We do not pay for placement and we do not curate. Every review you see came directly from Google."
          />
          <div className="inline-flex items-center gap-3 rounded-xl bg-accent/10 border border-slate-200 shadow-card px-5 py-3 self-start">
            <div className="inline-flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" aria-hidden />
              ))}
            </div>
            <div>
              <div className="font-display font-extrabold text-xl text-dark tabular-nums">
                {siteConfig.reviewCount}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500">
                5-Star Reviews
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reviews.slice(0, 6).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={siteConfig.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-dark text-dark font-display font-bold text-sm px-5 py-2.5 hover:bg-dark hover:text-white transition-colors"
          >
            Leave a review →
          </a>
        </div>
      </Container>
    </section>
  )
}
