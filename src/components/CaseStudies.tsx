import { Shield, Wind, Activity, Sun, Search, Home } from 'lucide-react';

const cases = [
  {
    icon: Shield,
    tag: 'Defence',
    title: 'Defense Radar Systems — Predictive Maintenance',
    challenge: 'Critical defense radar systems requiring 99.99% uptime with zero margin for error.',
    solution: 'Edge AI monitoring 50+ sensor parameters, predicting component failures 96 hours in advance.',
    result: 'Zero unplanned downtime in 18 months',
    metric: '$2.5M saved',
    accent: 'border-red-500/40 hover:border-red-500/60',
    tagColor: 'bg-red-500/10 text-red-400',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
  },
  {
    icon: Wind,
    tag: 'Energy',
    title: 'Wind Turbine Motor Fault Detection',
    challenge: 'Remote wind farms with expensive maintenance visits and catastrophic failure risks.',
    solution: 'Acoustic and vibration analysis using edge AI to detect bearing degradation patterns.',
    result: '73% reduction in maintenance costs',
    metric: '+45% availability',
    accent: 'border-emerald-500/40 hover:border-emerald-500/60',
    tagColor: 'bg-emerald-500/10 text-emerald-400',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Activity,
    tag: 'Healthcare',
    title: 'Medical Device Motor Monitoring',
    challenge: 'Life-critical equipment (ventilators, dialysis machines) requiring predictive maintenance.',
    solution: 'Multi-sensor fusion analyzing current draw, temperature, and acoustic signatures.',
    result: '15 potential device failures prevented',
    metric: 'Zero patient impact',
    accent: 'border-blue-500/40 hover:border-blue-500/60',
    tagColor: 'bg-blue-500/10 text-blue-400',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
  },
  {
    icon: Sun,
    tag: 'Solar',
    title: 'Solar Inverter Fan Vibration Analysis',
    challenge: 'Solar farms in harsh desert conditions with inverter cooling systems prone to sand damage.',
    solution: 'Vibration pattern recognition to detect fan imbalance and bearing wear before failure.',
    result: '82% reduction in inverter downtime',
    metric: '60% longer fan lifecycle',
    accent: 'border-amber-500/40 hover:border-amber-500/60',
    tagColor: 'bg-amber-500/10 text-amber-400',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
  },
  {
    icon: Search,
    tag: 'Aerospace',
    title: 'AI-Based NDT (Non-Destructive Testing)',
    challenge: 'Manual ultrasonic testing missing critical micro-cracks in aerospace components.',
    solution: 'AI-powered signal analysis detecting anomalies invisible to human inspectors.',
    result: '94% defect detection rate (vs 67% manual)',
    metric: '3× faster inspections',
    accent: 'border-violet-500/40 hover:border-violet-500/60',
    tagColor: 'bg-violet-500/10 text-violet-400',
    iconBg: 'bg-violet-500/15',
    iconColor: 'text-violet-400',
  },
  {
    icon: Home,
    tag: 'Smart Grid',
    title: 'Intelligent Appliance Identification System',
    challenge: 'Smart home energy optimization requiring real-time appliance recognition.',
    solution: 'Non-intrusive load monitoring using AI to identify appliances from electrical signatures.',
    result: '97% appliance identification accuracy',
    metric: '23% energy savings',
    accent: 'border-teal-500/40 hover:border-teal-500/60',
    tagColor: 'bg-teal-500/10 text-teal-400',
    iconBg: 'bg-teal-500/15',
    iconColor: 'text-teal-400',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-28 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Case Studies</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Proven in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Field</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-slate-400 leading-relaxed">
            Deployed where failure isn't an option — across defence, energy, healthcare, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`group bg-white/3 border ${c.accent} rounded-2xl p-7 transition-all duration-300 hover:bg-white/5`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center`}>
                  <c.icon className={`w-5 h-5 ${c.iconColor}`} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.tagColor}`}>{c.tag}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-5 leading-snug">{c.title}</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Challenge</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Solution</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.solution}</p>
                </div>
              </div>

              {/* Result strip */}
              <div className="border-t border-white/8 pt-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Outcome</p>
                  <p className="text-sm font-semibold text-white">{c.result}</p>
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-lg ${c.tagColor} flex-shrink-0`}>{c.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
