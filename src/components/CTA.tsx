import { Calendar, FileText, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Ready to Make Your Infrastructure Intelligent?
        </h2>

        <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
          Join the industrial AI revolution. From the Middle East's oil fields to Southeast Asian factories,
          from European wind farms to American logistics hubs - let's transform your reactive operations into predictive intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:hello@sensyva.ai"
            className="group bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Schedule a Demo
          </a>

          <a
            href="#case-study-download"
            className="group bg-blue-500/20 backdrop-blur-sm hover:bg-blue-500/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center gap-3"
          >
            <FileText className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            Download Case Studies
          </a>

          <a
            href="mailto:hello@sensyva.ai"
            className="group bg-blue-500/20 backdrop-blur-sm hover:bg-blue-500/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center gap-3"
          >
            <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
