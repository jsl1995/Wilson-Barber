# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wilson Barbershop Co. marketing website - a React SPA for a Newcastle barbershop deployed on Vercel at wilsonbarber.co.uk.

## Tech Stack

- **React 19** with TypeScript and React Router DOM (HashRouter)
- **Vite** for build tooling
- **Tailwind CSS** (loaded via CDN in index.html)
- **Lucide React** for icons

## Commands

```bash
npm run dev       # Start dev server on localhost:3000
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Architecture

### Routing
Uses `HashRouter` with routes: `/`, `/services`, `/contact`, `/about`. Routes defined in `App.tsx`.

### Component Structure
- `components/` - Reusable UI (Navbar, Footer, Button, SEO, Mustache logo)
- `pages/` - Page components (Home, Services, Contact, About)
- `types.ts` - Shared TypeScript interfaces (Service, TeamMember, BusinessHours)

### SEO
Dynamic meta tags via `SEO` component. JSON-LD structured data (HairSalon schema) embedded in index.html. Sitemap and robots.txt in public/.

### Styling
Dark theme with brand colors defined in Tailwind config (index.html):
- `brand-dark: #050505` (primary background)
- `brand-charcoal: #121212` (secondary)
- `brand-gold: #FFFFFF` (accent)
- `brand-light: #FAFAFA`

### Business Logic
Home page has dynamic open/closed indicator calculating status from current day/time against operating hours.

## Key Files

- `App.tsx` - Router setup and layout wrapper
- `index.html` - Tailwind config, fonts, JSON-LD schema
- `vite.config.ts` - Build config with `@/` path alias

## External Integrations

- Booking: belliata.com
- Maps: Google Maps embed
- Social: Instagram @wilsonbarberco
