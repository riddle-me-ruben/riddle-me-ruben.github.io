import { DocSection, SectionHeading } from '../../components/ui.jsx'

const FIGMA_PROTOTYPE_URL =
  'https://www.figma.com/proto/jCRfqIgfwUSlOL9U278gy0/SPM-ShareTab-Prototype?node-id=38-14&starting-point-node-id=38%3A14&page-id=0%3A1'

const FIGMA_EMBED_URL =
  'https://embed.figma.com/proto/jCRfqIgfwUSlOL9U278gy0/SPM-ShareTab-Prototype?node-id=38-14&starting-point-node-id=38%3A14&page-id=0%3A1&embed-host=sharetab&scaling=scale-down&content-scaling=fixed&hotspot-hints=true'

export default function Prototype() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 5 / Prototype</p>
        <SectionHeading
          eyebrow="Sprint 5"
          title="Interactive Prototype"
          description="A clickable ShareTab prototype demonstrating the proposed mobile experience and navigation flow."
        />
      </header>

      <DocSection title="ShareTab prototype">
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
