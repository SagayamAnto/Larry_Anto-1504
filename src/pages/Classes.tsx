import { motion } from 'motion/react';
import { Clock, Users, Shield, Heart, Trophy, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';

const batches = [
  {
    name: 'Kids Batch',
    age: '5 - 12 Years',
    time: '5:00 PM - 6:00 PM',
    focus: 'Coordination, Discipline, Fun',
    icon: Users,
    color: 'bg-blue-500/20 text-blue-500',
  },
  {
    name: 'Teen Batch',
    age: '13 - 19 Years',
    time: '6:00 PM - 7:00 PM',
    focus: 'Strength, Speed, Technique',
    icon: Trophy,
    color: 'bg-gold/20 text-gold',
  },
  {
    name: 'Adult Batch',
    age: '20+ Years',
    time: '7:00 PM - 8:30 PM',
    focus: 'Self Defense, Fitness, Mastery',
    icon: Shield,
    color: 'bg-red-accent/20 text-red-accent',
  },
  {
    name: 'Women Self Defense',
    age: 'All Ages',
    time: 'Special Weekend Slots',
    focus: 'Safety, Awareness, Power',
    icon: Heart,
    color: 'bg-pink-500/20 text-pink-500',
  },
];

export default function Classes() {
  return (
    <main className="pt-24 overflow-hidden">
      {/* Header Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold uppercase tracking-tighter"
          >
            Training <span className="text-gold">Schedule</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Join our structured training programs designed for all age groups and skill levels.
          </motion.p>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full mb-4">
              <Clock size={16} className="text-gold" />
              <span className="text-xs font-bold text-gold uppercase tracking-widest">
                Mon - Sat | 5:00 PM Onwards
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">
              Our <span className="text-gold">Batches</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {batches.map((batch, index) => (
              <motion.div
                key={batch.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group relative overflow-hidden flex flex-col md:flex-row gap-8 items-center"
              >
                <div className={`w-24 h-24 rounded-3xl ${batch.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <batch.icon size={48} />
                </div>
                <div className="space-y-4 text-center md:text-left flex-grow">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">{batch.name}</h3>
                    <p className="text-gold/60 text-xs font-bold uppercase tracking-widest">{batch.age}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Clock size={16} className="text-gold" />
                      {batch.time}
                    </div>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Shield size={16} className="text-gold" />
                      {batch.focus}
                    </div>
                  </div>
                </div>
                <div className="shrink-0">
                  <a
                    href="tel:09841939525"
                    className="bg-white/5 hover:bg-gold hover:text-charcoal p-4 rounded-full transition-all border border-white/10"
                  >
                    <ArrowRight size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto glass-card p-8 text-center space-y-6 border border-gold/20">
            <p className="text-white/60 italic">
              "Classes are conducted with individual attention to each student, ensuring proper form and safety."
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="tel:09841939525" className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest hover:text-gold-light transition-colors">
                <Phone size={18} />
                Call for Inquiry
              </a>
              <a href="https://wa.me/919841939525" className="flex items-center gap-2 text-green-500 font-bold uppercase tracking-widest hover:text-green-400 transition-colors">
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
