
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Coffee, Utensils, Zap, Sparkles, Loader2, Users } from 'lucide-react';
import { getFoodRecommendation, RecommendationResponse } from '../services/gemini';

const Home: React.FC = () => {
  const [mood, setMood] = useState('');
  const [rec, setRec] = useState<RecommendationResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    const result = await getFoodRecommendation(mood);
    setRec(result);
    setLoading(false);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover brightness-50"
            alt="Cafe Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-transparent to-stone-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block text-amber-500 font-bold uppercase tracking-[0.5em] text-sm mb-6 animate-pulse">Now Open in Cuttack</span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">
            Where Taste Meets <span className="italic text-amber-500">Sophistication</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the unique blend of global flavors and local charm at Squad Restro And Cafe. 
            Cuttack's premier destination for fine dining and memories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/services" className="bg-amber-500 text-stone-950 px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-amber-400 transition-all flex items-center group w-full sm:w-auto justify-center">
              Explore Menu <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-stone-950 transition-all w-full sm:w-auto text-center">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* AI Recommendation Feature */}
      <section className="py-24 bg-stone-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass p-8 md:p-12 rounded-3xl border border-amber-500/20 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="text-amber-500" />
              <h3 className="text-2xl font-serif">Smart Menu Assistant</h3>
            </div>
            <p className="text-stone-400 mb-8">Not sure what to order? Tell our AI how you're feeling, and we'll suggest the perfect dish.</p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input 
                type="text" 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Ex: I'm feeling adventurous and hungry for something spicy..."
                className="flex-grow bg-stone-950 border border-stone-800 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button 
                onClick={handleRecommend}
                disabled={loading}
                className="bg-amber-500 text-stone-950 px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-amber-400 transition-all flex items-center justify-center disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : 'Recommend'}
              </button>
            </div>

            {rec && (
              <div className="p-6 bg-stone-950 rounded-2xl border border-stone-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="text-amber-500 font-bold text-xl mb-2">{rec.dish}</h4>
                <p className="text-stone-300 mb-4">{rec.reason}</p>
                <div className="text-sm text-stone-500 italic">Pairs well with: {rec.pairing}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Specialties</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Coffee />, title: 'Artisan Coffee', desc: 'Sourced from the finest estates and roasted to perfection for that morning kick or evening solace.' },
            { icon: <Utensils />, title: 'Gourmet Kitchen', desc: 'A curated menu featuring continental favorites, authentic Indian classics, and chef specials.' },
            { icon: <Zap />, title: 'Vibrant Atmosphere', desc: 'Modern minimalist decor coupled with cozy seating - perfect for work, dates, or family time.' }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-stone-900 border border-stone-800 rounded-2xl hover:border-amber-500/50 transition-all group">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-8 group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-stone-400 leading-relaxed mb-6">{item.desc}</p>
              <Link to="/services" className="text-amber-500 font-bold uppercase tracking-widest text-sm flex items-center hover:translate-x-2 transition-transform">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery Preview */}
      <section className="py-24">
         <div className="grid grid-cols-2 md:grid-cols-4 h-[600px]">
           {[
             "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000",
             "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000",
             "https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=1000",
             "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
           ].map((url, i) => (
             <div key={i} className="relative overflow-hidden group">
               <img src={url} alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
               <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-bold uppercase tracking-widest">View More</span>
               </div>
             </div>
           ))}
         </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-stone-950 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center space-x-2"><Star className="text-amber-500" fill="currentColor" /> <span className="font-bold text-xl">Top Rated Restro</span></div>
          <div className="flex items-center space-x-2"><Users className="text-amber-500" /> <span className="font-bold text-xl">50k+ Happy Squads</span></div>
          <div className="flex items-center space-x-2"><Sparkles className="text-amber-500" /> <span className="font-bold text-xl">Award Winner 2024</span></div>
        </div>
      </section>
    </div>
  );
};

export default Home;