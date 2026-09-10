import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, CircleDashed } from 'lucide-react'
import { Card, CardBody, Badge, SectionHeading, Prose, PdfLink } from '../components/ui.jsx'

const SUBPAGES = [
  {
    to: '/sprint-1/market-research',
    title: 'Market Research',
    done: true,
    blurb: 'Aggregate findings across 13 discovery interviews, the top pick deep dive, and what we pivoted from.',
  },
  {
    to: '/sprint-1/business-strategy',
    title: 'Business Strategy',
    done: false,
    blurb: 'The strategy-to-project chain: why ShareTab earns the right to exist and which objective it serves.',
  },
  {
    to: '/sprint-1/project-charter',
    title: 'Project Charter',
    done: false,
    blurb: 'Scope boundary, assumptions and the stakeholder register. The anchor document for later sprints.',
  },
  {
    to: '/sprint-1/contributions',
    title: 'Contributions & AI Disclosure',
    done: false,
    blurb: 'What each member owned and reviewed this sprint, plus the required AI use disclosure.',
  },
]

export default function Sprint1() {
  return (
    <div className="stack-lg">
      <header>
        <SectionHeading
          eyebrow="Sprint 1"
          title="Discovery & Charter"
          description="Sprint 1 establishes what problem ShareTab solves, for whom, and why it is worth building. Everything in later sprints traces back to the documents on this page."
        />
        <PdfLink href="/docs/sprint1-bundle.pdf" available={false} />
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {SUBPAGES.map((p) => (
          <Card key={p.to}>
            <CardBody>
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  {p.done ? (
                    <CheckCircle2 size={15} className="text-neon-400" />
                  ) : (
                    <CircleDashed size={15} className="text-todo" />
                  )}
                  <h3 className="text-base font-semibold text-ink-50">{p.title}</h3>
                </span>
                <Badge tone={p.done ? 'done' : 'todo'}>{p.done ? 'Published' : '[TODO]'}</Badge>
              </div>
              <p className="mb-4 text-sm leading-6 text-ink-400">{p.blurb}</p>
              <Link to={p.to} className="inline-flex items-center gap-1.5 text-sm font-medium text-neon-400">
                Open
                <ArrowRight size={14} />
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>

      <Card>
        <CardBody>
          <Prose>
            <p>
              <strong>Sprint Retrospective — not published here.</strong> Sprint 1 also requires a retrospective
              with a team half and a project half. It is private and submitted through Blackboard only, as are
              peer evaluations. Nothing on this portal links to either.
            </p>
          </Prose>
        </CardBody>
      </Card>
    </div>
  )
}
