import { Brain, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-500 to-violet-600 p-3 rounded-2xl">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-4xl font-black">SENSYVA AI</h3>
          </div>
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-violet-300 to-cyan-300 mb-3 font-light">
            Building the Nervous System for the Physical World
          </p>
          <p className="text-xl text-blue-200">Where Intelligence Meets Infrastructure</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-violet-400 transition-all">
              <MapPin className="w-10 h-10 text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-blue-100 font-semibold mb-2">Delhi NCR, India</p>
              <p className="text-sm text-blue-300">Serving clients globally</p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-violet-400 transition-all">
              <Mail className="w-10 h-10 text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <a href="mailto:hello@sensyva.ai" className="text-blue-100 font-semibold hover:text-white transition-colors block">
                hello@sensyva.ai
              </a>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-violet-400 transition-all">
              <Brain className="w-10 h-10 text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-blue-100 font-semibold mb-2">Industrial AI Solutions</p>
              <p className="text-sm text-blue-300">Edge computing & predictive analytics</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Sensyva AI. All rights reserved. | Making tomorrow's infrastructure intelligent, today.
          </p>
        </div>
      </div>
    </footer>
  );
}
