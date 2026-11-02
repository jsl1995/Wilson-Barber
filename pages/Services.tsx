import React from 'react';
import SEO from '../components/SEO';
import { PAGES, BOOKING_URL } from '../seo/pages';
import Button from '../components/Button';
import Mustache from '../components/Mustache';

interface ServiceItem {
  title: string;
  duration: string;
  description: string;
}

interface ServiceCategory {
  name: string;
  items: ServiceItem[];
}

const Services: React.FC = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      name: "Barber Packages",
      items: [
        {
          title: 'Haircut & Beard Trim',
          duration: '45 mins',
          description: 'Full haircut paired with a tidy beard trim.'
        },
        {
          title: 'Haircut & Beard Razor',
          duration: '45 mins',
          description: 'Haircut plus beard shaping with a straight razor.'
        },
        {
          title: 'Haircut & Hot Towel Line Up',
          duration: '45 mins',
          description: 'Cut with a razor sharp hairline finish.'
        },
        {
          title: 'Buzz Cut & Beard Trim',
          duration: '30 mins',
          description: 'Uniform buzz cut with beard grooming.'
        }
      ]
    },
    {
      name: "Haircutting",
      items: [
        {
          title: 'Skin Fades & Restyles',
          duration: '30 mins',
          description: 'Modern fade down to skin or a complete style overhaul.'
        },
        {
          title: "Under 12's",
          duration: '30 mins',
          description: 'Expert grooming for the younger gentlemen.'
        }
      ]
    },
    {
      name: "Clipper Cut",
      items: [
        {
          title: 'Back & Sides Only',
          duration: '15 mins',
          description: 'Tidy up around the ears and neck.'
        },
        {
          title: 'Buzz Cut',
          duration: '15 mins',
          description: 'One grade all over.'
        },
        {
          title: 'Beard Trim + 1 Guard',
          duration: '15 mins',
          description: 'Quick beard maintenance.'
        }
      ]
    },
    {
      name: "Shaving",
      items: [
        {
          title: 'Hot Towel Line Up',
          duration: '15 mins',
          description: 'Sharp edges with hot towel treatment.'
        },
        {
          title: 'Luxury Hot Towel Shave',
          duration: '45 mins',
          description: 'Traditional straight razor shave with premium products.'
        }
      ]
    }
  ];

  return (
    <>
      <SEO page={PAGES.services} />

      <div className="pt-24 min-h-screen bg-brand-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Barber Services in South Gosforth</h1>
            <Mustache className="w-12 h-4 text-brand-gold mx-auto mb-6 opacity-80" />
            <p className="text-neutral-400 leading-relaxed">
              From skin fades and restyles to kids' cuts, beard trims and hot towel shaves, we look after customers of all ages at our barbershop on Station Road, South Gosforth, Newcastle. Every service includes a consultation to make sure you get exactly what you're looking for, tailored to your style and hair type.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {serviceCategories.map((category) => (
              <div key={category.name} className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-white mb-6 border-b border-neutral-800 pb-2 inline-block">
                  {category.name}
                </h2>
                <div className="grid gap-6">
                  {category.items.map((service, index) => (
                    <a 
                      key={`${category.name}-${index}`}
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-sm bg-brand-charcoal border border-neutral-800 hover:border-brand-gold/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex-1 pr-8">
                        <div className="flex items-baseline justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors font-serif">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-neutral-400 text-sm mb-2 md:mb-0">{service.description}</p>
                      </div>
                      
                      <div className="hidden md:flex flex-col items-end pl-8 border-l border-neutral-800 min-w-[120px]">
                        <span className="text-brand-gold text-sm font-medium mb-1">Book Now &rarr;</span>
                        <span className="text-xs text-neutral-500 uppercase tracking-wide">{service.duration}</span>
                      </div>
                      
                      {/* Mobile Duration */}
                      <div className="md:hidden mt-3 pt-3 border-t border-neutral-700 flex justify-between items-center">
                        <span className="text-xs text-neutral-500 uppercase tracking-wide">{service.duration}</span>
                        <span className="text-brand-gold text-sm font-medium">Book Now &rarr;</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-neutral-900 p-8 rounded-sm max-w-4xl mx-auto">
             <h3 className="text-white font-serif text-2xl mb-4">Ready to look your best?</h3>
             <p className="text-neutral-400 mb-8">Appointments fill up fast. We recommend booking 2-3 days in advance.</p>
             <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
               <Button size="lg">Book Appointment Now</Button>
             </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;