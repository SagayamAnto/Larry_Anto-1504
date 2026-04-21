import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="font-display text-2xl font-bold text-gold tracking-tighter leading-none">
              TN PORKALAI
            </span>
            <span className="font-display text-sm text-gold-light tracking-widest uppercase">
              Silambam Association
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Preserving the ancient Tamil martial art of Silambam through discipline, tradition, and warrior values.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://youtube.com" className="text-white/40 hover:text-red-accent transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-blue-500 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-display text-lg text-gold uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-white/60 hover:text-gold transition-colors text-sm">Home</Link></li>
            <li><Link to="/about" className="text-white/60 hover:text-gold transition-colors text-sm">About Us</Link></li>
            <li><Link to="/classes" className="text-white/60 hover:text-gold transition-colors text-sm">Training Classes</Link></li>
            <li><Link to="/contact" className="text-white/60 hover:text-gold transition-colors text-sm">Contact Us</Link></li>
          </ul>
        </div>

        {/* Training Programs */}
        <div className="space-y-6">
          <h4 className="font-display text-lg text-gold uppercase tracking-widest">Programs</h4>
          <ul className="space-y-3">
            <li className="text-white/60 text-sm">Traditional Silambam</li>
            <li className="text-white/60 text-sm">Karate Training</li>
            <li className="text-white/60 text-sm">Self Defense for Women</li>
            <li className="text-white/60 text-sm">Kids Martial Arts</li>
            <li className="text-white/60 text-sm">Fitness & Discipline</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="font-display text-lg text-gold uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>Plot No. 4-A, Secretariat Colony, Pachaiappan Colony, Lakshmipuram, Chennai, TN 600099</span>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Phone size={18} className="text-gold shrink-0" />
              <a href="tel:09841939525" className="hover:text-gold transition-colors">098419 39525</a>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Mail size={18} className="text-gold shrink-0" />
              <a href="mailto:info@silambam.tn" className="hover:text-gold transition-colors">info@silambam.tn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        <p className="text-white/40 text-xs">
          &copy; {currentYear} Tamil Nadu Porkalai Silambam Association. All Rights Reserved.
        </p>
        <p className="text-white/40 text-xs">
          Affiliated: Indian Martial Arts Training School, Chennai.
        </p>
      </div>
    </footer>
  );
}
