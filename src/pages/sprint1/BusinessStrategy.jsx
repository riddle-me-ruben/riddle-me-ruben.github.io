import { Card, CardBody, SectionHeading, DocSection, MarkerList } from '../../components/ui.jsx'

const CHAIN = [
  {
    label: 'Strategy',
    body:
      'Create a neutral coordination layer for shared expenses. ShareTab keeps balances, reminders, and settlement records together while letting each person continue using their preferred payment service.',
  },
  {
    label: 'Objective',
    body:
      'Give friends, roommates, families, and groups one dependable record of who owes what, who has paid, and which balances still need attention.',
  },
  {
    label: 'Justification',
    body:
      'The interviews repeatedly showed that calculating a split is manageable, but tracking balances over time is not. Participants relied on memory, messages, transaction histories, handwritten notes, and payment intermediaries. ShareTab addresses that repeated coordination failure without becoming another payment service.',
  },
  {
    label: 'Scope',
    body:
      'The first product version covers accounts, friends, groups, shared expenses, reminders, and connections to third-party payment services. It does not hold money or provide banking, loans, or cryptocurrency services.',
  },
]

const SUCCESS_OUTCOMES = [
  'A group can create and maintain one shared record of expenses and balances.',
  'Members can see unpaid and settled balances without reconstructing them from messages or payment histories.',
  'A member can send a private payment reminder from the shared record.',
  'Users can record or complete settlement through a third-party payment service without ShareTab holding funds.',
]

export default function BusinessStrategy() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 1 / Business Strategy</p>
        <SectionHeading
          eyebrow="Sprint 1"
          title="Business Strategy"
          description="The strategy-to-project chain connects the research evidence to ShareTab's objective and product boundary."
        />
      </header>

      <DocSection title="Strategy-to-project chain">
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {CHAIN.map((step) => (
            <Card key={step.label} variant={step.label === 'Strategy' ? 'accent' : 'default'}>
              <CardBody>
                <h3 className="mb-2 text-base font-semibold text-ink-50">{step.label}</h3>
                <p className="text-sm leading-6 text-ink-300">{step.body}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      <DocSection title="Success outcomes">
        <Card>
          <CardBody>
            <MarkerList items={SUCCESS_OUTCOMES} />
          </CardBody>
        </Card>
      </DocSection>
    </article>
  )
}
