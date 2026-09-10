import { Link } from 'react-router-dom'
import { Card, CardBody, SectionHeading, Prose, PdfLink, DocSection, Todo } from '../../components/ui.jsx'

export default function ProjectCharter() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">
          <Link to="/sprint-1">Sprint 1</Link> / Project Charter
        </p>
        <SectionHeading
          eyebrow="Sprint 1 · Public document"
          title="Project Charter"
          description="Scope boundary, assumptions and stakeholder register. This is the anchor document for the rest of the portal."
        />
        <PdfLink href="/docs/sprint1-project-charter.pdf" available={false} />
      </header>

      <Card variant="accent">
        <CardBody>
          <Prose>
            <p>
              <strong>Write this one carefully.</strong> A sloppy charter causes problems in every later sprint.
              Start from the research findings — the market research already settled the target user and two of
              the scope boundaries.
            </p>
          </Prose>
        </CardBody>
      </Card>

      <DocSection number="1." title="Scope boundary">
        <Todo title="Scope boundary not yet written" owner="Brenden N. Ucol">
          <p className="mb-2">
            State what is in scope and, more importantly, what is explicitly out. The research already settled two
            boundary questions:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Moving money is out of scope. ShareTab records how a debt was settled; it never touches funds.</li>
            <li>The target is one-off social spending, not recurring rent and utilities.</li>
          </ul>
          <p className="mt-2">Both need to appear here as formal scope statements with the research cited.</p>
        </Todo>
      </DocSection>

      <DocSection number="2." title="Assumptions">
        <Todo title="Assumptions register not yet written" owner="Brenden N. Ucol">
          List every assumption the plan depends on, each testable and each owned. Cover user behaviour, team
          availability across a semester, the technology stack, and what counts as done by end of term. Keep them
          here rather than scattered through the risk log — an assumption that fails becomes a risk, and the two
          need to be traceable to each other.
        </Todo>
      </DocSection>

      <DocSection number="3." title="Stakeholder register">
        <Todo title="Stakeholder register not yet written" owner="Brenden N. Ucol">
          A register is a table, not a chart. For every stakeholder record: name or role, their interest, their
          influence, what they need from the team, the engagement strategy, and the communication cadence with an
          owner. A power/interest matrix is a useful summary alongside it but does not replace the register.
        </Todo>
      </DocSection>

      <DocSection number="4." title="Objectives and measurable outcomes">
        <Todo title="Objectives not yet written" owner="Brenden N. Ucol">
          Baseline &rarr; target &rarr; assessment date for each outcome. These must agree with the success
          measures on the Business Strategy page; if the two disagree, the charter wins and Business Strategy gets
          corrected.
        </Todo>
      </DocSection>
    </article>
  )
}
