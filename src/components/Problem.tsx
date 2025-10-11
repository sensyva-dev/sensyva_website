import { TrendingDown, AlertTriangle, Clock, DollarSign } from 'lucide-react';

export default function Problem() {
  const stats = [
    { number: '$500 Bn', label: 'Annual global losses from unplanned industrial downtime', icon: DollarSign },
    { number: '95%', label: 'Industrial sensor data that goes unanalyzed worldwide', icon: AlertTriangle },
    { number: '10ms', label: 'Decision time needed for critical industrial processes', icon: Clock },
    { number: '70%', label: 'Reduction in sensor costs over last 3 years globally', icon: TrendingDown }
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          The Trillion-Dollar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Blindspot</span>
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-5xl">
          AI has revolutionized the digital world - from ChatGPT to recommendation engines. But there's a massive gap:
          <strong className="text-gray-900"> 95% of industrial data remains untapped globally</strong>. Every second, millions of sensors from Dubai's
          smart cities to Singapore's ports, from German factories to American power grids, generate critical data
          that could predict failures, optimize operations, and save lives. Yet most of it dies unanalyzed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 hover:border-violet-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <stat.icon className="w-12 h-12 text-violet-600 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-3">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 leading-snug font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 p-[3px] rounded-3xl animate-gradient-x">
          <div className="bg-white p-10 rounded-3xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Service Sector Got Its Revolution. Now It's Industry's Turn.
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              While software companies deploy AI for customer service and content generation, the backbone of our economy -
              manufacturing, energy, and logistics - still operates on reactive maintenance and gut decisions.
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600"> Sensyva AI changes this paradigm.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
