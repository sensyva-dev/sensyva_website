import { TrendingDown, AlertTriangle, Clock, DollarSign, ArrowRight } from 'lucide-react';

const stats = [
  { number: '$500Bn', label: 'Annual industrial downtime losses globally', icon: DollarSign, color: 'text-red-400' },
  { number: '95%', label: 'Industrial sensor data goes unanalyzed', icon: AlertTriangle, color: 'text-amber-400' },
  { number: '10ms', label: 'Decision time needed in critical processes', icon: Clock, color: 'text-blue-400' },
  { number: '70%', label: 'Drop in sensor costs over last 3 years', icon: TrendingDown, color: 'text-emerald-400' },
];

export default function Problem() {
  return (
    <section id="problem" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">The Opportunity</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              The Trillion-Dollar<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Blindspot</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              AI has transformed the digital world — but <strong className="text-gray-900">95% of industrial data remains untapped</strong>.
              Every second, millions of sensors across factories, power grids, and ports generate critical signals
              that could predict failures and save lives. Most of it dies unanalyzed.
            </p>
            <a href="#sovereign-ai" className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all">
              See our solution <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — bento stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg rounded-2xl p-6 transition-all duration-300"
              >
                <stat.icon className={`w-5 h-5 ${stat.color} mb-4`} />
                <div className="text-4xl font-black text-gray-900 mb-2 leading-none">{stat.number}</div>
                <div className="text-sm text-gray-500 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="relative bg-slate-950 rounded-2xl p-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                The Service Sector Got Its Revolution.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Now It's Industry's Turn.</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Manufacturing, energy, and logistics still run on reactive maintenance and gut decisions.
                Sensyva AI changes this paradigm — bringing sovereign, edge-first intelligence to the physical world.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-violet-600/30"
            >
              Talk to Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
