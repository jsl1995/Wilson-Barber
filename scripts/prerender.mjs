// Build-time prerendering: writes one static HTML file per route into dist/,
// with per-page <head> tags and server-rendered markup, plus sitemap.xml.
// Run after `vite build` (client) and `vite build --ssr entry-server.tsx`.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, PRERENDER_ROUTES, headHtmlFor, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> / <!--app-html--> placeholders');
}

for (const { url, file, meta } of PRERENDER_ROUTES) {
  const html = template
    .replace('<!--app-head-->', headHtmlFor(meta))
    .replace('<!--app-html-->', render(url));
  writeFileSync(path.join(dist, file), html);
  console.log(`prerendered ${url} -> dist/${file}`);
}

// Sitemap: indexable routes only, lastmod from the last git commit touching the page.
const pageSource = { '/': 'pages/Home.tsx', '/services': 'pages/Services.tsx', '/contact': 'pages/Contact.tsx' };
const lastmod = (file) => {
  try {
    const d = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { cwd: root }).toString().trim();
    if (d) return d;
  } catch {
    // git unavailable (e.g. shallow build without history): fall through
  }
  return new Date().toISOString().slice(0, 10);
};
const urls = PRERENDER_ROUTES.filter((r) => !r.meta.noindex).map((r) => {
  const loc = r.url === '/' ? `${SITE_URL}/` : `${SITE_URL}${r.url}`;
  const mod = pageSource[r.url] ? `\n    <lastmod>${lastmod(pageSource[r.url])}</lastmod>` : '';
  return `  <url>\n    <loc>${loc}</loc>${mod}\n  </url>`;
});
writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
);
console.log(`wrote dist/sitemap.xml (${urls.length} URLs)`);

rmSync(ssrDir, { recursive: true, force: true });
