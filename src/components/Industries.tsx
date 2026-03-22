import { Factory, Zap, Truck, Activity, Shield, Search } from 'lucide-react';

const sectors = [
  {
    icon: Factory,
    title: 'Manufacturing',
    tagline: 'Predictive maintenance 72 hrs before failure',
    capabilities: ['Vibration & acoustic monitoring', 'AI-powered NDT', 'Motor health analytics'],
    stat: '20% downtime eliminated',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'hover:border-blue-200',
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    tagline: 'AI fault prediction for grids, wind & solar',
    capabilities: ['Wind turbine fault detection', 'Solar inverter monitoring', 'Smart grid optimization'],
    stat: '73% lower maintenance cost',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'hover:border-amber-200',
  },
  {
    icon: Shield,
    title: 'Defence',
    tagline: '99.99% uptime on mission-critical systems',
    capabilities: ['Radar system predictive maintenance', 'Edge AI with zero cloud dependency', '96-hour failure prediction'],
    stat: '$2.5M losses prevented',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'hover:border-red-200',
  },
  {
    icon: Activity,
    title: 'Medical Devices',
    tagline: 'Life-critical equipment — zero failure tolerance',
    capabilities: ['Multi-sensor fusion for ventilators & dialysis', 'Real-time anomaly alerting', 'Compliance reporting'],
    stat: '15 failures prevented, 0 patient impact',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'hover:border-violet-200',
  },
  {
    icon: Search,
    title: 'Aerospace & NDT',
    tagline: 'AI inspection surpassing human accuracy',
    capabilities: ['Micro-crack detection in components', 'Ultrasonic signal AI analysis', '3× faster inspection cycle'],
    stat: '94% detection rate vs 67% manual',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'hover:border-indigo-200',
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    tagline: 'Fleet intelligence and cold-chain integrity',
    capabilities: ['Fleet health monitoring', 'Cold chain integrity sensors', 'Port automation optimization'],
    stat: '30% fewer shipment failures',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-200',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">Sectors</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-14">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Transform</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-gray-500 leading-relaxed">
            Six sectors where unplanned failure is unacceptable — and where Sensyva AI has proven results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s, i) => (
            <div
              key={i}
              className={`group bg-white border border-gray-100 ${s.border} rounded-2xl p-6 transition-all duration-200 hover:shadow-md`}
            >
              <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-5`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">{s.tagline}</p>

              <ul className="space-y-1.5 mb-5">
                {s.capabilities.map((c, ci) => (
                  <li key={ci} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className={`w-1.5 h-1.5 rounded-full ${s.bg} border ${s.color.replace('text-', 'border-')} mt-1.5 flex-shrink-0`} />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="border-t border-gray-100 pt-4">
                <p className={`text-xs font-bold ${s.color}`}>{s.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
