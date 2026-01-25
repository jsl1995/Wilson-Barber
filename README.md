# Wilson Barbershop Co.

Marketing website for Wilson Barbershop Co., a family-friendly barbershop in South Gosforth, Newcastle upon Tyne. Established 2013.

**Live site:** [wilsonbarber.co.uk](https://wilsonbarber.co.uk)

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** (HashRouter) for navigation
- **Vercel** for hosting

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
│   └── About.tsx
├── public/           # Static assets
│   ├── images/
│   ├── sitemap.xml
│   └── robots.txt
├── App.tsx           # Router setup
├── index.html        # HTML template & Tailwind config
└── types.ts          # TypeScript interfaces
```

## Features

- Online booking integration (Belliata)
- Dynamic open/closed status indicator
- Google Maps embed
- SEO optimised with JSON-LD schema markup
- Mobile-responsive design
- Google Reviews integration

## Contact

- **Address:** Tenerife Buildings, 6 Station Rd, South Gosforth, Newcastle upon Tyne, NE3 1QD
- **Phone:** 0191 284 8786
- **Email:** information@wilsonbarber.co.uk
- **Instagram:** [@wilsonbarberco](https://instagram.com/wilsonbarberco)
