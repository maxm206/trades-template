import { Phone } from "lucide-react"
import { siteConfig } from "@/config/site"

export function MobileCallBar() {
  return (
    <a
      href={`tel:${siteConfig.phoneClean}`}
      className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-center justify-center gap-2 bg-accent text-dark font-display font-extrabold py-3 shadow-card-hover"
    >
      <Phone className="h-5 w-5" strokeWidth={2.5} aria-hidden />
      Call Now: {siteConfig.phone}
    </a>
  )
}
