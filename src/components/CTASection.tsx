import { motion } from 'motion/react';
import { Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal uppercase tracking-tighter leading-tight">
            Start Your Silambam <br /> Journey Today
          </h2>
          <p className="text-charcoal/70 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Join the Tamil Nadu Porkalai Silambam Association and learn the art of discipline, 
            strength, and tradition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-charcoal hover:bg-black text-gold px-10 py-5 rounded-2xl font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-2xl shadow-black/20 group"
          >
            Enroll Now
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:09841939525"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-charcoal/10 text-charcoal px-10 py-5 rounded-2xl font-bold uppercase tracking-widest transition-all flex items-center gap-2"
          >
            <Phone size={20} />
            Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
