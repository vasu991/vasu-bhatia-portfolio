import { CONTENT } from '../constants/content';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="work" className="py-section px-6 lg:px-page-margin">
      <div className="flex justify-between items-end mb-16 border-b border-surface-container pb-8">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-primary">
          Selected Work
        </h2>
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant hidden sm:inline">
          2022 — 2025
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CONTENT.projects.map((project, index) => (
          <div key={project.title} className={index === 0 ? "md:col-span-2" : ""}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
