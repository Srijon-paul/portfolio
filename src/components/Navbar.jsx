import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events for navbar styling and active section
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          // Simple active section detection based on scroll position
          const sections = NAV_LINKS.map(link => link.href.substring(1));
          let currentSection = '';
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element && window.scrollY >= (element.offsetTop - 100)) {
              currentSection = section;
            }
          }
          
          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-bg-dark/95 backdrop-blur-md border-b border-border-subtle' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 md:h-16 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#top" 
            onClick={(e) => handleScrollTo(e, '#top')}
            className="font-display text-xl md:text-2xl font-bold tracking-wide text-text-primary"
          >
            SRIJON.P
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-[11px] font-sans uppercase tracking-[0.2em] transition-colors focus-visible:outline-2 focus-visible:outline-accent-red focus-visible:outline-offset-4 ${
                    activeSection === link.href.substring(1) 
                      ? 'text-text-primary' 
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                >
                  <span className="relative pb-1">
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.span 
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px bg-accent-red"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </span>
                </a>
              ))}
            </div>

            <div className="w-px h-3 bg-border-subtle"></div>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="group flex items-center space-x-1.5 text-[11px] font-sans uppercase tracking-[0.2em] text-accent-red hover:text-white transition-colors"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-text-primary p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-dark pt-20 px-6 pb-6 md:hidden border-b border-border-subtle h-fit"
          >
            <div className="flex flex-col space-y-6 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-2xl font-display uppercase tracking-wider ${
                    activeSection === link.href.substring(1) 
                      ? 'text-text-primary' 
                      : 'text-text-secondary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-6 mt-2 border-t border-border-subtle">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="inline-flex items-center space-x-2 text-xl font-display uppercase tracking-wider text-accent-red"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
