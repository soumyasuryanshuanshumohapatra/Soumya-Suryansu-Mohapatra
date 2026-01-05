
import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsPage: React.FC = () => {
  const reviews = [
    { name: 'Ananya Dash', role: 'Local Guide', rating: 5, text: "Best cafe in Cuttack! The ambience is top-notch and the coffee is actually specialty grade. Above Triathlon location is super convenient.", img: "https://i.pravatar.cc/150?u=ananya" },
    { name: 'Rahul Mishra', role: 'Foodie', rating: 5, text: "The Squad Special Platter is a must-try. Portions are generous and the flavors are spot on. Staff is incredibly polite.", img: "https://i.pravatar.cc/150?u=rahul" },
    { name: 'Sonalika Singh', role: 'Student', rating: 4, text: "Love the aesthetic here. Great place to sit with a laptop and work. Their hot chocolate is easily the best in town.", img: "https://i.pravatar.cc/150?u=sonalika" },
    { name: 'Vikram Patnaik', role: 'Business Owner', rating: 5, text: "Hosted a small team lunch here. Everything was seamless. The acoustic vibes in the evening are just perfect.", img: "https://i.pravatar.cc/150?u=vikram" },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Words from the Squad</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-8">Customer Stories</h1>
          <p className="max-w-2xl mx-auto text-stone-400">Join the thousands who have found their second home at Squad Restro And Cafe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {reviews.map((rev, i) => (
            <div key={i} className="p-10 bg-stone-900 border border-stone-800 rounded-[2rem] relative group">
              <Quote className="absolute top-8 right-8 text-stone-800 group-hover:text-amber-500/20 transition-colors" size={64} />
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(rev.rating)].map((_, j) => <Star key={j} size={16} className="fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-stone-300 text-lg italic mb-8 leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center space-x-4">
                <img src={rev.img} alt={rev.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-stone-100">{rev.name}</h4>
                  <span className="text-stone-500 text-sm">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Do you offer parking?", a: "Yes, there is ample parking space available near the Petrol Pump and along the main road." },
              { q: "Do I need a reservation?", a: "While walk-ins are always welcome, we recommend reservations for weekends and peak hours (7 PM - 10 PM)." },
              { q: "Is the cafe pet-friendly?", a: "We have a designated outdoor seating area that is pet-friendly." },
              { q: "Do you have vegan options?", a: "Absolutely! Our menu features several vegan and gluten-free choices clearly marked with icons." }
            ].map((faq, i) => (
              <details key={i} className="group bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-stone-200 uppercase tracking-widest text-sm list-none group-open:bg-amber-500 group-open:text-stone-950 transition-all">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180"><ChevronRight /></span>
                </summary>
                <div className="p-6 text-stone-400 border-t border-stone-800">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsPage;
