import { siteConfig } from "@/config/site"

export function LocalBusinessSchema({ city }: { city?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: siteConfig.businessName,
    description: siteConfig.tagline,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city || "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: city
      ? { "@type": "City", name: city }
      : siteConfig.serviceAreas.map((c) => ({ "@type": "City", name: c })),
    url: siteConfig.seo.siteUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: siteConfig.reviewCount,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
