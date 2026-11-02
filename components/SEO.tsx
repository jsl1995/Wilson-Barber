import React, { useEffect } from 'react';
import { PageMeta, headTagsFor } from '../seo/pages';

interface SEOProps {
  page: PageMeta;
}

/**
 * Keeps <head> in sync during client-side navigation. The same tags are written
 * into the static HTML at build time (scripts/prerender.mjs), so crawlers that
 * don't run JavaScript still see per-page metadata.
 */
const SEO: React.FC<SEOProps> = ({ page }) => {
  useEffect(() => {
    document.title = page.title;

    // Replace every SEO-managed tag so nothing from the previous route lingers.
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
    for (const t of headTagsFor(page)) {
      const el = document.createElement(t.tag);
      for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v);
      el.setAttribute('data-seo', '');
      if (t.content) el.textContent = t.content;
      document.head.appendChild(el);
    }
  }, [page]);

  return null;
};

export default SEO;
