import { Card, CardBody, DocSection, SectionHeading, Table } from '../../components/ui.jsx'
import { INCIDENT_ROLES, SERVICE_LEVELS, SERVICE_LEVEL_TERMS, SEVERITY_LEVELS } from '../../data/sprint4.js'

export default function ServiceLevels() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 4 / Service Levels</p>
        <SectionHeading
          eyebrow="Sprint 4"
          title="Service Levels"
          description="The measurements, targets, and response rules that define reliable service for ShareTab."
        />
      </header>

      <DocSection title="ShareTab SLI, SLO, and SLA">
        <div className="grid gap-4 lg:grid-cols-3">
          {SERVICE_LEVEL_TERMS.map((item) => (
            <Card key={item.term}>
              <CardBody>
                <h3 className="mb-2 text-base font-semibold text-ink-50">
                  {item.term}: {item.name}
                </h3>
                <p className="text-sm leading-6 text-ink-300">{item.meaning}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      <DocSection title="Our service objectives">
        <Table columns={['Objective', 'SLI', 'SLO', 'Window', 'Who measures']}>
          {SERVICE_LEVELS.map((level) => (
            <tr key={level.key}>
              <td className="font-medium text-ink-50">{level.objective}</td>
              <td>{level.indicator}</td>
              <td className="font-medium text-neon-300">{level.target}</td>
              <td>{level.window}</td>
              <td>{level.measurement}</td>
            </tr>
          ))}
        </Table>
      </DocSection>

      <DocSection title="Escalation path">
        <Table columns={['Level', 'Example on ShareTab', 'Start fixing', 'Tell the instructor']}>
          {SEVERITY_LEVELS.map((severity) => (
            <tr key={severity.level}>
              <td className="font-medium text-ink-50">{severity.level}</td>
              <td>{severity.example}</td>
              <td className="text-neon-300">{severity.response}</td>
              <td>{severity.notice}</td>
            </tr>
          ))}
        </Table>
      </DocSection>

      <DocSection title="Incident roles for this sprint">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {INCIDENT_ROLES.map((role) => (
            <Card key={role.role} variant={role.role === 'Incident Commander' ? 'accent' : 'default'}>
              <CardBody>
                <p className="eyebrow">{role.role}</p>
                <h3 className="mb-2 text-base font-semibold text-ink-50">{role.member}</h3>
                <p className="text-sm leading-6 text-ink-300">{role.responsibility}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      <p className="border-t border-ink-800 pt-5 text-xs leading-5 text-ink-500">
        Framework adapted from the course service-level and error-budget materials, which apply the practices in
        Site Reliability Engineering, Chapters 3, 4, and 14.
      </p>
    </article>
  )
}
