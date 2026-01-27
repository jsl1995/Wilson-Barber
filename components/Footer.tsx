import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Mustache from './Mustache';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-2">
               <Mustache className="h-6 w-auto text-brand-gold" />
               <span className="text-xs text-neutral-500 tracking-[0.2em] font-bold">EST. 2013</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white leading-none">
              Wilson <span className="text-brand-gold">Barber Co.</span>
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Traditional barbering for the modern gentleman. Experience precision cuts and luxury shaves in a relaxed atmosphere.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/wilsonbarberco/?hl=en-gb" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-brand-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><NavLink to="/" className="hover:text-brand-gold transition-colors">Home</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-gold transition-colors">Services & Pricing</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-white tracking-wider uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Tenerife+Buildings,+6+Station+Rd,+South+Gosforth,+Newcastle+upon+Tyne+NE3+1QD,+UK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  Tenerife Buildings, 6 Station Rd,<br />South Gosforth, Newcastle upon Tyne,<br />NE3 1QD
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <a href="tel:01912848786" className="hover:text-brand-gold transition-colors">0191 284 8786</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-gold shrink-0" />
                <a href="mailto:information@wilsonbarber.co.uk" className="hover:text-brand-gold transition-colors">information@wilsonbarber.co.uk</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-bold text-white tracking-wider uppercase text-sm">Opening Hours</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li className="flex justify-between">
                <span>Tue - Fri</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>08:00 - 16:00</span>
              </li>
              <li className="flex justify-between text-neutral-600">
                <span>Sun - Mon</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Wilson Barber Co. All rights reserved. Developed by <a href="https://www.linkedin.com/in/joel-lockey/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">Joel</a></p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;