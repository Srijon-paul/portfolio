import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Heading */}
        <div className="lg:w-1/3">
           <div className="sticky top-32">
             <h2 className="text-accent-red text-[11px] font-sans uppercase tracking-[0.2em] font-semibold mb-4">CAREER</h2>
             <h3 className="text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-bold text-text-primary leading-[0.9] uppercase tracking-tighter">
               EXPERIENCE<span className="text-accent-red">.</span>
             </h3>
           </div>
        </div>

        {/* Right: Timeline */}
        <div className="lg:w-2/3 relative">
           {/* Vertical Line */}
           <div className="absolute left-0 md:left-2 top-2 bottom-0 w-px bg-border-subtle"></div>
           
           {experienceData.map((job, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7 }}
               className="relative pl-8 md:pl-16 mb-24 last:mb-0"
             >
                {/* Timeline Marker */}
                <div className="absolute -left-1.25 md:left-0.75 top-3 w-3 h-3 rounded-full border-2 border-bg-dark bg-accent-red shadow-[0_0_8px_rgba(217,16,16,0.6)]"></div>
                
                {/* Connecting horizontal line to content block on desktop */}
                <div className="hidden md:block absolute left-2.25 top-4 w-10 h-px bg-border-subtle"></div>

                <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-8 gap-4 border-b border-border-subtle pb-6">
                  <div>
                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary tracking-tight uppercase leading-[1.1] mb-4">{job.role}</h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] md:text-[11px] font-sans uppercase tracking-[0.2em]">
                      <span className="text-accent-red font-semibold">{job.company}</span>
                      <span className="text-border-subtle">/</span>
                      <span className="text-text-secondary">{job.subRole}</span>
                      <span className="text-border-subtle">/</span>
                      <span className="text-text-secondary">{job.location}</span>
                    </div>
                  </div>
                  <span className="text-text-secondary text-[10px] md:text-[11px] font-mono uppercase tracking-widest bg-surface/20 px-3 py-1.5 border border-border-subtle whitespace-nowrap">
                    {job.date}
                  </span>
                </div>

                <div className="space-y-4">
                  {job.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-5 group">
                      <span className="text-border-subtle font-mono text-[10px] mt-1.5 group-hover:text-accent-red transition-colors">
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      <p className="text-sm md:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
