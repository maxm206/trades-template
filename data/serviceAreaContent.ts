export type ServiceAreaContent = {
  city: string
  slug: string
  metaDescription: string
  paragraphs: string[]
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/\s+/g, "-")
}

const raw: Omit<ServiceAreaContent, "slug">[] = [
  {
    city: "San Diego",
    metaDescription:
      "AC, heating, and HVAC service across San Diego. Same-day repair, financing on installs, 24/7 emergency line. Licensed, insured, locally owned.",
    paragraphs: [
      "San Diego is our home base. We work in every neighborhood from Pacific Beach to Hillcrest to Mission Valley to Rancho Bernardo. Coastal homes deal with salt air and humidity that eats outdoor condensers; inland homes deal with summer afternoons that hit triple digits. Different problems, same goal: a system that works when you turn it on.",
      "Older San Diego homes (1950s through 1970s) often have wall heaters and window AC that have aged out. We modernize them with mini-splits or central systems depending on the layout. New construction and recent remodels usually have central HVAC that just needs the right tune-up cadence to last fifteen-plus years.",
      "Most San Diego calls land a tech same-day. We pull permits when required and coordinate inspections directly with the city.",
    ],
  },
  {
    city: "Poway",
    metaDescription:
      "HVAC service in Poway. AC repair, furnace install, mini-splits, and maintenance plans. Same-day service available.",
    paragraphs: [
      "Poway summers are real. Inland enough to hit 100 degrees on a hot week, with low coastal influence. Most Poway homes need an AC that can actually keep up with afternoon load, not just take the edge off. We size systems for what your house actually does on the worst day of the year.",
      "Poway has a lot of larger lots and ranch-style homes, which means longer duct runs and outdoor units that often sit a long way from the air handler. We have done enough work in this part of the county to know where the common ductwork shortcuts were taken in 1980s builds and where to look first when comfort is uneven room to room.",
      "We dispatch to Poway daily. Most repair calls get a tech out same-day, install assessments scheduled within 48 hours.",
    ],
  },
  {
    city: "Escondido",
    metaDescription:
      "AC, heating, and HVAC service in Escondido. Trusted local techs, written estimates, same-day repair available.",
    paragraphs: [
      "Escondido gets warm. Inland valley climate means hot summers and cool nights — heat pumps work especially well here because you are using the system in both directions for a meaningful chunk of the year. We install Mitsubishi, Daikin, and Fujitsu mini-splits and Bosch and Carrier central heat pumps across Escondido.",
      "Older Escondido neighborhoods often have homes that started with wall heaters and added AC later. The result is mismatched systems that fight each other. We can clean that up with a single matched system that handles heating and cooling efficiently.",
      "Same-day repair calls available. Free in-home estimates for installs, with rebate paperwork handled at no charge.",
    ],
  },
  {
    city: "El Cajon",
    metaDescription:
      "HVAC service in El Cajon. AC repair, install, mini-splits, and maintenance plans. Licensed, insured, locally owned.",
    paragraphs: [
      "El Cajon is hot. The valley traps heat, and a marginally-sized AC will run all afternoon and still not catch up. We see a lot of replacements here because the original equipment was undersized for the actual load. Doing the math up front and installing the right size matters more in El Cajon than anywhere else in the county.",
      "Many homes here are older single-story ranches with original ductwork. The duct system is often the bottleneck — leaky returns, undersized supplies, kinked flex. A new AC on bad ducts is a frustrating purchase. We assess the ducts before quoting equipment.",
      "We dispatch to El Cajon every day. After-hours emergency line answered live.",
    ],
  },
  {
    city: "La Mesa",
    metaDescription:
      "HVAC service in La Mesa. AC repair, furnace install, maintenance plans. Licensed, insured, fast response.",
    paragraphs: [
      "La Mesa has a mix of mid-century homes, recent remodels, and craftsman bungalows. Each comes with its own quirks. Mid-century homes often have original gas wall heaters; remodels usually have modern central systems but with shortcuts in the duct layout; bungalows are tight spaces where mini-splits often beat ducted systems hands down.",
      "Hillside La Mesa homes have a separate consideration: where the outdoor condenser sits. We deal with limited backyards, side-yard easements, and rooftop installs regularly. The placement affects efficiency and longevity, and getting it right is part of the install we do not skip on.",
      "Same-day service in La Mesa. Tune-ups and emergency repairs both available year-round.",
    ],
  },
  {
    city: "Chula Vista",
    metaDescription:
      "HVAC service in Chula Vista. AC, heating, mini-splits, and maintenance. Same-day service, financing available.",
    paragraphs: [
      "Chula Vista runs from coastal flat ground in the west to the foothills in the east. The climate changes meaningfully across the city — west Chula Vista is mild, east Chula Vista summer afternoons match Escondido. We size the equipment to the part of town you actually live in, not a generic San Diego average.",
      "Newer East Chula Vista construction generally has modern HVAC that responds well to a maintenance plan. Older neighborhoods west of I-805 often have systems that have been patched too many times — the right call is usually a full replacement instead of another repair.",
      "We dispatch to Chula Vista daily. Bilingual techs available on request.",
    ],
  },
  {
    city: "Oceanside",
    metaDescription:
      "HVAC service in Oceanside. AC, heating, mini-splits, repair and install. Same-day service available.",
    paragraphs: [
      "Oceanside is mild compared to inland cities, but the salt air does damage. Outdoor condensers in coastal Oceanside corrode faster than inland units — coil failures, fan motor seizures, and electrical contactor pitting are common at year ten instead of year fifteen. We use coastal-rated components on installs near the coast and we add a mid-year cleaning to maintenance plans for these homes.",
      "Mini-splits make a lot of sense in Oceanside. Many homes here are smaller, single-story, and built before central HVAC was standard. Adding ducts is invasive and expensive; a mini-split system handles the same job for less money and less mess.",
      "Same-day service to all of Oceanside. We service the inland portions out toward Bonsall and Vista as well.",
    ],
  },
]

export const serviceAreaContent: ServiceAreaContent[] = raw.map((c) => ({
  ...c,
  slug: slugify(c.city),
}))

export function getCityContent(slug: string): ServiceAreaContent | undefined {
  return serviceAreaContent.find((c) => c.slug === slug)
}
