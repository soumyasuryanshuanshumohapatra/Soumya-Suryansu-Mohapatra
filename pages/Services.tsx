
import React, { useState } from 'react';
import { Coffee, Utensils, Music, PartyPopper, ShoppingBag, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dine-in');

  const categories = [
    { id: 'dine-in', icon: <Utensils size={20} />, label: 'Dine-In' },
    { id: 'coffee', icon: <Coffee size={20} />, label: 'Coffee & Brews' },
    { id: 'events', icon: <PartyPopper size={20} />, label: 'Events' },
    { id: 'delivery', icon: <ShoppingBag size={20} />, label: 'Takeaway' },
  ];

  const menuItems = {
    'dine-in': [
      { name: 'Squad Special Platter', price: '₹749', desc: 'A grand assortment of tandoori treats and continental sides.' },
      { name: 'Classic Carbonara', price: '₹399', desc: 'Authentic creamy pasta with parmesan and smoked bacon bits.' },
      { name: 'Grilled Fish with Lemon Butter', price: '₹549', desc: 'Fresh catch of the day served with mashed potatoes.' },
    ],
    'coffee': [
      { name: 'Signature Hazelnut Latte', price: '₹229', desc: 'Our house roast with smooth hazelnut notes and silky foam.' },
      { name: 'Cold Brew on Tap', price: '₹199', desc: '18-hour slow steeped coffee for a clean, caffeine kick.' },
      { name: 'Caramel Macchiato', price: '₹249', desc: 'Layered espresso with vanilla syrup and caramel drizzle.' },
    ],
    'events': [
      { name: 'Birthday Bash Package', price: 'Custom', desc: 'Full decoration, customized cake, and buffet for 20+ people.' },
      { name: 'Corporate Meeting Set', price: 'Custom', desc: 'Quiet space, high-speed WiFi, and snack platters for teams.' },
    ],
    'delivery': [
      { name: 'Squad Box (Solo)', price: '₹299', desc: 'Main course + side + drink packed for a mess-free lunch.' },
      { name: 'Family Feast', price: '₹1299', desc: 'Combo of starters, mains, and desserts for a family of four.' },
    ]
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Offerings</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-8">What We Serve</h1>
          <p className="max-w-2xl mx-auto text-stone-400">Explore our curated selection of services designed to provide you with the best experience in Cuttack.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all border ${activeTab === cat.id ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-xl shadow-amber-500/20' : 'bg-transparent text-stone-400 border-stone-800 hover:border-amber-500/50'}`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu/Content Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeTab as keyof typeof menuItems].map((item, idx) => (
            <div key={idx} className="p-8 bg-stone-900/50 rounded-3xl border border-stone-800 hover:bg-stone-900 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-stone-100 group-hover:text-amber-500 transition-colors">{item.name}</h3>
                <span className="text-amber-500 font-bold">{item.price}</span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center text-xs text-stone-500 uppercase tracking-widest">
                <Clock size={12} className="mr-1" /> Ready in 15-20 mins
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-24 relative rounded-[3rem] overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?auto=format&fit=crop&q=80&w=1500" 
            className="w-full h-full object-cover brightness-50"
            alt="Private Event"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Host Your Private Squad Meet</h2>
            <p className="max-w-xl text-stone-300 mb-8">Whether it's a reunion, a birthday, or a corporate hangout, we have the perfect space for you.</p>
            <button className="bg-amber-500 text-stone-950 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-amber-400 transition-all">Book Private Hall</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
