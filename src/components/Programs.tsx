import { motion } from 'motion/react';
import { Shield, Sword, Users, Heart, Trophy } from 'lucide-react';

const programs = [
  {
    title: 'Silambam Training',
    description: 'Traditional Tamil stick fighting focusing on footwork, speed, and precision.',
    icon: Sword,
    color: 'bg-gold/20 text-gold',
  },
  {
    title: 'Karate Training',
    description: 'Modern martial arts for striking, blocking, and mental discipline.',
    icon: Shield,
    color: 'bg-red-accent/20 text-red-accent',
  },
  {
    title: 'Self Defense for Women',
    description: 'Practical techniques and situational awareness for real-world safety.',
    icon: Heart,
    color: 'bg-pink-500/20 text-pink-500',
  },
  {
    title: 'Kids Martial Arts',
    description: 'Fun and engaging classes building confidence, focus, and respect.',
    icon: Users,
    color: 'bg-blue-500/20 text-blue-500',
  },
  {
    title: 'Fitness & Discipline',
    description: 'Holistic training for physical strength and mental fortitude.',
    icon: Trophy,
    color: 'bg-green-500/20 text-green-500',
  },
];

export default function Programs() {
  return (
    <section className="py-24 px-6 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest">
            Training <span className="text-gold">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-white/60 max-w-2xl mx-auto">
            We offer specialized training programs tailored for all age groups and skill levels, 
            blending traditional values with modern techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <program.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">{program.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{program.description}</p>
              <div className="mt-6 flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <Sword size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
