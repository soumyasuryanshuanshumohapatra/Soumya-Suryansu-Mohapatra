
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-8">Reach Out <span className="text-amber-500 italic">to Us</span></h1>
            <p className="text-stone-400 text-lg leading-relaxed mb-12">
              Have a question about our menu, or want to book the place for a special event? 
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Our Location</h4>
                  <p className="text-stone-400">College Square, above Triathlon, near Petrol Pump, Cuttack, Odisha 753003</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone Number</h4>
                  <a href="tel:+911234567890" className="text-stone-400 hover:text-amber-500 transition-colors">+91 123 456 7890</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Address</h4>
                  <a href="mailto:hello@squadrestro.com" className="text-stone-400 hover:text-amber-500 transition-colors">hello@squadrestro.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2.5rem] relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in zoom-in duration-500">
                <CheckCircle2 size={80} className="text-amber-500 mb-6" />
                <h3 className="text-3xl font-serif mb-4">Message Received!</h3>
                <p className="text-stone-400 mb-8">Thank you for reaching out. The Squad will be in touch with you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-amber-500 font-bold uppercase tracking-widest text-sm hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-500 text-xs uppercase tracking-widest font-bold mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-stone-950 border border-stone-800 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-stone-500 text-xs uppercase tracking-widest font-bold mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-stone-950 border border-stone-800 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-stone-500 text-xs uppercase tracking-widest font-bold mb-2">Subject</label>
                  <select className="w-full bg-stone-950 border border-stone-800 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                    <option>Table Reservation</option>
                    <option>Event Inquiry</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-500 text-xs uppercase tracking-widest font-bold mb-2">Your Message</label>
                  <textarea required rows={4} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-500 text-stone-950 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-amber-400 transition-all flex items-center justify-center group shadow-xl shadow-amber-500/10">
                  Send Message <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Placeholder */}
        <div className="rounded-[3rem] overflow-hidden border border-stone-800 h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.568395982542!2d85.8856281!3d20.4830156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190d79075723b7%3A0x89e900980c657a82!2sCollege%20Square%2C%20Cuttack%2C%20Odisha%20753003!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
