"use client"

import { useEffect, useState } from "react"
import { Phone, X } from "lucide-react"
import { siteConfig } from "@/config/site"

const STORAGE_KEY = "ta_emergency_dismissed_v1"

export function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(STORAGE_KEY) === "1")
    } catch {
      setDismissed(false)
    }
  }, [])

  if (!siteConfig.features.emergencyBanner) return null
  if (dismissed) return null

  return (
    <div className="bg-accent text-dark">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-2 flex items-center justify-between gap-3">
        <a
          href={`tel:${siteConfig.phoneClean}`}
          className="flex items-center gap-2 text-sm md:text-base font-display font-bold hover:underline"
        >
          <Phone className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          <span className="hidden sm:inline">24/7 Emergency Service.</span>
          <span>Call now: {siteConfig.phone}</span>
        </a>
        <button
          type="button"
          aria-label="Dismiss emergency banner"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, "1")
            } catch {}
            setDismissed(true)
          }}
          className="text-dark/70 hover:text-dark p-1 -mr-1"
        >
          <X className="h-4 w-4" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  )
}
