"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { FAQ } from "@/data/faqs"

type Props = { items: FAQ[] }

export function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-card">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 hover:bg-slate-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-base md:text-lg text-dark leading-snug">
                {it.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-slate-500 shrink-0 transition-transform ${
                  isOpen ? "rotate-180 text-accent-dark" : ""
                }`}
                strokeWidth={2}
                aria-hidden
              />
            </button>
            {isOpen && (
              <div className="px-5 md:px-6 pb-5 text-base text-slate-700 leading-relaxed">
                {it.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
