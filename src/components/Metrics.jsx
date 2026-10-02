export function Metrics() {
  const technologies = [
    "REST APIs", "NODE.JS", "EXPRESS.JS", "POSTGRESQL", "MONGODB", 
    "PRISMA ORM", "JWT", "RBAC", "API DESIGN", "AUTHENTICATION", 
    "AUTHORIZATION", "SECURITY", "HELMET", "CORS", "RATE LIMITING", 
    "INPUT VALIDATION"
  ];

  return (
    <section className="border-y border-border-subtle bg-bg-dark overflow-hidden py-4 lg:py-5 relative" aria-label="Engineering Focus Technologies">
       <div className="w-full relative overflow-hidden group">
         
         {/* Moving Marquee (Hidden on reduced motion) */}
         <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:hidden" aria-hidden="true">
           {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, idx) => (
             <div key={idx} className="flex items-center">
               <span className="text-[9px] md:text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-text-primary px-6 md:px-8 whitespace-nowrap">
                 {tech}
               </span>
               <span className="text-[10px] text-accent-red font-mono font-bold select-none opacity-80">
                 //
               </span>
             </div>
           ))}
         </div>
         
         {/* Static version for reduced motion (Also available to screen readers) */}
         <div className="hidden motion-reduce:flex flex-wrap justify-center w-full px-6 gap-y-4">
           <span className="sr-only">Technologies used: {technologies.join(', ')}</span>
           {technologies.map((tech, idx) => (
             <div key={`static-${idx}`} className="flex items-center" aria-hidden="true">
               <span className="text-[9px] md:text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-text-primary px-3 md:px-4 whitespace-nowrap">
                 {tech}
               </span>
               {idx < technologies.length - 1 && (
                 <span className="text-[10px] text-accent-red font-mono font-bold select-none opacity-80">
                   //
                 </span>
               )}
             </div>
           ))}
         </div>
         
       </div>
    </section>
  );
}
