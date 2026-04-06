import { launch } from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const ROUTES = ['/', '/services', '/contact'];

// Serve the dist folder on a random port
function serve(dir) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(dir, req.url === '/' ? 'index.html' : req.url);

      // SPA fallback: if file doesn't exist, serve index.html
      if (!existsSync(filePath) || filePath.endsWith(dir)) {
        filePath = join(dir, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const types = {
          html: 'text/html', js: 'application/javascript', css: 'text/css',
          json: 'application/json', png: 'image/png', jpg: 'image/jpeg',
          webp: 'image/webp', svg: 'image/svg+xml', woff2: 'font/woff2',
        };
        res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(0, () => {
      resolve({ server, port: server.address().port });
    });
  });
}

async function prerender() {
  console.log('Starting prerender...');

  const { server, port } = await serve(DIST);
  const browser = await launch({ headless: true });

  for (const route of ROUTES) {
    console.log(`  Prerendering ${route}`);
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0', timeout: 15000 });

    // Wait a bit for React to finish rendering and SEO component to update head
    await page.waitForSelector('main', { timeout: 10000 });
    await new Promise((r) => setTimeout(r, 1000));

    const html = await page.content();
    await page.close();

    // Write the prerendered HTML
    const outDir = route === '/' ? DIST : join(DIST, route);
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html);
    console.log(`  Wrote ${join(outDir, 'index.html')}`);
  }

  await browser.close();
  server.close();
  console.log('Prerender complete!');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
