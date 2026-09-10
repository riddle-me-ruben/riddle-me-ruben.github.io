import { Link } from 'react-router-dom'
import {
  Card,
  CardBody,
  Badge,
  SectionHeading,
  Prose,
  PdfLink,
  DocSection,
  Todo,
  Table,
  MarkerList,
} from '../../components/ui.jsx'
import { TEAM } from '../../data/team.js'

const AI_PROHIBITED = [
  'The individual reflection and the individual estimation memo.',
  'Any exam response.',
  'The go/no-go reasoning and justification in any sprint deliverable.',
]

export default function Contributions() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">
          <Link to="/sprint-1">Sprint 1</Link> / Contributions
        </p>
        <SectionHeading
          eyebrow="Sprint 1 · Public document"
          title="Contribution Statements & AI Disclosure"
          description="Each member states what they owned and what they reviewed this sprint. Every contribution statement must also carry the required AI use disclosure."
        />
        <PdfLink href="/docs/sprint1-contributions.pdf" available={false} />
      </header>

      <Prose>
        <p>
          A contribution statement is each member saying, in their own words, what they personally produced and
          what they personally reviewed. If a member cannot explain any page of this portal during the final
          Q&amp;A, they are treated as if they did not produce it — regardless of whose name is on the statement.
        </p>
      </Prose>

      <DocSection number="1." title="Contribution statements">
        <Table columns={['Member', 'Owned this sprint', 'Reviewed', 'Statement']}>
          {TEAM.map((m) => (
            <tr key={m.id}>
              <td className="font-medium text-ink-50">{m.name}</td>
              <td className="text-ink-300">{m.owns}</td>
              <td>
                <span className="todo-tag">[TODO]</span>
              </td>
              <td>
                <Badge tone="todo">[TODO]</Badge>
              </td>
            </tr>
          ))}
        </Table>

        <div className="mt-4">
          <Todo title="Each member writes their own statement">
            One short paragraph per member: what you produced this sprint, what you reviewed that someone else
            produced, and anything you owned that did not get finished. Written by the member, not by someone
            else on their behalf.
          </Todo>
        </div>
      </DocSection>

      <DocSection number="2." title="AI use disclosure">
        <Prose className="mb-4">
          <p>
            Every contribution statement must include an AI use disclosure naming which tool was used, at which
            stage of the PM AI Protocol, and what the team changed or rejected from the AI output.
          </p>
        </Prose>

        <Todo title="Disclosure not yet written">
          <p className="mb-2">Record for this sprint, at minimum:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Which AI tools were used, and by whom.</li>
            <li>Which stage of the PM AI Protocol each use falls under.</li>
            <li>
              What the team changed or rejected from the output. This is the part reviewers actually read; &ldquo;we
              used AI and reviewed it&rdquo; is not a disclosure.
            </li>
            <li>Confirmation that AI was not used for any prohibited item.</li>
          </ul>
        </Todo>

        <Card variant="danger" className="mt-4">
          <CardBody>
            <h4 className="mb-3 text-sm font-semibold text-danger">AI is not permitted for these</h4>
            <MarkerList items={AI_PROHIBITED} tone="danger" />
          </CardBody>
        </Card>
      </DocSection>
    </article>
  )
}
