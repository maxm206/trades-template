"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/cn"

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-dark placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
const labelCls =
  "block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600 mb-2"

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: siteConfig.services[0].slug,
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function set<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((prev) => ({ ...prev, [k]: v }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = "Required"
    if (!form.email.trim()) next.email = "Required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Not a valid email"
    if (!form.phone.trim()) next.phone = "Required"
    if (!form.message.trim()) next.message = "Required"
    setErrors(next)
    if (Object.keys(next).length) return

    // Demo only — log + show success
    // eslint-disable-next-line no-console
    console.log("[ContactForm] submission:", form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card-light p-7 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-dark mx-auto" aria-hidden />
        <h3 className="mt-3 font-display font-extrabold text-2xl text-dark">
          Got it{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
        </h3>
        <p className="mt-2 text-base text-slate-600">
          We&rsquo;ll be in touch within 24 hours. If it&rsquo;s urgent, call {siteConfig.phone}.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card-light p-6 md:p-7"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark mb-1">
        Send a message
      </div>
      <div className="font-display font-extrabold text-2xl text-dark">
        We&rsquo;ll reply within 24 hours.
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Name *</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={cn(inputCls, errors.name && "border-accent ring-1 ring-accent/30")}
            autoComplete="name"
          />
          {errors.name && <div className="mt-1 font-mono text-[10px] uppercase text-accent-dark">{errors.name}</div>}
        </div>
        <div>
          <label className={labelCls}>Phone *</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={cn(inputCls, errors.phone && "border-accent ring-1 ring-accent/30")}
            autoComplete="tel"
          />
          {errors.phone && <div className="mt-1 font-mono text-[10px] uppercase text-accent-dark">{errors.phone}</div>}
        </div>
      </div>
      <div className="mt-4">
        <label className={labelCls}>Email *</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          className={cn(inputCls, errors.email && "border-accent ring-1 ring-accent/30")}
          autoComplete="email"
        />
        {errors.email && <div className="mt-1 font-mono text-[10px] uppercase text-accent-dark">{errors.email}</div>}
      </div>
      <div className="mt-4">
        <label className={labelCls}>Service needed</label>
        <select
          value={form.service}
          onChange={(e) => set("service", e.target.value)}
          className={`${inputCls} appearance-none pr-10`}
        >
          {siteConfig.services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>
      <div className="mt-4">
        <label className={labelCls}>Message *</label>
        <textarea
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          rows={4}
          className={cn(inputCls, "resize-y", errors.message && "border-accent ring-1 ring-accent/30")}
          placeholder="Tell us what's going on. What system, what symptoms, when started."
        />
        {errors.message && <div className="mt-1 font-mono text-[10px] uppercase text-accent-dark">{errors.message}</div>}
      </div>

      <Button type="submit" className="mt-6 w-full">
        Send it →
      </Button>
      <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
        Real reply within 24 hours
      </div>
    </form>
  )
}
