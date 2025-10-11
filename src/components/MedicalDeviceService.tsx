import { Activity, Shield, AlertCircle, TrendingUp, Database, Zap } from 'lucide-react';

export default function MedicalDeviceService() {
  const capabilities = [
    {
      icon: Database,
      title: 'Multi-Sensor Data Fusion',
      description: 'Advanced algorithms that combine temperature, current, vibration, acoustic, and operational data from multiple sensors into unified intelligence.'
    },
    {
      icon: AlertCircle,
      title: 'Predictive Failure Detection',
      description: 'AI models trained on medical device behavior patterns to predict failures 96+ hours in advance, preventing patient impact.'
    },
    {
      icon: Zap,
      title: 'Real-Time Monitoring',
      description: 'Continuous 24/7 monitoring with instant alerts for anomalies, ensuring zero-downtime for life-critical equipment.'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Automated compliance tracking and reporting for FDA, ISO 13485, and IEC 60601 standards with full audit trails.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Comprehensive dashboards showing device health trends, usage patterns, and predictive maintenance schedules.'
    },
    {
      icon: Activity,
      title: 'Equipment Coverage',
      description: 'Specialized models for ventilators, dialysis machines, MRI systems, CT scanners, infusion pumps, and surgical equipment.'
    }
  ];

  const benefits = [
    { metric: '99.99%', label: 'Equipment Uptime Achieved' },
    { metric: '96hrs', label: 'Failure Prediction Window' },
    { metric: 'Zero', label: 'Patient Impact Events' },
    { metric: '65%', label: 'Maintenance Cost Reduction' }
  ];

  return (
    <section id="medical-devices" className="py-24 bg-gradient-to-br from-blue-50 via-violet-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-violet-600 p-4 rounded-3xl shadow-2xl">
              <Activity className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Medical Device <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Data Fusion & Analytics</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Advanced AI-powered multi-sensor fusion platform for life-critical medical equipment.
            Combining real-time monitoring, predictive maintenance, and regulatory compliance into a single intelligent system.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-violet-200 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-2">
                {benefit.metric}
              </div>
              <div className="text-sm font-semibold text-gray-700">{benefit.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200 hover:border-violet-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                <capability.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
              <p className="text-gray-600 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 p-[3px] rounded-3xl">
          <div className="bg-white p-12 rounded-3xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Healthcare Providers Choose Sensyva AI
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-violet-700 mb-4">The Challenge</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Healthcare facilities face critical challenges with medical device reliability. Traditional reactive maintenance leads to unexpected failures during patient care, resulting in safety risks, regulatory issues, and costly emergency repairs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Medical devices generate vast amounts of sensor data from temperature probes, current sensors, vibration monitors, and operational logs - but this data remains siloed and unanalyzed until it's too late.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-violet-700 mb-4">Our Solution</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sensyva AI's Medical Device Data Fusion platform integrates all sensor streams into a unified AI system that continuously learns device behavior patterns. Our edge AI analyzes data in real-time, detecting subtle changes invisible to human operators.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With 96+ hour failure prediction windows, maintenance teams can schedule interventions during non-critical hours, ensuring zero patient impact while dramatically reducing costs and meeting regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
