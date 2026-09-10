import { Target, Users, Grid3x3, Table2, CheckCircle2 } from 'lucide-react'
import { Card, CardHeader, CardBody, Badge, SectionHeading, Table } from '../components/ui.jsx'
import { TEAM } from '../data/team.js'

const OBJECTIVES = [
  'Deliver a governed, AI-assisted academic advising platform for CS 5388 stakeholders by end of semester.',
  'Reduce advising-request turnaround time from 5 business days to under 24 hours.',
  'Establish a repeatable hybrid (Waterfall + Agile) delivery process for future course cohorts.',
]

const SCOPE_IN = [
  'Student-facing self-service portal (web, responsive)',
  'AI-assisted recommendation engine with human-in-the-loop review',
  'Faculty/advisor dashboard for case triage',
  'Audit logging & FERPA-aligned data handling',
]

const SCOPE_OUT = [
  'Native mobile applications (v1)',
  'Integration with third-party LMS grading systems',
  'Automated, unsupervised AI decision-making (no override)',
]

const OUTCOMES = [
  { metric: 'Advising turnaround time', baseline: '5 business days', target: '< 24 hours', by: 'Sprint 8' },
  { metric: 'Student satisfaction (CSAT)', baseline: '3.2 / 5', target: '4.5+ / 5', by: 'End of term' },
  { metric: 'Advisor case backlog', baseline: '48 open cases', target: '< 10 open cases', by: 'Sprint 10' },
  { metric: 'AI recommendation acceptance rate', baseline: 'n/a', target: '> 70%', by: 'Sprint 12' },
]

const STAKEHOLDERS = [
  { name: 'Course Instructor / Sponsor', power: 9, interest: 9, quadrant: 'Manage Closely' },
  { name: 'University Registrar', power: 8, interest: 4, quadrant: 'Keep Satisfied' },
  { name: 'Students (End Users)', power: 3, interest: 9, quadrant: 'Keep Informed' },
  { name: 'Academic Advisors', power: 6, interest: 8, quadrant: 'Manage Closely' },
  { name: 'IT Security & Compliance', power: 8, interest: 6, quadrant: 'Manage Closely' },
  { name: 'Project Team (5 members)', power: 7, interest: 9, quadrant: 'Manage Closely' },
  { name: 'External Vendors', power: 3, interest: 3, quadrant: 'Monitor' },
]

const quadrantTone = {
  'Manage Closely': 'accent',
  'Keep Satisfied': 'navy',
  'Keep Informed': 'green',
  Monitor: 'slate',
}

const RACI_TASKS = [
  { task: 'Project Charter Sign-off', aaf: 'A', sao: 'R', rjm: 'C', smlc: 'C', bnu: 'I' },
  { task: 'Business Case & ROI Model', aaf: 'A', sao: 'C', rjm: 'I', smlc: 'I', bnu: 'R' },
  { task: 'System Architecture Design', aaf: 'I', sao: 'C', rjm: 'A', smlc: 'C', bnu: 'R' },
  { task: 'Sprint Planning & Backlog Grooming', aaf: 'C', sao: 'A', rjm: 'R', smlc: 'C', bnu: 'C' },
  { task: 'AI Model Governance & Bias Review', aaf: 'I', sao: 'C', rjm: 'C', smlc: 'A', bnu: 'R' },
  { task: 'Data Privacy & FERPA Compliance', aaf: 'C', sao: 'I', rjm: 'C', smlc: 'A', bnu: 'R' },
  { task: 'Kanban Board Administration', aaf: 'I', sao: 'A', rjm: 'R', smlc: 'C', bnu: 'C' },
  { task: 'Deployment & Infrastructure', aaf: 'I', sao: 'C', rjm: 'C', smlc: 'I', bnu: 'A' },
  { task: 'Stakeholder Reporting', aaf: 'A', sao: 'R', rjm: 'I', smlc: 'I', bnu: 'C' },
]

const RACI_KEY = [
  { letter: 'R', label: 'Responsible', tone: 'navy' },
  { letter: 'A', label: 'Accountable', tone: 'accent' },
  { letter: 'C', label: 'Consulted', tone: 'green' },
  { letter: 'I', label: 'Informed', tone: 'slate' },
]

const raciTone = { R: 'navy', A: 'accent', C: 'green', I: 'slate' }

function RaciCell({ value }) {
  return (
    <td className="px-3 py-2.5 text-center">
      <Badge tone={raciTone[value]} className="mx-auto">
        {value}
      </Badge>
    </td>
  )
}

function PowerInterestMatrix() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 overflow-hidden rounded-xl border border-slate-200 dark:border-navy-800">
        <div className="border-b border-r border-slate-200 bg-navy-50/60 dark:border-navy-800 dark:bg-navy-800/40" />
        <div className="border-b border-slate-200 bg-accent-50/60 dark:border-navy-800 dark:bg-accent-900/10" />
        <div className="border-r border-slate-200 bg-slate-50 dark:border-navy-800 dark:bg-navy-900/40" />
        <div className="bg-emerald-50/60 dark:bg-emerald-900/10" />
      </div>

      <span className="absolute left-3 top-2 text-[11px] font-semibold text-slate-400">Keep Satisfied</span>
      <span className="absolute right-3 top-2 text-[11px] font-semibold text-slate-400">Manage Closely</span>
      <span className="absolute bottom-2 left-3 text-[11px] font-semibold text-slate-400">Monitor</span>
      <span className="absolute bottom-2 right-3 text-[11px] font-semibold text-slate-400">Keep Informed</span>

      {STAKEHOLDERS.map((s) => (
        <div
          key={s.name}
          title={`${s.name} — Power ${s.power}, Interest ${s.interest}`}
          className="group absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-default items-center justify-center rounded-full border-2 border-white bg-navy-700 text-[10px] font-bold text-white shadow-card ring-1 ring-navy-900/10 transition-transform hover:z-10 hover:scale-125 dark:border-navy-950 dark:bg-accent-500"
          style={{
            left: `${(s.interest / 10) * 100}%`,
            top: `${100 - (s.power / 10) * 100}%`,
          }}
        >
          {s.name
            .split(' ')
            .map((w) => w[0])
            .slice(0, 2)
            .join('')}
          <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-max max-w-[10rem] -translate-x-1/2 scale-0 rounded-md bg-navy-900 px-2 py-1 text-[11px] font-normal text-white opacity-0 shadow-lg transition-all group-hover:scale-100 group-hover:opacity-100 dark:bg-navy-800">
            {s.name}
          </span>
        </div>
      ))}

      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-500">
        Interest →
      </span>
      <span className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium text-slate-500">
        Power →
      </span>
    </div>
  )
}

export default function CharterTab() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Tab 1 · Governance"
        title="Project Charter & Stakeholders"
        description="Defines the mandate for the Living Project Portal, aligns the five-person team on measurable outcomes, and maps stakeholder influence against a RACI accountability grid."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader icon={Target} title="Project Charter" subtitle="Objectives, scope & measurable outcomes" />
          <CardBody className="space-y-5">
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Clear Objectives
              </h4>
              <ul className="space-y-2">
                {OBJECTIVES.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-navy-800 dark:text-slate-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-500" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3 dark:border-emerald-900 dark:bg-emerald-900/10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                  In Scope
                </p>
                <ul className="space-y-1.5 text-sm text-navy-800 dark:text-slate-200">
                  {SCOPE_IN.map((s) => (
                    <li key={s} className="leading-snug">
                      • {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-rose-200 bg-rose-50/60 p-3 dark:border-rose-900 dark:bg-rose-900/10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-400">
                  Out of Scope
                </p>
                <ul className="space-y-1.5 text-sm text-navy-800 dark:text-slate-200">
                  {SCOPE_OUT.map((s) => (
                    <li key={s} className="leading-snug">
                      • {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader icon={Users} title="Project Team" subtitle="5 members" />
          <CardBody className="space-y-3">
            {TEAM.map((m) => (
              <div key={m.id} className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${m.color}`}
                >
                  {m.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-navy-900 dark:text-slate-100">{m.name}</p>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">{m.role}</p>
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader icon={Table2} title="Measurable Business Outcomes" subtitle="Baseline → Target tracked against the delivery roadmap" />
        <CardBody className="p-0">
          <div className="p-4">
            <Table columns={['Metric', 'Baseline', 'Target', 'Target Date']}>
              {OUTCOMES.map((o) => (
                <tr key={o.metric} className="hover:bg-slate-50 dark:hover:bg-navy-800/40">
                  <td className="px-3 py-2.5 font-medium text-navy-900 dark:text-slate-100">{o.metric}</td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{o.baseline}</td>
                  <td className="px-3 py-2.5">
                    <Badge tone="accent">{o.target}</Badge>
                  </td>
                  <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{o.by}</td>
                </tr>
              ))}
            </Table>
          </div>
        </CardBody>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader icon={Grid3x3} title="Stakeholder Power / Interest Matrix" subtitle="Hover a node for details" />
          <CardBody>
            <PowerInterestMatrix />
            <div className="mt-8 flex flex-wrap gap-2">
              {Object.entries(quadrantTone).map(([label, tone]) => (
                <Badge key={label} tone={tone}>
                  {label}
                </Badge>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader icon={Table2} title="RACI Matrix" subtitle="Key tasks mapped across all 5 team members" />
          <CardBody className="p-0">
            <div className="p-4">
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-navy-800">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-navy-800/60">
                      <th className="whitespace-nowrap px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Task
                      </th>
                      {TEAM.map((m) => (
                        <th
                          key={m.id}
                          className="px-2 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                          title={m.name}
                        >
                          {m.initials}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-navy-800">
                    {RACI_TASKS.map((row) => (
                      <tr key={row.task} className="hover:bg-slate-50 dark:hover:bg-navy-800/40">
                        <td className="whitespace-nowrap px-3 py-2.5 font-medium text-navy-900 dark:text-slate-100">
                          {row.task}
                        </td>
                        <RaciCell value={row.aaf} />
                        <RaciCell value={row.sao} />
                        <RaciCell value={row.rjm} />
                        <RaciCell value={row.smlc} />
                        <RaciCell value={row.bnu} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {RACI_KEY.map((k) => (
                  <Badge key={k.letter} tone={k.tone}>
                    {k.letter} = {k.label}
                  </Badge>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
