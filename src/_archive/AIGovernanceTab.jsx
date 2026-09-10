import { ShieldCheck, ScanEye, GitCommitVertical, Lock, ClipboardCheck, CalendarClock } from 'lucide-react'
import { Card, CardHeader, CardBody, Badge, SectionHeading, Table } from '../components/ui.jsx'

const COMPLIANCE_CHECKPOINTS = [
  { checkpoint: 'Model card & intended-use review', cadence: 'Per model release', status: 'Passing' },
  { checkpoint: 'Bias & fairness audit', cadence: 'Bi-weekly', status: 'Passing' },
  { checkpoint: 'Human-in-the-loop override validation', cadence: 'Weekly', status: 'Attention' },
  { checkpoint: 'Data retention & minimization review', cadence: 'Monthly', status: 'Passing' },
  { checkpoint: 'FERPA access-control audit', cadence: 'Monthly', status: 'Passing' },
]

const TRANSPARENCY_LOG = [
  { date: '2026-08-18', event: 'Recommendation model v1.2 deployed', reviewer: 'Sebastian M. Lucero-Chavez' },
  { date: '2026-08-25', event: 'Bias monitoring flagged advising-history skew; mitigation applied', reviewer: 'Sebastian M. Lucero-Chavez' },
  { date: '2026-09-01', event: 'Human override rate reviewed: 71% within target', reviewer: 'Amichai A. Fernandez' },
]

const PRIVACY_POLICIES = [
  'All student records are encrypted at rest and in transit (AES-256 / TLS 1.3).',
  'AI recommendation inputs are pseudonymized before inference where feasible.',
  'Advisors can access only records tied to their assigned caseload (least privilege).',
  'Every AI-assisted decision is logged with model version, inputs, and human reviewer.',
]

const REGULATORY_MILESTONES = [
  { milestone: 'FERPA compliance self-assessment', date: 'Sprint 4', status: 'Complete' },
  { milestone: 'Third-party data privacy audit', date: 'Sprint 7', status: 'Scheduled' },
  { milestone: 'AI governance policy publication', date: 'Sprint 8', status: 'Scheduled' },
  { milestone: 'Annual bias & compliance re-certification', date: 'Post-launch, annually', status: 'Planned' },
]

const statusTone = { Passing: 'green', Attention: 'yellow', Complete: 'green', Scheduled: 'navy', Planned: 'slate' }

export default function AIGovernanceTab() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Tab 6 · Trust & Compliance"
        title="AI Governance & Audit"
        description="Establishes the guardrails that keep the AI-assisted advising engine transparent, monitored, and compliant with student-data regulations throughout the project lifecycle."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader icon={ShieldCheck} title="AI Governance Framework" subtitle="Compliance checkpoints" />
          <CardBody className="p-0">
            <div className="p-4">
              <Table columns={['Checkpoint', 'Cadence', 'Status']}>
                {COMPLIANCE_CHECKPOINTS.map((c) => (
                  <tr key={c.checkpoint} className="hover:bg-slate-50 dark:hover:bg-navy-800/40">
                    <td className="px-3 py-2.5 font-medium text-navy-900 dark:text-slate-100">{c.checkpoint}</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{c.cadence}</td>
                    <td className="px-3 py-2.5">
                      <Badge tone={statusTone[c.status]}>{c.status}</Badge>
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader icon={ScanEye} title="Model Transparency & Bias Monitoring" subtitle="Recent log entries" />
          <CardBody>
            <ol className="relative space-y-5 border-l-2 border-slate-200 pl-6 dark:border-navy-800">
              {TRANSPARENCY_LOG.map((l) => (
                <li key={l.date} className="relative">
                  <span className="absolute -left-[29px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-navy-700 ring-4 ring-white dark:bg-accent-500 dark:ring-navy-900">
                    <GitCommitVertical size={10} className="text-white" />
                  </span>
                  <p className="text-xs font-semibold text-slate-400">{l.date}</p>
                  <p className="text-sm font-medium text-navy-900 dark:text-slate-100">{l.event}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Reviewed by {l.reviewer}</p>
                </li>
              ))}
            </ol>
          </CardBody>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader icon={Lock} title="Data Privacy Policies" subtitle="FERPA alignment & data protection" />
          <CardBody>
            <ul className="space-y-2.5">
              {PRIVACY_POLICIES.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-navy-800 dark:text-slate-200">
                  <ClipboardCheck size={16} className="mt-0.5 shrink-0 text-accent-500" />
                  {p}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardHeader icon={CalendarClock} title="Regulatory Milestones" subtitle="Audit & certification schedule" />
          <CardBody className="p-0">
            <div className="p-4">
              <Table columns={['Milestone', 'Target', 'Status']}>
                {REGULATORY_MILESTONES.map((r) => (
                  <tr key={r.milestone} className="hover:bg-slate-50 dark:hover:bg-navy-800/40">
                    <td className="px-3 py-2.5 font-medium text-navy-900 dark:text-slate-100">{r.milestone}</td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{r.date}</td>
                    <td className="px-3 py-2.5">
                      <Badge tone={statusTone[r.status]}>{r.status}</Badge>
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
