import { FormEvent, useState } from 'react';
import { Download, FileText, Lock, ShieldCheck, Sparkles } from 'lucide-react';
import { getSupabaseClient } from '../lib/createSupabaseClient';

type RequestStatus = 'idle' | 'pending' | 'success' | 'error';

const CASE_STUDY_BUNDLE_URL = `${import.meta.env.BASE_URL}resources/sensyva-case-study-pack.pdf`;

export default function CaseStudyDownload() {
  const supabaseClient = getSupabaseClient();
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [message, setMessage] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    focus: 'Manufacturing',
    notes: ''
  });

  const handleChange = (key: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValues.name || !formValues.email || !formValues.company) {
      setStatus('error');
      setMessage('Please share your name, work email, and company to unlock the download.');
      return;
    }

    if (!supabaseClient) {
      setStatus('success');
      setMessage(
        'Preview ready. Add Supabase credentials to capture leads automatically or email hello@sensyva.ai.'
      );
      return;
    }

    setStatus('pending');
    setMessage('');

    const { error } = await supabaseClient.from('case_study_requests').insert({
      name: formValues.name,
      email: formValues.email,
      company: formValues.company,
      focus_area: formValues.focus,
      notes: formValues.notes || null
    });

    if (error) {
      setStatus('error');
      setMessage('We could not save your request right now. Please retry or email hello@sensyva.ai.');
      return;
    }

    setStatus('success');
    setMessage('Thanks! Your download is ready and our team will follow up with deeper deployment details.');
  };

  return (
    <section
      id="case-study-download"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 py-24 text-white"
    >
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3rem] text-blue-200">
              <FileText className="h-4 w-4" />
              Case Study Pack
            </span>
            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
              See How Sensyva Shrinks Downtime by Design
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Unlock a concise PDF featuring flagship deployments across manufacturing, energy, logistics, and
              defense. Each story covers the baseline pain, Sensyva&apos;s edge intelligence rollout, and the ROI
              captured within 90 days.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-blue-100">
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
                Benchmark downtime compression, OEE lifts, and maintenance savings against real deployments.
              </li>
              <li className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                Use ready-to-share slides to brief stakeholders or accelerate procurement reviews.
              </li>
              <li className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-violet-300" />
                Content unlocks after the form so you capture buying intent. Replace the preview PDF before launch.
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-5 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white">Access the Pack</h3>
              <p className="mt-2 text-sm text-blue-200">
                Complete the quick form to receive the download link instantly and start the conversation.
              </p>
            </div>

            <label className="space-y-2 text-sm text-blue-100">
              Full Name
              <input
                type="text"
                value={formValues.name}
                onChange={(event) => handleChange('name', event.target.value)}
                className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
            </label>

            <label className="space-y-2 text-sm text-blue-100">
              Work Email
              <input
                type="email"
                value={formValues.email}
                onChange={(event) => handleChange('email', event.target.value)}
                className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
            </label>

            <label className="space-y-2 text-sm text-blue-100">
              Company &amp; Role
              <input
                type="text"
                value={formValues.company}
                onChange={(event) => handleChange('company', event.target.value)}
                className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
            </label>

            <label className="space-y-2 text-sm text-blue-100">
              Primary Focus
              <select
                value={formValues.focus}
                onChange={(event) => handleChange('focus', event.target.value)}
                className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              >
                <option value="Manufacturing">Manufacturing</option>
                <option value="Energy & Utilities">Energy &amp; Utilities</option>
                <option value="Logistics & Supply Chain">Logistics &amp; Supply Chain</option>
                <option value="Defense & Aerospace">Defense &amp; Aerospace</option>
                <option value="Healthcare & MedTech">Healthcare &amp; MedTech</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label className="space-y-2 text-sm text-blue-100">
              Context / Goals (optional)
              <textarea
                value={formValues.notes}
                onChange={(event) => handleChange('notes', event.target.value)}
                rows={3}
                className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                placeholder="Share downtime baselines, target regions, or procurement timelines."
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:scale-[1.01] hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <Download className="h-5 w-5" />
              {status === 'pending' ? 'Preparing your download…' : 'Unlock Case Studies'}
            </button>

            {status === 'pending' ? (
              <p className="text-sm text-blue-200">Logging your request securely…</p>
            ) : null}
            {status === 'success' ? (
              <div className="space-y-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                <p>{message}</p>
                <a
                  href={CASE_STUDY_BUNDLE_URL}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-emerald-100 transition hover:bg-emerald-500/40"
                >
                  <Download className="h-4 w-4" />
                  Download the preview PDF
                </a>
              </div>
            ) : null}
            {status === 'error' ? (
              <p className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {message}
              </p>
            ) : null}
            {status === 'idle' && message ? (
              <p className="text-sm text-blue-200">{message}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
