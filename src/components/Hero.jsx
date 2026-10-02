import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowDownToLine } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen pt-24 md:pt-32 pb-16 px-6 md:px-12 lg:px-24 flex flex-col justify-center border-b border-border-subtle overflow-hidden"
    >
      {/* Background grid lines for subtle technical feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
        
        {/* Left Side: Typography */}
        <motion.div 
          className="col-span-1 lg:col-span-7 flex flex-col items-start gap-8 lg:gap-10 mt-12 lg:mt-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUpVariant} className="flex items-center">
            <span className="text-accent-red text-xs md:text-sm font-sans uppercase tracking-[0.25em] font-bold">
              SRIJON PAUL
            </span>
          </motion.div>

          {/* Huge Heading - Animated as one stable block */}
          <motion.div variants={fadeUpVariant} className="relative w-full">
             <div className="absolute -top-8 right-4 md:right-auto md:left-2/3 hidden sm:flex items-center gap-2 border border-border-subtle bg-bg-dark px-2 py-1 z-10 pointer-events-none">
                <span className="text-[8px] text-accent-red font-mono font-bold">POST</span>
                <span className="text-[8px] text-text-secondary font-mono">/v1/system/init</span>
             </div>
             
             <h1 className="text-[14vw] sm:text-[13vw] lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.85] font-display font-bold tracking-tighter text-text-primary uppercase flex flex-col">
               <span className="whitespace-nowrap">BACKEND</span>
               <span className="flex items-baseline whitespace-nowrap">
                 ENGINEER<span className="text-accent-red">.</span>
               </span>
             </h1>
             
             {/* Moved further left/down to separate from typography */}
             <div className="absolute -bottom-8 -left-12 lg:-left-16 hidden xl:flex flex-col gap-1 z-10 pointer-events-none">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-accent-red/50"></div>
                  <div className="w-1.5 h-1.5 bg-accent-red/50"></div>
                  <div className="w-1.5 h-1.5 border border-accent-red"></div>
                </div>
                <span className="text-[7px] text-text-secondary font-mono tracking-widest">NODE_CLUSTER</span>
             </div>
          </motion.div>

          {/* Subtext */}
          <motion.p variants={fadeUpVariant} className="text-text-secondary text-sm sm:text-base md:text-lg font-sans uppercase tracking-widest max-w-xl leading-relaxed">
            I build reliable backend systems,<br className="hidden md:block"/>
            APIs and data-driven products.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-2">
            <a href="#work" className="group flex items-center gap-3 text-text-primary hover:text-accent-red transition-colors w-fit focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none">
              <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.2em] font-semibold">View My Work</span>
              <span className="bg-surface p-2 rounded-full border border-border-subtle group-hover:border-accent-red/50 transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a href="https://github.com/Srijon-paul" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
                <span className="font-semibold">GITHUB</span>
                <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">↗</span>
              </a>
              <a href="/Srijon-Paul-Resume.pdf" download="Srijon-Paul-Resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-transparent text-[9px] md:text-[10px] font-sans uppercase tracking-widest text-text-primary hover:border-accent-red hover:text-accent-red transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 rounded-none group/link">
                <span className="font-semibold">RESUME</span>
                <span className="group-hover/link:translate-y-0.5 transition-transform duration-300">↓</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Portrait Composition */}
        <div className="col-span-1 lg:col-span-5 relative mt-8 lg:mt-0 group/portrait perspective-[1000px]">
          <motion.div 
            className="relative w-full aspect-3/4 max-w-88 md:max-w-md mx-auto lg:ml-auto lg:mr-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Wireframe Geometric Rectangle instead of solid red */}
            <div className="absolute top-4 -right-4 lg:-top-8 lg:-right-8 w-2/3 h-[70%] border border-border-subtle bg-surface/5 z-0 hidden sm:block transition-transform duration-500 ease-out lg:group-hover/portrait:translate-x-[3px] lg:group-hover/portrait:-translate-y-[3px] motion-reduce:transform-none">
               <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent-red"></div>
               <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent-red"></div>
            </div>
            {/* Thin border geometric rectangle */}
            <div className="absolute bottom-12 -left-4 lg:-bottom-8 lg:-left-8 w-3/4 h-[60%] border border-border-subtle z-0 hidden sm:block transition-transform duration-500 ease-out lg:group-hover/portrait:-translate-x-[2px] lg:group-hover/portrait:translate-y-[2px] motion-reduce:transform-none"></div>

            {/* Subtle Technical Details */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute inset-0 pointer-events-none z-30 transition-transform duration-500 ease-out lg:group-hover/portrait:translate-x-[1px] lg:group-hover/portrait:-translate-y-[1px] motion-reduce:transform-none"
            >
              {/* Measurement lines */}
              <div className="absolute top-0 -left-6 w-4 h-px bg-border-subtle hidden sm:block"></div>
              <div className="absolute bottom-0 -left-6 w-4 h-px bg-border-subtle hidden sm:block"></div>
              <div className="absolute top-0 -left-4 w-px h-full border-l border-dashed border-border-subtle hidden sm:block"></div>
              
              <div className="absolute top-8 -right-10 text-[9px] text-text-secondary font-mono tracking-widest rotate-90 origin-left hidden sm:block">
                VER. 2.0.4 // REL. STABLE
              </div>
              
              {/* Database Schema Motif */}
              <div className="absolute top-1/4 -right-16 hidden lg:flex flex-col gap-1.5 bg-bg-dark border border-border-subtle p-2 w-24">
                 <div className="text-[7px] font-mono text-accent-red border-b border-border-subtle pb-1 mb-1">schema_auth</div>
                 <div className="flex justify-between text-[7px] font-mono text-text-secondary"><span>id</span><span>uuid</span></div>
                 <div className="flex justify-between text-[7px] font-mono text-text-secondary"><span>hash</span><span>varchar</span></div>
                 <div className="flex justify-between text-[7px] font-mono text-text-secondary"><span>role</span><span>enum</span></div>
              </div>
              
              {/* System annotation */}
              <div className="absolute bottom-6 -right-6 flex items-center gap-2 bg-bg-dark pl-2">
                <div className="w-1.5 h-1.5 bg-accent-red animate-pulse"></div>
                <span className="text-[9px] text-text-secondary font-mono uppercase tracking-widest">SYS.ON</span>
              </div>
              
              <div className="absolute -top-6 left-0 text-[10px] text-text-secondary font-mono uppercase tracking-widest bg-bg-dark pr-2">
                ID: SP-8902-DEV
              </div>
            </motion.div>

            {/* The Portrait Container (No overflow-hidden to allow image to break bounds) */}
            <motion.div 
              style={{ y }} 
              className="relative z-10 w-full h-full editorial-border bg-bg-dark"
            >
              <img 
                src="/srijon_portrait.jpg" 
                alt="Srijon Paul Portrait" 
                width="400"
                height="533"
                loading="eager"
                className="w-full h-full object-cover object-center relative z-10 grayscale-0 lg:grayscale lg:contrast-[1.1] transition-all duration-500 ease-out lg:group-hover/portrait:-translate-y-[8px] lg:group-hover/portrait:translate-x-[4px] lg:group-hover/portrait:scale-[1.03] lg:group-hover/portrait:grayscale-0 motion-reduce:transform-none motion-reduce:grayscale-0"
              />
              
              {/* Inner subtle gradient just to blend bottom edge if needed */}
              <div className="absolute inset-0 bg-linear-to-t from-bg-dark/40 to-transparent pointer-events-none z-20"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
