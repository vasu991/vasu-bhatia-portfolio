import { motion } from 'motion/react';
import { CONTENT } from '../constants/content';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-page-margin relative overflow-hidden">
      <div className="max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-on-surface-variant block mb-6">
            {CONTENT.profile.title}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-primary leading-[1.1] mb-12">
            {CONTENT.hero.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#work" 
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-background font-semibold uppercase tracking-widest text-[10px] hover:bg-opacity-90 transition-all border border-transparent"
            >
              {CONTENT.hero.primaryCTA}
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-primary font-semibold uppercase tracking-widest text-[10px] border border-outline-variant hover:border-primary transition-all"
            >
              {CONTENT.hero.secondaryCTA}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-6 lg:left-page-margin flex items-center gap-4 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-primary"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
