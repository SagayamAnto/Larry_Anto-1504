import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, CheckCircle, Award } from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function About() {
  return (
    <main className="pt-24 overflow-hidden">
      {/* Header Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070&auto=format&fit=crop"
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
            Our <span className="text-gold">Legacy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Preserving the ancient Tamil martial art of Silambam through discipline, 
            tradition, and warrior values.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 space-y-6 border-l-4 border-l-gold"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center text-gold">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-widest">Our <span className="text-gold">Mission</span></h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Preserve Silambam heritage and spread warrior discipline across Tamil Nadu. 
              We aim to provide structured training that respects tradition while adapting to modern needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 space-y-6 border-l-4 border-l-red-accent"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-accent/20 flex items-center justify-center text-red-accent">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-widest">Our <span className="text-red-accent">Vision</span></h2>
            <p className="text-white/60 leading-relaxed text-lg">
              Empower youth, women, and students across Tamil Nadu through martial arts. 
              We envision a society where every individual possesses the confidence and strength to protect themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1599058917233-97f394156059?q=80&w=2070&auto=format&fit=crop"
                alt="Master Trainer"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-8 space-y-2">
              <h3 className="text-2xl font-bold text-gold">Veerakalaigan A. Stalin</h3>
              <p className="text-white/40 uppercase tracking-widest text-xs">Master Trainer (Silambam + Karate)</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest leading-tight">
                Meet Our <br /> <span className="text-gold">Master Trainer</span>
              </h2>
              <div className="w-24 h-1 bg-gold rounded-full" />
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              With over 15 years of experience in traditional Tamil martial arts and modern Karate, 
              Master Stalin has dedicated his life to teaching and preserving the art of Silambam.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              His approach combines rigorous physical training with mental discipline, 
              ensuring that students not only learn self-defense but also develop strong character and values.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <Award className="text-gold" size={24} />
                <span className="text-sm font-bold uppercase tracking-widest">Certified Master</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-gold" size={24} />
                <span className="text-sm font-bold uppercase tracking-widest">Black Belt</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">
            Why <span className="text-gold">Silambam</span> is Important
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Silambam is more than just a martial art; it is a living testament to Tamil culture and heritage. 
            Originating thousands of years ago, it was the primary self-defense system of Tamil warriors. 
            Today, it remains a powerful tool for physical fitness, mental focus, and cultural identity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
            {[
              { label: 'Confidence', icon: Shield },
              { label: 'Discipline', icon: Target },
              { label: 'Fitness', icon: Heart },
              { label: 'Self Defense', icon: Shield },
              { label: 'Focus', icon: Eye },
              { label: 'Mental Strength', icon: Award },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col items-center gap-3 group hover:bg-gold/10 transition-colors"
              >
                <benefit.icon className="text-gold group-hover:scale-110 transition-transform" size={24} />
                <span className="text-xs font-bold uppercase tracking-widest">{benefit.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
