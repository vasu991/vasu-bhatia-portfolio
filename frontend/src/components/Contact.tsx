import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTENT } from '../constants/content';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const dataObj = Object.fromEntries(formData.entries());

    try {
      const backendUrl = import.meta.env.DEV ? 'http://localhost:5000' : '/_/backend';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObj)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Name</label>
              <input type="text" name="name" required className="input-minimalist text-primary" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Email</label>
              <input type="email" name="email" required className="input-minimalist text-primary" placeholder="Email address" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Message</label>
              <textarea name="message" required rows={4} className="input-minimalist text-primary resize-none" placeholder="How can I help you?"></textarea>
            </div>
            
            <div>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-primary text-background font-bold uppercase tracking-widest text-[10px] py-6 flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all disabled:opacity-70"
              >
                {status === 'submitting' ? 'Transmitting...' : status === 'success' ? 'Message Sent' : 'Send Transmission'} 
                {status === 'success' ? <CheckCircle size={14} /> : status === 'error' ? <AlertCircle size={14} /> : <Send size={14} />}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-xs mt-4 text-center">Transmission failed. Please try again later.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
