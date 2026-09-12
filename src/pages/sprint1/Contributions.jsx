import { SectionHeading, Table } from '../../components/ui.jsx'
import { TEAM } from '../../data/team.js'

export default function Contributions() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 1 / Contributions</p>
        <SectionHeading
          eyebrow="Sprint 1"
          title="Contribution Statements & AI Disclosure"
          description="Team roles and individual contribution records for Sprint 1."
        />
      </header>

      <Table columns={['Member', 'Role', 'Contribution statement', 'AI disclosure']}>
        {TEAM.map((member) => (
          <tr key={member.id}>
            <td className="font-medium text-ink-50">{member.name}</td>
            <td>{member.owns}</td>
            <td aria-label="Blank" />
            <td aria-label="Blank" />
          </tr>
        ))}
      </Table>
    </article>
  )
}
