import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, CircleDashed, Lock } from 'lucide-react'
import { Card, CardBody, CardHeader, Badge, SectionHeading, Prose, PdfLink } from '../components/ui.jsx'

const SUBPAGES = [
  {
    to: '/sprint-1/market-research',
    title: 'Market Research',
    status: 'Published',
    done: true,
    blurb:
      'Aggregate findings across 13 discovery interviews, the top pick deep dive, and the four assumptions we pivoted from.',
  },
  {
    to: '/sprint-1/business-strategy',
    title: 'Business Strategy',
    status: 'Placeholder',
    done: false,
    blurb: 'The strategy-to-project chain: why ShareTab earns the right to exist and which business objective it serves.',
  },
  {
    to: '/sprint-1/project-charter',
    title: 'Project Charter',
    status: 'Placeholder',
    done: false,
    blurb: 'Scope boundary, assumptions and the stakeholder register. The anchor document for every later sprint.',
  },
  {
    to: '/sprint-1/contributions',
    title: 'Contributions & AI Disclosure',
    status: 'Placeholder',
    done: false,
    blurb: 'What each member owned and reviewed this sprint, plus the required AI use disclosure.',
  },
]

export default function Sprint1() {
  return (
    <div className="space-y-8">
      <div>
        <SectionHeading
          eyebrow="Sprint 1"
          title="Discovery & Charter"
          description="Sprint 1 establishes what problem ShareTab solves, for whom, and why it is worth building. Everything in later sprints traces back to the documents on this page."
        />
        <div className="flex flex-wrap items-center gap-3">
          <PdfLink href="/docs/sprint1-bundle.pdf" available={false} />
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Every public document on this page needs a PDF uploaded to Blackboard by the sprint deadline.
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {SUBPAGES.map((p) => (
          <Card key={p.to} className={p.done ? '' : 'border-dashed'}>
            <CardBody>
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5">
                  {p.done ? (
                    <CheckCircle2 size={15} className="text-emerald-500" />
                  ) : (
                    <CircleDashed size={15} className="text-amber-500" />
                  )}
                  <h3 className="text-base font-semibold text-navy-900 dark:text-slate-100">{p.title}</h3>
                </span>
                <Badge tone={p.done ? 'green' : 'yellow'}>{p.status}</Badge>
              </div>
              <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{p.blurb}</p>
              <Link
                to={p.to}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:underline dark:text-accent-400"
              >
                Open
                <ArrowRight size={14} />
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>

      <Card className="border-slate-300 dark:border-navy-700">
        <CardHeader
          icon={Lock}
          title="Sprint Retrospective — not published here"
          subtitle="Private deliverable"
        />
        <CardBody>
          <Prose>
            <p className="!mb-0 text-sm">
              Sprint 1 also requires a Sprint Retrospective with a team half and a project half. It is
              deliberately <strong>not</strong> on this site: it is private and submitted through Blackboard
              only. The same applies to peer evaluations. Nothing on this portal should ever link to either.
            </p>
          </Prose>
        </CardBody>
      </Card>
    </div>
  )
}
