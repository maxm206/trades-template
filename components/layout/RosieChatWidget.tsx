"use client"

import { useState } from "react"
import { MessageCircle, X, Sparkles } from "lucide-react"
import { siteConfig } from "@/config/site"

const CONVERSATION = [
  { from: "ai", text: `Hi, ${siteConfig.businessName} here. How can I help?` },
  { from: "user", text: "Hi, our AC stopped working. Can someone come tonight?" },
  {
    from: "ai",
    text: "I can help with that. Let me get you scheduled. What's your address?",
  },
  { from: "user", text: "1234 Oak St, San Diego" },
  {
    from: "ai",
    text:
      "I've booked a tech for tonight between 7-9pm. You'll get a confirmation text shortly.",
  },
]

// ServiceTitan and Housecall Pro ship their own native chat — don't double up.
const PLATFORMS_WITH_NATIVE_CHAT = ["servicetitan", "housecallpro"] as const

export function RosieChatWidget() {
  const { type, chatWidget, hcpChatSnippet } = siteConfig.platform

  if ((PLATFORMS_WITH_NATIVE_CHAT as readonly string[]).includes(type)) return null
  if (chatWidget === "none") return null
  if (chatWidget === "hcp") return <HCPChatMount snippetId={hcpChatSnippet} />
  return <RosieChat />
}

function HCPChatMount({ snippetId }: { snippetId?: string }) {
  // Mount target for the Housecall Pro chat widget. Paste the JS snippet
  // from the HCP dashboard into app/layout.tsx <head> (or via next/script)
  // and HCP will render its own UI into the page. This div is here so a
  // snippet that targets a specific element has somewhere to land.
  return <div id="hcp-chat" data-snippet-id={snippetId ?? ""} aria-hidden />
}

function RosieChat() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* Closed state — bubble */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open after-hours chat"
          className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-30 group"
        >
          <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" aria-hidden />
          <span className="relative flex items-center gap-3 rounded-full bg-dark text-white pl-4 pr-5 py-3 shadow-card-hover border border-white/10 hover:bg-primary transition-colors">
            <span className="relative flex">
              <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="font-display font-bold text-sm hidden sm:inline">
              Hi, {siteConfig.businessName} here. How can I help?
            </span>
            <span className="font-display font-bold text-sm sm:hidden">
              <MessageCircle className="h-5 w-5 inline" />
            </span>
          </span>
        </button>
      )}

      {/* Open state — chat panel */}
      {open && (
        <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-30 w-[calc(100vw-2rem)] max-w-sm">
          <div className="rounded-2xl bg-white shadow-card-hover border border-slate-200 overflow-hidden flex flex-col max-h-[480px]">
            {/* Header */}
            <div className="bg-dark text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" strokeWidth={2.5} aria-hidden />
                <div>
                  <div className="font-display font-bold text-sm">After-hours assistant</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-white/65">Powered by Rosie AI</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white/70 hover:text-white"
              >
                <X className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
              {CONVERSATION.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={
                      m.from === "user"
                        ? "rounded-2xl rounded-br-md bg-primary text-white px-4 py-2 text-sm max-w-[80%]"
                        : "rounded-2xl rounded-bl-md bg-white border border-slate-200 text-dark px-4 py-2 text-sm max-w-[80%] shadow-sm"
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            {/* Footer note */}
            <div className="px-4 py-3 bg-white border-t border-slate-200 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Demo — Never miss a call after hours
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
