import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/Container"

function slugify(s: string): string {
  return s.toLowerCase().replace(/\s+/g, "-")
}

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-10 mt-0">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2">
            <Link href="/" aria-label={`${siteConfig.businessName} home`} className="inline-block">
              <Image
                src="/logo.png"
                alt={siteConfig.businessName}
                width={586}
                height={184}
                className="h-8 w-auto"
              />
            </Link>
            <div className="mt-3 text-white/70 text-sm">{siteConfig.tagline}</div>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="mt-5 inline-block font-display font-extrabold text-2xl md:text-3xl tabular-nums hover:text-accent transition-colors"
            >
              {siteConfig.phone}
            </a>
            <div className="mt-1 text-sm text-white/55">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">{siteConfig.email}</a>
            </div>
            <div className="mt-1 text-sm text-white/55">{siteConfig.address}</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-3">
              Services
            </div>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/75 hover:text-accent transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-3">
              Service Areas
            </div>
            <ul className="space-y-2 text-sm">
              {siteConfig.serviceAreas.map((c) => (
                <li key={c}>
                  <Link href={`/areas/${slugify(c)}`} className="text-white/75 hover:text-accent transition-colors">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/55">
          <div>
            © {new Date().getFullYear()} {siteConfig.businessName}. {siteConfig.license}. All rights reserved.
          </div>
          <div className="flex gap-5 font-mono uppercase tracking-[0.15em] text-[10px]">
            <Link href="/about" className="hover:text-accent">About</Link>
            <Link href="/features" className="hover:text-accent">Features</Link>
            <Link href="/contact" className="hover:text-accent">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
