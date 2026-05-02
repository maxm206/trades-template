export type FAQ = {
  service: string // service slug, or "general"
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  // AC Repair
  {
    service: "ac-repair",
    question: "How fast can you get a tech out for an AC repair?",
    answer:
      "Most calls land a tech same-day during business hours. After-hours calls usually get a tech to your door within two hours. We answer the phone live and confirm the appointment in writing within fifteen minutes.",
  },
  {
    service: "ac-repair",
    question: "What does an AC diagnostic cost?",
    answer:
      "Our flat diagnostic fee is $89. If you go ahead with the repair, that fee gets applied to the repair total — so the diagnostic is effectively free if we fix the issue.",
  },
  {
    service: "ac-repair",
    question: "Do you work on every brand?",
    answer:
      "Yes. We service Carrier, Trane, Lennox, Goodman, Amana, Rheem, York, American Standard, Bryant, and the major mini-split brands. If you have something unusual, mention it on the phone and we will confirm before dispatching.",
  },
  {
    service: "ac-repair",
    question: "When should I repair vs replace?",
    answer:
      "If your unit is over 12 years old and the repair is more than 30% of the cost of a new system, replacement usually pencils out better. We tell you the math both ways and let you decide. No commission on either path.",
  },

  // Heating Repair
  {
    service: "heating-repair",
    question: "Why does my furnace turn on and immediately turn off?",
    answer:
      "Most often this is a dirty flame sensor or a blocked exhaust. It is a common, cheap fix — usually under $200. Sometimes it is a heat exchanger crack, which is more serious. The diagnostic tells us which one.",
  },
  {
    service: "heating-repair",
    question: "Is carbon monoxide something I should worry about?",
    answer:
      "Yes, but it is preventable. Every heating repair we do includes a combustion check and a CO test. If your furnace is over 15 years old and you have not had it tested, get a CO detector for the bedroom hallway and have someone look at it before next winter.",
  },
  {
    service: "heating-repair",
    question: "Can you fix wall heaters and floor furnaces?",
    answer:
      "We fix them and we replace them. Older wall heaters (pre-1995) often fail safety inspections, and the cost to repair is usually higher than replacing with a modern code-compliant unit. We will tell you which path makes sense.",
  },

  // AC Installation
  {
    service: "ac-installation",
    question: "How do I know what size AC I need?",
    answer:
      "We do a Manual J load calculation, which factors in square footage, insulation, window orientation, ceiling height, and shading. Bigger is not always better — an oversized AC short-cycles, runs less efficiently, and dehumidifies poorly. We size the unit to the actual house.",
  },
  {
    service: "ac-installation",
    question: "What does a full AC install cost in San Diego?",
    answer:
      "Most straight-swap installs run $7,500 to $14,000 depending on tonnage, efficiency rating, and any electrical or duct work. We give you a written quote after the in-home assessment, and we break out equipment vs labor vs materials so you can see exactly what you are paying for.",
  },
  {
    service: "ac-installation",
    question: "Are there rebates or tax credits available?",
    answer:
      "Yes. SDG&E offers rebates for high-efficiency systems, and the federal tax credit covers up to $2,000 for qualifying heat pumps. We handle the rebate paperwork for you and provide everything you need for the tax credit at no extra cost.",
  },

  // Heating Installation
  {
    service: "heating-installation",
    question: "Heat pump or gas furnace — which one for my house?",
    answer:
      "In San Diego, heat pumps usually make more sense. Mild winters mean a heat pump runs efficiently almost year-round, and you get cooling off the same unit. Gas furnaces still beat heat pumps in very cold climates, but San Diego is not one of them.",
  },
  {
    service: "heating-installation",
    question: "Do you pull the permit?",
    answer:
      "Yes, on every install that requires one. We schedule the inspection, meet the inspector at the house, and handle any sign-off paperwork. You do not have to deal with the city.",
  },
  {
    service: "heating-installation",
    question: "How long does install day take?",
    answer:
      "A straight gas furnace swap is one day. A heat pump install is one to two days depending on whether we are running new electrical. We give you a firm timeline at the estimate.",
  },

  // Mini-Splits
  {
    service: "mini-splits",
    question: "Where do mini-splits make sense?",
    answer:
      "Converted garages, ADUs, sun rooms, master bedrooms that the existing AC cannot reach, and additions. Anywhere ductwork would be a nightmare to extend, a mini-split is usually faster, cleaner, and cheaper.",
  },
  {
    service: "mini-splits",
    question: "Are mini-splits actually quiet?",
    answer:
      "Modern mini-splits are quieter than a refrigerator. The indoor head runs around 19 to 25 decibels on low. The outdoor unit is louder but it is outside.",
  },
  {
    service: "mini-splits",
    question: "What does a single-zone mini-split cost installed?",
    answer:
      "$4,500 to $7,500 in San Diego depending on head size and install complexity. Multi-zone systems with multiple indoor heads scale up from there. Tax credits and rebates apply to qualifying high-SEER systems.",
  },

  // Maintenance
  {
    service: "maintenance",
    question: "Is a maintenance plan actually worth it?",
    answer:
      "If your system is more than three years old, yes. Two tune-ups a year catch the small problems before they become emergencies, and the priority service plus 15% repair discount usually covers the plan cost the first time you need a callout.",
  },
  {
    service: "maintenance",
    question: "What does a tune-up actually include?",
    answer:
      "A full hour per visit. Refrigerant check, electrical inspection, capacitor and contactor test, blower clean, coil clean, condensate line flush, thermostat calibration, filter replacement, and a written one-page report. For gas systems, a combustion check and CO test.",
  },
  {
    service: "maintenance",
    question: "What happens if you find a problem during a tune-up?",
    answer:
      "We tell you. There is no commission on repairs we recommend during a tune-up. We split findings into safety, efficiency, and can-wait categories so you know what is urgent and what is not.",
  },
]

export function getFaqsForService(slug: string): FAQ[] {
  return faqs.filter((f) => f.service === slug)
}
