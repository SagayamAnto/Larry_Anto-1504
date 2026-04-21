import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a
        href="https://wa.me/919841939525"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-600/20 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </motion.a>
      <motion.a
        href="tel:09841939525"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gold text-charcoal p-4 rounded-full shadow-2xl shadow-gold/20 flex items-center justify-center"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
