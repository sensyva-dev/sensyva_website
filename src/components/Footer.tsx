import { Mail, MapPin, Shield, ArrowRight } from 'lucide-react';
import SensyvaLogo from './SensyvaLogo';

const links = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Our Origin', href: '#origin' },
    { label: 'Vision & Mission', href: '#vision' },
  ],
  Solutions: [
    { label: 'Sovereign AI', href: '#sovereign-ai' },
    { label: 'Edge AI Appliance', href: '#sovereign-ai' },
    { label: 'Departmental Cloud', href: '#sovereign-ai' },
    { label: 'HPC Datacenter', href: '#sovereign-ai' },
  ],
  Industries: [
    { label: 'Manufacturing', href: '#industries' },
    { label: 'Energy & Utilities', href: '#industries' },
    { label: 'Medical Devices', href: '#industries' },
    { label: 'Logistics', href: '#industries' },
  ],
  Resources: [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'ROI Audit Tool', href: '#data-gap' },
    { label: 'Download Case Studies', href: '#case-study-download' },
    { label: 'Schedule Demo', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top block */}
        <div className="py-16 grid lg:grid-cols-5 gap-12 border-b border-white/8">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <SensyvaLogo size="md" />
              <div>
                <span className="text-lg font-black leading-none block">SENSYVA</span>
                <span className="text-[10px] font-semibold text-blue-400 tracking-[0.2em] uppercase leading-none block">AI</span>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Sovereign AI infrastructure for industry, defence, and government — built to stay inside your firewall.
            </p>
            <div className="flex items-start gap-2 text-sm text-slate-500">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-violet-500" />
              Delhi NCR, India
            </div>
            <a href="mailto:hello@sensyva.ai" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mt-2">
              <Mail className="w-4 h-4 flex-shrink-0 text-violet-500" />
              hello@sensyva.ai
            </a>
          </div>

          {/* Nav cols */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.15em] mb-5">{group}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sovereign badge strip */}
        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-violet-400" />
            </div>
            <p className="text-sm text-slate-400 max-w-lg">
              Sensyva specializes in Sovereign AI, bridging cutting-edge LLMs with the rigorous security standards
              of the Indian Government, Defence sectors, and enterprise compliance mandates.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors hover:gap-3"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Sensyva AI. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Making tomorrow's infrastructure intelligent, today.
          </p>
        </div>
      </div>
    </footer>
  );
}
