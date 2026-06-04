# Trades Advisory Template

Reusable Next.js 14 template for HVAC, plumbing, and home services client websites. Currently configured as the **TA Home Services** demo at [demo.tradesadvisory.com](https://demo.tradesadvisory.com).

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

## Configuring for a client's platform

The `BookingWidget` and chat widget are driven by `siteConfig.platform` in `config/site.ts`. Pick one platform per client. Whatever URL you paste in is embedded as an iframe wherever a booking widget appears (`/contact#book`, `/features`, etc.).

### ServiceTitan

```ts
platform: {
  type: "servicetitan",
  schedulingProUrl: "https://book.servicetitan.com/your-tenant/embed",
  tenantId: "your-tenant-id",        // optional, for future API work
  chatWidget: "none",                // ServiceTitan ships its own chat
}
```

### Housecall Pro

```ts
platform: {
  type: "housecallpro",
  hcpBookingUrl: "https://book.housecallpro.com/book/Your-Company/abc123",
  hcpChatSnippet: "your-snippet-id", // optional — see chat note below
  chatWidget: "none",                // HCP ships its own chat
}
```

To enable the HCP chat widget, paste the JS snippet from your HCP dashboard into `app/layout.tsx` (in the `<head>` or via `next/script`). The empty `<div id="hcp-chat">` mount target is rendered automatically when `chatWidget` is set to `"hcp"`.

### Jobber

```ts
platform: {
  type: "jobber",
  jobberBookingUrl: "https://clienthub.getjobber.com/client_hubs/your-id/online_booking/new",
  chatWidget: "rosie",               // Jobber has no native chat — use Rosie or "none"
}
```

### ZenBooker

```ts
platform: {
  type: "zenbooker",
  zenbookerUrl: "https://app.zenbooker.com/booking/your-business",
  chatWidget: "rosie",
}
```

Leaving `zenbookerUrl` blank falls back to the TA Home Services demo's fake calendar UI (used by `demo.tradesadvisory.com`).

### No platform (contact form fallback)

```ts
platform: {
  type: "none",
  bookingUrl: "https://calendly.com/your-handle/30min",  // optional — opens in new tab
  chatWidget: "rosie",                                    // or "none"
}
```

If `bookingUrl` is set, the booking widget becomes a single "Open booking" button that opens that URL in a new tab. Otherwise it renders the inline contact form.

### Chat widget options

| Setting | Behavior |
|---|---|
| `"rosie"` | Renders the demo Rosie AI chat panel |
| `"hcp"` | Renders an empty mount target for the HCP chat snippet |
| `"none"` | Hides the chat widget entirely |

The chat widget is force-hidden when `platform.type` is `"servicetitan"` or `"housecallpro"` — both ship their own native chat.

## Deployment

Push to GitHub, import to Vercel, connect domain. Static prerendering means every page is HTML at the edge — no server cost beyond the function invocations for OG image generation.
