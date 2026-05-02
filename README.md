# Trades Advisory Template

Reusable Next.js 14 template for HVAC, plumbing, and home services client websites. Currently configured as the **Summit Heating & Air** demo at [demo.tradesadvisory.com](https://demo.tradesadvisory.com).

## Stack

- Next.js 14 App Router, TypeScript, Tailwind CSS
- `next/font/google` (Bricolage Grotesque + Inter)
- `lucide-react`, `framer-motion`

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Cloning for a new client

1. Duplicate the repo (or fork + rename).
2. Edit `config/site.ts` — business name, phone, colors, services, service areas, hours, integrations.
3. Edit `data/services/*.ts` — per-service detail content + bullets + what-to-expect.
4. Edit `data/faqs.ts` — service-specific FAQs.
5. Edit `data/serviceAreaContent.ts` — per-city paragraphs.
6. Edit `data/reviews.ts` — real reviews from Google/Yelp.
7. Drop client photos in `public/` and replace `<PhotoPlaceholder>` calls with `<Image>` where applicable.
8. Deploy to Vercel + connect the client's domain.

## Project structure

```
app/
  layout.tsx            root layout, fonts, color CSS-var injection, global widgets
  page.tsx              homepage
  services/             service index + dynamic [slug]
  about/
  contact/              info + ContactForm + BookingWidget
  features/             add-on showcase
  areas/[city]/         dynamic city pages
  sitemap.ts robots.ts opengraph-image.tsx
components/
  layout/               Navbar, Footer, EmergencyBanner, MobileCallBar, RosieChatWidget
  sections/             Hero, ServicesGrid, WhyChooseUs, ReviewsSection, GBPCard, ...
  cards/                ServiceCard, ReviewCard
  forms/                ContactForm, BookingWidget
  ui/                   Button, Container, Icon, PhotoPlaceholder, SectionTitle, ...
  seo/                  LocalBusinessSchema, FAQSchema
config/site.ts          single source of truth
data/                   reviews, FAQs, service detail copy, city content
lib/                    cn (class joiner), colors (hex→rgb triplet)
```

## Color system

Colors live in `config/site.ts` as hex strings. They get injected at build time as RGB triplets into CSS variables in `app/layout.tsx`. Tailwind tokens (`primary`, `accent`, `dark`, etc.) reference those variables, so:

```jsx
<div className="bg-primary text-light hover:bg-accent/80">
```

works and updates automatically when you change the config.

## Add-on integrations

The demo includes faithful UI placeholders for:

- **Online Booking** (ZenBooker) — `BookingWidget` with calendar + time slots
- **AI Receptionist** (Rosie AI) — floating chat widget, demo conversation
- **Review Generation** (NiceJob) — review feed + leave-a-review CTA
- **GBP Optimization** — `GBPCard` simulated profile
- **Service Area SEO Pages** — full city × service routes
- **Real Photo Shoot Day** — placeholder photos throughout

None are wired to real APIs. Replace the placeholders with real embeds when integrations go live.

## Deployment

Push to GitHub, import to Vercel, connect domain. Static prerendering means every page is HTML at the edge — no server cost beyond the function invocations for OG image generation.
