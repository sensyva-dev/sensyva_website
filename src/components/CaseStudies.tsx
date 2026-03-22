import { useState } from 'react';
import { Shield, Wind, Activity, Sun, Search, Home } from 'lucide-react';

const cases = [
  {
    icon: Shield,
    sector: 'Defence',
    title: 'Defense Radar Systems — Predictive Maintenance',
    deployment: 'Edge AI · 50+ sensor parameters · Air-gapped',
    result: 'Zero unplanned downtime in 18 months',
    metric: '$2.5M saved',
    accent: 'border-red-500/40 hover:border-red-500/60',
    tagColor: 'bg-red-500/10 text-red-400',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
  },
  {
    icon: Wind,
    sector: 'Energy',
    title: 'Wind Turbine Motor Fault Detection',
    deployment: 'Acoustic + vibration edge AI · Remote farms',
    result: '73% reduction in maintenance costs',
    metric: '+45% availability',
    accent: 'border-emerald-500/40 hover:border-emerald-500/60',
    tagColor: 'bg-emerald-500/10 text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Activity,
    sector: 'Healthcare',
    title: 'Medical Device Motor Monitoring',
    deployment: 'Multi-sensor fusion · Ventilators & dialysis machines',
    result: '15 potential device failures prevented',
    metric: 'Zero patient impact',
    accent: 'border-blue-500/40 hover:border-blue-500/60',
    tagColor: 'bg-blue-500/10 text-blue-400',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
  },
  {
    icon: Sun,
    sector: 'Energy',
    title: 'Solar Inverter Fan Vibration Analysis',
    deployment: 'Vibration pattern recognition · Desert-condition farms',
    result: '82% reduction in inverter downtime',
    metric: '60% longer fan lifecycle',
    accent: 'border-amber-500/40 hover:border-amber-500/60',
    tagColor: 'bg-amber-500/10 text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
  },
  {
    icon: Search,
    sector: 'Aerospace',
    title: 'AI-Based NDT (Non-Destructive Testing)',
    deployment: 'Ultrasonic AI signal analysis · Aerospace components',
    result: '94% defect detection rate (vs 67% manual)',
    metric: '3× faster inspections',
    accent: 'border-violet-500/40 hover:border-violet-500/60',
    tagColor: 'bg-violet-500/10 text-violet-400',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
  },
  {
    icon: Home,
    sector: 'Smart Grid',
    title: 'Intelligent Appliance Identification System',
    deployment: 'Non-intrusive load monitoring · Smart home grid',
    result: '97% appliance identification accuracy',
    metric: '23% energy savings',
    accent: 'border-teal-500/40 hover:border-teal-500/60',
    tagColor: 'bg-teal-500/10 text-teal-400',
    iconBg: 'bg-teal-500/15',
    iconColor: 'text-teal-400',
  },
];

const allSectors = ['All', ...Array.from(new Set(cases.map((c) => c.sector)))];

export default function CaseStudies() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? cases : cases.filter((c) => c.sector === active);

  return (
    <section id="case-studies" className="py-28 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Proven Results</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Deployed in the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Field</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-slate-400 leading-relaxed">
            Real outcomes from live deployments — where failure wasn't an option.
          </p>
        </div>

        {/* Sector filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allSectors.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                active === s
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/8'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c, i) => (
            <div
              key={i}
              className={`group bg-white/3 border ${c.accent} rounded-2xl p-7 transition-all duration-300 hover:bg-white/5`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center`}>
                  <c.icon className={`w-5 h-5 ${c.iconColor}`} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.tagColor}`}>{c.sector}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{c.title}</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">{c.deployment}</p>

              <div className="border-t border-white/8 pt-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Outcome</p>
                  <p className="text-sm font-semibold text-white">{c.result}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-lg ${c.tagColor} flex-shrink-0`}>
                  {c.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
