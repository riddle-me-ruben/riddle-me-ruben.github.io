import { Card, CardBody, SectionHeading } from '../../components/ui.jsx'

export default function Sprint2Placeholder({ title, description, warning }) {
  return (
    <article className="stack-lg">
      <header>
        <p className="breadcrumb">Sprint 2 / {title}</p>
        <SectionHeading eyebrow="Sprint 2" title={title} description={description} />
      </header>

      <Card>
        <CardBody>
          <p className="text-base leading-7 text-ink-300">Content will be added during Sprint 2.</p>
          {warning && (
            <p className="mt-4 border-t border-ink-700 pt-4 text-sm leading-6 text-ink-400">{warning}</p>
          )}
        </CardBody>
      </Card>
    </article>
  )
}
