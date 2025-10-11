import { Shield, Wind, Activity, Sun, Search, Home } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      icon: Shield,
      title: 'Defense Radar Systems - Predictive Maintenance',
      challenge: 'Critical defense radar systems requiring 99.99% uptime with zero margin for error',
      solution: 'Edge AI monitoring 50+ sensor parameters, predicting component failures 96 hours in advance',
      result: 'Zero unplanned downtime in 18 months, $2.5M saved in prevented failures',
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Wind,
      title: 'Wind Turbine Motor Fault Detection',
      challenge: 'Remote wind farms with expensive maintenance visits and catastrophic failure risks',
      solution: 'Acoustic and vibration analysis using edge AI to detect bearing degradation patterns',
      result: '73% reduction in maintenance costs, 45% increase in turbine availability',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Activity,
      title: 'Medical Device Motor Monitoring',
      challenge: 'Life-critical equipment (ventilators, dialysis machines) requiring predictive maintenance',
      solution: 'Multi-sensor fusion analyzing current draw, temperature, and acoustic signatures',
      result: 'Prevented 15 potential device failures, ensuring zero patient impact',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Sun,
      title: 'Solar Inverter Fan Vibration Analysis',
      challenge: 'Solar farms in harsh desert conditions with inverter cooling systems prone to sand damage',
      solution: 'Vibration pattern recognition to detect fan imbalance and bearing wear before failure',
      result: '82% reduction in inverter downtime, 60% extension in fan lifecycle',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Search,
      title: 'AI-Based NDT (Non-Destructive Testing) Solution',
      challenge: 'Manual ultrasonic testing missing critical micro-cracks in aerospace components',
      solution: 'AI-powered signal analysis detecting anomalies invisible to human inspectors',
      result: '94% defect detection rate (vs 67% manual), 3x faster inspection process',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Home,
      title: 'Intelligent Domestic Appliance Identification System',
      challenge: 'Smart home energy optimization requiring real-time appliance recognition and usage patterns',
      solution: 'Non-intrusive load monitoring using AI to identify appliances from electrical signatures',
      result: '97% accuracy in appliance identification, 23% average household energy savings',
      color: 'from-teal-500 to-blue-600'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Proven in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Field</span>
        </h2>

        <p className="text-xl text-gray-600 mb-16 max-w-3xl">
          We don't just theorize about industrial AI - we've deployed it where failure isn't an option, across diverse industries and applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-violet-300 transform hover:-translate-y-2 hover:rotate-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${caseStudy.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <caseStudy.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 flex-1 group-hover:text-violet-700 transition-colors">{caseStudy.title}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Challenge:</p>
                  <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Solution:</p>
                  <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-4 rounded-xl border border-violet-100">
                  <p className="text-sm font-bold text-violet-900 mb-2 uppercase tracking-wide">Result:</p>
                  <p className="text-gray-900 leading-relaxed font-semibold">{caseStudy.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
