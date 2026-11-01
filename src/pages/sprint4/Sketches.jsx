import { Card, CardBody, DocSection, MarkerList, SectionHeading } from '../../components/ui.jsx'
import { SKETCH_GROUPS } from '../../data/sprint4.js'

export default function Sketches() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 4 / Sketches</p>
        <SectionHeading
          eyebrow="Sprint 4"
          title="ShareTab Sketches"
          description="Early interface sketches showing the proposed expense flow, group balances, payment handoffs, and spending analytics."
        />
      </header>

      {SKETCH_GROUPS.map((group) => (
        <DocSection key={group.title} title={group.title}>
          <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <figure className="overflow-hidden rounded-xl border border-ink-700 bg-white">
              <img
                src={group.image}
                alt={group.alt}
                loading="lazy"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-ink-200 bg-white px-4 py-3 text-sm leading-6 text-ink-800">
                {group.description}
              </figcaption>
            </figure>

            <Card>
              <CardBody>
                <h3 className="mb-3 text-sm font-semibold text-ink-50">Ideas represented</h3>
                <MarkerList items={group.features} />
                <p className="mt-4 border-t border-ink-700 pt-4 text-xs leading-5 text-ink-400">
                  These are exploratory sketches. Layout, labels, and feature placement may change during implementation.
                </p>
              </CardBody>
            </Card>
          </div>
        </DocSection>
      ))}
    </article>
  )
}
