// Single source of truth for per-page SEO metadata and structured data.
// Used by components/SEO.tsx (client-side navigation) and scripts/prerender.mjs
// (static HTML generated at build time), so crawlers that don't run JavaScript
// see the same head tags as browsers.

export const SITE_URL = 'https://wilsonbarber.co.uk';
export const BUSINESS_NAME = 'Wilson Barbershop Co.';
export const BOOKING_URL = 'https://belliata.com/online-booking?vi=67638#/';
export const MAPS_URL = 'https://maps.app.goo.gl/YpmqUWwnJYiXfU6u5';
export const INSTAGRAM_URL = 'https://www.instagram.com/wilsonbarberco/';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** Breadcrumb label; omitted for the homepage. */
  breadcrumb?: string;
  noindex?: boolean;
  /** Extra page-level schema type (e.g. ContactPage). Defaults to WebPage. */
  pageType?: string;
}

export const PAGES = {
  home: {
    path: '/',
    title: `Barbers in South Gosforth, Newcastle | ${BUSINESS_NAME}`,
    description:
      'Family-friendly barbershop in South Gosforth, Newcastle since 2013. Haircuts, skin fades, beard trims and hot towel shaves. Book online with Perry.',
  },
  services: {
    path: '/services',
    title: `Haircuts, Skin Fades & Beard Trims | ${BUSINESS_NAME}`,
    description:
      "Haircuts, skin fades, kids' cuts, beard trims and hot towel shaves at our South Gosforth barbershop in Newcastle. See durations and book online.",
    breadcrumb: 'Services',
  },
  contact: {
    path: '/contact',
    title: `Contact & Opening Hours | ${BUSINESS_NAME}`,
    description:
      'Find us at 6 Station Rd, South Gosforth, Newcastle NE3 1QD, a 5 minute walk from the Metro. Opening hours, phone, map and online booking.',
    breadcrumb: 'Contact',
    pageType: 'ContactPage',
  },
  blog: {
    path: '/blog',
    title: `Blog | ${BUSINESS_NAME}`,
    description: 'Grooming tips, barbering insights and news from Wilson Barbershop Co. in South Gosforth, Newcastle.',
    breadcrumb: 'Blog',
    // Placeholder content only: keep out of the index until real posts exist.
    noindex: true,
  },
  notFound: {
    path: '/404',
    title: `Page Not Found | ${BUSINESS_NAME}`,
    description: 'Sorry, we could not find that page.',
    noindex: true,
  },
} satisfies Record<string, PageMeta>;

/** Routes that get their own prerendered HTML file. */
export const PRERENDER_ROUTES: { url: string; file: string; meta: PageMeta }[] = [
  { url: '/', file: 'index.html', meta: PAGES.home },
  { url: '/services', file: 'services.html', meta: PAGES.services },
  { url: '/contact', file: 'contact.html', meta: PAGES.contact },
  { url: '/blog', file: 'blog.html', meta: PAGES.blog },
  // Served by Cloudflare with a real 404 status for unknown paths.
  { url: '/__not-found__', file: '404.html', meta: PAGES.notFound },
];

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const serviceOffer = (name: string, description: string, serviceType: string) => ({
  '@type': 'Offer',
  itemOffered: { '@type': 'Service', name, description, serviceType },
});

const businessSchema = {
  '@type': 'HairSalon',
  '@id': BUSINESS_ID,
  name: BUSINESS_NAME,
  alternateName: 'Wilson Barber Co.',
  url: `${SITE_URL}/`,
  description:
    'Family-friendly barbershop serving all ages in South Gosforth, Newcastle upon Tyne, since 2013. Haircuts, skin fades, beard trims and traditional hot towel shaves.',
  image: [`${SITE_URL}/images/hero.webp`, OG_IMAGE],
  logo: OG_IMAGE,
  telephone: '+44 191 284 8786',
  email: 'information@wilsonbarber.co.uk',
  foundingDate: '2013',
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tenerife Buildings, 6 Station Rd',
    addressLocality: 'South Gosforth',
    addressRegion: 'Tyne and Wear',
    postalCode: 'NE3 1QD',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.00703,
    longitude: -1.60571,
  },
  hasMap: MAPS_URL,
  areaServed: [
    { '@type': 'Place', name: 'South Gosforth' },
    { '@type': 'City', name: 'Newcastle upon Tyne' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
  ],
  sameAs: [INSTAGRAM_URL, MAPS_URL],
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Book an appointment',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://belliata.com/online-booking?vi=67638',
      actionPlatform: ['https://schema.org/DesktopWebPlatform', 'https://schema.org/MobileWebPlatform'],
    },
    result: { '@type': 'Reservation', name: 'Barber appointment' },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Barbering Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Barber Packages',
        itemListElement: [
          serviceOffer('Haircut & Beard Trim', 'Full haircut paired with a tidy beard trim.', 'Barber package'),
          serviceOffer('Haircut & Beard Razor', 'Haircut plus beard shaping with a straight razor.', 'Barber package'),
          serviceOffer('Haircut & Hot Towel Line Up', 'Cut with a razor sharp hairline finish.', 'Barber package'),
          serviceOffer('Buzz Cut & Beard Trim', 'Uniform buzz cut with beard grooming.', 'Barber package'),
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Haircutting',
        itemListElement: [
          serviceOffer('Skin Fades & Restyles', 'Modern fade down to skin or a complete style overhaul.', 'Haircut'),
          serviceOffer("Under 12's Haircut", 'Haircuts for children under 12.', "Children's haircut"),
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Clipper Cut',
        itemListElement: [
          serviceOffer('Back & Sides Only', 'Tidy up around the ears and neck.', 'Clipper cut'),
          serviceOffer('Buzz Cut', 'One grade all over.', 'Clipper cut'),
          serviceOffer('Beard Trim + 1 Guard', 'Quick beard maintenance.', 'Beard trim'),
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Shaving',
        itemListElement: [
          serviceOffer('Hot Towel Line Up', 'Sharp edges with hot towel treatment.', 'Shave'),
          serviceOffer('Luxury Hot Towel Shave', 'Traditional straight razor shave with premium products.', 'Shave'),
        ],
      },
    ],
  },
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: BUSINESS_NAME,
  alternateName: 'Wilson Barber Co.',
  inLanguage: 'en-GB',
  publisher: { '@id': BUSINESS_ID },
};

export const canonicalUrl = (meta: PageMeta) => (meta.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${meta.path}`);

/** JSON-LD graph for a page. Indexable pages only. */
export function jsonLdFor(meta: PageMeta): object | null {
  if (meta.noindex) return null;
  const url = canonicalUrl(meta);
  const graph: object[] = [
    businessSchema,
    websiteSchema,
    {
      '@type': meta.pageType ?? 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': BUSINESS_ID },
      inLanguage: 'en-GB',
    },
  ];
  if (meta.breadcrumb) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: meta.breadcrumb, item: url },
      ],
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export interface HeadTag {
  tag: 'meta' | 'link' | 'script';
  attrs: Record<string, string>;
  content?: string;
}

/** Head tags (excluding <title>) for a page. Each is marked data-seo so the client can replace them. */
export function headTagsFor(meta: PageMeta): HeadTag[] {
  const url = canonicalUrl(meta);
  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: BUSINESS_NAME } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'en_GB' } },
    { tag: 'meta', attrs: { property: 'og:title', content: meta.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:image', content: OG_IMAGE } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: meta.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: meta.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: OG_IMAGE } },
  ];
  if (meta.noindex) {
    tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex, follow' } });
  } else {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: url } });
  }
  const ld = jsonLdFor(meta);
  if (ld) {
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify(ld) });
  }
  return tags;
}

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Serialise the full head block (title + tags) for static HTML. */
export function headHtmlFor(meta: PageMeta): string {
  const lines = [`<title>${escapeText(meta.title)}</title>`];
  for (const t of headTagsFor(meta)) {
    const attrs = Object.entries({ ...t.attrs, 'data-seo': '' })
      .map(([k, v]) => (v === '' ? k : `${k}="${escapeAttr(v)}"`))
      .join(' ');
    if (t.tag === 'script') {
      // Prevent "</script>" breaking out of the JSON-LD block.
      lines.push(`<script ${attrs}>${(t.content ?? '').replace(/</g, '\\u003c')}</script>`);
    } else {
      lines.push(`<${t.tag} ${attrs} />`);
    }
  }
  return lines.join('\n    ');
}
