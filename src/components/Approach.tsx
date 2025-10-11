export default function Approach() {
  const steps = [
    {
      number: '1',
      title: 'Sensor Agnostic Integration',
      description: "We don't force you to rip and replace. Our platform works with your existing sensors - any brand, any protocol, any age. MQTT, Modbus, OPC-UA, or proprietary - we speak them all."
    },
    {
      number: '2',
      title: 'Edge-First Intelligence',
      description: "Critical decisions can't wait for cloud round-trips. Our AI runs where your equipment lives - on the factory floor, in the wind farm, at the warehouse dock."
    },
    {
      number: '3',
      title: 'Industry-Specific Pre-trained Models',
      description: "Don't start from scratch. Our models already know what motor failure sounds like, what good vibration patterns are, what thermal anomalies mean. Deploy intelligence on day one."
    },
    {
      number: '4',
      title: 'Continuous Learning',
      description: 'Your system gets smarter every day. Our models learn from your specific equipment, your unique patterns, your operational reality - becoming more accurate with time.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16">
          The Sensyva <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Approach</span>
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl z-10">
                  {step.number}
                </div>
                <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
