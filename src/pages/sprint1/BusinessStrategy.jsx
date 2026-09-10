import { Link } from 'react-router-dom'
import { SectionHeading, Prose, PdfLink, DocSection, Todo } from '../../components/ui.jsx'

export default function BusinessStrategy() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">
          <Link to="/sprint-1">Sprint 1</Link> / Business Strategy
        </p>
        <SectionHeading
          eyebrow="Sprint 1 · Public document"
          title="Business Strategy"
          description="The strategy-to-project chain: why this project earns the right to exist, and what business objective it serves."
        />
        <PdfLink href="/docs/sprint1-business-strategy.pdf" available={false} />
      </header>

      <Prose>
        <p>
          This document connects a business objective to this specific project, so a reader can follow the chain
          from why anything needs to be built down to why this build. Write it against the market research
          findings, not independently of them.
        </p>
      </Prose>

      <DocSection number="1." title="Strategy-to-project chain">
        <Todo title="The chain has not been written yet" owner="Sebastian A. Ochoa">
          <p className="mb-2">Write each link in order, so the chain is visible on the page:</p>
          <ol className="ml-5 list-decimal space-y-1">
            <li>The business objective this serves.</li>
            <li>The gap standing between today and that objective.</li>
            <li>Why ShareTab specifically closes that gap, citing the research findings.</li>
            <li>What is measurably true at the end of the semester if this succeeds.</li>
            <li>The alternatives considered, and why they were rejected.</li>
          </ol>
        </Todo>
      </DocSection>

      <DocSection number="2." title="Business objective served">
        <Todo title="Objective not yet defined" owner="Sebastian A. Ochoa">
          State the single business objective this project serves, with the measure that tells you it was met.
          Keep it to one — a project serving four objectives usually serves none of them.
        </Todo>
      </DocSection>

      <DocSection number="3." title="Success measures">
        <Todo title="Measures not yet defined" owner="Sebastian A. Ochoa">
          Baseline &rarr; target for each measure, with the date it is assessed. These should trace to the market
          research rather than be invented; the interviews give you real behaviour to measure against.
        </Todo>
      </DocSection>
    </article>
  )
}
