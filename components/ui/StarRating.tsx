import { Star } from "lucide-react"

type Props = { rating: number; className?: string }

export function StarRating({ rating, className }: Props) {
  return (
    <div className={`inline-flex items-center gap-0.5 ${className || ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-slate-300"}`}
          strokeWidth={1.5}
          aria-hidden
        />
      ))}
    </div>
  )
}
