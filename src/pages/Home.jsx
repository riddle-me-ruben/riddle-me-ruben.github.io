import { Link } from 'react-router-dom'
import { ArrowRight, Github, Users, FileText, Wallet } from 'lucide-react'
import { Card, CardBody, Badge, StatTile } from '../components/ui.jsx'
import { PROJECT, TEAM } from '../data/team.js'
import { RESEARCH_SUMMARY } from '../data/research.js'

const SPRINTS = [
  {
    to: '/sprint-1',
    label: 'Sprint 1',
    title: 'Discovery & Charter',
    status: 'In progress',
    tone: 'accent',
    blurb: 'Market research, business strategy and the project charter that anchors every later sprint.',
    pages: [
      { to: '/sprint-1/market-research', label: 'Market Research', done: true },
      { to: '/sprint-1/business-strategy', label: 'Business Strategy', done: false },
      { to: '/sprint-1/project-charter', label: 'Project Charter', done: false },
      { to: '/sprint-1/contributions', label: 'Contributions & AI Disclosure', done: false },
    ],
  },
  {
    to: '/sprint-2',
    label: 'Sprint 2',
    title: 'Business Case & Estimation',
    status: 'Not started',
    tone: 'slate',
    blurb: 'Value analysis, go/no-go recommendation, estimation appendix, ROI and the first change log.',
    pages: [],
  },
]

export default function Home() {
  return (
    <div className="space-y-10">
      <section>
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-accent-400 shadow-card">
            <Wallet size={24} />
          </span>
          <div>
            <h1 className="text-2xl font-bold text-navy-900 dark:text-slate-50 sm:text-3xl">
              {PROJECT.name}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {PROJECT.subtitle} · {PROJECT.domain}
            </p>
          </div>
        </div>

        <p className="max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
          {PROJECT.oneSentenceProblem}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to="/sprint-1/market-research"
            className="inline-flex items-center gap-1.5 rounded-lg bg-navy-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-700 dark:bg-accent-600 dark:hover:bg-accent-500"
          >
            Read the market research
            <ArrowRight size={15} />
          </Link>
          <a
            href={PROJECT.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-navy-800 transition-colors hover:bg-slate-100 dark:border-navy-700 dark:bg-navy-900 dark:text-slate-200 dark:hover:bg-navy-800"
          >
            <Github size={15} />
            Source repository
          </a>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <StatTile label="Team members" value={TEAM.length} sub="All five conducted research" icon={Users} />
        <StatTile
          label="Discovery interviews"
          value={RESEARCH_SUMMARY.totalInterviews}
          sub={`${RESEARCH_SUMMARY.financeInterviews} on the selected idea`}
          icon={FileText}
          tone="accent"
        />
        <StatTile label="Sprints published" value="1" sub="Portal grows each sprint" icon={ArrowRight} tone="green" />
      </section>

      <section>
        <h2 className="mb-1 text-lg font-bold text-navy-900 dark:text-slate-50">Sprints</h2>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
          One page per sprint. Earlier sprints stay live for the rest of the semester — this record only grows.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {SPRINTS.map((s) => (
            <Card key={s.to}>
              <CardBody>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                    {s.label}
                  </p>
                  <Badge tone={s.tone}>{s.status}</Badge>
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-navy-900 dark:text-slate-100">{s.title}</h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{s.blurb}</p>

                {s.pages.length > 0 && (
                  <ul className="mb-4 space-y-1.5">
                    {s.pages.map((p) => (
                      <li key={p.to}>
                        <Link
                          to={p.to}
                          className="flex items-center gap-2 text-sm text-slate-700 hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
                        >
                          <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                              p.done ? 'bg-emerald-500' : 'bg-amber-400'
                            }`}
                          />
                          {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to={s.to}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:underline dark:text-accent-400"
                >
                  Open {s.label}
                  <ArrowRight size={14} />
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-bold text-navy-900 dark:text-slate-50">The team</h2>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
          Five members, each individually accountable for a part of this portal.
        </p>
        <Card>
          <CardBody>
            <div className="flex flex-wrap gap-3">
              {TEAM.map((m) => (
                <div key={m.id} className="flex items-center gap-2.5">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${m.color}`}
                  >
                    {m.initials}
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-medium text-navy-900 dark:text-slate-100">{m.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:underline dark:text-accent-400"
            >
              Read the full bios
              <ArrowRight size={14} />
            </Link>
          </CardBody>
        </Card>
      </section>
    </div>
  )
}
