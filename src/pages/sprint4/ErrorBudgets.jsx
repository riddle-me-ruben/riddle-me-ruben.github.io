import { Card, CardBody, DocSection, SectionHeading, Table } from '../../components/ui.jsx'
import { SERVICE_LEVELS } from '../../data/sprint4.js'

export default function ErrorBudgets() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 4 / Error Budgets</p>
        <SectionHeading
          eyebrow="Sprint 4"
          title="Error Budgets"
          description="The amount of unreliability ShareTab can tolerate and the policy that applies when a budget is spent."
        />
      </header>

      <DocSection title="Error budgets">
        <Card variant="accent" className="mb-4">
          <CardBody>
            <p className="label mb-1">Formula</p>
            <p className="text-xl font-bold text-neon-300">Error budget = 100% minus the SLO</p>
            <p className="mt-2 text-sm leading-6 text-ink-300">
              The budget is the amount of unreliability the service may spend before feature work slows and
              reliability work takes priority.
            </p>
          </CardBody>
        </Card>

        <Table columns={['Objective', 'Target', 'Budget', 'What spends it']}>
          {SERVICE_LEVELS.map((level) => (
            <tr key={level.key}>
              <td className="font-medium text-ink-50">{level.objective}</td>
              <td>{level.target}</td>
              <td>
                <span className="font-medium text-neon-300">{level.budget}</span>
                <span className="mt-1 block text-xs leading-5 text-ink-400">{level.budgetMath}</span>
              </td>
              <td>{level.spendsIt}</td>
            </tr>
          ))}
        </Table>
      </DocSection>

      <DocSection title="Error budget policy">
        <Table columns={['Field', 'Availability objective', 'Correctness objective']}>
          <tr>
            <td className="font-medium text-ink-50">Objective</td>
            {SERVICE_LEVELS.map((level) => <td key={level.key}>{level.target} during {level.window.toLowerCase()}</td>)}
          </tr>
          <tr>
            <td className="font-medium text-ink-50">Budget</td>
            {SERVICE_LEVELS.map((level) => <td key={level.key}>{level.budget}</td>)}
          </tr>
          <tr>
            <td className="font-medium text-ink-50">Policy action</td>
            {SERVICE_LEVELS.map((level) => <td key={level.key}>{level.policy}</td>)}
          </tr>
          <tr>
            <td className="font-medium text-ink-50">Owner</td>
            {SERVICE_LEVELS.map((level) => <td key={level.key}>{level.owner}</td>)}
          </tr>
          <tr>
            <td className="font-medium text-ink-50">Who we tell and when</td>
            {SERVICE_LEVELS.map((level) => <td key={level.key}>{level.notice}</td>)}
          </tr>
        </Table>
      </DocSection>

      <p className="border-t border-ink-800 pt-5 text-xs leading-5 text-ink-500">
        Framework adapted from the course service-level and error-budget materials, which apply the practices in
        Site Reliability Engineering, Chapters 3, 4, and 14.
      </p>
    </article>
  )
}
