import { FormEvent, useState } from 'react';
import {
  Activity,
  BarChart3,
  Calculator,
  CheckCircle2,
  LineChart,
  Mail,
  Sparkles
} from 'lucide-react';
import { getSupabaseClient } from '../lib/createSupabaseClient';

type IndustryKey = 'Manufacturing' | 'Energy' | 'Logistics' | 'Defense' | 'Other';

type FormState = {
  annualMaintenanceBudgetCrores: string;
  unplannedDowntimeHours: string;
  revenueLossPerHourLakhs: string;
  industry: IndustryKey;
};

type AnalysisResult = {
  annualMaintenanceBudgetCrores: number;
  unplannedDowntimeHours: number;
  revenueLossPerHourLakhs: number;
  potentialMaintenanceSavingsCrores: number;
  potentialDowntimeSavingsCrores: number;
  totalPotentialAnnualSavingsCrores: number;
  maintenanceReductionPercentage: number;
  downtimeReductionPercentage: number;
  estimatedTotalDowntimeCostCrores: number;
  industry: IndustryKey;
};

const MAINTENANCE_REDUCTION_PERCENTAGE = 0.65;
const DOWNTIME_REDUCTION_PERCENTAGE = 0.7;

const INDUSTRY_CONTEXT: Record<
  IndustryKey,
  { savingsHook: string; heroStat: string }
> = {
  Manufacturing: {
    savingsHook:
      'Machining and assembly lines that analyze vibration, temperature, and acoustic signatures early see dramatic scrap and warranty reductions.',
    heroStat:
      'Tier-1 automotive supplier cut downtime response from 45 minutes to 6 minutes with edge anomaly detection.'
  },
  Energy: {
    savingsHook:
      'Utilities avoid cascading failures by fusing transformer, weather, and SCADA feeds at the edge.',
    heroStat:
      'Combined-cycle plant prevented two turbine trips, protecting ₹34 Cr in output within the first quarter.'
  },
  Logistics: {
    savingsHook:
      'Fleet-wide telemetry fused in real-time avoids cold-chain spoilage and loading bay gridlock.',
    heroStat:
      'National logistics operator improved asset utilization by 18% after deploying Sensyva nodes to yards.'
  },
  Defense: {
    savingsHook:
      'Multi-sensor fusion enables mission-critical systems to go from reactive maintenance to pre-emptive readiness.',
    heroStat:
      'Radar OEM reduced mission aborts by 72% by pairing Sensyva’s edge stack with existing BMS sensors.'
  },
  Other: {
    savingsHook:
      'Sensor-rich environments—from pharmaceuticals to mining—gain clarity when dormant data streams become decisions.',
    heroStat:
      'Sensyva deployments routinely surface ROI within 90 days by turning dormant data into actionable foresight.'
  }
};

const formatter = new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const formatCrores = (value: number) => `₹${formatter.format(value)} Cr`;
const formatLakhs = (value: number) => `₹${formatter.format(value)} Lakhs`;

function calculateImpact({
  annualMaintenanceBudgetCrores,
  unplannedDowntimeHours,
  revenueLossPerHourLakhs,
  industry
}: {
  annualMaintenanceBudgetCrores: number;
  unplannedDowntimeHours: number;
  revenueLossPerHourLakhs: number;
  industry: IndustryKey;
}): AnalysisResult {
  const maintenanceSavings =
    annualMaintenanceBudgetCrores * MAINTENANCE_REDUCTION_PERCENTAGE;
  const revenueLossPerHourCrores = revenueLossPerHourLakhs / 100;
  const estimatedTotalDowntimeCost =
    unplannedDowntimeHours * revenueLossPerHourCrores;
  const downtimeSavings =
    estimatedTotalDowntimeCost * DOWNTIME_REDUCTION_PERCENTAGE;
  const totalSavings = maintenanceSavings + downtimeSavings;

  return {
    annualMaintenanceBudgetCrores,
    unplannedDowntimeHours,
    revenueLossPerHourLakhs,
    potentialMaintenanceSavingsCrores: maintenanceSavings,
    potentialDowntimeSavingsCrores: downtimeSavings,
    totalPotentialAnnualSavingsCrores: totalSavings,
    maintenanceReductionPercentage: Math.round(
      MAINTENANCE_REDUCTION_PERCENTAGE * 100
    ),
    downtimeReductionPercentage: Math.round(
      DOWNTIME_REDUCTION_PERCENTAGE * 100
    ),
    estimatedTotalDowntimeCostCrores: estimatedTotalDowntimeCost,
    industry
  };
}

export default function DataGapAudit() {
  const [formState, setFormState] = useState<FormState>({
    annualMaintenanceBudgetCrores: '50',
    unplannedDowntimeHours: '800',
    revenueLossPerHourLakhs: '2',
    industry: 'Manufacturing'
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const [leadState, setLeadState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    region: ''
  });
  const [leadStatus, setLeadStatus] = useState<
    'idle' | 'success' | 'error' | 'pending'
  >('idle');
  const [leadMessage, setLeadMessage] = useState('');

  const supabaseClient = getSupabaseClient();

  const handleInputChange = (
    key: keyof FormState,
    value: string | IndustryKey
  ) => {
    setFormState((prev) => ({
      ...prev,
      [key]: key === 'industry' ? (value as IndustryKey) : (value as string)
    }));
  };

  const handleLeadChange = (key: string, value: string) => {
    setLeadState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const annualMaintenanceBudgetCrores = Number(
      formState.annualMaintenanceBudgetCrores
    );
    const unplannedDowntimeHours = Number(formState.unplannedDowntimeHours);
    const revenueLossPerHourLakhs = Number(
      formState.revenueLossPerHourLakhs
    );

    if (
      [
        annualMaintenanceBudgetCrores,
        unplannedDowntimeHours,
        revenueLossPerHourLakhs
      ].some((value) => !Number.isFinite(value) || value <= 0)
    ) {
      setFormError(
        'Please enter values greater than zero for budget, downtime hours, and hourly loss.'
      );
      setAnalysis(null);
      return;
    }

    setFormError(null);
    setIsCalculating(true);
    setLeadStatus('idle');
    setLeadMessage('');

    window.setTimeout(() => {
      const calculatedAnalysis = calculateImpact({
        annualMaintenanceBudgetCrores,
        unplannedDowntimeHours,
        revenueLossPerHourLakhs,
        industry: formState.industry
      });
      setAnalysis(calculatedAnalysis);
      setIsCalculating(false);
    }, 650);
  };

  const handleLeadSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!analysis) {
      return;
    }

    if (!leadState.name || !leadState.email || !leadState.company) {
      setLeadStatus('error');
      setLeadMessage(
        'Please add your name, work email, and company so we can prepare the custom briefing.'
      );
      return;
    }

    if (!supabaseClient) {
      setLeadStatus('success');
      setLeadMessage(
        'Thanks for sharing your details. Add Supabase credentials to enable lead capture or email us at hello@sensyva.ai.'
      );
      return;
    }

    setLeadStatus('pending');
    setLeadMessage('');

    const { error } = await supabaseClient.from('data_gap_leads').insert({
      name: leadState.name,
      email: leadState.email,
      company: leadState.company,
      phone: leadState.phone || null,
      region: leadState.region || null,
      budget_crores: analysis.annualMaintenanceBudgetCrores,
      downtime_hours: analysis.unplannedDowntimeHours,
      loss_per_hour_lakhs: analysis.revenueLossPerHourLakhs,
      maintenance_savings_crores: analysis.potentialMaintenanceSavingsCrores,
      downtime_savings_crores: analysis.potentialDowntimeSavingsCrores,
      total_savings_crores: analysis.totalPotentialAnnualSavingsCrores,
      industry: analysis.industry
    });

    if (error) {
      setLeadStatus('error');
      setLeadMessage(
        'We could not save your details right now. Please try again or email hello@sensyva.ai.'
      );
      return;
    }

    setLeadStatus('success');
    setLeadMessage(
      'Success! Our team will reach out with the detailed benchmark report and schedule your 15-minute session.'
    );
    setLeadState({
      name: '',
      email: '',
      company: '',
      phone: '',
      region: ''
    });
  };

  return (
    <section
      id="data-gap"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a,transparent_60%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0ea5e9,transparent_55%)] opacity-50" />
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-6 text-left md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-100">
              <Sparkles className="h-4 w-4" />
              95% Data Gap Audit
            </span>
            <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
              Quantify the Hidden Value in Your Sensor Data
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-blue-100 md:text-xl">
              Run a 2-minute audit to estimate how Sensyva&apos;s 10&nbsp;ms
              edge inference can compress downtime, maintenance overhead, and
              risk. Tailored benchmarks per industry with export-ready talking
              points for your stakeholders.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 text-blue-100 shadow-2xl backdrop-blur-lg md:max-w-sm">
            <div className="flex items-center gap-3 text-blue-50">
              <Calculator className="h-10 w-10" />
              <div>
                <p className="text-sm uppercase tracking-widest text-blue-200">
                  Average ROI Unlocked
                </p>
                <p className="text-2xl font-bold text-white">
                  {analysis
                    ? formatCrores(
                        analysis.totalPotentialAnnualSavingsCrores
                      )
                    : '₹92.00 Cr'}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-blue-100">
              Inputs never leave your browser unless Supabase lead capture is
              configured. Export the results to fast-track leadership buy-in.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Audit Your Operations
              </h3>
              <p className="mt-2 text-sm text-blue-200">
                Use conservative baselines or plug in real metrics from your
                maintenance planner, plant SCADA, or ERP.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-blue-100">
                  Annual Maintenance &amp; Repair Budget (₹ Crores)
                </span>
                <input
                  type="number"
                  min={0}
                  step="0.5"
                  value={formState.annualMaintenanceBudgetCrores}
                  onChange={(event) =>
                    handleInputChange(
                      'annualMaintenanceBudgetCrores',
                      event.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-lg text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                />
                <span className="text-xs text-blue-200">
                  Typical range for multi-site plants: ₹10&nbsp;Cr – ₹180&nbsp;Cr
                </span>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-blue-100">
                  Unplanned Downtime (Hours / Year)
                </span>
                <input
                  type="number"
                  min={0}
                  step="1"
                  value={formState.unplannedDowntimeHours}
                  onChange={(event) =>
                    handleInputChange(
                      'unplannedDowntimeHours',
                      event.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-lg text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                />
                <span className="text-xs text-blue-200">
                  Sum of all unexpected stoppages across lines, yards, or assets.
                </span>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-blue-100">
                  Revenue / Production Loss per Hour (₹ Lakhs)
                </span>
                <input
                  type="number"
                  min={0}
                  step="0.1"
                  value={formState.revenueLossPerHourLakhs}
                  onChange={(event) =>
                    handleInputChange(
                      'revenueLossPerHourLakhs',
                      event.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-lg text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                />
                <span className="text-xs text-blue-200">
                  Combine lost output, penalties, and downstream disruption.
                </span>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-blue-100">
                  Primary Industry
                </span>
                <select
                  value={formState.industry}
                  onChange={(event) =>
                    handleInputChange(
                      'industry',
                      event.target.value as IndustryKey
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-lg text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                >
                  {Object.keys(INDUSTRY_CONTEXT).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span className="text-xs text-blue-200">
                  Tailors benchmarks and sales proof-points for your sector.
                </span>
              </label>
            </div>

            {formError ? (
              <p className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {formError}
              </p>
            ) : null}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:scale-[1.01] hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              <BarChart3 className="h-5 w-5" />
              {isCalculating ? 'Crunching metrics…' : 'Generate AI Potential Report'}
            </button>
          </form>

          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-lg">
              <h3 className="flex items-center gap-3 text-2xl font-semibold text-white">
                <LineChart className="h-6 w-6 text-cyan-300" />
                Impact Forecast
              </h3>
              <p className="mt-2 text-sm text-blue-200">
                We run your numbers through Sensyva’s proven reduction benchmarks
                to quantify the value trapped inside dormant sensor streams.
              </p>

              {isCalculating ? (
                <div className="mt-10 animate-pulse space-y-4">
                  <div className="h-24 rounded-2xl bg-white/10" />
                  <div className="h-24 rounded-2xl bg-white/10" />
                  <div className="h-24 rounded-2xl bg-white/10" />
                </div>
              ) : analysis ? (
                <div className="mt-8 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4">
                      <p className="text-xs uppercase tracking-wider text-cyan-200">
                        Total Savings Potential
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        {formatCrores(
                          analysis.totalPotentialAnnualSavingsCrores
                        )}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                      <p className="text-xs uppercase tracking-wider text-emerald-200">
                        Maintenance Compression
                      </p>
                      <p className="mt-2 text-xl font-semibold text-white">
                        {formatCrores(
                          analysis.potentialMaintenanceSavingsCrores
                        )}
                      </p>
                      <p className="mt-1 text-xs text-emerald-200">
                        Up to {analysis.maintenanceReductionPercentage}% reduction
                      </p>
                    </div>
                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-4">
                      <p className="text-xs uppercase tracking-wider text-violet-200">
                        Downtime Risk Removed
                      </p>
                      <p className="mt-2 text-xl font-semibold text-white">
                        {formatCrores(
                          analysis.potentialDowntimeSavingsCrores
                        )}
                      </p>
                      <p className="mt-1 text-xs text-violet-200">
                        {analysis.downtimeReductionPercentage}% faster recovery
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="flex items-start gap-3">
                      <Activity className="mt-1 h-5 w-5 text-cyan-300" />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          Observed Downtime Cost
                        </p>
                        <p className="text-sm text-blue-200">
                          {formatCrores(
                            analysis.estimatedTotalDowntimeCostCrores
                          )}{' '}
                          lost yearly from{' '}
                          {analysis.unplannedDowntimeHours.toLocaleString()} hours
                          of stoppages at{' '}
                          {formatLakhs(analysis.revenueLossPerHourLakhs)} per
                          hour.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-700/40 via-slate-900/40 to-indigo-900/50 p-6">
                    <p className="text-sm text-blue-200">
                      {INDUSTRY_CONTEXT[analysis.industry].savingsHook}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-white">
                      Field Proof:
                    </p>
                    <p className="text-sm text-blue-100">
                      {INDUSTRY_CONTEXT[analysis.industry].heroStat}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-8 space-y-4 text-sm text-blue-200">
                  <p>
                    Plug in your operating metrics to benchmark the hidden cost of
                    dormant sensor data. We use conservative impact ranges so your
                    finance team can validate easily.
                  </p>
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2rem] text-blue-100">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    No PII required for the audit
                  </p>
                </div>
              )}
            </div>

            {analysis ? (
              <form
                onSubmit={handleLeadSubmit}
                className="space-y-6 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-xl backdrop-blur-lg"
              >
                <div>
                  <h3 className="flex items-center gap-3 text-2xl font-semibold text-white">
                    <Mail className="h-6 w-6 text-cyan-300" />
                    Unlock the Full Benchmark Pack
                  </h3>
                  <p className="mt-2 text-sm text-blue-200">
                    Share team details to receive a PDF summary, industry
                    benchmarks, and a 15-minute roadmap session.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-sm text-blue-200">
                    Full Name
                    <input
                      type="text"
                      value={leadState.name}
                      onChange={(event) =>
                        handleLeadChange('name', event.target.value)
                      }
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-blue-200">
                    Work Email
                    <input
                      type="email"
                      value={leadState.email}
                      onChange={(event) =>
                        handleLeadChange('email', event.target.value)
                      }
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-blue-200">
                    Company &amp; Title
                    <input
                      type="text"
                      value={leadState.company}
                      onChange={(event) =>
                        handleLeadChange('company', event.target.value)
                      }
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-blue-200">
                    Phone / WhatsApp (optional)
                    <input
                      type="text"
                      value={leadState.phone}
                      onChange={(event) =>
                        handleLeadChange('phone', event.target.value)
                      }
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    />
                  </label>
                  <label className="md:col-span-2 space-y-2 text-sm text-blue-200">
                    Preferred Region / Time Zone
                    <input
                      type="text"
                      value={leadState.region}
                      onChange={(event) =>
                        handleLeadChange('region', event.target.value)
                      }
                      className="w-full rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 text-base text-white shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:scale-[1.01] hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  <Sparkles className="h-5 w-5" />
                  Claim the Benchmark Kit
                </button>

                {leadStatus === 'pending' ? (
                  <p className="text-sm text-blue-200">
                    Saving your insights securely…
                  </p>
                ) : null}
                {leadStatus === 'success' ? (
                  <p className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                    {leadMessage}
                  </p>
                ) : null}
                {leadStatus === 'error' ? (
                  <p className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {leadMessage}
                  </p>
                ) : null}
                {leadStatus === 'idle' && leadMessage ? (
                  <p className="text-sm text-blue-200">{leadMessage}</p>
                ) : null}
              </form>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-blue-100 shadow-xl backdrop-blur-lg">
                <p>
                  Generate your forecast to unlock the industry-specific talk
                  track and lead capture form. Need help? Email{' '}
                  <a
                    href="mailto:hello@sensyva.ai"
                    className="font-semibold text-cyan-300 hover:underline"
                  >
                    hello@sensyva.ai
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
