import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { CONTENT } from '../constants/content';

export default function Contact() {
  return (
    <section id="contact" className="py-section px-6 lg:px-page-margin">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-primary mb-12">
            Let's Start a Signal.
          </h2>
          <div className="space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block mb-2">Direct</span>
              <a href={`mailto:${CONTENT.profile.email}`} className="text-2xl text-primary hover:text-secondary transition-colors underline underline-offset-8">
                {CONTENT.profile.email}
              </a>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block mb-2">Coordinates</span>
              <p className="text-xl text-on-surface font-medium italic">
                {CONTENT.profile.location}
              </p>
            </div>
            <div className="flex gap-8 pt-8">
              <a href={`https://${CONTENT.profile.github}`} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors">Github</a>
              <a href={`https://${CONTENT.profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-8 md:p-12 border border-surface-container-high">
          <h3 className="text-xl font-medium text-primary mb-12">Inquiries</h3>
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Name</label>
              <input type="text" className="input-minimalist text-primary" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Email</label>
              <input type="email" className="input-minimalist text-primary" placeholder="Email address" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Message</label>
              <textarea rows={1} className="input-minimalist text-primary resize-none" placeholder="How can I help you?"></textarea>
            </div>
            
            <button className="w-full bg-primary text-background font-bold uppercase tracking-widest text-[10px] py-6 flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all">
              Send Transmission <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
