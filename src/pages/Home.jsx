import { Link } from 'react-router-dom'
import { ArrowRight, Wallet } from 'lucide-react'
import { Card, CardBody } from '../components/ui.jsx'
import { PROJECT, TEAM } from '../data/team.js'

const SPRINT1_PAGES = [
  { to: '/sprint-1/market-research', label: 'Market Research' },
  { to: '/sprint-1/business-strategy', label: 'Business Strategy' },
  { to: '/sprint-1/project-charter', label: 'Project Charter' },
  { to: '/sprint-1/contributions', label: 'Contributions & AI Disclosure' },
]

const SPRINT2_PAGES = [
  { to: '/sprint-2/business-case', label: 'Business Case' },
  { to: '/sprint-2/estimation-appendix', label: 'Estimation Appendix' },
  { to: '/sprint-2/roi-analysis', label: 'ROI Analysis' },
  { to: '/sprint-2/change-log', label: 'Change Log' },
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

        <p className="max-w-5xl text-lg leading-8 text-ink-200 sm:text-xl">{PROJECT.oneSentenceProblem}</p>

      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold text-ink-50">Sprints</h2>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardBody>
              <p className="eyebrow">Sprint 1</p>
              <h3 className="mb-4 text-base font-semibold text-ink-50">Discovery &amp; Charter</h3>

              <ul className="mb-4 space-y-2">
                {SPRINT1_PAGES.map((p) => (
                  <li key={p.to}>
                    <Link to={p.to} className="flex items-center gap-2.5 text-sm text-ink-200 hover:text-neon-300">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon-500" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <p className="eyebrow">Sprint 2</p>
              <h3 className="mb-4 text-base font-semibold text-ink-50">Business &amp; Financial Analysis</h3>
              <ul className="space-y-2">
                {SPRINT2_PAGES.map((page) => (
                  <li key={page.to}>
                    <Link to={page.to} className="flex items-center gap-2.5 text-sm text-ink-200 hover:text-neon-300">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink-600" />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold text-ink-50">The team</h2>
        <Card>
          <CardBody>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
