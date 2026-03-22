import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import SensyvaLogo from './SensyvaLogo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#sovereign-ai', label: 'Solutions' },
    { href: '#industries', label: 'Industries' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#data-gap', label: 'ROI Audit' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
        : 'bg-transparent'
    }`}>
      {/* Top accent line */}
      {isScrolled && (
        <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-violet-500 to-cyan-400" />
      )}

      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="group-hover:scale-105 transition-transform duration-200">
              <SensyvaLogo size="md" />
            </div>
            <div>
              <span className="text-lg font-black text-white tracking-tight leading-none block">SENSYVA</span>
              <span className="text-[10px] font-semibold text-blue-400 tracking-[0.2em] uppercase leading-none block">AI</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-blue-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:hello@sensyva.ai"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              hello@sensyva.ai
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
            >
              Schedule Demo
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-3 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
                <ChevronRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold mt-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
