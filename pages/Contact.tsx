import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { PAGES, BOOKING_URL, MAPS_URL } from '../seo/pages';

const Contact: React.FC = () => {
  // The Google Maps embed is ~3 MB / 55 requests, so only load it on request.
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      <SEO page={PAGES.contact} />

      <div className="pt-24 min-h-screen bg-brand-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h1 className="font-serif text-4xl font-bold text-white mb-6">Get in Touch</h1>
                <p className="text-neutral-400">
                  Have a question about a service or need to reschedule? Give us a call or drop by the shop. Walk-ins are welcome, but appointments are recommended.
                </p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                  <Button size="lg">Book Appointment</Button>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="bg-brand-charcoal p-6 rounded-sm border border-neutral-800 hover:border-white transition-colors cursor-pointer block">
                  <MapPin className="h-8 w-8 text-brand-gold mb-4" />
                  <h3 className="text-white font-bold mb-2">Location</h3>
                  <p className="text-neutral-400 text-sm">
                    Tenerife Buildings, 6 Station Rd<br/>
                    South Gosforth, Newcastle upon Tyne<br/>
                    NE3 1QD
                  </p>
                </a>

                <div className="bg-brand-charcoal p-6 rounded-sm border border-neutral-800">
                  <Phone className="h-8 w-8 text-brand-gold mb-4" />
                  <h3 className="text-white font-bold mb-2">Phone &amp; Email</h3>
                  <p className="text-neutral-400 text-sm mb-1">T: <a href="tel:+441912848786" className="inline-block py-2 hover:text-white transition-colors">0191 284 8786</a></p>
                  <p className="text-neutral-400 text-sm">E: <a href="mailto:information@wilsonbarber.co.uk" className="inline-block py-2 break-all hover:text-white transition-colors">information@wilsonbarber.co.uk</a></p>
                </div>
              </div>

              <div>
                 <h3 className="text-white font-bold mb-4 flex items-center">
                   <Clock className="h-5 w-5 text-brand-gold mr-2" /> Opening Hours
                 </h3>
                 <div className="bg-neutral-900 p-6 rounded-sm space-y-3 text-sm">
                   <div className="flex justify-between text-neutral-500 border-b border-neutral-800 pb-2">
                     <span>Monday</span>
                     <span>Closed</span>
                   </div>
                   <div className="flex justify-between text-neutral-300 border-b border-neutral-800 pb-2">
                     <span>Tuesday</span>
                     <span>10:00 - 19:00</span>
                   </div>
                   <div className="flex justify-between text-neutral-300 border-b border-neutral-800 pb-2">
                     <span>Wednesday</span>
                     <span>10:00 - 19:00</span>
                   </div>
                   <div className="flex justify-between text-neutral-300 border-b border-neutral-800 pb-2">
                     <span>Thursday</span>
                     <span>10:00 - 19:00</span>
                   </div>
                   <div className="flex justify-between text-neutral-300 border-b border-neutral-800 pb-2">
                     <span>Friday</span>
                     <span>10:00 - 19:00</span>
                   </div>
                   <div className="flex justify-between text-neutral-300 border-b border-neutral-800 pb-2">
                     <span>Saturday</span>
                     <span>08:00 - 16:00</span>
                   </div>
                   <div className="flex justify-between text-neutral-500">
                     <span>Sunday</span>
                     <span>Closed</span>
                   </div>
                 </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="h-full min-h-[400px] bg-neutral-800 rounded-sm overflow-hidden relative border border-neutral-700">
              {showMap ? (
                <iframe
                  src="https://www.google.com/maps?q=Wilson+Barbershop+Co.,+6+Station+Rd,+South+Gosforth,+Newcastle+upon+Tyne+NE3+1QD&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wilson Barbershop Co. location map"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center bg-brand-charcoal">
                  <MapPin className="h-10 w-10 text-brand-gold" />
                  <p className="text-neutral-300">
                    6 Station Rd, South Gosforth<br />Newcastle upon Tyne NE3 1QD<br />
                    <span className="text-neutral-500 text-sm">5 minute walk from South Gosforth Metro Station</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" onClick={() => setShowMap(true)}>Show Map</Button>
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">Open in Google Maps</Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;