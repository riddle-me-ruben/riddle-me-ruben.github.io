import { DocSection, SectionHeading } from '../../components/ui.jsx'
import { WIREFRAMES } from '../../data/sprint5.js'

export default function Wireframes() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 5 / Wireframes</p>
        <SectionHeading
          eyebrow="Sprint 5"
          title="ShareTab Wireframes"
          description="Digital wireframes refining the home screen, payment handoff, group balances, and spending analytics."
        />
      </header>

      <DocSection title="Wireframes">
        <div className="grid grid-cols-2 items-start gap-4 lg:grid-cols-4">
          {WIREFRAMES.map((wireframe) => (
            <figure key={wireframe.title} className="mx-auto w-full max-w-[240px]">
              <div className="overflow-hidden rounded-xl border border-ink-700 bg-white shadow-card">
                <img
                  src={wireframe.image}
                  alt={wireframe.alt}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-center">
                <span className="block text-sm font-semibold text-ink-100">{wireframe.title}</span>
                <span className="mt-1 block text-xs leading-5 text-ink-400">{wireframe.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </DocSection>
    </article>
  )
}
