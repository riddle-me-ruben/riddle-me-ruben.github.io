import { Link } from 'react-router-dom'
import { Card, CardBody, Badge, SectionHeading, DocSection, MarkerList, Table, Prose } from '../../components/ui.jsx'

// Source: "Estimate One Slice of Your Project" (Part 2 activity), Team 008.
// The go/no-go recommendation is deliberately not drafted here — course policy
// prohibits AI assistance for go/no-go reasoning in any sprint deliverable.

const SLICE = [
  ['Slice name', 'Split Shared Expenses'],
  ['Why we chose it', 'Most essential to the product. ShareTab would not make sense without it, and it carries the most hidden work of any capability in Release 1.'],
  ['Screens where users enter data', 'Landing page → create group → add users → assign the amount each person owes'],
  ['Reports and results users see', 'Spending analytics, who the user owes money to, how much they owe, and profile statistics'],
  ['Data the slice stores', 'The user who owes money, the user who is owed money, the amount to be paid, and user statistics such as success rate, reputation, and average time to pay back'],
  ['Other systems it connects to', 'Third-party payment apps: Cash App, PayPal, Venmo, Zelle'],
  ['Out of the slice', 'Holding user money, providing banking services, offering loans, supporting cryptocurrency'],
]

const STORIES = [
  ['Create groups', 'Must have', '3'],
  ['Create user accounts', 'Must have', '3'],
  ['Set payment reminders', 'Could have', '3'],
  ['Add friends', 'Must have', '4'],
  ['Spending analytics', 'Should have', '4'],
  ['Connect third-party payment services', 'Must have', '5'],
]

const MOSCOW_TONE = { 'Must have': 'neon', 'Should have': 'muted', 'Could have': 'muted' }

const HEADLINE = [
  { label: 'Range in hours', value: '290 – 584', sub: 'Lowest and highest across both methods' },
  { label: 'Expected hours', value: '439', sub: '(O + 4M + P) ÷ 6, where O = 290, M = 440, P = 584' },
  { label: 'Cost range', value: '$17.4k – $35.0k', sub: 'At a $60/hour loaded rate' },
  { label: 'Calendar time', value: '~2.2 weeks', sub: 'At 200 team hours per week' },
]

const ASSUMPTIONS = [
  'Velocity of 15, 20 or 30 story points per two-week sprint. No sprint history exists yet.',
  '80 hours per person per sprint.',
  '5 to 10 hours per function point.',
  '$60 per hour loaded rate, based on NACE’s reported average starting salary for the Class of 2025 Computer and Information Sciences graduates.',
  '30 productive hours per person per week.',
  'A team of 5 people.',
]

const SENSITIVITIES = [
  'Actual sprint velocity, once measured',
  'Measured productivity rather than an assumed rate',
  'Changes to the slice requirements',
  'Third-party payment integration complexity',
  'Team availability across the semester',
  'Additional integration work discovered during build',
]

export default function BusinessCase() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 2 / Business Case</p>
        <SectionHeading
          eyebrow="Sprint 2"
          title="Business Case"
          description="What the first meaningful slice of ShareTab would cost to build, how long it would take, and what that answer depends on."
        />
      </header>

      {/* ---------------- Headline ---------------- */}
      <DocSection title="The estimate">
        <Prose className="mb-4">
          <p>
            Estimating a whole project at once hides mistakes, so the team estimated a single slice:{' '}
            <strong>Split Shared Expenses</strong>. The slice was sized twice using two methods that start from
            different information, and the two results were reconciled into the dated range below.
          </p>
        </Prose>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HEADLINE.map((h) => (
            <Card key={h.label} variant="accent">
              <CardBody>
                <p className="label mb-1">{h.label}</p>
                <p className="text-2xl font-bold text-neon-300">{h.value}</p>
                <p className="mt-1 text-xs leading-5 text-ink-400">{h.sub}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <Card className="mt-4">
          <CardBody>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <span className="text-ink-400">
                Methods used: <span className="text-ink-100">Story Points to Cost and Function Points</span>
              </span>
              <span className="text-ink-400">
                Team size assumed: <span className="text-ink-100">5 people</span>
              </span>
              <span className="text-ink-400">
                Date of this estimate: <span className="text-ink-100">September 26, 2026</span>
              </span>
            </div>
            <p className="mt-3 border-t border-ink-700 pt-3 text-sm leading-6 text-ink-400">
              M was set to 440 because the two methods produced very similar middle estimates, 435 and 440. Full
              workings are in the <Link to="/sprint-2/estimation-appendix">Estimation Appendix</Link>.
            </p>
          </CardBody>
        </Card>
      </DocSection>

      {/* ---------------- The slice ---------------- */}
      <DocSection title="What was estimated">
        <Table columns={['Question', 'Our slice']}>
          {SLICE.map((r) => (
            <tr key={r[0]}>
              <td className="w-1/3 font-medium text-ink-50">{r[0]}</td>
              <td className="text-ink-300">{r[1]}</td>
            </tr>
          ))}
        </Table>

        <h3 className="mb-3 mt-6 text-sm font-semibold text-ink-50">Stories in the slice</h3>
        <Table columns={['User story', 'MoSCoW', 'Points']}>
          {STORIES.map((r) => (
            <tr key={r[0]}>
              <td className="font-medium text-ink-50">{r[0]}</td>
              <td><Badge tone={MOSCOW_TONE[r[1]]}>{r[1]}</Badge></td>
              <td className="text-neon-300">{r[2]}</td>
            </tr>
          ))}
          <tr>
            <td className="font-semibold text-ink-50">Total points</td>
            <td className="text-ink-500">—</td>
            <td className="font-bold text-neon-300">22</td>
          </tr>
        </Table>
      </DocSection>

      {/* ---------------- Assumptions & sensitivity ---------------- */}
      <DocSection title="What the estimate depends on">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="mb-3 text-sm font-semibold text-ink-50">Key assumptions</h3>
              <MarkerList items={ASSUMPTIONS} />
              <p className="mt-4 border-t border-ink-700 pt-4 text-sm leading-6 text-ink-400">
                Every figure above is a number the team chose rather than measured. None of them is a
                measurement yet.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="mb-3 text-sm font-semibold text-ink-50">What would change this estimate</h3>
              <MarkerList items={SENSITIVITIES} />
            </CardBody>
          </Card>
        </div>
      </DocSection>

    </article>
  )
}
