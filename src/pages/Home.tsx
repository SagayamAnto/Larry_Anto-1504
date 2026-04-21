import { motion } from 'motion/react';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';
import { Shield, Users, Trophy, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      {/* About Section */}
      <section className="py-24 px-6 bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">
                Preserving <span className="text-gold">Heritage</span>
              </h2>
              <div className="w-24 h-1 bg-gold rounded-full" />
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              Tamil Nadu Porkalai Silambam Association is dedicated to preserving, promoting, and teaching the traditional Tamil martial art Silambam while supporting structured training programs across Tamil Nadu.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Affiliated academy: <span className="text-gold font-bold">Indian Martial Arts Training School</span>, Lakshmipuram, Chennai.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/about"
                className="bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center gap-2 group"
              >
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070&auto=format&fit=crop"
              alt="Silambam Practice"
              className="relative rounded-3xl w-full h-[400px] object-cover grayscale border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 glass-card p-6 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-charcoal">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Experience</p>
                <p className="text-xl font-bold text-gold">15+ Years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Programs />

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card p-6 space-y-2">
                  <Shield className="text-gold" size={32} />
                  <h4 className="font-bold text-sm uppercase tracking-widest">Certified Master</h4>
                  <p className="text-xs text-white/40">Expert coaching by experienced trainers.</p>
                </div>
                <div className="glass-card p-6 space-y-2 translate-x-4">
                  <Users className="text-gold" size={32} />
                  <h4 className="font-bold text-sm uppercase tracking-widest">All Ages</h4>
                  <p className="text-xs text-white/40">Suitable for kids, teens, and adults.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass-card p-6 space-y-2">
                  <Star className="text-gold" size={32} />
                  <h4 className="font-bold text-sm uppercase tracking-widest">Top Rated</h4>
                  <p className="text-xs text-white/40">4.9★ rating with 66+ student reviews.</p>
                </div>
                <div className="glass-card p-6 space-y-2 translate-x-4">
                  <Trophy className="text-gold" size={32} />
                  <h4 className="font-bold text-sm uppercase tracking-widest">Tradition</h4>
                  <p className="text-xs text-white/40">Focus on discipline and life education.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">
                Why <span className="text-gold">Choose Us</span>
              </h2>
              <div className="w-24 h-1 bg-gold rounded-full" />
            </div>
            <ul className="space-y-6">
              {[
                'Certified and experienced master trainer',
                'Traditional Silambam + modern Karate parallel training',
                'Focus on discipline and life education',
                'Suitable for kids, teens, adults',
                'Friendly coaching environment',
                'Strong student satisfaction and reviews',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    <Star size={12} fill="currentColor" />
                  </div>
                  <span className="text-white/70 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
      <CTASection />
    </main>
  );
}
