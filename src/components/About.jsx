import { motion } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react';
import { leetcodeAchievement } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
         
         {/* Left Side: Statement */}
         <div className="lg:w-3/5 xl:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-accent-red text-[11px] font-sans uppercase tracking-[0.2em] font-semibold mb-8">ABOUT</h2>
              <h3 className="text-5xl md:text-7xl lg:text-7xl xl:text-[5.5rem] font-display font-bold text-text-primary leading-[0.95] uppercase tracking-tight">
                I'M INTERESTED IN THE<br className="hidden md:block"/> SYSTEMS BEHIND THE<br className="hidden md:block"/> <span className="text-accent-red">INTERFACE.</span>
              </h3>
            </motion.div>
         </div>

         {/* Right Side: Bio and Education */}
         <div className="lg:w-2/5 xl:w-1/3 flex flex-col justify-end pt-8 lg:pt-0">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-text-secondary text-sm md:text-base leading-relaxed mb-12"
            >
              I am a Computer Science Engineering student specializing in Cybersecurity, with hands-on experience in <strong className="text-text-primary font-semibold">backend development</strong>. My focus is on building resilient <strong className="text-text-primary font-semibold">REST APIs</strong>, optimizing <strong className="text-text-primary font-semibold">databases</strong>, and implementing robust <strong className="text-text-primary font-semibold">authentication and authorization</strong> protocols to create <strong className="text-text-primary font-semibold">security-focused systems</strong> driven by rigorous <strong className="text-text-primary font-semibold">problem solving</strong>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="border border-border-subtle p-8 bg-surface/10 relative group hover:border-text-secondary/30 transition-colors duration-500"
            >
               <h4 className="text-[10px] font-mono text-accent-red uppercase tracking-[0.2em] mb-6 border-b border-border-subtle pb-4">EDUCATION</h4>
               
               <h5 className="text-xl md:text-2xl font-display font-bold text-text-primary uppercase tracking-tight mb-2">
                 B.Tech in Computer Science Engineering
               </h5>
               <p className="text-xs md:text-sm font-sans text-text-secondary uppercase tracking-widest mb-8 font-medium">
                 Cybersecurity Specialization
               </p>
               
               <div className="flex flex-col gap-3 mb-8">
                 <div className="flex justify-between items-end text-[11px] font-sans text-text-primary uppercase tracking-[0.15em]">
                    <span className="font-semibold max-w-37.5">The Neotia University</span>
                    <span className="text-text-secondary text-[10px] font-mono">2023 — PRESENT</span>
                 </div>
               </div>

               <div className="pt-6 border-t border-border-subtle flex justify-between items-end mb-8">
                  <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">CGPA (6TH SEM)</span>
                  <span className="text-4xl font-display font-bold text-accent-red leading-none">9.39<span className="text-lg text-text-secondary">/10</span></span>
               </div>

               {/* Resume Download Action */}
               <a href="/Srijon-Paul-Resume.pdf" download="Srijon-Paul-Resume.pdf" className="group flex items-center justify-between w-full p-4 bg-bg-dark border border-border-subtle hover:border-accent-red/50 transition-colors">
                  <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-text-primary">Download Resume</span>
                  <ArrowDownToLine className="w-4 h-4 text-text-secondary group-hover:text-accent-red transition-colors" />
               </a>
            </motion.div>

            {/* LeetCode Achievement */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 border border-border-subtle p-8 bg-surface/10 relative group hover:border-text-secondary/30 transition-colors duration-500"
            >
              <div className="text-4xl font-display font-bold text-text-primary mb-2">200+</div>
              <div className="text-[10px] md:text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-text-secondary mb-8">LEETCODE PROBLEMS</div>
              <a href={leetcodeAchievement.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
                <span className="font-semibold">VIEW LEETCODE PROFILE</span>
                <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">↗</span>
              </a>
            </motion.div>
         </div>

      </div>
    </section>
  );
}
