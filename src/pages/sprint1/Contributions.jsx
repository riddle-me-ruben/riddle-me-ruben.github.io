import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import {
  SectionHeading,
  Placeholder,
  Prose,
  PdfLink,
  DocMeta,
  DocSection,
  Card,
  CardBody,
  CardHeader,
  Table,
  Badge,
} from '../../components/ui.jsx'
import { TEAM } from '../../data/team.js'

export default function Contributions() {
  return (
    <article className="space-y-8">
      <div>
        <p className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/sprint-1" className="hover:text-accent-600 dark:hover:text-accent-400">
            Sprint 1
          </Link>{' '}
          / Contributions &amp; AI Disclosure
        </p>
        <SectionHeading
          eyebrow="Sprint 1 · Public document"
          title="Contribution Statements & AI Disclosure"
          description="Each member states what they owned and what they reviewed this sprint. Every contribution statement must also carry the required AI use disclosure."
        />
        <PdfLink href="/docs/sprint1-contributions.pdf" available={false} />
      </div>

      <DocMeta
        items={[
          { label: 'Document', value: 'Contributions' },
          { label: 'Sprint', value: 'Sprint 1' },
          { label: 'Owner', value: 'Each member individually' },
          { label: 'Status', value: 'Not started' },
        ]}
      />

      <Card className="border-amber-200 dark:border-amber-900">
        <CardHeader
          icon={AlertTriangle}
          title="This is not the same as a RACI matrix"
          subtitle="Individual accountability, per Guidelines §9"
        />
        <CardBody>
          <Prose>
            <p className="!mb-0 text-sm">
              A RACI shows who was assigned what. A contribution statement is each member saying, in their own
              words, what they personally produced and what they personally reviewed. If a member cannot explain
              any page of this portal during the final Q&amp;A, they are treated as if they did not produce it —
              regardless of whose name is on the statement.
            </p>
          </Prose>
        </CardBody>
      </Card>

      <DocSection number="1." title="Contribution statements">
        <Card>
          <CardBody className="p-0">
            <div className="p-4">
              <Table columns={['Member', 'Owned this sprint', 'Reviewed', 'Statement']}>
                {TEAM.map((m) => (
                  <tr key={m.id}>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${m.color}`}
                        >
                          {m.initials}
                        </span>
                        <span className="font-medium text-navy-900 dark:text-slate-100">{m.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-600 dark:text-slate-400">{m.owns}</td>
                    <td className="px-3 py-3 text-amber-700 dark:text-amber-300">PLACEHOLDER</td>
                    <td className="px-3 py-3">
                      <Badge tone="yellow">Not written</Badge>
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </CardBody>
        </Card>

        <div className="mt-4">
          <Placeholder title="Each member writes their own statement" due="Sprint 1 deadline">
            One short paragraph per member covering: what you produced this sprint, what you reviewed that
            someone else produced, and anything you owned that did not get finished. Written by the member, not
            by the team lead on their behalf.
          </Placeholder>
        </div>
      </DocSection>

      <DocSection number="2." title="AI use disclosure">
        <Prose>
          <p>
            Every contribution statement must include an AI use disclosure naming which tool was used, at which
            stage of the PM AI Protocol, and what the team changed or rejected from the AI output.
          </p>
        </Prose>

        <Placeholder title="Disclosure not yet written" due="Sprint 1 deadline">
          <p className="mb-2">Record for this sprint, at minimum:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Which AI tools were used, and by whom.</li>
            <li>Which stage of the PM AI Protocol each use falls under.</li>
            <li>
              What the team <strong>changed or rejected</strong> from the output. This is the part reviewers
              actually read; &ldquo;we used AI and reviewed it&rdquo; is not a disclosure.
            </li>
            <li>Confirmation that AI was not used for any prohibited item (see below).</li>
          </ul>
        </Placeholder>

        <Card className="mt-4 border-rose-200 dark:border-rose-900">
          <CardHeader title="AI is not permitted for these" subtitle="Course policy — no exceptions" />
          <CardBody>
            <ul className="space-y-2">
              {[
                'The individual reflection and the individual estimation memo (Sprint 2).',
                'Any exam response.',
                'The go/no-go reasoning and justification in any sprint deliverable.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  {t}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </DocSection>

      <DocSection number="3." title="Peer evaluation">
        <Card className="border-slate-300 dark:border-navy-700">
          <CardBody>
            <Prose>
              <p className="!mb-0 text-sm">
                Peer evaluations are private and submitted through Blackboard within 48 hours of the sprint due
                date. They are never posted here. This section exists only to record that the requirement is
                tracked — no evaluation content belongs on this page.
              </p>
            </Prose>
          </CardBody>
        </Card>
      </DocSection>
    </article>
  )
}
