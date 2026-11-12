import { DocSection, SectionHeading } from '../../components/ui.jsx'
import { WIREFRAMES } from '../../data/sprint5.js'

const FIGMA_PROTOTYPE_URL =
  'https://www.figma.com/proto/jCRfqIgfwUSlOL9U278gy0/SPM-ShareTab-Prototype?node-id=38-14&starting-point-node-id=38%3A14&page-id=0%3A1'

const FIGMA_EMBED_URL =
  'https://embed.figma.com/proto/jCRfqIgfwUSlOL9U278gy0/SPM-ShareTab-Prototype?node-id=38-14&starting-point-node-id=38%3A14&page-id=0%3A1&embed-host=sharetab&scaling=scale-down&content-scaling=fixed&hotspot-hints=true'

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

      <DocSection title="Interactive prototype">
        <div className="mx-auto w-full max-w-[390px]">
          <div className="aspect-[390/844] overflow-hidden rounded-[2rem] border border-ink-700 bg-ink-850 shadow-card">
            <iframe
              src={FIGMA_EMBED_URL}
              title="Interactive ShareTab Figma prototype"
              loading="lazy"
              allowFullScreen
              className="h-full w-full border-0 bg-white"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="mb-3 text-sm leading-6 text-ink-300">
              If the embedded prototype does not load, open it directly in Figma.
            </p>
            <a
              href={FIGMA_PROTOTYPE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Open in Figma
            </a>
          </div>
        </div>
      </DocSection>
    </article>
  )
}
