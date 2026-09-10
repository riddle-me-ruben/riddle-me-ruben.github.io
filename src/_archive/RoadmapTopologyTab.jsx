import { Rocket, Gauge, Users2, Truck, GraduationCap as SkillIcon, Timer, AlertOctagon, Wrench } from 'lucide-react'
import { Card, CardHeader, CardBody, Badge, SectionHeading, StatTile } from '../components/ui.jsx'
import { TEAM } from '../data/team.js'

const SPRINTS = [
  { name: 'Sprint 1–2', focus: 'Portal Foundations', velocity: '10 pts', slo: '99.0% uptime', status: 'done' },
  { name: 'Sprint 3–4', focus: 'Advisor Dashboard', velocity: '12 pts', slo: '99.3% uptime', status: 'done' },
  { name: 'Sprint 5–6', focus: 'AI Engine Beta', velocity: '13 pts', slo: '99.5% uptime', status: 'active' },
  { name: 'Sprint 7–8', focus: 'Governance Hardening', velocity: '11 pts', slo: '99.5% uptime', status: 'upcoming' },
  { name: 'Sprint 9', focus: 'Launch Readiness', velocity: '9 pts', slo: '99.7% uptime', status: 'upcoming' },
]

const DORA = [
  { label: 'Deployment Frequency', value: 'Daily', target: 'Elite: On-demand', icon: Rocket, tone: 'green' },
  { label: 'Lead Time for Changes', value: '4.5 hrs', target: 'Elite: < 1 day', icon: Timer, tone: 'green' },
  { label: 'Change Failure Rate', value: '6.2%', target: 'Elite: 0–15%', icon: AlertOctagon, tone: 'yellow' },
  { label: 'MTTR', value: '38 min', target: 'Elite: < 1 hr', icon: Wrench, tone: 'green' },
]

const ROLES = [
  { id: 'aaf', focus: 'Sets vision, prioritizes backlog, owns stakeholder communication' },
  { id: 'sao', focus: 'Facilitates ceremonies, removes blockers, tracks sprint velocity' },
  { id: 'rjm', focus: 'Owns system architecture, code quality, and technical design reviews' },
  { id: 'smlc', focus: 'Leads AI governance, bias monitoring, and test strategy' },
  { id: 'bnu', focus: 'Owns CI/CD, cloud infrastructure, and vendor integrations' },
]

const VENDORS = [
  { name: 'Cloud AI Inference Provider', role: 'Model hosting & inference API', status: 'Active' },
  { name: 'SSO / Identity Provider', role: 'Authentication & SCIM provisioning', status: 'Active' },
  { name: 'Observability Platform', role: 'Logging, tracing, DORA metrics', status: 'Evaluating' },
]

const SKILLS_GAP = [
  { skill: 'Applied ML / Model Evaluation', level: 55, needed: 85 },
  { skill: 'Accessibility (WCAG) Engineering', level: 60, needed: 80 },
  { skill: 'Cloud Cost Optimization', level: 45, needed: 75 },
  { skill: 'Regulatory / FERPA Compliance', level: 50, needed: 90 },
]

const sprintTone = { done: 'green', active: 'accent', upcoming: 'slate' }

export default function RoadmapTopologyTab() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Tab 5 · Delivery Health"
        title="Roadmap, Metrics & Topology"
        description="Tracks the agile delivery roadmap against sprint velocity and SLOs, benchmarks operational health with DORA metrics, and documents how the stream-aligned team is staffed and organized."
      />

      <Card>
        <CardHeader icon={Rocket} title="Agile Delivery Roadmap" subtitle="Sprints, velocity targets & SLOs" />
        <CardBody>
          <div className="grid gap-3 sm:grid-cols-5">
            {SPRINTS.map((s, i) => (
              <div key={s.name} className="relative flex flex-col">
                <div className="flex items-center">
                  <span
                    className={`flex h-3 w-3 shrink-0 rounded-full ${
                      s.status === 'done' ? 'bg-emerald-500' : s.status === 'active' ? 'bg-accent-500' : 'bg-slate-300 dark:bg-navy-700'
                    }`}
                  />
                  {i < SPRINTS.length - 1 && <span className="ml-1 h-0.5 flex-1 bg-slate-200 dark:bg-navy-800 sm:block" />}
                </div>
                <div className="mt-3 rounded-lg border border-slate-200 p-3 dark:border-navy-800">
                  <Badge tone={sprintTone[s.status]} className="mb-2">
                    {s.name}
                  </Badge>
                  <p className="text-sm font-semibold text-navy-900 dark:text-slate-100">{s.focus}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Velocity: {s.velocity}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">SLO: {s.slo}</p>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      <div>
        <div className="mb-3 flex items-center gap-2">
          <Gauge size={16} className="text-accent-500" />
          <h3 className="text-sm font-semibold text-navy-900 dark:text-slate-100">DORA Metrics Dashboard</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DORA.map((d) => (
            <StatTile key={d.label} label={d.label} value={d.value} sub={d.target} icon={d.icon} tone={d.tone} />
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader icon={Users2} title="Team Topology & Roles" subtitle="Stream-aligned team design" />
          <CardBody className="space-y-3">
            <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
              The team operates as a single <span className="font-medium text-navy-900 dark:text-slate-200">stream-aligned team</span>{' '}
              fully accountable for the Living Project Portal end-to-end, minimizing hand-offs across the sprint cycle.
            </p>
            {ROLES.map((r) => {
              const m = TEAM.find((t) => t.id === r.id)
              return (
                <div key={r.id} className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 dark:border-navy-800">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${m.color}`}>
                    {m.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900 dark:text-slate-100">
                      {m.name} <span className="font-normal text-slate-400">· {m.role}</span>
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{r.focus}</p>
                  </div>
                </div>
              )
            })}
          </CardBody>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader icon={Truck} title="Vendor Management" subtitle="External dependencies" />
            <CardBody className="space-y-2">
              {VENDORS.map((v) => (
                <div key={v.name} className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 p-2.5 dark:border-navy-800">
                  <div>
                    <p className="text-sm font-medium text-navy-900 dark:text-slate-100">{v.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{v.role}</p>
                  </div>
                  <Badge tone={v.status === 'Active' ? 'green' : 'yellow'}>{v.status}</Badge>
                </div>
              ))}
            </CardBody>
          </Card>

          <Card>
            <CardHeader icon={SkillIcon} title="Skills Gap Analysis" subtitle="Current vs. needed proficiency" />
            <CardBody className="space-y-3">
              {SKILLS_GAP.map((s) => (
                <div key={s.skill}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="font-medium text-navy-900 dark:text-slate-200">{s.skill}</span>
                    <span className="text-slate-400">
                      {s.level}% / {s.needed}%
                    </span>
                  </div>
                  <div className="relative h-2 rounded-full bg-slate-100 dark:bg-navy-800">
                    <div className="absolute inset-y-0 left-0 rounded-full bg-navy-300 dark:bg-navy-700" style={{ width: `${s.needed}%` }} />
                    <div className="absolute inset-y-0 left-0 rounded-full bg-accent-500" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
