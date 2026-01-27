# Wilson Barbershop Co.

Marketing website for Wilson Barbershop Co., a family-friendly barbershop in South Gosforth, Newcastle upon Tyne. Established 2013.

**Live site:** [wilsonbarber.co.uk](https://wilsonbarber.co.uk)

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** (BrowserRouter) for SEO-friendly navigation
- **Cloudflare Pages** for hosting

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── SEO.tsx
│   └── Mustache.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── Blog.tsx
├── public/           # Static assets
│   ├── images/
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── og-image.png
│   └── _redirects    # Cloudflare Pages SPA routing
├── App.tsx           # Router setup
├── index.html        # HTML template & Tailwind config
├── vercel.json       # Legacy redirects (SEO)
├── wrangler.jsonc    # Cloudflare Pages config
└── types.ts          # TypeScript interfaces
```

## Features

- Online booking integration (Belliata)
- Dynamic open/closed status indicator
- Google Maps embed
- SEO optimised with JSON-LD schema markup
- Open Graph & Twitter card meta tags
- Mobile-responsive design
- Google Reviews integration

## SEO

- Clean URLs via BrowserRouter (`/services` not `/#/services`)
- XML sitemap at `/sitemap.xml`
- Structured data (Schema.org) for local business
- Geo meta tags for local search
- Optimised Open Graph image for social sharing

## Deployment

Hosted on Cloudflare Pages with automatic deployments from the `main` branch.

The `_redirects` file handles SPA routing, serving `index.html` for all routes so React Router can manage client-side navigation.

## Contact

- **Address:** Tenerife Buildings, 6 Station Rd, South Gosforth, Newcastle upon Tyne, NE3 1QD
- **Phone:** 0191 284 8786
- **Email:** information@wilsonbarber.co.uk
- **Instagram:** [@wilsonbarberco](https://instagram.com/wilsonbarberco)

## Developer

Developed by [Joel](https://www.linkedin.com/in/joel-lockey/)
