import { Quote, Cpu, Layers, Plug, Server, Zap } from 'lucide-react';

const features = [
  { icon: Cpu, label: 'Edge AI Processing' },
  { icon: Layers, label: 'Industry-Specific Models' },
  { icon: Plug, label: 'Plug-and-Play Integration' },
  { icon: Server, label: 'Hardware Agnostic' },
  { icon: Zap, label: 'Real-time Decision Making' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">About Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Sensyva AI
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded by AI engineers and industry experts who saw a critical disconnect: powerful AI models
              trapped in the cloud while industrial equipment failed without warning, energy grids operated
              blindly, and supply chains broke unexpectedly.
            </p>

            {/* Quote */}
            <div className="border-l-2 border-violet-500 pl-6 mb-10">
              <Quote className="w-6 h-6 text-violet-400 mb-3" />
              <p className="text-xl text-gray-700 italic leading-relaxed mb-3">
                "We realized that teaching a chatbot to write poetry is impressive, but teaching a wind turbine
                to predict its own failure 72 hours in advance? That's transformative."
              </p>
              <p className="text-sm font-semibold text-gray-500">— Sensyva AI Founding Team</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-10">
              We don't just connect sensors to the cloud. We bring intelligence to the edge — where decisions
              happen in milliseconds, where downtime costs millions, and where AI must work without fail.
            </p>

            {/* Feature chips */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What Makes Us Different</p>
              <div className="flex flex-wrap gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5">
                    <f.icon className="w-4 h-4 text-violet-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-[480px] shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial AI"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-1">Our Focus</p>
                <p className="text-white font-semibold text-lg leading-snug">
                  Physical-world AI — where intelligence meets infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
