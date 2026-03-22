const steps = [
  {
    number: '01',
    title: 'Sensor Agnostic Integration',
    description: "We don't force you to rip and replace. Our platform works with your existing sensors — any brand, any protocol, any age. MQTT, Modbus, OPC-UA, or proprietary — we speak them all.",
  },
  {
    number: '02',
    title: 'Edge-First Intelligence',
    description: "Critical decisions can't wait for cloud round-trips. Our AI runs where your equipment lives — on the factory floor, in the wind farm, at the warehouse dock. Zero cloud dependency for real-time inference.",
  },
  {
    number: '03',
    title: 'Industry-Specific Pre-trained Models',
    description: "Don't start from scratch. Our models already know what motor failure sounds like, what good vibration patterns are, what thermal anomalies mean. Deploy intelligence on day one.",
  },
  {
    number: '04',
    title: 'Continuous Learning',
    description: 'Your system gets smarter every day. Our models learn from your specific equipment, your unique patterns, your operational reality — becoming more accurate over time without manual retraining.',
  },
];

export default function Approach() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">How We Work</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              The Sensyva{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Approach
              </span>
            </h2>
          </div>
          <p className="md:max-w-sm text-gray-500 leading-relaxed">
            Four principles that make Sensyva AI deployments succeed where others stall.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <div key={i} className="bg-white border border-gray-100 hover:border-violet-200 rounded-2xl p-8 transition-all duration-200 hover:shadow-md group">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <span className="text-white text-sm font-black">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
