export type Review = {
  name: string
  text: string
  rating: 1 | 2 | 3 | 4 | 5
  source: "Google" | "Yelp" | "Facebook"
  date?: string
}

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    text: "Called at 8pm on a Friday with no AC. They had a tech here by 9. Fixed it on the spot. Cannot say enough good things.",
    rating: 5,
    source: "Google",
    date: "2 weeks ago",
  },
  {
    name: "David R.",
    text: "Replaced our entire system. Crew was professional, cleaned up after themselves, and the price was fair. No surprise charges.",
    rating: 5,
    source: "Google",
    date: "1 month ago",
  },
  {
    name: "Maria L.",
    text: "Been using them for maintenance for three years. Always on time, always honest about what needs fixing and what can wait.",
    rating: 5,
    source: "Google",
    date: "1 month ago",
  },
  {
    name: "James K.",
    text: "Best HVAC experience I have had. The tech explained everything, showed me the problem, and gave me options. No pressure.",
    rating: 5,
    source: "Google",
    date: "2 months ago",
  },
  {
    name: "Linda P.",
    text: "Our mini-split install was done in one day. Quiet, efficient, and our bedroom is finally comfortable. Should have done this years ago.",
    rating: 5,
    source: "Google",
    date: "3 months ago",
  },
  {
    name: "Robert T.",
    text: "Honest company. Came out for a repair and told me it was a $20 part instead of trying to sell me a new unit. That earned a customer for life.",
    rating: 5,
    source: "Google",
    date: "4 months ago",
  },
]
