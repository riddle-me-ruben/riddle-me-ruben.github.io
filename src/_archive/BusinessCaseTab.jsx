import { DollarSign, TrendingUp, AlertTriangle, Calculator, Sparkles } from 'lucide-react'
import { Card, CardHeader, CardBody, Badge, SectionHeading, StatTile, Table } from '../components/ui.jsx'

const COCOMO_ROWS = [
  { phase: 'Requirements & Planning', kloc: 2.5, effortPM: 4.1, duration: '1.4 mo', staff: 3 },
  { phase: 'Design & Architecture', kloc: 4.0, effortPM: 6.6, duration: '1.8 mo', staff: 4 },
  { phase: 'Implementation', kloc: 9.5, effortPM: 15.6, duration: '3.2 mo', staff: 5 },
  { phase: 'Testing & QA', kloc: 3.0, effortPM: 4.9, duration: '1.2 mo', staff: 3 },
  { phase: 'Deployment & Governance Review', kloc: 1.0, effortPM: 1.8, duration: '0.6 mo', staff: 2 },
]

const STORY_POINT_ROWS = [
  { epic: 'Student Self-Service Portal', points: 34, sprints: '1–3', velocity: '11–12 pts/sprint' },
  { epic: 'AI Recommendation Engine', points: 42, sprints: '3–6', velocity: '10–14 pts/sprint' },
  { epic: 'Advisor Dashboard', points: 26, sprints: '5–7', velocity: '9–13 pts/sprint' },
  { epic: 'AI Governance & Audit Logging', points: 21, sprints: '6–8', velocity: '7–10 pts/sprint' },
  { epic: 'Infra, Deployment & Hardening', points: 18, sprints: '8–9', velocity: '9 pts/sprint' },
]

const COST_BENEFIT = [
  { label: 'Estimated Development Cost', value: '$186,000', tone: 'navy' },
  { label: 'Projected Year-1 Savings', value: '$241,500', tone: 'green' },
  { label: 'Net ROI (Year 1)', value: '+29.8%', tone: 'accent' },
  { label: 'Payback Period', value: '9.2 months', tone: 'navy' },
]

export default function BusinessCaseTab() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Tab 2 · Financial Justification"
        title="Business Case & Estimation"
        description="Quantifies the return on investment for the Living Project Portal and cross-validates delivery effort using two independent estimation methods: COCOMO and Story Points."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COST_BENEFIT.map((c) => (
          <StatTile key={c.label} label={c.label} value={c.value} tone={c.tone} icon={DollarSign} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader icon={TrendingUp} title="ROI & Cost-Benefit Analysis" subtitle="12-month projection against manual advising baseline" />
          <CardBody className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              The current manual advising workflow costs the department an estimated{' '}
              <span className="font-semibold text-navy-900 dark:text-slate-100">$18,500/month</span> in staff time
              across advisors and support staff, driven largely by repetitive case triage and scheduling overhead.
              Automating first-pass triage with a governed AI assistant is projected to cut that recurring cost by{' '}
              <span className="font-semibold text-navy-900 dark:text-slate-100">62%</span> while shortening turnaround
              time from days to hours.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 p-3 dark:border-navy-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">Build Cost</p>
                <p className="text-lg font-bold text-navy-900 dark:text-slate-50">$186K</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-3 dark:border-navy-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">Annual Run Cost</p>
                <p className="text-lg font-bold text-navy-900 dark:text-slate-50">$34K</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-3 dark:border-navy-800">
                <p className="text-xs text-slate-500 dark:text-slate-400">Annual Benefit</p>
                <p className="text-lg font-bold text-accent-600 dark:text-accent-400">$241.5K</p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="border-amber-200 dark:border-amber-900">
          <CardHeader icon={AlertTriangle} title="Sensitivity Statement" subtitle="Cost of Doing Nothing" />
          <CardBody>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              If the portal is <span className="font-semibold">not funded</span>, advising backlog is projected to
              grow <span className="font-semibold text-rose-600 dark:text-rose-400">18% per term</span> as
              enrollment increases, compounding into an estimated{' '}
              <span className="font-semibold text-rose-600 dark:text-rose-400">$96K/year</span> in overtime and
              contractor staffing by Year 2 — exceeding the entire build cost without ever resolving the underlying
              throughput problem.
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader icon={Calculator} title="COCOMO Model" subtitle="Effort estimation by KLOC (Basic COCOMO, semi-detached mode)" />
          <CardBody className="p-0">
            <div className="p-4">
              <Table columns={['Phase', 'KLOC', 'Effort (PM)', 'Duration', 'Staff']}>
                {COCOMO_ROWS.map((r) => (
                  <tr key={r.phase} className="hover:bg-slate-50 dark:hover:bg-navy-800/40">
                    <td className="px-3 py-2.5 font-medium text-navy-900 dark:text-slate-100">{r.phase}</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{r.kloc}</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{r.effortPM}</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{r.duration}</td>
                    <td className="px-3 py-2.5">
                      <Badge tone="navy">{r.staff} eng</Badge>
                    </td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-semibold dark:bg-navy-800/60">
                  <td className="px-3 py-2.5 text-navy-900 dark:text-slate-100">Total</td>
                  <td className="px-3 py-2.5 text-navy-900 dark:text-slate-100">20.0</td>
                  <td className="px-3 py-2.5 text-navy-900 dark:text-slate-100">33.0 PM</td>
                  <td className="px-3 py-2.5 text-navy-900 dark:text-slate-100">~8.2 mo</td>
                  <td className="px-3 py-2.5" />
                </tr>
              </Table>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader icon={Sparkles} title="Story Point Estimation" subtitle="Agile relative-sizing breakdown by epic" />
          <CardBody className="p-0">
            <div className="p-4">
              <Table columns={['Epic', 'Story Points', 'Target Sprints', 'Velocity Needed']}>
                {STORY_POINT_ROWS.map((r) => (
                  <tr key={r.epic} className="hover:bg-slate-50 dark:hover:bg-navy-800/40">
                    <td className="px-3 py-2.5 font-medium text-navy-900 dark:text-slate-100">{r.epic}</td>
                    <td className="px-3 py-2.5">
                      <Badge tone="accent">{r.points} pts</Badge>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{r.sprints}</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{r.velocity}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-semibold dark:bg-navy-800/60">
                  <td className="px-3 py-2.5 text-navy-900 dark:text-slate-100">Total</td>
                  <td className="px-3 py-2.5 text-navy-900 dark:text-slate-100">141 pts</td>
                  <td className="px-3 py-2.5 text-navy-900 dark:text-slate-100">9 sprints</td>
                  <td className="px-3 py-2.5" />
                </tr>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>

      <Card className="border-navy-200 bg-navy-50/40 dark:border-navy-800 dark:bg-navy-900/40">
        <CardBody>
          <p className="text-sm text-navy-800 dark:text-slate-300">
            <span className="font-semibold">Cross-validation:</span> COCOMO projects ~8.2 months at full staffing;
            Story Point estimation projects 9 two-week sprints (~4.5 months) with a 5-person team ramping velocity —
            the team is carrying the higher, more conservative COCOMO duration in the roadmap to buffer for AI
            governance review cycles.
          </p>
        </CardBody>
      </Card>
    </div>
  )
}
