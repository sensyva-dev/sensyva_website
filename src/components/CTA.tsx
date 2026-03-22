import { Calendar, FileText, Mail, ArrowRight } from 'lucide-react';

const actions = [
  {
    icon: Calendar,
    title: 'Schedule a Demo',
    description: 'See Sensyva AI live in a 30-min technical walkthrough tailored to your industry.',
    href: 'mailto:hello@sensyva.ai',
    primary: true,
    label: 'Book a slot',
  },
  {
    icon: FileText,
    title: 'Download Case Studies',
    description: 'Deep-dive PDFs on Defence radar, wind turbines, medical devices, and more.',
    href: '#case-study-download',
    primary: false,
    label: 'Get the pack',
  },
  {
    icon: Mail,
    title: 'Contact Our Team',
    description: 'Talk to an engineer. We reply within one business day.',
    href: 'mailto:hello@sensyva.ai',
    primary: false,
    label: 'Send a message',
  },
];

export default function CTA() {
  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-violet-500" />
            <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">Get Started</span>
            <span className="h-px w-8 bg-violet-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Ready to Make Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Infrastructure Intelligent?
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From edge appliances in small departments to Ministry-scale HPC clusters —
            we meet you where you are and scale with you.
          </p>
        </div>

        {/* Action cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {actions.map((a, i) => (
            <a
              key={i}
              href={a.href}
              className={`group relative rounded-2xl p-8 border transition-all duration-300 ${
                a.primary
                  ? 'bg-slate-950 border-slate-800 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-600/10'
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                a.primary ? 'bg-violet-500/20' : 'bg-gray-50 border border-gray-100'
              }`}>
                <a.icon className={`w-5 h-5 ${a.primary ? 'text-violet-400' : 'text-gray-500'}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${a.primary ? 'text-white' : 'text-gray-900'}`}>{a.title}</h3>
              <p className={`text-sm leading-relaxed mb-8 ${a.primary ? 'text-slate-400' : 'text-gray-500'}`}>{a.description}</p>
              <div className={`inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all ${
                a.primary ? 'text-violet-400' : 'text-violet-600'
              }`}>
                {a.label} <ArrowRight className="w-4 h-4" />
              </div>
              {a.primary && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent rounded-t-2xl" />
              )}
            </a>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="relative bg-gradient-to-r from-blue-600 via-violet-600 to-blue-700 rounded-2xl p-10 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative z-10">
            <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-3">Direct Line</p>
            <a
              href="mailto:hello@sensyva.ai"
              className="text-3xl md:text-4xl font-black text-white hover:text-blue-100 transition-colors"
            >
              hello@sensyva.ai
            </a>
            <p className="text-blue-200 mt-3 text-sm">Delhi NCR, India · Serving clients globally</p>
          </div>
        </div>
      </div>
    </section>
  );
}
