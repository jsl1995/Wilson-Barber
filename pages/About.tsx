import React from 'react';
import SEO from '../components/SEO';
import Mustache from '../components/Mustache';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Story | Family Barbershop Serving All Ages Since 2013"
        description="Meet the team at Wilson Barber Co. Family-friendly barbers serving all ages in South Gosforth, Newcastle since 2013. Expert cuts in a welcoming environment."
        canonicalPath="/about"
      />
      
      <div className="pt-24 min-h-screen bg-brand-dark">
        {/* Header */}
        <div className="relative h-[40vh] bg-neutral-900 overflow-hidden">
          <img 
            src="https://picsum.photos/id/400/1920/800" 
            alt="Barber tools" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="font-serif text-5xl font-bold text-white mb-4">Our Story</h1>
              <Mustache className="w-16 h-6 text-brand-gold mx-auto" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-neutral-300 space-y-6 leading-relaxed text-lg">
            <p>
              <span className="text-brand-gold font-bold text-xl">Wilson Barber Co.</span> was founded on a simple principle: to bring back the community aspect of the barbershop while delivering the highest quality haircuts in Newcastle.
            </p>
            <p>
              We opened our doors in 2013, frustrated by the lack of middle ground between the "in-and-out" budget chops and the overpriced, sterile salons. We wanted to create a space that felt like a club – a place where you're known by name, where the coffee is hot (and the beer is cold), and where the service is unhurried.
            </p>
            <p>
              Our team consists of master barbers who have trained across the globe, from the traditional schools of Italy to the modern academies of London. We blend these techniques to offer a comprehensive range of services that cater to the modern gentleman.
            </p>
          </div>

          {/* Team Section */}
          <div className="mt-24">
            <h2 className="font-serif text-3xl font-bold text-white text-center mb-16">Meet The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { name: "Thomas Wilson", role: "Founder & Master Barber", img: "https://picsum.photos/id/453/400/500" },
                { name: "Sarah Jenkins", role: "Senior Stylist", img: "https://picsum.photos/id/338/400/500" },
                { name: "Marcus Thorne", role: "Barber & Shave Specialist", img: "https://picsum.photos/id/804/400/500" }
              ].map((member, i) => (
                <div key={i} className="group relative overflow-hidden rounded-sm">
                  <div className="aspect-[3/4] overflow-hidden bg-neutral-800">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-1 font-serif">{member.name}</h3>
                    <p className="text-brand-gold text-sm uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;