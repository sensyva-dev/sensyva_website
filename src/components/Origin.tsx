import { Quote } from 'lucide-react';

export default function Origin() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
          Why We Started <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Sensyva AI</span>
        </h2>

        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 mb-12">
          <p className="text-xl leading-relaxed mb-6">
            It started with frustration. As AI engineers, we watched companies pour millions into chatbots and recommendation
            engines while their factories burned money through preventable failures. We saw wind turbines fail catastrophically
            when simple pattern recognition could have predicted it weeks earlier. We witnessed supply chains collapse from
            issues that sensor data clearly telegraphed.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <p className="text-lg leading-relaxed">
            The breaking point came during a factory visit where we saw a critical motor fail, causing millions in downtime.
            The maintenance team showed us months of sensor logs - the failure pattern was obvious to our trained eyes.
            <strong className="text-blue-300"> That's when we realized: AI had conquered the digital world but abandoned the physical one.</strong>
          </p>

          <p className="text-lg leading-relaxed">
            We founded Sensyva AI with a simple belief: <strong className="text-cyan-300">The next decade belongs to physical world AI.</strong>
            While others chase AGI and sentient chatbots, we're focused on something more immediate and impactful -
            making the infrastructure of human civilization intelligent, predictive, and self-optimizing.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm p-8 rounded-2xl border-l-4 border-blue-400">
          <Quote className="w-12 h-12 text-blue-400 mb-4" />
          <p className="text-2xl italic leading-relaxed">
            "Every unplanned downtime, every power grid failure, every supply chain disruption - these aren't acts of God.
            They're failures of intelligence. And we're here to fix that."
          </p>
        </div>
      </div>
    </section>
  );
}
