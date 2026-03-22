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
    accent: 'border-red-200 hover:border-red-400',
    tagColor: 'bg-red-50 text-red-600',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    icon: Wind,
    sector: 'Energy',
    title: 'Wind Turbine Motor Fault Detection',
    deployment: 'Acoustic + vibration edge AI · Remote farms',
    result: '73% reduction in maintenance costs',
    metric: '+45% availability',
    accent: 'border-emerald-200 hover:border-emerald-400',
    tagColor: 'bg-emerald-50 text-emerald-700',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Activity,
    sector: 'Healthcare',
    title: 'Medical Device Motor Monitoring',
    deployment: 'Multi-sensor fusion · Ventilators & dialysis machines',
    result: '15 potential device failures prevented',
    metric: 'Zero patient impact',
    accent: 'border-blue-200 hover:border-blue-400',
    tagColor: 'bg-blue-50 text-blue-600',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Sun,
    sector: 'Energy',
    title: 'Solar Inverter Fan Vibration Analysis',
    deployment: 'Vibration pattern recognition · Desert-condition farms',
    result: '82% reduction in inverter downtime',
    metric: '60% longer fan lifecycle',
    accent: 'border-amber-200 hover:border-amber-400',
    tagColor: 'bg-amber-50 text-amber-700',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Search,
    sector: 'Aerospace',
    title: 'AI-Based NDT (Non-Destructive Testing)',
    deployment: 'Ultrasonic AI signal analysis · Aerospace components',
    result: '94% defect detection rate (vs 67% manual)',
    metric: '3× faster inspections',
    accent: 'border-violet-200 hover:border-violet-400',
    tagColor: 'bg-violet-50 text-violet-700',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Home,
    sector: 'Smart Grid',
    title: 'Intelligent Appliance Identification System',
    deployment: 'Non-intrusive load monitoring · Smart home grid',
    result: '97% appliance identification accuracy',
    metric: '23% energy savings',
    accent: 'border-teal-200 hover:border-teal-400',
    tagColor: 'bg-teal-50 text-teal-700',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
];

const allSectors = ['All', ...Array.from(new Set(cases.map((c) => c.sector)))];

export default function CaseStudies() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? cases : cases.filter((c) => c.sector === active);

  return (
    <section id="case-studies" className="py-28 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">Proven Results</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Deployed in the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Field</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-gray-500 leading-relaxed">
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
                  : 'bg-gray-50 text-gray-500 hover:bg-violet-50 hover:text-violet-700 border border-gray-200'
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
              className={`group bg-white border ${c.accent} rounded-2xl p-7 transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center`}>
                  <c.icon className={`w-5 h-5 ${c.iconColor}`} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.tagColor}`}>{c.sector}</span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{c.title}</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">{c.deployment}</p>

              <div className="border-t border-gray-100 pt-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Outcome</p>
                  <p className="text-sm font-semibold text-gray-900">{c.result}</p>
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
