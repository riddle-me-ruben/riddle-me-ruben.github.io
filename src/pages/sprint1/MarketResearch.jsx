import { Link } from 'react-router-dom'
import { Users, Search, Trophy, GitBranch, ClipboardCheck, AlertTriangle } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardBody,
  Badge,
  SectionHeading,
  StatTile,
  Table,
  Prose,
  DocSection,
  Quote,
  DocMeta,
  PdfLink,
} from '../../components/ui.jsx'
import {
  RESEARCH_SUMMARY,
  INTERVIEWER_COVERAGE,
  AGGREGATE_FINDINGS,
  TOP_PICK,
  PIVOTS,
  METHOD_NOTES,
  METHOD_LIMITATIONS,
} from '../../data/research.js'

const strengthTone = { Strong: 'green', Moderate: 'yellow', Weak: 'slate' }

export default function MarketResearch() {
  return (
    <article className="space-y-10">
      <div>
        <p className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/sprint-1" className="hover:text-accent-600 dark:hover:text-accent-400">
            Sprint 1
          </Link>{' '}
          / Market Research
        </p>
        <SectionHeading
          eyebrow="Sprint 1 · Public document"
          title="Market Research"
          description="Phase 2 customer discovery for ShareTab. Twenty-five interviews were conducted across two candidate ideas; the thirteen conducted on the finance idea are synthesized here and drove the final project selection."
        />
        <div className="flex flex-wrap items-center gap-3">
          <PdfLink href="/docs/sprint1-market-research.pdf" available={false} />
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Guidelines §5 — this document must also exist as a downloadable PDF before submission.
          </span>
        </div>
      </div>

      <DocMeta
        items={[
          { label: 'Document', value: 'Market Research' },
          { label: 'Sprint', value: 'Sprint 1' },
          { label: 'Research window', value: `${RESEARCH_SUMMARY.windowStart} – ${RESEARCH_SUMMARY.windowEnd}` },
          { label: 'Status', value: 'Complete' },
        ]}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Total interviews" value={RESEARCH_SUMMARY.totalInterviews} sub="Across both candidate ideas" icon={Users} />
        <StatTile
          label="On the finance idea"
          value={RESEARCH_SUMMARY.financeInterviews}
          sub="Basis for this document"
          icon={Search}
          tone="accent"
        />
        <StatTile
          label="Revealed a repeatable problem"
          value={`${RESEARCH_SUMMARY.repeatableProblemYes} / ${RESEARCH_SUMMARY.financeInterviews}`}
          sub="Per post-interview synthesis"
          icon={ClipboardCheck}
          tone="green"
        />
        <StatTile label="Interviewers" value={RESEARCH_SUMMARY.interviewers} sub="All five team members" icon={Users} />
      </div>

      {/* ---------------------------------------------------------------- */}
      <DocSection id="aggregate" number="1." title="Aggregate findings">
        <Prose>
          <p>
            Between {RESEARCH_SUMMARY.windowStart} and {RESEARCH_SUMMARY.windowEnd} the team ran{' '}
            {RESEARCH_SUMMARY.totalInterviews} guided interviews across two candidate project ideas. Thirteen
            covered the finance idea — a tracker for shared expenses — and twelve covered an education idea for
            course planning. Every interview followed the same Mom Test structure: subjects were asked to walk
            through specific past experiences rather than to react to a proposed product.
          </p>
          <p>
            Read together, the finance interviews tell a more specific story than the one we started with.{' '}
            <strong>
              The arithmetic of splitting a bill is not what breaks. What breaks is everything that happens
              after the split
            </strong>{' '}
            — recording the debt, remembering it, settling it across people who do not share a payment app, and
            asking for it without straining the relationship. Subjects had reliable ways to divide a check and
            no reliable way to remember it three days later.
          </p>
          <p>
            The eight patterns below are ordered by how consistently they appeared. Each is stated with the
            number of finance interviews it surfaced in and the verbatim quotes that support it.
          </p>
        </Prose>

        <div className="mt-5 space-y-4">
          {AGGREGATE_FINDINGS.map((f, i) => (
            <Card key={f.id}>
              <CardHeader
                title={`${i + 1}. ${f.title}`}
                subtitle={`Observed in ${f.seenIn} of ${RESEARCH_SUMMARY.financeInterviews} finance interviews`}
                action={<Badge tone={strengthTone[f.strength]}>{f.strength}</Badge>}
              />
              <CardBody>
                <Prose>
                  <p className="!mb-3">{f.body}</p>
                </Prose>
                {f.evidence.map((q, qi) => (
                  <Quote key={qi} cite="Interview subject, verbatim">
                    {q}
                  </Quote>
                ))}
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      {/* ---------------------------------------------------------------- */}
      <DocSection id="top-pick" number="2." title="Top pick, deep dive">
        <Card className="border-accent-300 dark:border-accent-700">
          <CardHeader icon={Trophy} title={TOP_PICK.headline} subtitle="The strongest finding from Phase 2" />
          <CardBody>
            <Prose>
              <p className="!mb-0">{TOP_PICK.statement}</p>
            </Prose>
          </CardBody>
        </Card>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TOP_PICK.quantified.map((q) => (
            <StatTile key={q.label} label={q.label} value={q.value} sub={q.sub} tone="accent" />
          ))}
        </div>

        <h4 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          What made it rise to the top
        </h4>
        <div className="grid gap-4 sm:grid-cols-2">
          {TOP_PICK.whyItRose.map((r) => (
            <Card key={r.title}>
              <CardBody>
                <h5 className="mb-1.5 text-sm font-semibold text-navy-900 dark:text-slate-100">{r.title}</h5>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{r.body}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <h4 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          What this implies for the product
        </h4>
        <Card>
          <CardBody>
            <ul className="space-y-2.5">
              {TOP_PICK.designImplications.map((d, i) => (
                <li key={i} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {d}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </DocSection>

      {/* ---------------------------------------------------------------- */}
      <DocSection id="pivots" number="3." title="What didn't work / what we pivoted from">
        <Prose>
          <p>
            Four assumptions we carried into Phase 2 did not survive contact with the interviews, and one of two
            candidate ideas was dropped. Each entry below records what we believed, what the research showed,
            what we changed, and which downstream documents the change affects.
          </p>
        </Prose>

        <div className="mt-4 space-y-4">
          {PIVOTS.map((p) => (
            <Card
              key={p.id}
              className={p.isPlaceholder ? 'border-dashed border-amber-300 dark:border-amber-800' : ''}
            >
              <CardHeader
                icon={p.isPlaceholder ? AlertTriangle : GitBranch}
                title={p.abandoned}
                subtitle="Abandoned assumption"
                action={p.isPlaceholder ? <Badge tone="yellow">Needs team input</Badge> : <Badge tone="red">Pivoted</Badge>}
              />
              <CardBody className="space-y-3">
                <PivotRow label="What we believed" value={p.was} />
                <PivotRow label="Why it didn't hold" value={p.why} flag={p.isPlaceholder} />
                <PivotRow label="What changed as a result" value={p.changed} flag={p.isPlaceholder} />
                <div>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Downstream impact
                  </p>
                  <Badge tone="slate">{p.downstream}</Badge>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      {/* ---------------------------------------------------------------- */}
      <DocSection id="method" number="4." title="Method, coverage and limitations">
        <Card>
          <CardHeader title="Interview coverage by team member" subtitle="All five members conducted five interviews each" />
          <CardBody className="p-0">
            <div className="p-4">
              <Table columns={['Interviewer', 'Finance (Idea 1)', 'Education (Idea 2)', 'Locations']}>
                {INTERVIEWER_COVERAGE.map((r) => (
                  <tr key={r.interviewer}>
                    <td className="px-3 py-2.5 font-medium text-navy-900 dark:text-slate-100">{r.interviewer}</td>
                    <td className="px-3 py-2.5">
                      {r.finance > 0 ? <Badge tone="accent">{r.finance}</Badge> : <span className="text-slate-400">—</span>}
                    </td>
                    <td className="px-3 py-2.5">
                      {r.education > 0 ? <Badge tone="slate">{r.education}</Badge> : <span className="text-slate-400">—</span>}
                    </td>
                    <td className="px-3 py-2.5 text-slate-600 dark:text-slate-400">{r.locations}</td>
                  </tr>
                ))}
              </Table>
            </div>
          </CardBody>
        </Card>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader title="How the research was run" />
            <CardBody>
              <ul className="space-y-2.5">
                {METHOD_NOTES.map((n, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {n}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
          <Card className="border-amber-200 dark:border-amber-900">
            <CardHeader icon={AlertTriangle} title="Limitations of this research" subtitle="Stated so later sprints can weigh it correctly" />
            <CardBody>
              <ul className="space-y-2.5">
                {METHOD_LIMITATIONS.map((n, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {n}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>

        <Prose className="mt-4">
          <p className="!mb-0 text-sm">
            Subject anonymity: interview sheets record a role descriptor only. No subject names, contact details
            or referral names are reproduced on this site.
          </p>
        </Prose>
      </DocSection>
    </article>
  )
}

function PivotRow({ label, value, flag }) {
  return (
    <div>
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p
        className={`text-sm leading-6 ${
          flag && value.startsWith('PLACEHOLDER')
            ? 'text-amber-700 dark:text-amber-300'
            : 'text-slate-700 dark:text-slate-300'
        }`}
      >
        {value}
      </p>
    </div>
  )
}
