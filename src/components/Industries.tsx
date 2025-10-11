import { Factory, Zap, Truck, Activity } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      title: 'Manufacturing',
      challenge: '20% of production capacity lost to unplanned downtime globally',
      solution: 'Predictive maintenance that sees failures 72 hours ahead',
      features: [
        'Vibration analysis for motor health',
        'AI-powered NDT for quality control',
        'Acoustic monitoring for anomaly detection'
      ],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'Energy & Utilities',
      challenge: 'Grid failures and renewable energy intermittency worldwide',
      solution: 'AI-powered grid optimization and fault prediction',
      features: [
        'Wind turbine fault detection',
        'Solar inverter monitoring',
        'Smart grid load balancing'
      ],
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      challenge: '30% of global shipments face delays or damage',
      solution: 'End-to-end visibility with predictive routing',
      features: [
        'Fleet health monitoring',
        'Cold chain integrity',
        'Port automation optimization'
      ],
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Activity,
      title: 'Medical Device Data Fusion & Analytics',
      challenge: 'Life-critical equipment failures risk patient safety and regulatory compliance',
      solution: 'Multi-sensor fusion AI for predictive maintenance and real-time monitoring',
      features: [
        'Multi-parameter sensor fusion for ventilators, dialysis machines, and MRI systems',
        'Predictive failure detection 96+ hours in advance',
        'Real-time anomaly detection and automated alerting',
        'Regulatory compliance tracking and reporting'
      ],
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
          Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Transform</span>
        </h2>

        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Bringing predictive intelligence to the backbone of global economy
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-violet-300 transition-all duration-500 transform hover:-translate-y-3"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-1">The Challenge:</p>
                  <p className="text-gray-600 text-sm">{industry.challenge}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Our Solution:</p>
                  <p className="text-gray-600 text-sm">{industry.solution}</p>
                </div>

                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
