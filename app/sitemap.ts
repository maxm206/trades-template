import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { serviceAreaContent } from "@/data/serviceAreaContent"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl
  const staticRoutes = ["", "/services", "/about", "/contact", "/features"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1.0 : 0.8,
  }))
  const services = siteConfig.services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))
  const areas = serviceAreaContent.map((c) => ({
    url: `${base}/areas/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))
  return [...staticRoutes, ...services, ...areas]
}
