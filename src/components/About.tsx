import { Quote } from 'lucide-react';

export default function About() {
  const features = [
    'Edge AI Processing',
    'Industry-Specific Models',
    'Plug-and-Play Integration',
    'Hardware Agnostic',
    'Real-time Decision Making'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Sensyva AI</span>
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-5xl">
          Founded by AI engineers and industry experts who saw a critical disconnect: powerful AI models trapped in the cloud
          while industrial equipment failed without warning, energy grids operated blindly, and supply chains broke unexpectedly.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12 border-l-4 border-blue-600">
          <Quote className="w-12 h-12 text-blue-600 mb-4" />
          <p className="text-2xl text-gray-700 italic leading-relaxed mb-4">
            "We realized that teaching a chatbot to write poetry is impressive, but teaching a wind turbine to predict
            its own failure 72 hours in advance? That's transformative."
          </p>
          <p className="text-lg font-semibold text-gray-900">- Sensyva AI Founding Team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Industrial AI"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We don't just connect sensors to the cloud. We bring intelligence to the edge - where decisions happen in
              milliseconds, where downtime costs millions, and where AI must work without fail. Our platform transforms
              raw sensor streams into predictive insights, turning reactive operations into proactive intelligence.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Different</h3>
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
