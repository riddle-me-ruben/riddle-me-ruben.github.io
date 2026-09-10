import { Link } from 'react-router-dom'
import { ArrowRight, Github, Wallet } from 'lucide-react'
import { Card, CardBody, Badge } from '../components/ui.jsx'
import { PROJECT, TEAM } from '../data/team.js'

const SPRINT1_PAGES = [
  { to: '/sprint-1/market-research', label: 'Market Research', done: true },
  { to: '/sprint-1/business-strategy', label: 'Business Strategy', done: false },
  { to: '/sprint-1/project-charter', label: 'Project Charter', done: false },
  { to: '/sprint-1/contributions', label: 'Contributions & AI Disclosure', done: false },
]

export default function Home() {
  return (
    <div className="stack-xl">
      <section>
        <div className="mb-5 flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-neon-500 text-ink-950">
            <Wallet size={28} />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-ink-50">{PROJECT.name}</h1>
            <p className="text-sm text-ink-400">{PROJECT.subtitle}</p>
          </div>
        </div>

        <p className="max-w-3xl text-base leading-7 text-ink-200">{PROJECT.oneSentenceProblem}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link to="/sprint-1/market-research" className="btn btn-primary">
            Read the market research
            <ArrowRight size={15} />
          </Link>
          <a href={PROJECT.repoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <Github size={15} />
            Source repository
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-bold text-ink-50">Sprints</h2>
        <p className="mb-4 text-sm text-ink-400">
          One page per sprint. Earlier sprints stay live for the rest of the semester — this record only grows.
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardBody>
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="eyebrow !mb-0">Sprint 1</p>
                <Badge tone="neon">In progress</Badge>
              </div>
              <h3 className="mb-4 text-base font-semibold text-ink-50">Discovery &amp; Charter</h3>

              <ul className="mb-4 space-y-2">
                {SPRINT1_PAGES.map((p) => (
                  <li key={p.to}>
                    <Link to={p.to} className="flex items-center gap-2.5 text-sm text-ink-200 hover:text-neon-300">
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${p.done ? 'bg-neon-500' : 'bg-todo'}`}
                      />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link to="/sprint-1" className="inline-flex items-center gap-1.5 text-sm font-medium text-neon-400">
                Open Sprint 1
                <ArrowRight size={14} />
              </Link>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="eyebrow !mb-0">Sprint 2</p>
                <Badge tone="todo">[TODO]</Badge>
              </div>
              <h3 className="mb-4 text-base font-semibold text-ink-50">Not yet started</h3>
              <p className="mb-4 text-sm leading-6 text-ink-400">
                Goes live when the sprint concludes.
              </p>
              <Link to="/sprint-2" className="inline-flex items-center gap-1.5 text-sm font-medium text-neon-400">
                Open Sprint 2
                <ArrowRight size={14} />
              </Link>
            </CardBody>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-bold text-ink-50">The team</h2>
        <p className="mb-4 text-sm text-ink-400">
          Five members, each individually accountable for a part of this portal.
        </p>
        <Card>
          <CardBody>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {TEAM.map((m) => (
                <div key={m.id} className="flex items-center gap-3">
                  <span className="avatar avatar-sm">
                    {m.photo ? <img src={m.photo} alt={m.name} /> : m.initials}
                  </span>
                  <p className="text-sm font-medium text-ink-100">{m.name}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-neon-400"
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
