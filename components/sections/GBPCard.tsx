import Image from "next/image"
import { Star, MapPin, Clock, Phone, Globe } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"

const GBP_PHOTOS = [
  { src: "/photos/condenser.tech.jpg", alt: "Tech servicing a condenser" },
  { src: "/photos/hvac.tech.jpg", alt: "Lead technician on the job" },
  { src: "/photos/condensers.jpg", alt: "Outdoor condenser units" },
]

export function GBPCard() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionTitle
          eyebrow="Google Business Profile"
          title="Your listing, optimized."
          subtitle="Photos. Hours. Categories. Q&A. Review responses. The Google Business Profile work that puts you on the map for the right searches."
        />
        <div className="mt-10 max-w-[640px] mx-auto card-light overflow-hidden">
          {/* Hero photo strip */}
          <div className="grid grid-cols-3 gap-1 bg-slate-100">
            {GBP_PHOTOS.map((p) => (
              <div key={p.src} className="relative aspect-[16/10]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 640px) 213px, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display font-extrabold text-xl md:text-2xl text-dark">
                  {siteConfig.businessName}
                </h3>
                <div className="text-sm text-slate-600 mt-0.5">
                  HVAC contractor · {siteConfig.address}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="font-display font-extrabold text-2xl tabular-nums text-dark">5.0</div>
                <div className="flex items-center gap-1 mt-0.5 justify-end">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 tabular-nums">
                  {siteConfig.reviewCount} reviews
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="h-4 w-4 text-slate-400" aria-hidden />
                <span>Open · Closes 6 PM</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="h-4 w-4 text-slate-400" aria-hidden />
                <span className="tabular-nums">{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="h-4 w-4 text-slate-400" aria-hidden />
                <span>{siteConfig.serviceArea}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Globe className="h-4 w-4 text-slate-400" aria-hidden />
                <span>summithvac.com</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap gap-2">
              {siteConfig.services.slice(0, 4).map((s) => (
                <span
                  key={s.slug}
                  className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-xs px-3 py-1 border border-slate-200"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
