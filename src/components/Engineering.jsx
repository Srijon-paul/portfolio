import { motion } from 'framer-motion';
import { engineeringSpecs } from '../data/portfolioData';

export function Engineering() {
  return (
    <section id="stack" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-accent-red text-[11px] font-sans uppercase tracking-[0.2em] font-semibold mb-4">ENGINEERING</h2>
          <h3 className="text-6xl md:text-8xl font-display font-bold text-text-primary leading-none uppercase tracking-tighter">
            HOW I<br />BUILD<span className="text-accent-red">.</span>
          </h3>
        </div>

        {/* Asymmetrical Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-l border-r border-border-subtle">
          
          {/* 01: BACKEND (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative md:col-span-5 border-b md:border-r border-border-subtle p-8 lg:p-12 group hover:bg-surface/20 transition-colors duration-500 flex flex-col"
          >
            <div className="absolute top-4 left-4 text-[8px] font-mono text-border-subtle group-hover:text-accent-red/50 transition-colors hidden xl:flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full border border-current"></div>
              <span>SVC_NODE_01</span>
            </div>
            <div className="flex items-start justify-between mb-16">
              <h4 className="text-3xl lg:text-4xl font-display text-text-primary uppercase tracking-tight">{engineeringSpecs[0].category}</h4>
              <span className="text-border-subtle font-display font-bold text-3xl transition-colors duration-500 group-hover:text-text-secondary/50">{engineeringSpecs[0].id}</span>
            </div>
            
            <div className="mt-auto flex flex-col">
              {engineeringSpecs[0].items.map((item) => (
                <div key={item} className="flex items-center justify-between py-3 border-b border-border-subtle last:border-0 group-hover:border-text-secondary/30 transition-colors duration-300">
                  <span className="text-[11px] font-sans text-text-secondary tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-text-primary">{item}</span>
                  <span className="text-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">■</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 02: DATA (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative md:col-span-7 border-b border-border-subtle p-8 lg:p-12 group hover:bg-surface/20 transition-colors duration-500 flex flex-col"
          >
            <div className="absolute top-4 right-4 text-[8px] font-mono text-border-subtle group-hover:text-accent-red/50 transition-colors hidden xl:flex items-center gap-1.5">
              <span>PRIMARY_DB</span>
              <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="0.5">
                 <rect x="1" y="2" width="8" height="2"/>
                 <rect x="1" y="6" width="8" height="2"/>
              </svg>
            </div>
            <div className="flex items-start justify-between mb-16">
              <h4 className="text-3xl lg:text-4xl font-display text-text-primary uppercase tracking-tight">{engineeringSpecs[1].category}</h4>
              <span className="text-border-subtle font-display font-bold text-3xl transition-colors duration-500 group-hover:text-text-secondary/50">{engineeringSpecs[1].id}</span>
            </div>
            
            <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {engineeringSpecs[1].items.map((item) => (
                <div key={item} className="flex items-center justify-between py-3 border-b border-border-subtle group-hover:border-text-secondary/30 transition-colors duration-300">
                  <span className="text-[11px] font-sans text-text-secondary tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-text-primary">{item}</span>
                  <span className="text-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">■</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 03: SECURITY (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative md:col-span-7 border-b md:border-b-0 md:border-r border-border-subtle p-8 lg:p-12 group hover:bg-surface/20 transition-colors duration-500 flex flex-col"
          >
            <div className="absolute top-4 left-4 text-[8px] font-mono text-border-subtle group-hover:text-accent-red/50 transition-colors hidden xl:flex items-center gap-1.5">
              <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="0.5">
                 <path d="M5 1 L9 3 V7 L5 9 L1 7 V3 Z" />
              </svg>
              <span>AUTH_GATEWAY</span>
            </div>
            <div className="flex items-start justify-between mb-16">
              <h4 className="text-3xl lg:text-4xl font-display text-text-primary uppercase tracking-tight">{engineeringSpecs[2].category}</h4>
              <span className="text-border-subtle font-display font-bold text-3xl transition-colors duration-500 group-hover:text-text-secondary/50">{engineeringSpecs[2].id}</span>
            </div>
            
            <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {engineeringSpecs[2].items.map((item) => (
                <div key={item} className="flex items-center justify-between py-3 border-b border-border-subtle group-hover:border-text-secondary/30 transition-colors duration-300">
                  <span className="text-[11px] font-sans text-text-secondary tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-text-primary">{item}</span>
                  <span className="text-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">■</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 04: ENGINEERING (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative md:col-span-5 border-b md:border-b-0 border-border-subtle p-8 lg:p-12 group hover:bg-surface/20 transition-colors duration-500 flex flex-col"
          >
            <div className="absolute top-4 right-4 text-[8px] font-mono text-border-subtle group-hover:text-accent-red/50 transition-colors hidden xl:flex items-center gap-1.5">
              <span>WORKFLOW</span>
              <div className="flex gap-0.5">
                <div className="w-0.5 h-2 bg-current"></div>
                <div className="w-0.5 h-2 bg-current opacity-50"></div>
                <div className="w-0.5 h-2 bg-current opacity-20"></div>
              </div>
            </div>
            <div className="flex items-start justify-between mb-16">
              <h4 className="text-3xl lg:text-4xl font-display text-text-primary uppercase tracking-tight">{engineeringSpecs[3].category}</h4>
              <span className="text-border-subtle font-display font-bold text-3xl transition-colors duration-500 group-hover:text-text-secondary/50">{engineeringSpecs[3].id}</span>
            </div>
            
            <div className="mt-auto flex flex-col">
              {engineeringSpecs[3].items.map((item) => (
                <div key={item} className="flex items-center justify-between py-3 border-b border-border-subtle last:border-0 group-hover:border-text-secondary/30 transition-colors duration-300">
                  <span className="text-[11px] font-sans text-text-secondary tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-text-primary">{item}</span>
                  <span className="text-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px]">■</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
