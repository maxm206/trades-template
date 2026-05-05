import { Quote } from "lucide-react"
import { StarRating } from "@/components/ui/StarRating"
import type { Review } from "@/data/reviews"

type Props = { review: Review }

export function ReviewCard({ review }: Props) {
  return (
    <article className="rounded-xl bg-accent/10 border border-slate-200 shadow-card p-6 md:p-7 flex flex-col">
      <Quote className="h-7 w-7 text-accent" strokeWidth={2} aria-hidden />
      <p className="mt-3 text-base text-slate-700 leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-5 pt-5 border-t border-slate-200 flex items-center justify-between">
        <div>
          <div className="font-display font-bold text-sm text-dark">{review.name}</div>
          <div className="text-xs text-slate-500">
            {review.source}
            {review.date ? ` · ${review.date}` : ""}
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>
    </article>
  )
}
