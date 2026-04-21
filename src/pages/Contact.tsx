import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Youtube, MessageCircle, Send, CheckCircle, ChevronRight } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <main className="pt-24 overflow-hidden">
      {/* Header Section */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1599058917233-97f394156059?q=80&w=2070&auto=format&fit=crop"
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
            Get In <span className="text-gold">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Have questions? We're here to help you start your martial arts journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold uppercase tracking-widest">Contact <span className="text-gold">Information</span></h2>
              <div className="w-24 h-1 bg-gold rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 space-y-4 group hover:bg-gold/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-sm">Phone</h4>
                <a href="tel:09841939525" className="text-white/60 text-lg hover:text-gold transition-colors block">098419 39525</a>
              </div>

              <div className="glass-card p-8 space-y-4 group hover:bg-gold/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-sm">WhatsApp</h4>
                <a href="https://wa.me/919841939525" className="text-white/60 text-lg hover:text-gold transition-colors block">Chat with Us</a>
              </div>

              <div className="glass-card p-8 space-y-4 group hover:bg-gold/5 transition-colors md:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-sm">Address</h4>
                <p className="text-white/60 text-lg leading-relaxed">
                  Plot No. 4-A, Secretariat Colony, Pachaiappan Colony, Lakshmipuram, Chennai, Tamil Nadu 600099
                </p>
                <a
                  href="https://maps.app.goo.gl/46M6+XC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs hover:text-gold-light transition-colors pt-2"
                >
                  Get Directions <ChevronRight size={14} />
                </a>
              </div>
            </div>

            <div className="glass-card p-8 space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-sm">Follow Our Journey</h4>
              <div className="flex items-center gap-6">
                <a href="https://youtube.com" className="flex items-center gap-2 text-white/60 hover:text-red-accent transition-colors">
                  <Youtube size={24} />
                  <span className="text-sm font-medium uppercase tracking-widest">YouTube</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors">
                  <Youtube size={24} className="opacity-0" /> {/* Placeholder */}
                  <span className="text-sm font-medium uppercase tracking-widest">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <CheckCircle size={48} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold uppercase tracking-widest">Message Sent!</h3>
                    <p className="text-white/60">We'll get back to you within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-gold font-bold uppercase tracking-widest text-sm hover:text-gold-light transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold uppercase tracking-widest">Enroll <span className="text-gold">Now</span></h3>
                    <p className="text-white/40 text-sm">Fill out the form below and we'll contact you shortly.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/60">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-white"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/60">Phone Number</label>
                        <input
                          required
                          type="tel"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-white"
                          placeholder="098419 39525"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/60">Age</label>
                        <input
                          required
                          type="number"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-white"
                          placeholder="e.g. 12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/60">Interested Program</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-white appearance-none">
                        <option className="bg-charcoal">Silambam Training</option>
                        <option className="bg-charcoal">Karate Training</option>
                        <option className="bg-charcoal">Self Defense for Women</option>
                        <option className="bg-charcoal">Kids Martial Arts</option>
                        <option className="bg-charcoal">Fitness & Discipline</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/60">Message</label>
                      <textarea
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors text-white resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <button
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-charcoal py-4 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl shadow-gold/20 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Sending...' : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.345678901234!2d80.19876543210987!3d13.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52646m6xc!2sLakshmipuram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123"
          className="w-full h-full grayscale invert opacity-60"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-charcoal via-transparent to-charcoal" />
      </section>
    </main>
  );
}
