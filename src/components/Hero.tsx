import { FileDown, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-blue-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-cyan-600/20 animate-gradient"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-3 shadow-2xl">
            <span className="text-blue-300 text-sm font-medium tracking-wide">Industrial AI Solutions</span>
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-white mb-6 animate-slide-up tracking-tight">
          SENSYVA AI
        </h1>

        <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-300 to-cyan-300 mb-8 animate-slide-up animation-delay-200 font-light">
          Sensing Tomorrow, Today
        </p>

        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed animate-slide-up animation-delay-400">
          We're building the intelligence layer for the physical world. While Silicon Valley obsesses over chatbots,
          we're making factories think, power grids predict, and supply chains self-optimize.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animation-delay-600">
          <a href="#contact" className="group bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 flex items-center justify-center gap-3">
            <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Schedule Demo</span>
          </a>
          <a href="#case-study-download" className="group bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-3">
            <FileDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            <span>Download Case Studies</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
