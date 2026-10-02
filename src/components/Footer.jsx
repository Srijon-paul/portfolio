export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border-subtle py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-text-secondary">
        
        {/* Left */}
        <div className="text-text-primary font-semibold">
          SRIJON.P
        </div>

        {/* Center */}
        <div className="hidden lg:block text-center flex-1">
          BACKEND ENGINEER / SOFTWARE DEVELOPER
        </div>

        {/* Right */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
           <span>© 2026 SRIJON PAUL</span>
           
           <button 
             onClick={scrollToTop} 
             className="text-text-primary hover:text-accent-red transition-colors group flex items-center gap-2 cursor-pointer"
             aria-label="Scroll back to top"
           >
             <span>BACK TO TOP</span>
             <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
           </button>
        </div>

      </div>

      {/* Mobile Center text */}
      <div className="lg:hidden mt-6 text-center text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-text-secondary w-full">
         BACKEND ENGINEER / SOFTWARE DEVELOPER
      </div>
    </footer>
  );
}
