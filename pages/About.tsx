
import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Crafting Moments <br/> <span className="text-amber-500 italic">One Plate</span> at a Time</h1>
            <p className="text-stone-400 text-lg leading-relaxed mb-6">
              Squad Restro And Cafe was born from a simple vision: to create a space where food is more than just sustenance—it's an experience. Located in the heart of Cuttack, we've become the "Headquarters" for flavor enthusiasts and social butterflies alike.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              Our journey started with a team of passionate culinary experts who wanted to bridge the gap between street-side charm and high-end dining. Every ingredient is hand-picked, every coffee bean is ethically sourced, and every guest is treated like part of the Squad.
            </p>
            <div className="flex items-center space-x-4 border-l-4 border-amber-500 pl-6 py-2">
              <Quote className="text-amber-500 shrink-0" size={32} />
              <p className="text-stone-200 font-serif text-xl italic">
                "We don't just serve food; we serve memories packaged in exquisite flavors."
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-2xl shadow-2xl relative z-10"
              alt="Chef at work"
            />
            <div className="absolute -bottom-10 -right-10 bg-amber-500 p-8 rounded-2xl hidden md:block z-20">
              <div className="text-stone-950 font-bold text-5xl mb-1">5+</div>
              <div className="text-stone-900 font-medium uppercase tracking-widest text-sm">Years of Culinary Excellence</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="text-center p-8 bg-stone-900 rounded-3xl border border-stone-800">
            <h3 className="text-2xl font-serif mb-4 text-amber-500">The Quality</h3>
            <p className="text-stone-400">We prioritize farm-to-table ingredients and rigorous quality checks to ensure every bite is perfect.</p>
          </div>
          <div className="text-center p-8 bg-stone-900 rounded-3xl border border-stone-800">
            <h3 className="text-2xl font-serif mb-4 text-amber-500">The Ambience</h3>
            <p className="text-stone-400">Carefully curated music, lighting, and decor designed to help you relax and enjoy the vibe.</p>
          </div>
          <div className="text-center p-8 bg-stone-900 rounded-3xl border border-stone-800">
            <h3 className="text-2xl font-serif mb-4 text-amber-500">The Team</h3>
            <p className="text-stone-400">Our chefs and staff are trained professionals who take pride in hospitality and service.</p>
          </div>
        </div>

        {/* Founder Section */}
        <section className="bg-stone-900/50 p-12 md:p-24 rounded-[3rem] border border-stone-800 text-center">
          <div className="max-w-3xl mx-auto">
             <img src="https://picsum.photos/seed/founder/200/200" alt="Founder" className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-amber-500 object-cover" />
             <h3 className="text-3xl font-serif mb-2">Our Founder's Vision</h3>
             <p className="text-stone-400 italic mb-8">"Squad was built on the foundation of friendship and great food. We wanted a place where people could gather, talk for hours, and leave feeling inspired by what they tasted."</p>
             <div className="text-amber-500 font-bold uppercase tracking-widest">— S. Mohanty</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
