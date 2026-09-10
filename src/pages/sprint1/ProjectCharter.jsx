import { Link } from 'react-router-dom'
import { SectionHeading, Placeholder, Prose, PdfLink, DocMeta, DocSection, Card, CardBody } from '../../components/ui.jsx'

export default function ProjectCharter() {
  return (
    <article className="space-y-8">
      <div>
        <p className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/sprint-1" className="hover:text-accent-600 dark:hover:text-accent-400">
            Sprint 1
          </Link>{' '}
          / Project Charter
        </p>
        <SectionHeading
          eyebrow="Sprint 1 · Public document"
          title="Project Charter"
          description="Scope boundary, assumptions and stakeholder register. This is the anchor document for the rest of the portal."
        />
        <PdfLink href="/docs/sprint1-project-charter.pdf" available={false} />
      </div>

      <DocMeta
        items={[
          { label: 'Document', value: 'Project Charter' },
          { label: 'Sprint', value: 'Sprint 1' },
          { label: 'Owner', value: 'Brenden N. Ucol' },
          { label: 'Status', value: 'Not started' },
        ]}
      />

      <Card className="border-accent-300 dark:border-accent-700">
        <CardBody>
          <Prose>
            <p className="!mb-0 text-sm">
              <strong>Write this one carefully.</strong> A sloppy charter causes problems in every later sprint,
              and the guidelines say so explicitly. Note that the prior charter drafted for the earlier project
              concept no longer applies — the selected project is now ShareTab, and the market research changed
              the target user and the scope boundary. Start from the research findings.
            </p>
          </Prose>
        </CardBody>
      </Card>

      <DocSection number="1." title="Scope boundary">
        <Placeholder title="Scope boundary not yet written" owner="Brenden N. Ucol" due="Sprint 1 deadline">
          <p className="mb-2">
            State what is in scope and — more importantly — what is explicitly out. The research already settled
            two boundary questions for you:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Moving money is out of scope. ShareTab records how a debt was settled; it never touches funds.</li>
            <li>The target is one-off social spending, not recurring rent and utilities.</li>
          </ul>
          <p className="mt-2">Both need to appear here as formal scope statements with the research cited.</p>
        </Placeholder>
      </DocSection>

      <DocSection number="2." title="Assumptions">
        <Placeholder title="Assumptions register not yet written" owner="Brenden N. Ucol">
          <p className="mb-2">
            List every assumption the plan depends on, each one testable and each one owned. Include at minimum:
            assumptions about user behavior, about team availability across a semester, about the technology
            stack, and about what counts as done by the end of the term.
          </p>
          <p>
            Keep assumptions here rather than scattered through the risk log — an assumption that fails becomes a
            risk, and the two need to be traceable to each other.
          </p>
        </Placeholder>
      </DocSection>

      <DocSection number="3." title="Stakeholder register">
        <Placeholder title="Stakeholder register not yet written" owner="Brenden N. Ucol">
          <p className="mb-2">
            A register is a table, not a chart. For every stakeholder record: name or role, their interest in the
            project, their influence, what they need from the team, the engagement strategy, and the
            communication cadence with an owner.
          </p>
          <p>
            A power/interest matrix is a useful summary to put alongside it, but it does not replace the
            register.
          </p>
        </Placeholder>
      </DocSection>

      <DocSection number="4." title="Objectives and measurable outcomes">
        <Placeholder title="Objectives not yet written" owner="Brenden N. Ucol">
          Baseline &rarr; target &rarr; assessment date for each outcome. These must agree with the success
          measures on the Business Strategy page; if the two pages disagree, the charter wins and Business
          Strategy gets corrected.
        </Placeholder>
      </DocSection>
    </article>
  )
}
