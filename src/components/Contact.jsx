import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useState } from 'react';

// Magnetic Button Component
function MagneticButton({ children, className }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull distance multiplier
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden flex flex-col min-h-screen">
      
      {/* Editorial geometric block instead of huge solid red */}
      <div className="absolute bottom-0 right-0 w-[90%] sm:w-3/4 md:w-2/3 lg:w-[45%] h-[75%] md:h-[65%] border-t border-l border-border-subtle bg-surface/5 z-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent-red -translate-x-px -translate-y-px"></div>
         <div className="absolute bottom-12 left-0 w-12 h-px bg-accent-red"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col grow justify-end">
         
         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-12">
            <div className="w-full lg:w-2/3">
               <motion.h2 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7rem] xl:text-[8.5rem] font-display font-bold text-text-primary leading-[0.85] uppercase tracking-tighter"
               >
                 LET'S BUILD<br />SOMETHING<br />RELIABLE.
               </motion.h2>
            </div>

            {/* Circular Arrow CTA */}
            <div className="w-full lg:w-1/3 flex justify-start lg:justify-end pb-4 lg:pb-12">
               <MagneticButton className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border border-text-primary bg-bg-dark flex items-center justify-center group hover:bg-text-primary transition-colors duration-500 cursor-pointer shadow-2xl">
                  <a href="mailto:srijonpaul003@gmail.com" className="w-full h-full flex items-center justify-center rounded-full" aria-label="Send Email">
                    <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-text-primary group-hover:text-bg-dark transition-colors duration-500" />
                  </a>
               </MagneticButton>
            </div>
         </div>

         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.7, delay: 0.2 }}
           className="mt-24 md:mt-32 lg:mt-40 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-8 border-t border-text-primary/20 pt-12 text-text-primary"
         >
            {/* Supporting text */}
            <div className="max-w-md">
              <p className="text-[11px] md:text-xs font-sans font-medium uppercase tracking-widest leading-relaxed">
                Open to software engineering, backend development and technical opportunities.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4">
               <a href="https://github.com/Srijon-paul" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
                 <span className="font-semibold">GITHUB</span>
                 <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">↗</span>
               </a>
               
               <a href="https://linkedin.com/in/srijon-paul-a143b5306" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
                 <span className="font-semibold">LINKEDIN</span>
                 <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">↗</span>
               </a>

               <a href="https://leetcode.com/u/srijon-paul/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
                 <span className="font-semibold">LEETCODE</span>
                 <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">↗</span>
               </a>

               <a href="mailto:srijonpaul003@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
                 <span className="font-semibold">EMAIL</span>
                 <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">↗</span>
               </a>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
