import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppShell } from './App';

export { PRERENDER_ROUTES, headHtmlFor, SITE_URL } from './seo/pages';

/** Render the app for a URL to static HTML (used by scripts/prerender.mjs). */
export function render(url: string): string {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </React.StrictMode>,
  );
}
