import { ListTree, Milestone, ShieldAlert, Cpu, DollarSign, Lock, Bot } from 'lucide-react'
import { Card, CardHeader, CardBody, Badge, SectionHeading, Table } from '../components/ui.jsx'

const WBS = [
  {
    phase: '1. Initiation & Charter',
    items: ['Stakeholder analysis', 'Charter sign-off', 'RACI matrix'],
  },
  {
    phase: '2. Planning & Estimation',
    items: ['Business case & ROI', 'COCOMO + Story Point estimation', 'Hybrid WBS & risk register'],
  },
  {
    phase: '3. Design & Architecture',
    items: ['System architecture', 'AI governance framework', 'Data privacy design (FERPA)'],
  },
  {
    phase: '4. Agile Build (Sprints 1–9)',
    items: ['Portal & dashboard build-out', 'AI recommendation engine', 'Kanban-tracked backlog execution'],
  },
  {
    phase: '5. Governance, Launch & Audit',
    items: ['Bias monitoring & compliance checkpoints', 'UAT & production rollout', 'Post-launch audit review'],
  },
]

const MILESTONES = [
  { label: 'Charter Approved', date: 'Wk 2', status: 'done' },
  { label: 'Business Case Approved', date: 'Wk 4', status: 'done' },
  { label: 'Architecture Baseline', date: 'Wk 6', status: 'active' },
  { label: 'Sprint 3 — Portal MVP', date: 'Wk 10', status: 'upcoming' },
  { label: 'Sprint 6 — AI Engine Beta', date: 'Wk 16', status: 'upcoming' },
  { label: 'Governance Audit Gate', date: 'Wk 18', status: 'upcoming' },
  { label: 'Production Launch', date: 'Wk 20', status: 'upcoming' },
]

const RISK_CATEGORIES = [
  { id: 'technical', label: 'Technical', icon: Cpu, tone: 'navy' },
  { id: 'financial', label: 'Financial', icon: DollarSign, tone: 'green' },
  { id: 'security', label: 'Security', icon: Lock, tone: 'red' },
  { id: 'ai', label: 'AI Governance', icon: Bot, tone: 'purple' },
]

const RAID_LOG = [
  {
    category: 'technical',
    item: 'Legacy SIS integration may not expose a stable API',
    type: 'Risk',
    severity: 'High',
    owner: 'Ruben J. Martinez',
  },
  {
    category: 'technical',
    item: 'Kanban state sync assumes single-device localStorage persistence',
    type: 'Issue',
    severity: 'Medium',
    owner: 'Brenden N. Ucol',
  },
  {
    category: 'financial',
    item: 'Cloud inference costs scale non-linearly with adoption',
    type: 'Risk',
    severity: 'Medium',
    owner: 'Sebastian A. Ochoa',
  },
  {
    category: 'financial',
    item: 'Assumption: department covers Year-2 run cost from savings',
    type: 'Assumption',
    severity: 'Low',
    owner: 'Amichai A. Fernandez',
  },
  {
    category: 'security',
    item: 'Student PII exposure via unredacted advisor logs',
    type: 'Risk',
    severity: 'High',
    owner: 'Sebastian M. Lucero-Chavez',
  },
  {
    category: 'security',
    item: 'Dependency: SSO provider must support SCIM provisioning',
    type: 'Dependency',
    severity: 'Medium',
    owner: 'Brenden N. Ucol',
  },
  {
    category: 'ai',
    item: 'Recommendation model may encode historical advising bias',
    type: 'Risk',
    severity: 'High',
    owner: 'Sebastian M. Lucero-Chavez',
  },
  {
    category: 'ai',
    item: 'Human-in-the-loop override rate below governance target',
    type: 'Issue',
    severity: 'Medium',
    owner: 'Amichai A. Fernandez',
  },
]

const severityTone = { High: 'red', Medium: 'yellow', Low: 'green' }
const categoryTone = Object.fromEntries(RISK_CATEGORIES.map((c) => [c.id, c.tone]))
const categoryLabel = Object.fromEntries(RISK_CATEGORIES.map((c) => [c.id, c.label]))

const milestoneTone = { done: 'green', active: 'accent', upcoming: 'slate' }

export default function PlanRiskTab() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Tab 3 · Delivery Plan"
        title="Hybrid Plan & Risk Register"
        description="Combines a Waterfall-style Work Breakdown Structure for governance gates with an Agile milestone cadence, alongside a categorized Risk/RAID log spanning technical, financial, security, and AI governance concerns."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader icon={ListTree} title="Work Breakdown Structure" subtitle="Five top-level phases" />
          <CardBody>
            <ol className="space-y-4">
              {WBS.map((phase) => (
                <li key={phase.phase}>
                  <p className="text-sm font-semibold text-navy-900 dark:text-slate-100">{phase.phase}</p>
                  <ul className="mt-1.5 ml-1 space-y-1 border-l-2 border-navy-100 pl-4 dark:border-navy-800">
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-slate-600 dark:text-slate-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </CardBody>
        </Card>

        <Card>
          <CardHeader icon={Milestone} title="Key Milestones Timeline" subtitle="20-week hybrid delivery cadence" />
          <CardBody>
            <ol className="relative space-y-6 border-l-2 border-slate-200 pl-6 dark:border-navy-800">
              {MILESTONES.map((m) => (
                <li key={m.label} className="relative">
                  <span
                    className={`absolute -left-[29px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white dark:ring-navy-900 ${
                      m.status === 'done'
                        ? 'bg-emerald-500'
                        : m.status === 'active'
                          ? 'bg-accent-500'
                          : 'bg-slate-300 dark:bg-navy-700'
                    }`}
                  />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium text-navy-900 dark:text-slate-100">{m.label}</p>
                    <Badge tone={milestoneTone[m.status]}>{m.date}</Badge>
                  </div>
                </li>
              ))}
            </ol>
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader icon={ShieldAlert} title="Color-Coded Risk Register & RAID Log" subtitle="Categorized by Technical, Financial, Security, and AI Governance" />
        <CardBody className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {RISK_CATEGORIES.map((c) => (
              <Badge key={c.id} tone={c.tone} icon={c.icon}>
                {c.label}
              </Badge>
            ))}
          </div>
          <Table columns={['Category', 'Item', 'Type', 'Severity', 'Owner']}>
            {RAID_LOG.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-navy-800/40">
                <td className="px-3 py-2.5">
                  <Badge tone={categoryTone[r.category]}>{categoryLabel[r.category]}</Badge>
                </td>
                <td className="px-3 py-2.5 text-navy-900 dark:text-slate-100">{r.item}</td>
                <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{r.type}</td>
                <td className="px-3 py-2.5">
                  <Badge tone={severityTone[r.severity]}>{r.severity}</Badge>
                </td>
                <td className="px-3 py-2.5 whitespace-nowrap text-slate-600 dark:text-slate-400">{r.owner}</td>
              </tr>
            ))}
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}
