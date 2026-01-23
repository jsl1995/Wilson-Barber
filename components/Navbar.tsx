import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Mustache from './Mustache';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-4 group">
            <div className="text-white transition-transform duration-300 group-hover:rotate-6">
               <Mustache className="h-8 w-auto" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif text-2xl font-black tracking-widest text-white leading-none uppercase">
                Wilson
              </span>
              <span className="text-[0.65rem] font-medium tracking-[0.3em] text-white/80 uppercase mt-1">
                Barbershop Co.
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-white relative group ${
                    isActive ? 'text-white' : 'text-neutral-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
            <a href="https://belliata.com/online-booking?vi=67638#/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="sm">Book Now</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-brand-charcoal border-b border-neutral-800 shadow-xl transition-all duration-300 ease-in-out transform ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-bold uppercase tracking-widest transition-colors ${
                    isActive ? 'text-white' : 'text-neutral-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
             <a href="https://belliata.com/online-booking?vi=67638#/" target="_blank" rel="noopener noreferrer" className="w-full mt-4 block">
              <Button variant="primary" className="w-full">Book Appointment</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;