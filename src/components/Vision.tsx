import { Target, Rocket } from 'lucide-react';

export default function Vision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">
          Our Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Mission</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Vision</h3>
              <p className="text-lg text-blue-50 leading-relaxed">
                To become the global intelligence layer for industrial infrastructure - transforming every sensor,
                every machine, and every critical system into self-aware, predictive, and autonomous assets.
                We envision a world where physical infrastructure across continents thinks, learns, and optimizes
                without boundaries.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-cyan-500 to-blue-600 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Mission</h3>
              <p className="text-lg text-blue-50 leading-relaxed">
                Democratize industrial AI globally by making it accessible, affordable, and actionable. We transform
                dumb sensors into intelligent systems through edge computing, pre-trained models, and seamless
                integration - enabling any company worldwide to achieve predictive operations without borders or barriers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
