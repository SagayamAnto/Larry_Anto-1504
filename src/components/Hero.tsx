import { motion } from 'motion/react';
import { Star, Phone, MessageCircle, MapPin, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop"
          alt="Martial Arts Background"
          className="w-full h-full object-cover grayscale opacity-40"
          referrerPolicy="no-referrer"
        />
        {/* Animated Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-accent/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span className="text-xs md:text-sm font-medium text-gold-light tracking-widest uppercase">
            Affiliated: Indian Martial Arts Training School
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Tamil Nadu Porkalai <br />
            <span className="text-gold-gradient">Silambam Association</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Preserving the ancient Tamil martial art of Silambam through discipline, tradition, and warrior values.
          </p>
        </motion.div>

        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="flex items-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-lg font-bold text-white">4.9★</span>
          <span className="text-white/40 text-sm">(66 Reviews)</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="tel:09841939525"
            className="bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-xl shadow-gold/20"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="https://wa.me/919841939525"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href="https://maps.app.goo.gl/46M6+XC"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-white/60 hover:text-gold transition-colors flex items-center justify-center gap-2 text-sm font-medium"
          >
            <MapPin size={16} />
            Get Directions
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
