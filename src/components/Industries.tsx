import { Factory, Zap, Truck, Activity, ArrowRight } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    number: '01',
    title: 'Manufacturing',
    challenge: '20% of production capacity lost to unplanned downtime globally.',
    solution: 'Predictive maintenance that sees failures 72 hours ahead.',
    features: ['Vibration analysis for motor health', 'AI-powered NDT for quality control', 'Acoustic anomaly detection'],
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-blue-500/20 to-blue-600/5',
    border: 'hover:border-blue-500/40',
    tag: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: Zap,
    number: '02',
    title: 'Energy & Utilities',
    challenge: 'Grid failures and renewable energy intermittency costing billions.',
    solution: 'AI-powered grid optimization and fault prediction.',
    features: ['Wind turbine fault detection', 'Solar inverter monitoring', 'Smart grid load balancing'],
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-amber-500/20 to-amber-600/5',
    border: 'hover:border-amber-500/40',
    tag: 'bg-amber-500/10 text-amber-400',
  },
  {
    icon: Truck,
    number: '03',
    title: 'Logistics & Supply Chain',
    challenge: '30% of global shipments face delays or damage.',
    solution: 'End-to-end visibility with predictive routing and fleet intelligence.',
    features: ['Fleet health monitoring', 'Cold chain integrity', 'Port automation optimization'],
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-emerald-500/20 to-emerald-600/5',
    border: 'hover:border-emerald-500/40',
    tag: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: Activity,
    number: '04',
    title: 'Medical Devices',
    challenge: 'Life-critical equipment failures risk patient safety and compliance.',
    solution: 'Multi-sensor fusion AI for predictive maintenance and real-time monitoring.',
    features: ['Predictive failure detection 96+ hrs ahead', 'Real-time anomaly alerting', 'Regulatory compliance tracking'],
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'from-violet-500/20 to-violet-600/5',
    border: 'hover:border-violet-500/40',
    tag: 'bg-violet-500/10 text-violet-400',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">Industries</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Transform</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-gray-500 leading-relaxed">
            Bringing predictive intelligence to the backbone of the global economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className={`group relative bg-white border border-gray-100 ${ind.border} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              {/* Image strip */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm ${ind.tag}`}>
                    {ind.number}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="text-2xl font-black text-white">{ind.title}</h3>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <ind.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Challenge</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{ind.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Solution</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{ind.solution}</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                  <ul className="flex flex-wrap gap-2">
                    {ind.features.map((f, fi) => (
                      <li key={fi} className="text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div className="mt-10 flex items-center justify-center">
          <a href="#sovereign-ai" className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all text-sm">
            See our sovereign AI deployment tiers <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
