import { Quote } from 'lucide-react';

export default function Origin() {
  return (
    <section className="py-28 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-violet-500" />
          <span className="text-violet-600 text-sm font-semibold uppercase tracking-widest">Our Origin</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12 leading-tight">
          Why We Started{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            Sensyva AI
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              It started with frustration. As AI engineers, we watched companies pour millions into chatbots
              and recommendation engines while their factories burned money through preventable failures. We saw
              wind turbines fail catastrophically when simple pattern recognition could have predicted it weeks earlier.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              We witnessed supply chains collapse from issues that sensor data clearly telegraphed. The breaking point
              came during a factory visit — a critical motor failed, causing millions in downtime. The maintenance team
              showed us months of sensor logs.{' '}
              <strong className="text-gray-900">The failure pattern was obvious to our trained eyes.</strong>
            </p>
          </div>
        </div>

        <div className="bg-slate-950 rounded-2xl p-10 relative overflow-hidden mb-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <div className="relative z-10">
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              We founded Sensyva AI with a simple belief:{' '}
              <strong className="text-white">The next decade belongs to physical-world AI.</strong>{' '}
              While others chase AGI and sentient chatbots, we're focused on something more immediate and impactful —
              making the infrastructure of human civilization intelligent, predictive, and self-optimizing.
            </p>
            <div className="border-l-2 border-violet-500 pl-6">
              <Quote className="w-6 h-6 text-violet-400 mb-3" />
              <p className="text-xl text-white italic leading-relaxed">
                "Every unplanned downtime, every power grid failure, every supply chain disruption — these aren't
                acts of God. They're failures of intelligence. And we're here to fix that."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
