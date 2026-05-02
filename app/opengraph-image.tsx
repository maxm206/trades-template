import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

export const runtime = "edge"
export const alt = `${siteConfig.businessName} — ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: siteConfig.colors.dark,
          color: "#fff",
          padding: "80px 96px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 6,
            background: siteConfig.colors.accent,
            borderRadius: 3,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 28,
              color: siteConfig.colors.accent,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            {siteConfig.businessName}
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.0,
              maxWidth: 980,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>
        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.65)" }}>
          {siteConfig.phone} · {siteConfig.serviceArea}
        </div>
      </div>
    ),
    { ...size }
  )
}
