import { motion } from 'motion/react';

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    year: string;
    description: string;
    tech: string[];
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article 
      className="group relative bg-surface border border-transparent hover:border-surface-container-highest transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-surface-container">
        <img 
          src={project.image} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
      </div>
      
      <div className="p-8 border-t border-surface-container">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block mb-2">
              {project.category}
            </span>
            <h3 className="text-xl font-medium text-primary tracking-tight group-hover:text-secondary transition-colors">
              {project.title}
            </h3>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-[9px] uppercase tracking-wider px-2 py-1 bg-surface-container-high rounded-sm text-primary">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
