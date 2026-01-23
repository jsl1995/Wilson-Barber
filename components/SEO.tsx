import React, { useEffect } from 'react';
import { JsonLdProps } from '../types';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: JsonLdProps;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalPath, schema }) => {
  useEffect(() => {
    // Update Title
    document.title = title ? `${title} | Wilson Barbershop Co` : 'Wilson Barbershop Co Newcastle - South Gosforth';

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    if (canonicalPath) {
      linkCanonical.setAttribute('href', `https://www.wilsonbarber.co.uk${canonicalPath}`);
    }

    // Inject JSON-LD Schema
    if (schema) {
      let scriptSchema = document.querySelector('script[type="application/ld+json"]');
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptSchema);
      }
      const schemaData = {
        "@context": "https://schema.org",
        "@type": schema.type,
        ...schema.data
      };
      scriptSchema.textContent = JSON.stringify(schemaData);
    }

  }, [title, description, canonicalPath, schema]);

  return null;
};

export default SEO;