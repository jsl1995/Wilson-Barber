# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wilson Barbershop Co. marketing website - a React app for a Newcastle barbershop, prerendered to static HTML at build time and deployed on Cloudflare (Workers static assets, `wrangler.jsonc`) at wilsonbarber.co.uk.

## Tech Stack

- **React 19** with TypeScript and React Router DOM (BrowserRouter on the client, StaticRouter for prerendering)
- **Vite** for build tooling
- **Tailwind CSS v3**, compiled via PostCSS (`tailwind.config.js`, `index.css`)
- **Lucide React** for icons

## Commands

```bash
npm run dev       # Start dev server on localhost:3000
npm run build     # Client build + SSR build + prerender (scripts/prerender.mjs) to dist/
npm run preview   # Preview production build
```

## Architecture

### Routing & prerendering
Routes are defined in `App.tsx` (`AppShell`): `/`, `/services`, `/contact`, `/blog` (noindex placeholder) and a `*` NotFound route. `pages/About.tsx` is intentionally NOT routed: it still contains template placeholder staff/images and must be rewritten with real content first.

`npm run build` renders each route in `PRERENDER_ROUTES` (`seo/pages.ts`) via `entry-server.tsx` into `dist/<route>.html` (plus `dist/404.html`) and generates `dist/sitemap.xml`. `index.tsx` hydrates the prerendered markup. Cloudflare serves `/services` from `services.html` and returns `404.html` with a 404 status for unknown paths (`not_found_handling: "404-page"`). Adding a route means adding it to `App.tsx`, `PAGES` and `PRERENDER_ROUTES`. Avoid rendering time-dependent output during the first render (see `OpenStatus` in `Home.tsx`) or hydration will mismatch.

### Component Structure
- `components/` - Reusable UI (Navbar, Footer, Button, SEO, Mustache logo)
- `pages/` - Page components (Home, Services, Contact, About)
- `types.ts` - Shared TypeScript interfaces (Service, TeamMember, BusinessHours)

### SEO
`seo/pages.ts` is the single source of truth for per-page title, description, canonical, OG/Twitter tags, robots and the JSON-LD `@graph` (HairSalon, WebSite, WebPage, BreadcrumbList). Prerendering writes these into the static HTML; `components/SEO.tsx` replaces all `[data-seo]` tags on client-side navigation. Don't add `aggregateRating`/`review` to the business schema (self-serving review markup). `public/` holds `robots.txt`, `llms.txt`, `_headers` (security headers) and `_redirects` (legacy URL 301s). Cloudflare prepends its managed AI-crawler rules to robots.txt.

### Styling
Dark theme with brand colors defined in `tailwind.config.js`:
- `brand-dark: #050505` (primary background)
- `brand-charcoal: #121212` (secondary)
- `brand-gold: #FFFFFF` (accent)
- `brand-light: #FAFAFA`

### Business Logic
Home page has dynamic open/closed indicator calculating status from current day/time against operating hours.

## Key Files

- `App.tsx` - Routes/layout (`AppShell`) and client router
- `seo/pages.ts` - Page metadata and structured data
- `entry-server.tsx`, `scripts/prerender.mjs` - Build-time prerendering and sitemap
- `index.html` - HTML template with `<!--app-head-->` / `<!--app-html-->` placeholders, fonts
- `vite.config.ts` - Build config with `@/` path alias

## External Integrations

- Booking: belliata.com (`BOOKING_URL`)
- Maps: Google Maps (`MAPS_URL`), click-to-load embed on Contact
- Social: Instagram @wilsonbarberco
