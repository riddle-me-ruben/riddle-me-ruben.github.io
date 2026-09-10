import { SectionHeading, Todo } from '../components/ui.jsx'

export default function Sprint2() {
  return (
    <div className="stack-lg">
      <SectionHeading
        eyebrow="Sprint 2"
        title="Sprint 2"
        description="Not yet started. This page goes live when Sprint 2 concludes; Sprint 1 stays published alongside it."
      />

      <Todo title="Sprint 2 content">
        Contents will be added once the course block is finalised and the sprint concludes. Sprint pages are
        additive — nothing on Sprint 1 gets replaced.
      </Todo>
    </div>
  )
}
