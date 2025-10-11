import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import SensyvaLogo from './SensyvaLogo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#problem', label: 'The Opportunity' },
    { href: '#about', label: 'About' },
    { href: '#industries', label: 'Industries' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#case-study-download', label: 'Case Study Pack' },
    { href: '#data-gap', label: 'Data Gap Audit' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-lg shadow-2xl border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="group-hover:scale-110 transition-transform">
              <SensyvaLogo size="md" />
            </div>
            <span className="text-xl font-bold text-white">SENSYVA AI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all"
            >
              Schedule Demo
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2 rounded-full font-semibold mt-4"
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
