"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/cn"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-card">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12 h-16 md:h-18 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label={`${siteConfig.businessName} home`}
          >
            <Image
              src="/logo.png"
              alt={siteConfig.businessName}
              width={586}
              height={184}
              priority
              className="h-11 md:h-[60px] w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7 font-display font-bold text-sm">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-dark hover:text-primary transition-colors py-2"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    servicesOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-1 w-64">
                  <div className="rounded-lg border border-slate-200 bg-white shadow-card-hover overflow-hidden">
                    {siteConfig.services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-4 py-3 text-sm hover:bg-slate-50 hover:text-primary transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block px-4 py-3 text-sm bg-slate-50 hover:bg-slate-100 text-primary border-t border-slate-200"
                    >
                      All services →
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className="text-dark hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/features" className="text-dark hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/contact" className="text-dark hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right cluster: phone + CTA */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="hidden md:flex items-center gap-2 text-sm font-display font-bold text-dark hover:text-accent-dark transition-colors tabular-nums"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} aria-hidden />
              {siteConfig.phone}
            </a>
            <Button href="/contact#book" size="sm" className="hidden sm:inline-flex">
              Book Now
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -mr-2 text-dark"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-dark/60" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-display font-extrabold text-lg text-dark">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2 text-dark"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" strokeWidth={2} aria-hidden />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 mt-2 mb-2">
                Services
              </div>
              {siteConfig.services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-display font-bold py-2 text-dark hover:text-primary"
                >
                  {s.name}
                </Link>
              ))}
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 mt-4 mb-2">
                Pages
              </div>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="font-display font-bold py-2 text-dark">
                About
              </Link>
              <Link href="/features" onClick={() => setMobileOpen(false)} className="font-display font-bold py-2 text-dark">
                Features
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="font-display font-bold py-2 text-dark">
                Contact
              </Link>
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-dark text-dark font-display font-bold py-3 hover:bg-dark hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden /> {siteConfig.phone}
              </a>
              <Button
                href="/contact#book"
                onClick={() => setMobileOpen(false)}
                className="mt-3"
              >
                Book Now →
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
