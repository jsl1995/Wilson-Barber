import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { PAGES } from '../seo/pages';

const NotFound: React.FC = () => (
  <>
    <SEO page={PAGES.notFound} />
    <div className="pt-24 min-h-[70vh] bg-brand-dark flex items-center">
      <div className="container mx-auto px-4 py-16 text-center max-w-xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Page Not Found</h1>
        <p className="text-neutral-400 mb-10">
          Sorry, we couldn't find that page. It may have moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/"><Button className="w-full">Back to Home</Button></Link>
          <Link to="/services"><Button variant="outline" className="w-full">View Services</Button></Link>
        </div>
      </div>
    </div>
  </>
);

export default NotFound;
