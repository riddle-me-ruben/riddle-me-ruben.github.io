import { Link } from 'react-router-dom'
import { SectionHeading, Placeholder, Prose, PdfLink, DocMeta, DocSection } from '../../components/ui.jsx'

export default function BusinessStrategy() {
  return (
    <article className="space-y-8">
      <div>
        <p className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/sprint-1" className="hover:text-accent-600 dark:hover:text-accent-400">
            Sprint 1
          </Link>{' '}
          / Business Strategy
        </p>
        <SectionHeading
          eyebrow="Sprint 1 · Public document"
          title="Business Strategy"
          description="The strategy-to-project chain: why this project earns the right to exist, and what business objective it serves."
        />
        <PdfLink href="/docs/sprint1-business-strategy.pdf" available={false} />
      </div>

      <DocMeta
        items={[
          { label: 'Document', value: 'Business Strategy' },
          { label: 'Sprint', value: 'Sprint 1' },
          { label: 'Owner', value: 'Amichai A. Fernandez' },
          { label: 'Status', value: 'Not started' },
        ]}
      />

      <Prose>
        <p>
          This document must connect an organizational objective to this specific project, so a reader can
          follow the chain from &ldquo;why does anything need to be built&rdquo; down to &ldquo;why this
          build.&rdquo; The market research is the evidence base for it — write this page against those
          findings, not independently of them.
        </p>
      </Prose>

      <DocSection number="1." title="Strategy-to-project chain">
        <Placeholder title="The chain has not been written yet" owner="Amichai A. Fernandez" due="Sprint 1 deadline">
          <p className="mb-2">Write each link in order, so the chain is visible on the page:</p>
          <ol className="ml-4 list-decimal space-y-1">
            <li>The organizational or market objective this serves.</li>
            <li>The gap or unmet need standing between today and that objective.</li>
            <li>Why ShareTab specifically closes that gap, referencing the research findings.</li>
            <li>What is true at the end of the semester if this succeeds — stated measurably.</li>
            <li>The alternatives considered, and why they were rejected in favor of building this.</li>
          </ol>
        </Placeholder>
      </DocSection>

      <DocSection number="2." title="Business objective served">
        <Placeholder title="Objective not yet defined" owner="Amichai A. Fernandez">
          State the single business objective this project serves, with the measure that tells you it was met.
          Keep it to one objective — a project serving four objectives usually serves none of them.
        </Placeholder>
      </DocSection>

      <DocSection number="3." title="Success measures">
        <Placeholder title="Measures not yet defined" owner="Amichai A. Fernandez">
          Baseline &rarr; target for each measure, with the date it is assessed. These should be traceable to
          the market research rather than invented — the interviews give you real behavior to measure against.
        </Placeholder>
      </DocSection>
    </article>
  )
}
