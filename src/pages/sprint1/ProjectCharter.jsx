import { Card, CardBody, SectionHeading, DocSection, MarkerList, Table } from '../../components/ui.jsx'

const IN_SCOPE = [
  'Create user accounts',
  'Add friends',
  'Create groups',
  'Split shared expenses',
  'Set payment reminders',
  'Connect third-party payment services',
]

const OUT_OF_SCOPE = ['Hold user money', 'Provide banking services', 'Offer loans', 'Support cryptocurrency']
const DEFERRED = ['Automatic payments', 'Spending analytics']

const ASSUMPTIONS = [
  'Users have access to a web-connected device and at least one external payment method.',
  'ShareTab records balances and settlement status but does not take custody of funds.',
  'Group members enter shared-expense information accurately.',
  'Third-party payment connections remain optional because users may settle with cash or another method.',
  'Automatic payments and spending analytics remain outside the first product version.',
]

const STAKEHOLDERS = [
  ['Friends, roommates, families, and social groups', 'Track shared expenses and settle balances with less coordination work', 'Primary users'],
  ['Person who pays first', 'Record the expense, monitor repayment, and send reminders', 'High interest'],
  ['Group members who owe a balance', 'Understand the amount owed and record settlement', 'High interest'],
  ['Project team', 'Research, design, build, document, and maintain ShareTab', 'High influence'],
  ['Course instructor and reviewers', 'Evaluate the project evidence and management record', 'High influence'],
  ['Third-party payment services', 'Provide an external path for users to move money', 'External dependency'],
]

export default function ProjectCharter() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 1 / Project Charter</p>
        <SectionHeading
          eyebrow="Sprint 1"
          title="Project Charter"
          description="ShareTab's product boundary, operating assumptions, stakeholders, and intended outcomes."
        />
      </header>

      <DocSection title="Scope boundary">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card variant="accent">
            <CardBody>
              <h3 className="mb-3 text-sm font-semibold text-neon-300">In scope</h3>
              <MarkerList items={IN_SCOPE} />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="mb-3 text-sm font-semibold text-ink-50">Out of scope</h3>
              <MarkerList items={OUT_OF_SCOPE} tone="danger" />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="mb-3 text-sm font-semibold text-ink-50">Deferred</h3>
              <MarkerList items={DEFERRED} />
            </CardBody>
          </Card>
        </div>
      </DocSection>

      <DocSection title="Assumptions">
        <Card>
          <CardBody>
            <MarkerList items={ASSUMPTIONS} />
          </CardBody>
        </Card>
      </DocSection>

      <DocSection title="Stakeholder register">
        <Table columns={['Stakeholder', 'Primary interest', 'Position']}>
          {STAKEHOLDERS.map(([stakeholder, interest, position]) => (
            <tr key={stakeholder}>
              <td className="font-medium text-ink-50">{stakeholder}</td>
              <td>{interest}</td>
              <td>{position}</td>
            </tr>
          ))}
        </Table>
      </DocSection>

      <DocSection title="Objective and outcomes">
        <Card>
          <CardBody>
            <p className="text-sm leading-7 text-ink-200">
              ShareTab will give groups one dependable record of shared expenses, unpaid balances, reminders,
              and settlement status while keeping all movement of money outside the platform.
            </p>
          </CardBody>
        </Card>
      </DocSection>

      <DocSection title="Future monetization concept">
        <Card>
          <CardBody>
            <p className="text-sm leading-7 text-ink-200">
              A future premium tier may explore automatic payments and instant fee-free transfers. These concepts
              are deferred and are not part of the first product version.
            </p>
          </CardBody>
        </Card>
      </DocSection>
    </article>
  )
}
