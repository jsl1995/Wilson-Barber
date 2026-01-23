import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, CheckCircle2, ExternalLink, Instagram } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Mustache from '../components/Mustache';

const Home: React.FC = () => {
  const structuredData = {
    type: "HairSalon",
    data: {
      "name": "Wilson Barbershop Co.",
      "image": "https://picsum.photos/1200/630",
      "telephone": "0191 284 8786",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tenerife Buildings, 6 Station Rd",
        "addressLocality": "South Gosforth, Newcastle upon Tyne",
        "postalCode": "NE3 1QD",
        "addressCountry": "UK"
      },
      "priceRange": "££",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "reviewCount": "162"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "10:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "16:00"
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Modern Men's Grooming" 
        description="Wilson Barbershop Co. offers premium haircuts, beard trims, and hot towel shaves in Newcastle. Experience the art of traditional barbering."
        canonicalPath="/"
        schema={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark">
        {/* Background Image with heavy darkening */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1005/1920/1080" 
            alt="Barber working on client" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <div className="mb-10 animate-fade-in-up flex flex-col items-center justify-center">
            <div className="text-white mb-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
               <Mustache className="w-40 h-auto drop-shadow-2xl" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-black tracking-widest text-white leading-none uppercase drop-shadow-lg text-center">
              Wilson
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <span className="h-[1px] w-12 bg-white/50"></span>
              <span className="text-sm md:text-lg font-bold tracking-[0.4em] text-white/90 uppercase text-shadow-sm">
                Barbershop Co.
              </span>
              <span className="h-[1px] w-12 bg-white/50"></span>
            </div>
            <span className="text-[0.6rem] md:text-xs font-medium tracking-[0.2em] text-white/60 uppercase mt-4">
              Est. 2013
            </span>
          </div>

          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-xl mx-auto leading-relaxed font-light">
            Traditional techniques. Modern styling. <br/>A haircut is not just a service, it's an identity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://belliata.com/online-booking?vi=67638#/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                Book Appointment
              </Button>
            </a>
            <Link to="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <div className="bg-white text-black border-y border-neutral-800">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Master Barbers", desc: "10+ years average experience" },
              { icon: Clock, title: "Online Booking", desc: "Zero wait time guaranteed" },
              { icon: MapPin, title: "Newcastle Based", desc: "South Gosforth Location" }
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-4 justify-center md:justify-start">
                <feature.icon className="h-8 w-8 text-black" />
                <div>
                  <h3 className="font-bold text-lg uppercase tracking-wide">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Teaser */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Instagram Feed Replacement */}
            <div className="lg:w-1/2 relative w-full">
               <div className="absolute -top-4 -left-4 w-full h-full border border-white/20 hidden lg:block" />
               <div className="relative z-10 bg-neutral-900 border border-neutral-800 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center space-x-3">
                        <div className="p-2 bg-brand-charcoal rounded-full border border-white/10">
                           <Instagram className="h-5 w-5 text-white" />
                        </div>
                        <div>
                           <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Follow Us</p>
                           <p className="text-white font-serif italic">@wilsonbarberco</p>
                        </div>
                     </div>
                     <a href="https://www.instagram.com/wilsonbarberco/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-8">View Profile</Button>
                     </a>
                  </div>
                  
                  {/* Grid of "posts" */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                     {[
                        `${import.meta.env.BASE_URL}images/insta1.jpg`,
                        `${import.meta.env.BASE_URL}images/insta2.jpg`,
                        `${import.meta.env.BASE_URL}images/insta3.jpg`,
                        `${import.meta.env.BASE_URL}images/insta4.jpg`
                     ].map((src, idx) => (
                        <a key={idx} href="https://www.instagram.com/wilsonbarberco/" target="_blank" rel="noopener noreferrer" className="block relative aspect-square overflow-hidden group">
                           <img src={src} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Instagram className="h-6 w-6 text-white" />
                           </div>
                        </a>
                     ))}
                  </div>
                  
                  <div className="text-center pt-2 border-t border-neutral-800">
                      <p className="text-neutral-500 text-xs">Tag us in your fresh cut #WilsonBarberCo</p>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-serif text-5xl font-bold text-white mb-6">More Than Just a Haircut</h2>
              <div className="h-1 w-20 bg-white mb-8"></div>
              <p className="text-neutral-400 mb-8 leading-relaxed text-lg font-light">
                At Wilson Barbershop Co., we believe that a haircut is an experience, not just a chore. Our shop is a sanctuary where you can relax, unwind, and enjoy the company of like-minded individuals while receiving top-tier grooming services.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Complimentary beverage with every service",
                  "Consultation tailored to your face shape",
                  "Premium grooming products used exclusively"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-neutral-300">
                    <CheckCircle2 className="h-5 w-5 text-white mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center text-white font-medium hover:text-neutral-400 transition-colors uppercase tracking-widest border-b border-white pb-1">
                Read our full story <ArrowRight className="ml-4 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-black px-6 py-3 rounded-full border border-neutral-800 mb-8">
               <span className="font-bold text-white mr-3 uppercase tracking-wider text-xs">Rated 4.6 Stars</span>
               <div className="flex text-white space-x-1 mr-3">
                 {[...Array(4)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                 <div className="relative h-3 w-3">
                    <Star className="absolute top-0 left-0 h-3 w-3 text-neutral-600" />
                    <div className="absolute top-0 left-0 h-3 w-[60%] overflow-hidden">
                      <Star className="h-3 w-3 fill-current text-white" />
                    </div>
                 </div>
               </div>
               <span className="text-neutral-500 text-xs">162 reviews on Google</span>
            </div>
            <h2 className="font-serif text-4xl text-white font-bold mb-4">Client Stories</h2>
            <Mustache className="w-24 h-8 text-white/50 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                text: "Been coming to Perry ever since I moved up to Newcastle and never been disappointed. Good craic and always welcoming with a good atmosphere in the shop!",
                author: "Liam I.",
                date: "2 weeks ago"
              },
              {
                text: "Have been coming here for years now. Never a bad hair cut. Have gone elsewhere on one or two occasions but have always regretted it.",
                author: "Richard P.",
                date: "1 month ago"
              },
              {
                text: "Great service from Perry! Very professional, good craic, friendly and really knows his stuff. Can't recommend more!",
                author: "R. Black",
                date: "1 month ago"
              }
            ].map((review, i) => (
              <div key={i} className="bg-black p-10 border border-neutral-900 hover:border-white transition-colors duration-500 relative group">
                <div className="flex text-white mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-neutral-300 mb-8 leading-relaxed font-light">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto border-t border-neutral-900 pt-6">
                  <span className="text-white font-bold uppercase tracking-wide text-sm">{review.author}</span>
                  <span className="text-neutral-600 text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://share.google/dalnPugAoDiixxu2c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-medium"
            >
              Read all Google Reviews
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;