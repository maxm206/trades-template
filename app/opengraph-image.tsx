import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"
import { OG_LOGO } from "./ogLogoData"

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
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={OG_LOGO} alt={siteConfig.businessName} width={520} height={178} />
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1.0,
              maxWidth: 980,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.65)" }}>
          {`${siteConfig.phone} · ${siteConfig.serviceArea}`}
        </div>
      </div>
    ),
    { ...size }
  )
}
