"use client"

import { useState } from "react"
import { Calendar, CheckCircle2, Sparkles, ExternalLink, AlertTriangle } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/Button"
import { ContactForm } from "@/components/forms/ContactForm"
import { cn } from "@/lib/cn"

const TIME_SLOTS = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"]
const SERVICE_OPTIONS = siteConfig.services.map((s) => ({ value: s.slug, label: s.name }))

export function BookingWidget({ compact = false }: { compact?: boolean }) {
  const { type } = siteConfig.platform

  switch (type) {
    case "servicetitan":
      return (
        <PlatformIframe
          url={siteConfig.platform.schedulingProUrl}
          title="Schedule service"
          poweredBy="ServiceTitan Scheduling Pro"
          missingField="schedulingProUrl"
          compact={compact}
        />
      )
    case "housecallpro":
      return (
        <PlatformIframe
          url={siteConfig.platform.hcpBookingUrl}
          title="Book online"
          poweredBy="Housecall Pro"
          missingField="hcpBookingUrl"
          compact={compact}
        />
      )
    case "jobber":
      return (
        <PlatformIframe
          url={siteConfig.platform.jobberBookingUrl}
          title="Request work"
          poweredBy="Jobber"
          missingField="jobberBookingUrl"
          compact={compact}
        />
      )
    case "zenbooker":
      // If a real ZenBooker URL is configured, embed it. Otherwise fall back
      // to the demo UI (used by the Summit Heating & Air showcase site).
      if (siteConfig.platform.zenbookerUrl) {
        return (
          <PlatformIframe
            url={siteConfig.platform.zenbookerUrl}
            title="Book a service"
            poweredBy="ZenBooker"
            missingField="zenbookerUrl"
            compact={compact}
          />
        )
      }
      return <ZenBookerDemoUI compact={compact} />
    case "none":
      // Generic fallback: if a bookingUrl is set, link out; otherwise show
      // the contact form so customers can still reach the business.
      if (siteConfig.platform.bookingUrl) {
        return <ExternalBookingButton url={siteConfig.platform.bookingUrl} />
      }
      return <ContactForm />
  }
}

function PlatformIframe({
  url,
  title,
  poweredBy,
  missingField,
  compact,
}: {
  url: string | undefined
  title: string
  poweredBy: string
  missingField: string
  compact: boolean
}) {
  if (!url) return <MissingPlatformConfig field={missingField} poweredBy={poweredBy} />
  return (
    <div className="rounded-xl bg-accent/10 border border-slate-200 shadow-card overflow-hidden">
      <div className="px-5 md:px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display font-extrabold text-dark">
          <Calendar className="h-5 w-5 text-accent-dark" aria-hidden />
          {title}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
          Powered by {poweredBy}
        </span>
      </div>
      <iframe
        src={url}
        title={`${title} — ${poweredBy}`}
        loading="lazy"
        className="w-full block"
        style={{ height: compact ? 560 : 720, border: 0 }}
      />
    </div>
  )
}

function ExternalBookingButton({ url }: { url: string }) {
  return (
    <div className="rounded-xl bg-accent/10 border border-slate-200 shadow-card p-6 md:p-8 text-center">
      <Calendar className="h-10 w-10 text-accent-dark mx-auto" aria-hidden />
      <h3 className="mt-3 font-display font-extrabold text-xl md:text-2xl text-dark">
        Schedule online
      </h3>
      <p className="mt-2 text-sm md:text-base text-slate-600">
        Pick a time on our online calendar.
      </p>
      <div className="mt-5">
        <Button href={url} external>
          Open booking <ExternalLink className="h-4 w-4 ml-2" aria-hidden />
        </Button>
      </div>
    </div>
  )
}

function MissingPlatformConfig({
  field,
  poweredBy,
}: {
  field: string
  poweredBy: string
}) {
  return (
    <div className="rounded-xl bg-amber-50 border border-amber-200 p-6 md:p-8 text-left">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" aria-hidden />
        <div className="text-sm text-amber-900">
          <div className="font-display font-bold">
            {poweredBy} booking is selected but no URL is set.
          </div>
          <div className="mt-1">
            Set <code className="font-mono text-[12px] bg-amber-100 rounded px-1 py-0.5">platform.{field}</code>{" "}
            in <code className="font-mono text-[12px] bg-amber-100 rounded px-1 py-0.5">config/site.ts</code>{" "}
            to embed the booking widget here.
          </div>
        </div>
      </div>
    </div>
  )
}

// -- ZenBooker demo UI -------------------------------------------------------
// Original fake calendar + slot picker. Used by the Summit demo site so the
// concept can be experienced without a real ZenBooker account.

function getCurrentMonthMatrix() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const first = new Date(year, month, 1)
  const last = new Date(year, month + 1, 0)
  const offset = first.getDay()
  const days: Array<{ day: number | null; date?: string; disabled: boolean }> = []
  for (let i = 0; i < offset; i++) days.push({ day: null, disabled: true })
  const today = now.getDate()
  for (let d = 1; d <= last.getDate(); d++) {
    days.push({
      day: d,
      date: `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
      disabled: d < today,
    })
  }
  return {
    monthLabel: first.toLocaleString("en-US", { month: "long", year: "numeric" }),
    days,
  }
}

function ZenBookerDemoUI({ compact }: { compact: boolean }) {
  const { monthLabel, days } = getCurrentMonthMatrix()
  const [service, setService] = useState<string>(SERVICE_OPTIONS[0].value)
  const [pickedDate, setPickedDate] = useState<string | null>(null)
  const [pickedTime, setPickedTime] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  function handleConfirm() {
    if (!pickedDate || !pickedTime) return
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <div className="rounded-xl bg-accent/10 border border-slate-200 shadow-card p-6 md:p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-dark mx-auto" strokeWidth={2} aria-hidden />
        <h3 className="mt-3 font-display font-extrabold text-xl md:text-2xl text-dark">
          Demo booking confirmed
        </h3>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          In production, ZenBooker would send a confirmation text + email and add the appointment to the dispatch board.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-100 border border-slate-200 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
          <Sparkles className="h-3 w-3 text-accent-dark" aria-hidden />
          Powered by ZenBooker
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl bg-accent/10 border border-slate-200 shadow-card overflow-hidden">
      <div className="px-5 md:px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2 font-display font-extrabold text-dark">
          <Calendar className="h-5 w-5 text-accent-dark" aria-hidden />
          Book a service
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
          Powered by ZenBooker
        </span>
      </div>

      <div className="p-5 md:p-6 space-y-5">
        {/* Service */}
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600 mb-2">
            Service
          </label>
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 py-2.5 pr-10 text-sm font-display font-bold text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {SERVICE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Calendar */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">Pick a date</span>
            <span className="text-xs font-display font-bold text-dark">{monthLabel}</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <div key={`h-${i}`} className="text-[10px] font-mono uppercase text-slate-400 py-1">{d}</div>
            ))}
            {days.map((d, i) => {
              const sel = pickedDate === d.date
              return (
                <button
                  key={i}
                  type="button"
                  disabled={d.disabled || !d.day}
                  onClick={() => d.date && setPickedDate(d.date)}
                  className={cn(
                    "rounded-md text-sm font-display font-bold py-1.5 tabular-nums",
                    !d.day && "invisible",
                    d.disabled && "text-slate-300 cursor-not-allowed",
                    !d.disabled && !sel && "text-dark hover:bg-slate-100",
                    sel && "bg-primary text-white shadow-sm"
                  )}
                  aria-pressed={sel}
                >
                  {d.day ?? ""}
                </button>
              )
            })}
          </div>
        </div>

        {/* Time slots */}
        {pickedDate && (
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600 mb-2">
              Pick a time
            </div>
            <div className={cn("grid gap-2", compact ? "grid-cols-3" : "grid-cols-3 md:grid-cols-6")}>
              {TIME_SLOTS.map((t) => {
                const sel = pickedTime === t
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setPickedTime(t)}
                    className={cn(
                      "rounded-md border py-2 text-sm font-display font-bold transition-colors",
                      sel
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-dark border-slate-300 hover:border-primary"
                    )}
                  >
                    {t}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        <Button
          onClick={handleConfirm}
          disabled={!pickedDate || !pickedTime}
          className="w-full"
        >
          Confirm booking →
        </Button>
        <div className="text-center font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
          Real ZenBooker handles SMS + email + dispatch
        </div>
      </div>
    </div>
  )
}
