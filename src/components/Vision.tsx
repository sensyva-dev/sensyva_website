import { Target, Rocket, CheckCircle } from 'lucide-react';

export default function Vision() {
  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">Who We Are</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 leading-tight">
          Vision &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Mission</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="relative bg-white border border-blue-100 hover:border-blue-300 rounded-2xl p-10 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-blue-500 to-transparent" />
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Vision</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-5">Global Intelligence Layer for Industrial Infrastructure</h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              To transform every sensor, machine, and critical system into self-aware, predictive, and autonomous assets —
              a world where physical infrastructure across continents thinks, learns, and optimizes without boundaries.
            </p>
            <ul className="space-y-3">
              {['Self-healing infrastructure', 'Autonomous optimization', 'Cross-continental scale'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div className="relative bg-white border border-violet-100 hover:border-violet-300 rounded-2xl p-10 overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-violet-500 to-transparent" />
            <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-violet-100 transition-colors">
              <Rocket className="w-6 h-6 text-violet-600" />
            </div>
            <p className="text-xs font-bold text-violet-600 uppercase tracking-[0.2em] mb-3">Mission</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-5">Democratize Industrial AI — Accessible, Affordable, Actionable</h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              Transform dumb sensors into intelligent systems through edge computing, pre-trained models,
              and seamless integration — enabling any company worldwide to achieve predictive operations
              without borders or barriers.
            </p>
            <ul className="space-y-3">
              {['Edge-first, cloud-optional', 'Plug-and-play integration', 'Sovereign data guarantee'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
