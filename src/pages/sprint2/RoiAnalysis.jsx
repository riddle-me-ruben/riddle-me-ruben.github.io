import { Badge, Card, CardBody, DocSection, MarkerList, Prose, SectionHeading, Table } from '../../components/ui.jsx'

const SUMMARY = [
  { label: 'Base build', value: '$28,120', note: '$26,520 labor and $1,600 non-labor' },
  { label: 'Cost baseline', value: '$33,844', note: 'Base build plus contingency reserve' },
  { label: 'One-sprint budget', value: '$35,536', note: 'Cost baseline plus management reserve' },
  { label: 'Annual operations', value: '$10,260', note: 'Support, hosting, monitoring, and backups' },
]

const ASSUMPTIONS = [
  [
    'Scope',
    'Split Shared Expenses only: accounts, friends, groups, reminders, spending analytics, and payment-service links. AI insights and profile statistics remain deferred.',
    'Amichai Fernandez',
  ],
  [
    'Personnel',
    'Five team members, 130 productive hours per person each month, and a loaded rate of $60 per hour.',
    'Sebastian Ochoa',
  ],
  [
    'Infrastructure and payments',
    'Pilot supports up to 1,000 users. Payments remain in Cash App, PayPal, Venmo, and Zelle. ShareTab never holds money.',
    'Ruben Martinez',
  ],
  [
    'Maintenance',
    'Post-launch support requires 0.1 FTE, or approximately 13 hours each month.',
    'Sebastian Lucero-Chavez',
  ],
  [
    'Schedule and rollout',
    'Two-month build, three-year operating horizon, and no paid user training.',
    'Brenden Ucol',
  ],
]

const STAFFING = [
  ['Market Research Lead', '88.4', '0.68', '$5,304'],
  ['Scrum Master', '88.4', '0.68', '$5,304'],
  ['Repository and Configuration Manager', '88.4', '0.68', '$5,304'],
  ['Full-Stack Developer', '88.4', '0.68', '$5,304'],
  ['Documentation Lead', '88.4', '0.68', '$5,304'],
]

const NON_LABOR = [
  ['Development and test environments', '$50 per month for 2 months', '$100'],
  ['Development tools and licenses', '$100 per team per month for 2 months', '$200'],
  ['Payment redirect links and reminder emails', '$25 per month for 2 months', '$50'],
  ['Security and privacy review', 'One-time allowance', '$1,000'],
  ['Pilot usability testing', '10 participants at $25 each', '$250'],
]

const OPERATING = [
  ['Support and maintenance', '0.1 FTE for 12 months', '$9,360'],
  ['Production hosting and database', '$50 per month', '$600'],
  ['Monitoring, backups, and reminder service', '$25 per month', '$300'],
]

const RISKS = [
  ['Testing takes longer than planned', '40%', '146 hours, $8,760', '$3,504', 'Sebastian Lucero-Chavez'],
  ['Deferred or new features enter the slice', '50%', '50 hours, $3,000', '$1,500', 'Amichai Fernandez'],
  ['A payment service changes its redirect links', '30%', '40 hours, $2,400', '$720', 'Ruben Martinez'],
]

export default function RoiAnalysis() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 2 / ROI Analysis</p>
        <SectionHeading
          eyebrow="Sprint 2"
          title="ROI Analysis"
          description="The cost foundation for evaluating ShareTab's return, based on the Split Shared Expenses budget dated October 1, 2026."
        />
      </header>

      <DocSection title="Budget overview">
        <Prose className="mb-4">
          <p>
            This budget uses the expected estimate of <strong>439 hours</strong> from the Estimation Appendix.
            Planning rounds that effort to 442 hours, or 3.4 full-time-equivalent months, and distributes it
            evenly across five roles during a two-month build.
          </p>
        </Prose>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SUMMARY.map((item) => (
            <Card key={item.label} variant="accent">
              <CardBody>
                <p className="label mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-neon-300">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-ink-400">{item.note}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      <DocSection title="Budget assumptions and owners">
        <Table columns={['Cost driver', 'Planning assumption', 'Owner']}>
          {ASSUMPTIONS.map(([driver, assumption, owner]) => (
            <tr key={driver}>
              <td className="font-medium text-ink-50">{driver}</td>
              <td className="text-ink-300">{assumption}</td>
              <td className="text-ink-300">{owner}</td>
            </tr>
          ))}
        </Table>
      </DocSection>

      <DocSection title="Effort and staffing">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card variant="accent">
            <CardBody>
              <p className="label mb-1">Planning effort</p>
              <p className="text-2xl font-bold text-neon-300">3.4 FTE-months</p>
              <p className="mt-2 text-sm leading-6 text-ink-300">
                One FTE-month equals 130 productive hours. The plan supplies 1.7 FTE in each of two months.
              </p>
            </CardBody>
          </Card>
          <Card className="lg:col-span-2">
            <CardBody>
              <MarkerList
                items={[
                  'Expected estimate: 439 hours, based on the PERT calculation from the Estimation Appendix.',
                  'Planning value: 442 hours after rounding to 3.4 FTE-months.',
                  'Each role receives 88.4 hours, or 0.68 FTE-months, across the build.',
                  'Each role contributes approximately 0.34 FTE in Month 1 and 0.34 FTE in Month 2.',
                ]}
              />
            </CardBody>
          </Card>
        </div>

        <div className="mt-4">
          <Table columns={['Role', 'Hours', 'FTE-months', 'Labor cost']}>
            {STAFFING.map(([role, hours, fte, cost]) => (
              <tr key={role}>
                <td className="font-medium text-ink-50">{role}</td>
                <td>{hours}</td>
                <td>{fte}</td>
                <td className="text-neon-300">{cost}</td>
              </tr>
            ))}
            <tr>
              <td className="font-semibold text-ink-50">Total</td>
              <td className="font-semibold text-ink-50">442</td>
              <td className="font-semibold text-ink-50">3.40</td>
              <td className="font-bold text-neon-300">$26,520</td>
            </tr>
          </Table>
        </div>
      </DocSection>

      <DocSection title="Build and operating costs">
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-ink-50">Non-labor build costs</h3>
            <Table columns={['Item', 'Basis', 'Cost']}>
              {NON_LABOR.map(([item, basis, cost]) => (
                <tr key={item}>
                  <td className="font-medium text-ink-50">{item}</td>
                  <td className="text-ink-400">{basis}</td>
                  <td className="text-neon-300">{cost}</td>
                </tr>
              ))}
              <tr>
                <td className="font-semibold text-ink-50">Total</td>
                <td />
                <td className="font-bold text-neon-300">$1,600</td>
              </tr>
            </Table>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-ink-50">Annual operating costs</h3>
            <Table columns={['Item', 'Basis', 'Annual cost']}>
              {OPERATING.map(([item, basis, cost]) => (
                <tr key={item}>
                  <td className="font-medium text-ink-50">{item}</td>
                  <td className="text-ink-400">{basis}</td>
                  <td className="text-neon-300">{cost}</td>
                </tr>
              ))}
              <tr>
                <td className="font-semibold text-ink-50">Total</td>
                <td />
                <td className="font-bold text-neon-300">$10,260</td>
              </tr>
            </Table>
          </div>
        </div>

        <Card className="mt-4">
          <CardBody>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="label mb-1">Three-year operating cost</p>
                <p className="text-xl font-bold text-ink-50">$30,780</p>
              </div>
              <div>
                <p className="label mb-1">Three-year delivery budget</p>
                <p className="text-xl font-bold text-ink-50">$2,771,808</p>
                <p className="mt-1 text-xs text-ink-400">78 sprints at $35,536 per sprint</p>
              </div>
              <div>
                <p className="label mb-1">Three-year grand total</p>
                <p className="text-xl font-bold text-neon-300">$2,802,588</p>
                <p className="mt-1 text-xs text-ink-400">Delivery budget plus operating costs</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </DocSection>

      <DocSection title="Risk reserves">
        <Prose className="mb-4">
          <p>
            Expected monetary value multiplies each risk's probability by its estimated financial impact. These
            values are planning assumptions, not vendor quotes.
          </p>
        </Prose>
        <Table columns={['Risk', 'Chance', 'Impact', 'Expected value', 'Owner']}>
          {RISKS.map(([risk, chance, impact, value, owner]) => (
            <tr key={risk}>
              <td className="font-medium text-ink-50">{risk}</td>
              <td>{chance}</td>
              <td>{impact}</td>
              <td className="text-neon-300">{value}</td>
              <td className="text-ink-300">{owner}</td>
            </tr>
          ))}
        </Table>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card>
            <CardBody>
              <p className="label mb-1">Contingency reserve</p>
              <p className="text-xl font-bold text-ink-50">$5,724</p>
              <p className="mt-2 text-sm leading-6 text-ink-300">
                Covers the three identified risks. It is included in the cost baseline and controlled by the Scrum Master.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <p className="label mb-1">Management reserve</p>
              <p className="text-xl font-bold text-ink-50">$1,692</p>
              <p className="mt-2 text-sm leading-6 text-ink-300">
                Covers unidentified risks. It equals 5% of the cost baseline, sits outside the baseline, and requires sponsor release.
              </p>
            </CardBody>
          </Card>
        </div>
      </DocSection>

      <DocSection title="Budget request">
        <Table columns={['Budget line', 'Calculation', 'Amount']}>
          <tr><td>Labor</td><td>3.4 FTE-months at $7,800</td><td>$26,520</td></tr>
          <tr><td>Non-labor</td><td>Development, review, services, and pilot costs</td><td>$1,600</td></tr>
          <tr><td className="font-medium text-ink-50">Base build</td><td>Labor plus non-labor</td><td className="font-medium text-ink-50">$28,120</td></tr>
          <tr><td>Contingency reserve</td><td>Sum of identified risk values</td><td>$5,724</td></tr>
          <tr><td className="font-medium text-ink-50">Cost baseline</td><td>Base build plus contingency</td><td className="font-medium text-ink-50">$33,844</td></tr>
          <tr><td>Management reserve</td><td>5% of the cost baseline</td><td>$1,692</td></tr>
          <tr><td className="font-medium text-ink-50">Total budget request, 1 sprint</td><td>Cost baseline plus management reserve</td><td className="font-medium text-ink-50">$35,536</td></tr>
          <tr><td className="font-medium text-ink-50">Total budget request, 3 years</td><td>78 sprints at $35,536</td><td className="font-medium text-ink-50">$2,771,808</td></tr>
          <tr><td>Operating cost</td><td>$10,260 per year for 3 years</td><td>$30,780</td></tr>
          <tr><td className="font-semibold text-ink-50">Grand total, 3 years</td><td>Delivery budget plus operating costs</td><td className="font-bold text-neon-300">$2,802,588</td></tr>
        </Table>
        <p className="mt-4 text-sm leading-6 text-ink-400">
          The $28,120 base build remains within the Estimation Appendix range of $17,400 to $35,040.
        </p>
      </DocSection>

      <DocSection title="ROI status">
        <Card variant="accent">
          <CardBody>
            <div className="mb-3 flex items-center gap-2">
              <Badge tone="muted">Cost side complete</Badge>
            </div>
            <Prose>
              <p>
                The current budget establishes the investment required, but it does not forecast subscription
                revenue, savings, or another measurable financial benefit. A defensible ROI percentage and payback
                period cannot be calculated until the team estimates those benefits.
              </p>
              <p>
                For a three-year analysis, projected benefits must exceed the current <strong>$2,802,588 grand
                total</strong> to produce a positive return. ROI can then be calculated as benefits minus costs,
                divided by costs, multiplied by 100.
              </p>
            </Prose>
          </CardBody>
        </Card>
      </DocSection>
    </article>
  )
}
