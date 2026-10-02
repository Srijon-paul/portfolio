import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

function MomentumVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-bg-dark">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"></div>
      
      <div className="relative w-[80%] max-w-100 aspect-4/3 border border-border-subtle flex bg-bg-dark z-10 overflow-hidden">
        
        {/* Left Column (API Gateway) */}
        <div className="w-1/3 h-full border-r border-border-subtle flex flex-col justify-between p-4 bg-surface/20">
          <motion.div 
            variants={{ hover: { x: 5, borderColor: "var(--color-accent-red)" } }}
            transition={{ duration: 0.3 }}
            className="w-full h-8 border border-border-subtle bg-bg-dark flex items-center px-2 relative"
          >
            <span className="text-[8px] text-text-secondary font-mono">REQ_IN</span>
            <motion.div 
              variants={{ hover: { opacity: [0, 1, 0], x: [0, 20, 20] } }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute right-2 w-1 h-1 bg-accent-red rounded-full"
            />
          </motion.div>
          <div className="w-full h-8 border border-border-subtle bg-bg-dark flex items-center px-2">
            <span className="text-[8px] text-text-secondary font-mono">JWT_VERIFY</span>
          </div>
          <div className="w-full h-8 border border-border-subtle bg-bg-dark flex items-center px-2">
            <span className="text-[8px] text-text-secondary font-mono">RATE_LMT</span>
          </div>
        </div>

        {/* Middle Column (Service Lines) */}
        <div className="w-1/3 h-full border-r border-border-subtle relative overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-px bg-accent-red/30"></div>
          <motion.div 
            variants={{ hover: { scaleX: [0, 1], originX: 0, opacity: [1, 0] } }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute top-1/4 left-0 w-full h-px bg-accent-red"
          />
          <div className="absolute top-1/2 left-0 w-full h-px bg-border-subtle"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px border-t border-dashed border-border-subtle"></div>
          
          <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-accent-red -translate-y-1/2 shadow-[0_0_8px_rgba(217,16,16,0.8)]"></div>
          <div className="absolute top-4 left-2 text-[8px] text-accent-red font-mono">ROUTER</div>
        </div>

        {/* Right Column (Database Cluster) */}
        <div className="w-1/3 h-full p-4 flex flex-col gap-4 justify-center bg-surface/10">
          <motion.div 
            variants={{ hover: { y: -2, borderColor: "rgba(217,16,16,0.5)" } }}
            transition={{ duration: 0.3 }}
            className="w-full flex-1 border border-border-subtle bg-bg-dark relative overflow-hidden"
          >
            <motion.div 
              variants={{ hover: { backgroundColor: "rgba(217,16,16,0.8)" } }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-2 bg-border-subtle"
            />
            <div className="absolute bottom-2 right-2 text-[8px] text-text-secondary font-mono">DB_01</div>
          </motion.div>
          <motion.div 
            variants={{ hover: { y: 2 } }}
            transition={{ duration: 0.3 }}
            className="w-full flex-1 border border-border-subtle bg-bg-dark relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-2 bg-border-subtle"></div>
             <div className="absolute bottom-2 right-2 text-[8px] text-text-secondary font-mono">DB_02</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function KindcycleVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-bg-dark">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"></div>
      
      <div className="relative w-[70%] max-w-75 aspect-square z-10">
        
        {/* Abstract Peer-to-Peer network */}
        <motion.div 
          variants={{ hover: { scale: 1.1, borderColor: "rgba(217,16,16,0.5)" } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 border border-border-subtle rounded-full bg-surface/30 flex items-center justify-center z-20"
        >
          <div className="w-2 h-2 rounded-full bg-accent-red shadow-[0_0_8px_rgba(217,16,16,0.6)]"></div>
        </motion.div>
        
        <motion.div 
          variants={{ hover: { x: -5, y: 5 } }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 w-12 h-12 border border-border-subtle bg-bg-dark flex items-center justify-center z-20"
        >
          <div className="w-1.5 h-1.5 bg-text-secondary"></div>
        </motion.div>
        
        <motion.div 
          variants={{ hover: { x: 5, y: 5 } }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 right-0 w-12 h-12 border border-border-subtle bg-bg-dark flex items-center justify-center z-20"
        >
          <div className="w-1.5 h-1.5 bg-text-secondary"></div>
        </motion.div>

        <motion.div 
          variants={{ hover: { rotate: 90 } }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-accent-red bg-accent-red/5 rotate-45 z-10 flex items-center justify-center"
        >
           <div className="w-1 h-1 bg-accent-red"></div>
        </motion.div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0">
          <line x1="50%" y1="20%" x2="15%" y2="85%" stroke="white" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="50%" y1="20%" x2="85%" y2="85%" stroke="white" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="15%" y1="85%" x2="85%" y2="85%" stroke="white" strokeWidth="1" />
        </svg>
        
        <motion.div 
          variants={{ hover: { opacity: [0, 1, 0] } }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute top-[50%] left-[32%] w-1.5 h-1.5 bg-accent-red rounded-full" 
        />

        {/* Small metadata block */}
        <motion.div 
          variants={{ hover: { y: -2, borderColor: "var(--color-border-subtle)" } }}
          className="absolute top-4 right-0 border border-border-subtle bg-bg-dark p-1.5 z-20"
        >
           <div className="text-[7px] font-mono text-text-secondary uppercase">SYNC_NODE</div>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const isFeatured = project.featured;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col ${isFeatured ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 border border-border-subtle bg-bg-dark transition-colors duration-500 hover:border-text-secondary/30 shadow-xl overflow-hidden`}
    >
       {/* Text Side */}
       <div className={`w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between ${isFeatured ? 'border-b lg:border-b-0 lg:border-r' : 'border-b lg:border-b-0 lg:border-l'} border-border-subtle relative z-10 bg-bg-dark`}>
         
         <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl md:text-5xl font-display font-bold text-border-subtle">{project.id}</span>
              <div className="h-px grow bg-border-subtle"></div>
            </div>
            
            <motion.h4 
              variants={{ hover: { x: 6 } }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-3 uppercase tracking-tight"
            >
              {project.title}
            </motion.h4>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <p className="text-accent-red text-[11px] md:text-xs font-sans uppercase tracking-[0.2em] font-semibold">{project.subtitle}</p>
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 border border-border-subtle bg-surface/20">
                 <div className="w-1.5 h-1.5 bg-accent-red/80 animate-pulse"></div>
                 <span className="text-[8px] text-text-secondary font-mono tracking-widest uppercase">SYS.ONLINE</span>
              </div>
            </div>

            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-10">
              {project.description}
            </p>

            <motion.div 
              variants={{ hover: { opacity: 1 } }}
              initial={{ opacity: 0.8 }}
              className="mb-10 transition-opacity duration-300"
            >
               <div className="text-[10px] text-text-secondary uppercase tracking-[0.2em] mb-4">TECH STACK</div>
               <div className="flex flex-wrap gap-2">
                 {project.stack.map(tech => (
                   <span key={tech} className="px-3 py-1 text-[11px] font-mono border border-border-subtle text-text-primary bg-surface/20">{tech}</span>
                 ))}
               </div>
            </motion.div>

            <motion.div 
              variants={{ hover: { opacity: 1 } }}
              initial={{ opacity: 0.8 }}
              className="transition-opacity duration-300"
            >
               <div className="text-[10px] text-text-secondary uppercase tracking-[0.2em] mb-4">SYSTEM CAPABILITIES</div>
               <div className="flex flex-wrap gap-x-5 gap-y-3">
                 {project.highlights.map(hl => (
                   <div key={hl} className="flex items-center gap-2">
                     <div className="w-1 h-1 bg-accent-red rounded-full"></div>
                     <span className="text-[10px] sm:text-[11px] font-sans text-text-secondary tracking-widest uppercase">{hl}</span>
                   </div>
                 ))}
               </div>
            </motion.div>
         </div>

         {/* Actions (Buttons instead of text links) */}
         <div className="flex flex-wrap gap-4 pt-8 border-t border-border-subtle">
           {project.githubUrl && (
             <a href={project.githubUrl} className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
               <span className="font-semibold">GITHUB</span>
               <motion.span variants={{ hover: { x: 4 } }} transition={{ duration: 0.3 }} className="transition-transform duration-300">↗</motion.span>
             </a>
           )}
           {(!project.liveUrl && !project.githubUrl) && (
             <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
               <span className="font-semibold">VIEW PROJECT</span>
               <motion.span variants={{ hover: { x: 4 } }} transition={{ duration: 0.3 }} className="transition-transform duration-300">↗</motion.span>
             </a>
           )}
           {project.liveUrl && (
             <a href={project.liveUrl} className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
               <span className="font-semibold">LIVE DEMO</span>
               <motion.span variants={{ hover: { x: 4 } }} transition={{ duration: 0.3 }} className="transition-transform duration-300">↗</motion.span>
             </a>
           )}
         </div>

       </div>

       {/* Visual Side (Hidden on mobile) */}
       <div className={`hidden lg:flex w-full lg:w-1/2 relative overflow-hidden bg-bg-dark`}>
          {project.id === "01" ? <MomentumVisual /> : <KindcycleVisual />}
       </div>
    </motion.div>
  );
}

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border-subtle pb-8">
           <div>
             <h2 className="text-accent-red text-[11px] font-sans uppercase tracking-[0.2em] font-semibold mb-4">BACKEND / FULL-STACK SYSTEMS</h2>
             <h3 className="text-6xl md:text-8xl font-display font-bold text-text-primary leading-none uppercase tracking-tighter">
               SELECTED<br />WORK<span className="text-accent-red">.</span>
             </h3>
           </div>
        </div>

        {/* Projects Container */}
        <div className="flex flex-col gap-16 md:gap-24">
           {projectsData.map((project, idx) => (
             <ProjectCard key={project.id} project={project} index={idx} />
           ))}
        </div>
      </div>
    </section>
  );
}
