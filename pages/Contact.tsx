import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Find Wilson Barber Co. in Newcastle. Check our opening hours, location map, and contact details to book your next appointment."
        canonicalPath="/contact"
      />

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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a href="https://www.google.com/maps/search/?api=1&query=Wilson+Barbershop+Co.+Newcastle" target="_blank" rel="noopener noreferrer" className="bg-brand-charcoal p-6 rounded-sm border border-neutral-800 hover:border-white transition-colors cursor-pointer block">
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
                  <h3 className="text-white font-bold mb-2">Contacts</h3>
                  <p className="text-neutral-400 text-sm mb-1">T: 0191 284 8786</p>
                  <p className="text-neutral-400 text-sm">E: <a href="mailto:information@wilsonbarber.co.uk" className="hover:text-white transition-colors">information@wilsonbarber.co.uk</a></p>
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
              {/* Placeholder for map */}
              <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                <div className="text-center p-8">
                   <MapPin className="h-16 w-16 text-neutral-600 mx-auto mb-4" />
                   <h3 className="text-white font-bold mb-2">Find Us In South Gosforth</h3>
                   <p className="text-neutral-500 text-sm mb-6">Tenerife Buildings, 6 Station Rd</p>
                   <Button variant="outline" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Wilson+Barbershop+Co.+Newcastle', '_blank')}>
                     Get Directions
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;