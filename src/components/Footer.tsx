import { CONTENT } from '../constants/content';

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-page-margin border-t border-surface-container mt-section">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-lg font-bold tracking-tighter text-primary">STUDIO_VB</span>
        </div>
        
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
          © {new Date().getFullYear()} {CONTENT.profile.name}. ALL RIGHTS RESERVED.
        </p>
        
        <div className="flex gap-8">
          {CONTENT.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
