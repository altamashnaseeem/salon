# Hair Court — premium salon website

A complete responsive Next.js App Router / TypeScript website concept for Hair Court Salon, Sector 62, Noida. Warm ivory and espresso art direction, editorial typography, local photographs bundled in the project, and a lightweight component architecture.

## Run

Requires Node.js 20.9 or newer (Node.js 22 recommended).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production: `npm run build`. Static export is written to `out/`. `npm start` is not used for static exports; use a static host or `npx serve out`.

## Deploy on Vercel

Import `altamashnaseeem/salon`, choose Next.js, and deploy. No paid API keys or database are required. For other static hosts, build with `npm ci && npm run build` and publish `out/`.

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin and rebuild. Keep `NEXT_PUBLIC_LIVE_SITE=false` for the sales concept. After owner approval, replace sample content and stock images, verify all business data, then set it to `true` and rebuild. This enables indexing and HairSalon structured data and removes the concept notice. Never represent the concept as the official salon site before permission.

## Included

- Responsive homepage and mobile navigation with persistent mobile appointment CTA
- Four statically generated service pages and filterable service menu
- Gallery with keyboard-accessible native dialog lightbox
- Validated enquiry builder with date checks, explicit consent and message preview
- WhatsApp handoff and click-to-call; visitors send messages themselves
- Google Maps directions / review links, FAQs, privacy page and custom 404
- Page titles, descriptions, canonical URLs, Open Graph, Twitter cards, sitemap, robots and conditional HairSalon JSON-LD
- Semantic HTML, labelled fields, visible focus, skip link and reduced motion support

## Booking limitations

This is an enquiry flow, not a live scheduling system. No appointments, payments, reminder messages, client accounts or availability are persisted. The business must confirm every request. Verify that its supplied telephone number supports WhatsApp before launch. No automatic messages are sent by this project.

## Content checklist before official launch

Verify business name, exact address, telephone, opening hours, services, price menu, treatment policy and WhatsApp availability with the owner. Replace stock photos with licensed salon/client photography. Add real stylist biographies only when supplied. Review privacy notice and obtain approval before enabling indexing. Connect Google Search Console and submit the sitemap after setting the production domain. Ranking and performance scores are not guaranteed.

## Images and design

Awwwards was requested as inspiration but could not be retrieved reliably during this build; no specific Awwwards design is claimed or copied. Original editorial layout with illustrative stock photography from Unsplash, downloaded to `public/images` (not the salon or its clients):

- hero: photo-1524504388940-b1c1722653e1
- cut: photo-1562322140-8baeececf3df
- colour: photo-1519699047748-de8e457a634e
- care: photo-1521590832167-7bcbfaa6381f
- occasion: photo-1488426862026-3ee34a7d66df

Google Fonts: DM Sans and Italiana, loaded via stylesheet with system fallbacks. Check font/image licensing for your final commercial usage. No fabricated testimonials, ratings, staff profiles, prices or opening hours are published.

## Customise

Business data and services: `lib/salon.ts`. Layout and colours: `app/globals.css`. Homepage: `app/page.tsx`. Booking behavior: `components/Booking.tsx`.

## Validation

Production build and TypeScript compilation are checked during delivery. Re-run `npm run build` after edits. Test the WhatsApp handoff manually without sending a test message to the real business.
