import { Radio, Zap, TrendingDown, Factory, Brain } from 'lucide-react';

export default function WhyNow() {
  const reasons = [
    {
      icon: Radio,
      title: '5G Networks Enable Real-time Intelligence',
      description: 'Sub-10ms latency makes edge AI viable for critical decisions. What was impossible with 4G is now standard with 5G.'
    },
    {
      icon: Zap,
      title: 'Global Push for Digital Transformation',
      description: "From India's PLI scheme to Saudi Vision 2030, UAE's Industry 4.0, and Europe's Digital Decade - governments worldwide are investing trillions in industrial digitization."
    },
    {
      icon: TrendingDown,
      title: 'Sensor Economics Reached Tipping Point',
      description: '70% cost reduction in 3 years. IoT sensors now cost less than the labor to manually monitor equipment.'
    },
    {
      icon: Factory,
      title: 'Post-COVID Automation Imperative',
      description: "Remote operations aren't optional anymore. Industries need autonomous systems that run without human presence."
    },
    {
      icon: Brain,
      title: 'AI Models Finally Ready for Edge',
      description: 'TensorFlow Lite, ONNX Runtime, and neural accelerators bring cloud-level AI to $50 edge devices.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Why 2025 Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Our Moment</span>
        </h2>

        <p className="text-xl text-gray-600 mb-16 max-w-3xl">
          The convergence of technology, economics, and global priorities has created the perfect conditions for industrial AI revolution.
        </p>

        <div className="space-y-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <reason.icon className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
