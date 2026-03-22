import { Shield, Server, Layers, CheckCircle, Lock, Award, Globe } from 'lucide-react';

const tiers = [
  {
    level: 'Edge AI',
    subtitle: 'LOW COST',
    tag: 'Small Teams / Research Units',
    hardware: 'Single GPU Workstation',
    icon: Server,
    example: 'e.g., RTX 4060 Ti 16GB',
    models: 'e.g., Llama 3 8B (quantized)',
    users: '5–10 users',
    compute: 'Single Node, ~8GB VRAM',
    highlight: 'Low latency, high data security. Runs smaller, quantized models efficiently.',
    color: 'from-blue-600 to-cyan-500',
    border: 'border-blue-200',
    bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    level: 'Departmental Cloud',
    subtitle: 'MEDIUM',
    tag: 'Mid-size Organizations / Offices',
    hardware: 'Multi-GPU Server Rack',
    icon: Layers,
    example: 'e.g., 2× A100 40GB/80GB',
    models: 'e.g., Mixtral 8×7B (distributed) + RAG',
    users: '50–100 users',
    compute: 'Multi-GPU Cluster',
    highlight: 'Advanced RAG & Knowledge Base. Capable of processing large documents and complex data analysis.',
    color: 'from-emerald-600 to-teal-500',
    border: 'border-emerald-200',
    bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    badge: 'bg-emerald-100 text-emerald-700',
    featured: true,
  },
  {
    level: 'Sovereign Datacenter',
    subtitle: 'LARGE',
    tag: 'Large Enterprises / Ministries',
    hardware: 'HPC / Private Cloud Cluster',
    icon: Shield,
    example: 'e.g., Multiple H100 GPU clusters',
    models: 'e.g., Llama 3 70B + Bhashini (Indian Language Models)',
    users: '1000+ users',
    compute: 'High-Performance Compute (HPC) Pod',
    highlight: 'Distributed training & inference, full sovereign data control. Supports native Indian languages and complex automation.',
    color: 'from-violet-600 to-indigo-500',
    border: 'border-violet-200',
    bg: 'bg-gradient-to-br from-violet-50 to-indigo-50',
    badge: 'bg-violet-100 text-violet-700',
  },
];

const benefits = [
  {
    icon: Lock,
    title: 'Zero Data Leakage',
    description:
      'Purpose-built for sectors with high-security mandates (Government, BFSI, Healthcare). Your data never crosses the firewall.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Battle-Tested Pedigree',
    description:
      "Our architecture is informed by our leadership's experience implementing mission-critical AI/ML use cases for the Ministry of Defence (MOD).",
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    icon: Layers,
    title: 'Scalable Deployment',
    description:
      'From single-node Edge appliances for small departments to Ministry-scale GPU clusters—grow without re-architecting.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Globe,
    title: 'Full Compliance',
    description:
      "Designed to meet India's DPDP Act 2023 and MeitY's data localization guidelines. Stay sovereign, stay compliant.",
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
];

const sectors = [
  'Ministry of Defence',
  'Government Departments',
  'BFSI',
  'Healthcare',
  'Energy & Utilities',
  'Manufacturing',
];

export default function SovereignAI() {
  return (
    <section id="sovereign-ai" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 shadow-sm">
            <Award className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span className="text-amber-800 text-sm font-semibold">
              Experience delivering secure AI/ML for the Ministry of Defence &amp; Enterprise Leaders
            </span>
          </div>
          {sectors.map((s) => (
            <span
              key={s}
              className="text-xs font-medium text-gray-500 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 rounded-full px-5 py-2 mb-6 text-sm font-semibold">
            <Shield className="w-4 h-4" />
            Solutions / Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Private &amp; Sovereign{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">
              AI Infrastructure
            </span>
          </h2>
          <p className="text-2xl text-gray-500 font-light mb-8 italic">"Beyond Public Cloud Limits"</p>
          <p className="text-xl text-gray-700 max-w-4xl leading-relaxed">
            While tools like OpenAI and Gemini offer power, they often fail the test of strict data sovereignty and
            security compliance. Sensyva provides a{' '}
            <strong className="text-gray-900">Private AI Stack</strong>—a locally hosted, air-gapped infrastructure
            that gives your organization the full power of Generative AI without your data ever leaving your firewall.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${b.bg} rounded-xl flex items-center justify-center mb-4`}>
                <b.icon className={`w-6 h-6 ${b.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Implementation Pathway Label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="flex items-center gap-2 bg-slate-800 text-white rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide shadow">
            <span>&#9654;</span>
            IMPLEMENTATION PATHWAY: SECURE · SCALABLE · SOVEREIGN AI
            <span>&#9654;</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* 3-Tier Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.level}
              className={`relative rounded-3xl border-2 ${tier.border} ${tier.bg} p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${
                tier.featured ? 'ring-2 ring-emerald-400 ring-offset-2 scale-[1.02]' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* India Data Localised Badge */}
              <div className="flex items-center gap-2 mb-5">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 via-white to-green-500 border-2 border-gray-300 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-slate-700" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-600 uppercase leading-tight tracking-wide">
                  India Data<br />Localised &amp; Secure
                </span>
              </div>

              <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${tier.badge} mb-3`}>
                {tier.subtitle}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-1">{tier.level}</h3>
              <p className="text-sm text-gray-500 mb-6">{tier.tag}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Hardware</span>
                    <p className="text-sm font-semibold text-gray-800">{tier.hardware}</p>
                    <p className="text-xs text-gray-500">{tier.example}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">AI Models</span>
                    <p className="text-sm text-gray-700">{tier.models}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Scale</span>
                    <p className="text-sm font-semibold text-gray-800">{tier.users}</p>
                  </div>
                </div>
              </div>

              <div className={`rounded-xl bg-white/70 border ${tier.border} p-4`}>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{tier.compute}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{tier.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pitch Callout */}
        <div className="relative bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 rounded-3xl p-10 md:p-14 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-violet-500/30 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-violet-300" />
              </div>
              <span className="text-violet-300 font-semibold text-sm uppercase tracking-widest">
                The Sensyva Difference
              </span>
            </div>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 mb-8 italic">
              "Most companies use AI via a straw (APIs), but we give you the whole well. We take the intelligence of
              models like Llama or Mistral and 'box' them inside your own servers. We've done this for the Ministry
              of Defence where security is non-negotiable—so you can trust us to handle your corporate data with the
              same level of integrity."
            </blockquote>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50"
            >
              <Shield className="w-5 h-5" />
              Request a Sovereign AI Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
