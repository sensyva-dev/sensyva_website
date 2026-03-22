import { FileDown, ArrowRight } from 'lucide-react';

const metrics = [
  { value: '$500Bn', label: 'Industrial losses / yr' },
  { value: '95%', label: 'Sensor data wasted' },
  { value: '72hrs', label: 'Failure prediction lead time' },
  { value: '18mo', label: 'Zero downtime — Defence project' },
];

const marqueeItems = [
  'Manufacturing', 'Energy & Utilities', 'Ministry of Defence',
  'Medical Devices', 'Logistics', 'Solar & Wind', 'Smart Cities',
  'Aerospace NDT', 'BFSI', 'Government',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 w-full">
        {/* Top badge */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 border border-violet-500/30 bg-violet-500/10 rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-violet-300 text-sm font-medium tracking-wide">Sovereign · Edge · Industrial AI</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight mb-6">
            SENSYVA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
              AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
            We give industrial infrastructure a nervous system — predictive, sovereign,
            and deployed at the edge. Built for factories, grids, and defence-grade environments.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-slide-up animation-delay-200">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-violet-600/30"
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#case-study-download"
            className="group inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
          >
            <FileDown className="w-4 h-4" />
            Download Case Studies
          </a>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 animate-slide-up animation-delay-400">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white/5 border border-white/8 rounded-xl p-5 text-center backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-1">
                {m.value}
              </div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
          <p className="text-center text-slate-600 text-xs uppercase tracking-[0.3em] mb-4 font-semibold">Sectors We Serve</p>
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-slate-500 text-sm font-medium">
                <span className="w-1 h-1 rounded-full bg-violet-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
