import { motion } from 'motion/react';
import { CONTENT } from '../constants/content';

export default function Skills() {
  const categories = Object.entries(CONTENT.skills);

  return (
    <section id="skills" className="py-section px-6 lg:px-page-margin">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-primary mb-8 sticky top-32">
            Technical Arsenal.
          </h2>
          <p className="text-on-surface-variant leading-relaxed max-w-sm">
            Expertise built across financial systems, payment architectures, and high-load web services. Focused on maintainable, performant backend logic.
          </p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-surface-container">
          {categories.map(([category, items]) => (
            <div 
              key={category}
              className="bg-background p-8 border border-surface-container-high transition-colors hover:bg-surface-container-low"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-6 pb-2 border-b border-surface-container">
                {category}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {items.map((skill: string) => (
                  <motion.span 
                    key={skill}
                    className="text-primary font-medium tracking-tight"
                    whileHover={{ x: 5, color: '#bbc7dd' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
