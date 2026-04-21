import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Bhuvi',
    text: 'Great place to learn silambam, and located in a nice place.',
    rating: 5,
  },
  {
    name: 'Thangavel P',
    text: 'A real master with great passion and service minded.',
    rating: 5,
  },
  {
    name: 'Suresh Balaji Dharuman',
    text: 'Excellent coaching 👍',
    rating: 5,
  },
  {
    name: 'Anand Kumar',
    text: 'Such a Great place to learn Martial Art (Porkalai Silambam and Karate) and Life Education also...',
    rating: 5,
  },
  {
    name: 'Priya S',
    text: 'Good place to learn martial arts with good teacher...',
    rating: 5,
  },
  {
    name: 'Rajesh M',
    text: 'Great coaching by the master. Both karate and silambam are taught parallelly...',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-gold mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
            <span className="text-xl font-bold ml-2">4.9★</span>
            <span className="text-white/40 text-sm">(66 Reviews)</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">
            Student <span className="text-gold">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 relative group"
            >
              <Quote size={40} className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors" />
              <div className="flex items-center gap-1 text-gold mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/70 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold">
                  {testimonial.name[0]}
                </div>
                <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
