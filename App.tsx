
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Phone, MapPin, Mail, ChevronRight, Star, Clock, Coffee, Utensils, Zap, Users } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TestimonialsPage from './pages/TestimonialsPage';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-amber-500">SQUAD</span>
            <span className="text-xs uppercase tracking-[0.3em] font-light mt-1 hidden sm:block">Restro & Cafe</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest hover:text-amber-500 transition-colors ${location.pathname === link.path ? 'text-amber-500 font-medium' : 'text-stone-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-amber-500 text-stone-950 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-amber-400 transition-all transform hover:scale-105">
              Book a Table
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-300">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-stone-950 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-serif uppercase tracking-widest hover:text-amber-500 transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-amber-500 text-stone-950 px-10 py-3 rounded-full text-lg font-bold uppercase tracking-widest">
          Book a Table
        </Link>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-stone-300">
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-stone-950 pt-20 pb-10 border-t border-stone-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <span className="text-3xl font-bold tracking-tighter text-amber-500">SQUAD</span>
          </Link>
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            Experience the finest culinary delights in the heart of Cuttack. From artisan coffee to gourmet platters, Squad is where flavors meet passion.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-amber-500 hover:text-stone-950 transition-all"><Facebook size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-4 text-stone-400 text-sm">
            <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-500 transition-colors">Our Story</Link></li>
            <li><Link to="/services" className="hover:text-amber-500 transition-colors">Our Menu</Link></li>
            <li><Link to="/testimonials" className="hover:text-amber-500 transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Contact Info</h4>
          <ul className="space-y-4 text-stone-400 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-amber-500 shrink-0" />
              <span>College Square, above Triathlon, near Petrol Pump, Cuttack, Odisha 753003</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-amber-500 shrink-0" />
              <a href="tel:+911234567890" className="hover:text-amber-500">+91 123 456 7890</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-amber-500 shrink-0" />
              <a href="mailto:hello@squadrestro.com" className="hover:text-amber-500">hello@squadrestro.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-6">Working Hours</h4>
          <ul className="space-y-4 text-stone-400 text-sm">
            <li className="flex justify-between">
              <span>Mon - Fri:</span>
              <span>11:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sat - Sun:</span>
              <span>09:00 AM - 12:00 AM</span>
            </li>
            <li className="flex items-center space-x-2 text-amber-500 mt-4">
              <Clock size={16} />
              <span className="font-medium">Open Now</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-stone-900 text-center text-stone-500 text-xs uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Squad Restro And Cafe. All Rights Reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
          <a href="tel:+911234567890" className="bg-amber-500 text-stone-950 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-amber-400 transition-all transform hover:scale-110 md:hidden">
            <Phone size={24} />
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
