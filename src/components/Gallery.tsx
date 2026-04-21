import { motion } from 'motion/react';

const galleryItems = [
  { title: 'Stick Fighting Practice', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop' },
  { title: 'Group Training', image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Students Practice', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Award Ceremony', image: 'https://images.unsplash.com/photo-1533227268408-a774adbe60cd?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Training Ground', image: 'https://images.unsplash.com/photo-1599058917233-97f394156059?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Belt Promotion Ceremony', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop' },
];

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">
            Training <span className="text-gold">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-white/60 max-w-2xl mx-auto">
            A glimpse into our training environment, student progress, and traditional ceremonies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h4 className="text-gold font-bold uppercase tracking-widest text-sm">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
