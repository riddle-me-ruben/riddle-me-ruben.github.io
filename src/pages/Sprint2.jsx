import { SectionHeading, Placeholder, Prose, DocSection, Card, CardBody, CardHeader } from '../components/ui.jsx'
import { FileClock } from 'lucide-react'

const SPRINT2_DOCS = [
  {
    title: 'Business Case',
    blurb: 'Value analysis and the go/no-go recommendation.',
    warn: 'AI may not be used for the go/no-go reasoning or justification. A team member writes this by hand.',
  },
  {
    title: 'Estimation Appendix',
    blurb: 'The estimation methods used, the ranges produced, and the reasoning behind them.',
    warn: 'Ranges, not point estimates. A single number with no band is not an estimate.',
  },
  { title: 'ROI Analysis', blurb: 'Return on investment against the baseline established in Sprint 1.' },
  {
    title: 'Change Log',
    blurb: 'What was revised from Sprint 1, why, and what it affected downstream.',
    warn: 'Required on every sprint page from Sprint 2 onward. Treat it like an architecture decision record.',
  },
]

export default function Sprint2() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Sprint 2"
        title="Business Case & Estimation"
        description="Not yet started. This page goes live when Sprint 2 concludes; Sprint 1 stays published alongside it."
      />

      <Prose>
        <p>
          Sprint 2 content in the guidelines is a working draft and subject to change, so treat the structure
          below as provisional. The individual estimation memo is submitted separately and graded individually —
          it is not published here.
        </p>
      </Prose>

      <div className="grid gap-4 sm:grid-cols-2">
        {SPRINT2_DOCS.map((d) => (
          <Placeholder key={d.title} title={d.title} due="Sprint 2">
            <p className="mb-2">{d.blurb}</p>
            {d.warn && (
              <p className="rounded-md bg-amber-100/70 px-2.5 py-2 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                {d.warn}
              </p>
            )}
          </Placeholder>
        ))}
      </div>

      <Card className="border-slate-300 dark:border-navy-700">
        <CardHeader icon={FileClock} title="Change log starts here" subtitle="Required from Sprint 2 onward" />
        <CardBody>
          <Prose>
            <p className="!mb-0 text-sm">
              From Sprint 2 on, every sprint page carries its own change log recording what was revised from the
              prior version, why it was revised, and which downstream pages the change affected. Written so
              someone joining the project mid-semester could reconstruct the team&rsquo;s reasoning.
            </p>
          </Prose>
        </CardBody>
      </Card>
    </div>
  )
}
