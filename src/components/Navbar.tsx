import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Classes', path: '/classes' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-charcoal/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-display text-xl md:text-2xl font-bold text-gold tracking-tighter leading-none">
            TN PORKALAI
          </span>
          <span className="font-display text-xs md:text-sm text-gold-light tracking-widest uppercase">
            Silambam Association
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold',
                location.pathname === link.path ? 'text-gold' : 'text-white/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:09841939525"
            className="bg-gold hover:bg-gold-light text-charcoal px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal border-b border-white/10 md:hidden flex flex-col p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-display tracking-widest uppercase py-2',
                  location.pathname === link.path ? 'text-gold' : 'text-white/80'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="tel:09841939525"
                className="bg-gold text-charcoal py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/919841939525"
                className="bg-green-600 text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
