import { Link } from 'react-router-dom'
import {
  Card,
  CardBody,
  Badge,
  SectionHeading,
  Prose,
  DocSection,
  Quote,
  PdfLink,
  MarkerList,
} from '../../components/ui.jsx'
import { RESEARCH, AGGREGATE_FINDINGS, TOP_PICK, PIVOTS } from '../../data/research.js'

export default function MarketResearch() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">
          <Link to="/sprint-1">Sprint 1</Link> / Market Research
        </p>
        <SectionHeading
          eyebrow="Sprint 1 · Public document"
          title="Market Research"
          description={`Phase 2 customer discovery for ShareTab. ${RESEARCH.total} interviews were conducted across two candidate ideas between ${RESEARCH.window}; the ${RESEARCH.finance} conducted on the finance idea are synthesized here and drove the final project selection.`}
        />
        <PdfLink href="/docs/sprint1-market-research.pdf" available={false} />
      </header>

      {/* ---- Required: aggregate findings ---- */}
      <DocSection number="1." title="Aggregate findings">
        <Prose className="mb-5">
          <p>
            Read together, the finance interviews tell a more specific story than the one we started with.{' '}
            <strong>The arithmetic of splitting a bill is not what breaks. What breaks is everything that
            happens after the split</strong> — recording the debt, remembering it, settling it across people who
            do not share a payment app, and asking for it without straining the relationship. Subjects had
            reliable ways to divide a check and no reliable way to remember it three days later.
          </p>
          <p>
            The patterns below are ordered by how consistently they appeared, each with the number of finance
            interviews it surfaced in and the verbatim quotes that support it.
          </p>
        </Prose>

        <div className="space-y-4">
          {AGGREGATE_FINDINGS.map((f, i) => (
            <Card key={f.title}>
              <CardBody>
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h4 className="text-sm font-semibold text-ink-50">
                    <span className="mr-1.5 text-neon-400">{i + 1}.</span>
                    {f.title}
                  </h4>
                  <Badge tone="muted">{f.seenIn} of {RESEARCH.finance}</Badge>
                </div>
                <Prose className="mb-3">
                  <p>{f.body}</p>
                </Prose>
                {f.quotes.map((q, qi) => (
                  <Quote key={qi} cite="Interview subject, verbatim">
                    {q}
                  </Quote>
                ))}
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      {/* ---- Required: top pick, deep dive ---- */}
      <DocSection number="2." title="Top pick, deep dive">
        <Card variant="accent">
          <CardBody>
            <h4 className="mb-2 text-base font-semibold text-neon-300">{TOP_PICK.headline}</h4>
            <Prose>
              <p>{TOP_PICK.statement}</p>
            </Prose>
          </CardBody>
        </Card>

        <h4 className="label mb-3 mt-6">What made it rise to the top</h4>
        <div className="grid gap-4 sm:grid-cols-2">
          {TOP_PICK.whyItRose.map((r) => (
            <Card key={r.title}>
              <CardBody>
                <h5 className="mb-1.5 text-sm font-semibold text-ink-50">{r.title}</h5>
                <p className="text-sm leading-6 text-ink-300">{r.body}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <h4 className="label mb-3 mt-6">Evidence backing it</h4>
        <Card>
          <CardBody>
            <MarkerList items={TOP_PICK.evidence} />
          </CardBody>
        </Card>
      </DocSection>

      {/* ---- Required: what didn't work / pivots ---- */}
      <DocSection number="3." title="What didn't work / what we pivoted from">
        <Prose className="mb-5">
          <p>
            Four assumptions we carried into Phase 2 did not survive contact with the interviews, and one of two
            candidate ideas was dropped. Each entry records what we abandoned, why it did not hold, what changed
            as a result, and which documents the change affects downstream.
          </p>
        </Prose>

        <div className="space-y-4">
          {PIVOTS.map((p) => (
            <Card key={p.abandoned} variant={p.isTodo ? 'todo' : 'default'}>
              <CardBody>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h4 className="text-sm font-semibold text-ink-50">{p.abandoned}</h4>
                  <Badge tone={p.isTodo ? 'todo' : 'danger'}>{p.isTodo ? '[TODO]' : 'Pivoted'}</Badge>
                </div>

                <PivotRow label="Why it didn't hold" value={p.why} />
                <PivotRow label="What changed as a result" value={p.changed} />

                <div className="mt-3">
                  <p className="label mb-1">Downstream impact</p>
                  <Badge tone="muted">{p.downstream}</Badge>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>
    </article>
  )
}

function PivotRow({ label, value }) {
  const isTodo = value.startsWith('[TODO]')
  return (
    <div className="mb-3">
      <p className="label mb-1">{label}</p>
      <p className={`text-sm leading-6 ${isTodo ? 'todo-tag !font-normal' : 'text-ink-200'}`}>{value}</p>
    </div>
  )
}
