/**
 * Single source of truth for the site. Swap clients by editing this file
 * (and the data/* files for service detail copy + reviews + city blurbs).
 * No business name, phone, color, or service should appear hardcoded in any
 * component — everything reads from here.
 */

export type PlatformConfig = {
  type: "servicetitan" | "housecallpro" | "jobber" | "zenbooker" | "none"
  // ServiceTitan
  schedulingProUrl?: string
  tenantId?: string
  // Housecall Pro
  hcpBookingUrl?: string
  hcpChatSnippet?: string
  // Jobber
  jobberBookingUrl?: string
  // ZenBooker (leave url blank to use the demo UI)
  zenbookerUrl?: string
  // Generic fallback (any external booking URL — opens in new tab)
  bookingUrl?: string
  // Floating chat widget
  chatWidget: "rosie" | "hcp" | "none"
}

const platform: PlatformConfig = {
  type: "zenbooker",
  chatWidget: "rosie",
}

export const siteConfig = {
  businessName: "TA Home Services",
  tagline: "San Diego's most trusted HVAC team.",
  phone: "(619) 555-0199",
  phoneClean: "6195550199",
  email: "info@tahomeservices.com",
  address: "San Diego, CA",
  license: "CSLB #9876543",
  founded: "2014",
  ownerName: "Mike Torres",
  serviceArea: "San Diego County",
  reviewCount: 127,

  colors: {
    primary: "#1E40AF",
    primaryDark: "#1E3A8A",
    accent: "#F59E0B",
    accentDark: "#D97706",
    dark: "#0F172A",
    light: "#F8FAFC",
  },

  fonts: {
    display: "Bricolage Grotesque",
    body: "Inter",
  },

  services: [
    {
      name: "AC Repair",
      slug: "ac-repair",
      icon: "snowflake",
      description:
        "Fast, reliable AC repair when you need it most. Same-day service available.",
    },
    {
      name: "Heating Repair",
      slug: "heating-repair",
      icon: "flame",
      description:
        "Keep your home warm all winter. We fix all brands.",
    },
    {
      name: "AC Installation",
      slug: "ac-installation",
      icon: "plus",
      description:
        "New high-efficiency systems installed right the first time.",
    },
    {
      name: "Heating Installation",
      slug: "heating-installation",
      icon: "fire",
      description:
        "Furnaces, heat pumps, and wall heaters. Licensed and insured.",
    },
    {
      name: "Mini-Splits",
      slug: "mini-splits",
      icon: "wind",
      description:
        "Ductless cooling and heating for any room. Quiet and efficient.",
    },
    {
      name: "Maintenance Plans",
      slug: "maintenance",
      icon: "wrench",
      description:
        "Annual tune-ups that prevent breakdowns and extend equipment life.",
    },
  ],

  serviceAreas: [
    "San Diego",
    "Poway",
    "Escondido",
    "El Cajon",
    "La Mesa",
    "Chula Vista",
    "Oceanside",
  ],

  hours: {
    weekdays: "8am to 6pm",
    weekend: "By appointment",
    emergency: "24/7 emergency service available",
  },

  platform,

  integrations: {
    calendly: {
      enabled: true,
      url: "https://calendly.com/max-tradesadvisory/30min",
    },
  },

  features: {
    emergencyBanner: true,
    financingSection: true,
    reviewsSection: true,
    serviceAreaPages: true,
  },

  social: {
    google: "https://google.com",
    yelp: "https://yelp.com",
  },

  seo: {
    siteUrl: "https://demo.tradesadvisory.com",
  },
} as const

export type SiteConfig = typeof siteConfig
export type Service = (typeof siteConfig.services)[number]
export type ServiceSlug = Service["slug"]
