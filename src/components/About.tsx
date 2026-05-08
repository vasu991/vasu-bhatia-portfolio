import { motion } from 'motion/react';
import { CONTENT } from '../constants/content';

export default function About() {
  return (
    <section id="about" className="py-section px-6 lg:px-page-margin">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-primary mb-12 uppercase leading-tight">
            Silence in <br /> the Signal.
          </h2>
          <div className="space-y-6 text-lg text-on-surface-variant max-w-xl leading-relaxed">
            <p>
              {CONTENT.profile.about}
            </p>
            <p className="text-primary font-medium italic">
              "We do not decorate. We define."
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative aspect-square bg-surface-container overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Architectural precision"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter grayscale opacity-40 group-hover:opacity-60 transition-all duration-700"
          />
          <div className="absolute inset-0 border border-primary/10 group-hover:border-primary/30 transition-colors duration-500"></div>
        </motion.div>
      </div>
    </section>
  );
}
