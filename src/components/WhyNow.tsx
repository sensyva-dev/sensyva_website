import { Radio, Zap, TrendingDown, Factory, Brain } from 'lucide-react';

const reasons = [
  {
    icon: Radio,
    number: '01',
    title: '5G & Private Networks Enable Real-time Intelligence',
    description: 'Sub-10ms latency makes edge AI viable for critical decisions. Private 5G deployments in industrial facilities have crossed the cost threshold — what required fibre in 2020 now runs over wireless.',
  },
  {
    icon: Zap,
    number: '02',
    title: 'Global Industrial Digitization Mandates',
    description: "India's PLI scheme, Saudi Vision 2030, UAE's Industry 4.0, and Europe's Digital Decade — governments are investing trillions in industrial digitization. The demand signal is irreversible.",
  },
  {
    icon: TrendingDown,
    number: '03',
    title: 'Sensor Economics Crossed the Tipping Point',
    description: '70% cost reduction in 3 years. IoT sensors now cost less than one hour of manual monitoring labor. The hardware barrier to instrumentation has collapsed.',
  },
  {
    icon: Factory,
    number: '04',
    title: 'Autonomous Operations Are Now Non-Negotiable',
    description: 'Remote operations are a baseline requirement post-2020. Industries need systems that run, diagnose, and adapt without constant human intervention — on the factory floor or 300km offshore.',
  },
  {
    icon: Brain,
    number: '05',
    title: 'Edge AI Models Are Production-Ready',
    description: 'Quantized LLMs, TensorFlow Lite, and ONNX Runtime now bring cloud-level inference to sub-$100 edge devices. The intelligence stack has met the hardware where it lives.',
  },
];

export default function WhyNow() {
  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">Market Timing</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">2026</span> Is Our Moment
            </h2>
          </div>
          <p className="md:max-w-sm text-gray-500 leading-relaxed">
            Five converging forces have created the perfect conditions for an industrial AI revolution — right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.slice(0, 3).map((r, i) => (
            <div key={i} className="bg-white border border-gray-100 hover:border-violet-200 rounded-2xl p-7 transition-all duration-300 hover:shadow-md group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                  <r.icon className="w-5 h-5 text-violet-600" />
                </div>
                <span className="text-xs font-bold text-gray-300 tabular-nums">{r.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-violet-700 transition-colors">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-5">
          {reasons.slice(3).map((r, i) => (
            <div key={i} className="bg-white border border-gray-100 hover:border-violet-200 rounded-2xl p-7 transition-all duration-300 hover:shadow-md group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                  <r.icon className="w-5 h-5 text-violet-600" />
                </div>
                <span className="text-xs font-bold text-gray-300 tabular-nums">{r.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-violet-700 transition-colors">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
