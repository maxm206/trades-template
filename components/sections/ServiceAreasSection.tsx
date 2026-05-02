import Link from "next/link"
import { MapPin } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"

function slugify(s: string): string {
  return s.toLowerCase().replace(/\s+/g, "-")
}

export function ServiceAreasSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionTitle
          eyebrow="Service Area"
          title={`Where we work.`}
          subtitle={`Serving ${siteConfig.serviceArea} from our shop in San Diego. Click your city for what we cover and how fast we can get there.`}
        />
        <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
          {siteConfig.serviceAreas.map((c) => (
            <Link
              key={c}
              href={`/areas/${slugify(c)}`}
              className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 font-display font-bold text-sm text-dark hover:border-primary hover:text-primary hover:shadow-card-hover transition-all"
            >
              <MapPin className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" aria-hidden />
              {c}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
