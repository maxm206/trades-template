import type { Metadata } from "next"
import { Bricolage_Grotesque, Inter } from "next/font/google"
import { siteConfig } from "@/config/site"
import { hexToRgbTriplet } from "@/lib/colors"
import { EmergencyBanner } from "@/components/layout/EmergencyBanner"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MobileCallBar } from "@/components/layout/MobileCallBar"
import { RosieChatWidget } from "@/components/layout/RosieChatWidget"
import "./globals.css"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
  display: "swap",
})

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    type: "website",
    siteName: siteConfig.businessName,
    url: siteConfig.seo.siteUrl,
    title: siteConfig.businessName,
    description: siteConfig.tagline,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const c = siteConfig.colors
  const cssVars = `
    :root {
      --color-primary: ${hexToRgbTriplet(c.primary)};
      --color-primary-dark: ${hexToRgbTriplet(c.primaryDark)};
      --color-accent: ${hexToRgbTriplet(c.accent)};
      --color-accent-dark: ${hexToRgbTriplet(c.accentDark)};
      --color-dark: ${hexToRgbTriplet(c.dark)};
      --color-light: ${hexToRgbTriplet(c.light)};
    }
  `.trim()

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
      </head>
      <body className="font-sans bg-light text-dark min-h-screen pb-12 md:pb-0">
        <EmergencyBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
        <RosieChatWidget />
      </body>
    </html>
  )
}
