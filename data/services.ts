import { acRepair } from "./services/ac-repair"
import { heatingRepair } from "./services/heating-repair"
import { acInstallation } from "./services/ac-installation"
import { heatingInstallation } from "./services/heating-installation"
import { miniSplits } from "./services/mini-splits"
import { maintenance } from "./services/maintenance"

export type ServiceContent = {
  slug: string
  title: string
  tagline: string
  metaDescription: string
  paragraphs: string[]
  bullets: string[]
  whatToExpect: string[]
}

const all: ServiceContent[] = [
  acRepair,
  heatingRepair,
  acInstallation,
  heatingInstallation,
  miniSplits,
  maintenance,
]

export const serviceContent: Record<string, ServiceContent> = Object.fromEntries(
  all.map((s) => [s.slug, s])
)

export function getServiceContent(slug: string): ServiceContent | undefined {
  return serviceContent[slug]
}
