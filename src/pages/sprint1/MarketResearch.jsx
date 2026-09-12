import { Card, CardBody, Badge, SectionHeading, Prose, DocSection, Quote, MarkerList } from '../../components/ui.jsx'
import { PHASE1_RESEARCH } from '../../data/phase1Research.js'
import { TOP_PICK, PIVOTS } from '../../data/research.js'

const KEY_FINDINGS = [
  {
    title: 'Balances were not reliably tracked',
    count: '12 of 13',
    body: 'Participants relied on memory, messages, handwritten notes, or old transactions to reconstruct what was owed.',
    quote: 'I do not write it down and just rely on people remembering, so I probably have a lot of unpaid stuff.',
  },
  {
    title: 'Payment apps did not match',
    count: '10 of 13',
    body: 'People installed another app, used cash, or routed money through someone who had both services.',
    quote: 'I had to send the money to another friend who had Zelle and Venmo, and they then sent the money to the person who has Venmo.',
  },
  {
    title: 'Collection created social friction',
    count: '8 of 13',
    body: 'Reminders were delayed and private. Smaller debts were often abandoned to avoid an awkward request.',
    quote: 'I value people’s company more, so I do not really keep track unless it is a large amount, maybe over $100.',
  },
  {
    title: 'Recurring bills were not the main pain point',
    count: '6 of 13',
    body: 'Fixed household bills were often planned or automated. Irregular social expenses caused more confusion.',
    quote: 'It is a recurring payment, so a fixed amount is already agreed upon.',
  },
]

export default function MarketResearch() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 1 / Market Research</p>
        <SectionHeading
          eyebrow="Sprint 1"
          title="Market Research"
          description="How five initial concepts narrowed into ShareTab and how the interviews shaped its direction."
        />
      </header>

      <DocSection title="Initial project concepts">
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {PHASE1_RESEARCH.concepts.map((concept, index) => (
            <Card key={concept.name}>
              <CardBody>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Badge tone="muted">{concept.area}</Badge>
                  <span className="text-xl font-bold text-neon-400">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink-50">{concept.name}</h3>
                <p className="text-sm leading-6 text-ink-300">{concept.description}</p>
                <div className="mt-4 border-t border-ink-700 pt-4">
                  <p className="label mb-1">{concept.selected ? 'Why we continued' : 'Why we moved away'}</p>
                  <p className="text-sm leading-6 text-ink-300">{concept.decision}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      <DocSection title="Aggregate findings">
        <Card variant="accent" className="mb-4">
          <CardBody>
            <h3 className="mb-2 text-xl font-semibold text-neon-300">
              People could divide an expense, but they could not reliably remember or track who owed whom and how much.
            </h3>
            <Prose>
              <p>
                The repeated problem was maintaining a dependable record after the split, especially when several
                purchases, people, and payment apps were involved.
              </p>
            </Prose>
          </CardBody>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {KEY_FINDINGS.map((finding) => (
            <Card key={finding.title}>
              <CardBody>
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-ink-50">{finding.title}</h3>
                  <Badge tone="muted">{finding.count}</Badge>
                </div>
                <p className="text-sm leading-6 text-ink-300">{finding.body}</p>
                <Quote cite="Interview subject, verbatim">{finding.quote}</Quote>
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      <DocSection title="Top pick">
        <Card variant="accent">
          <CardBody>
            <p className="eyebrow">Product direction</p>
            <h3 className="mb-2 text-xl font-semibold text-neon-300">{TOP_PICK.headline}</h3>
            <Prose><p>{TOP_PICK.statement}</p></Prose>
          </CardBody>
        </Card>

        <Card className="mt-4">
          <CardBody>
            <p className="label mb-3">Why it stood out</p>
            <MarkerList items={TOP_PICK.whyItRose.map((reason) => `${reason.title}: ${reason.body}`)} />
          </CardBody>
        </Card>
      </DocSection>

      <DocSection title="What did not work and what changed">
        <div className="space-y-3">
          {PIVOTS.map((pivot) => (
            <details key={pivot.abandoned} className="research-disclosure">
              <summary>
                <span>{pivot.abandoned}</span>
              </summary>
              <div className="research-disclosure-body grid gap-4 lg:grid-cols-2">
                <PivotDetail label="Why it did not hold" value={pivot.why} />
                <PivotDetail label="Resulting direction" value={pivot.changed} />
              </div>
            </details>
          ))}
        </div>
      </DocSection>
    </article>
  )
}

function PivotDetail({ label, value }) {
  return (
    <div>
      <p className="label mb-1">{label}</p>
      <p className="text-sm leading-6 text-ink-200">{value}</p>
    </div>
  )
}
