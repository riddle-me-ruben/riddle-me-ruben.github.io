export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-cardHover dark:border-navy-800 dark:bg-navy-900 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ icon: Icon, title, subtitle, action }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-slate-100 p-4 dark:border-navy-800">
      <div className="flex items-start gap-3">
        {Icon && (
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 dark:bg-navy-800 dark:text-accent-400">
            <Icon size={18} />
          </span>
        )}
        <div>
          <h3 className="text-sm font-semibold text-navy-900 dark:text-slate-100">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

const badgeTones = {
  navy: 'bg-navy-50 text-navy-700 ring-navy-200 dark:bg-navy-800 dark:text-navy-200 dark:ring-navy-700',
  accent: 'bg-accent-50 text-accent-700 ring-accent-200 dark:bg-accent-900/30 dark:text-accent-300 dark:ring-accent-800',
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800',
  red: 'bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:ring-rose-800',
  yellow: 'bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-800',
  slate: 'bg-slate-100 text-slate-600 ring-slate-200 dark:bg-navy-800 dark:text-slate-300 dark:ring-navy-700',
  purple: 'bg-purple-50 text-purple-700 ring-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:ring-purple-800',
}

export function Badge({ children, tone = 'navy', icon: Icon, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${badgeTones[tone] || badgeTones.navy} ${className}`}
    >
      {Icon && <Icon size={12} />}
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl font-bold text-navy-900 dark:text-slate-50 sm:text-2xl">{title}</h2>
      {description && <p className="mt-1.5 max-w-3xl text-sm text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  )
}

export function StatTile({ label, value, sub, icon: Icon, tone = 'navy' }) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
        {Icon && (
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-md ${badgeTones[tone] || badgeTones.navy}`}
          >
            <Icon size={14} />
          </span>
        )}
      </div>
      <p className="mt-2 text-2xl font-bold text-navy-900 dark:text-slate-50">{value}</p>
      {sub && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{sub}</p>}
    </Card>
  )
}

export function Table({ columns, children }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-navy-800">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="bg-slate-50 dark:bg-navy-800/60">
            {columns.map((c) => (
              <th
                key={c}
                className="whitespace-nowrap px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-navy-800">{children}</tbody>
      </table>
    </div>
  )
}

// --- Document primitives -----------------------------------------------------
// Guidelines §5 requires every public document to be readable as flat text on
// the page itself, not only as a downloadable file. Prose/DocSection give the
// long-form reading surface; DocMeta and PdfLink carry the record metadata.

export function Prose({ children, className = '' }) {
  return (
    <div
      className={`max-w-none text-[15px] leading-7 text-slate-700 dark:text-slate-300 [&_a]:text-accent-600 [&_a]:underline dark:[&_a]:text-accent-400 [&_li]:mb-1.5 [&_p]:mb-4 [&_strong]:font-semibold [&_strong]:text-navy-900 dark:[&_strong]:text-slate-100 ${className}`}
    >
      {children}
    </div>
  )
}

export function DocSection({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="mb-3 flex items-baseline gap-2 text-lg font-bold text-navy-900 dark:text-slate-50">
        {number && <span className="text-sm font-semibold text-accent-600 dark:text-accent-400">{number}</span>}
        {title}
      </h3>
      {children}
    </section>
  )
}

export function Quote({ children, cite }) {
  return (
    <figure className="my-3 border-l-2 border-accent-400 bg-accent-50/40 py-2 pl-4 pr-3 dark:border-accent-600 dark:bg-accent-900/10">
      <blockquote className="text-sm italic leading-6 text-slate-700 dark:text-slate-300">
        &ldquo;{children}&rdquo;
      </blockquote>
      {cite && (
        <figcaption className="mt-1.5 text-xs font-medium not-italic text-slate-500 dark:text-slate-400">
          {cite}
        </figcaption>
      )}
    </figure>
  )
}

export function DocMeta({ items }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-3 rounded-lg border border-slate-200 bg-slate-50/60 p-4 dark:border-navy-800 dark:bg-navy-900/50 sm:grid-cols-4">
      {items.map((it) => (
        <div key={it.label}>
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {it.label}
          </dt>
          <dd className="mt-0.5 text-sm font-medium text-navy-900 dark:text-slate-100">{it.value}</dd>
        </div>
      ))}
    </dl>
  )
}

// Guidelines §5: every public document also needs a downloadable PDF. Until the
// team generates and commits the PDF, this renders as a visibly unavailable
// stub rather than a broken link, so the gap is obvious in review.
export function PdfLink({ href, label = 'Download PDF', available = false }) {
  if (!available) {
    return (
      <span
        title="PDF not yet generated — required by Guidelines §5 before the sprint deadline"
        className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-amber-400 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-300"
      >
        PDF pending
      </span>
    )
  }
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-1.5 rounded-lg bg-navy-800 px-3 py-2 text-xs font-medium text-white no-underline transition-colors hover:bg-navy-700 dark:bg-accent-600 dark:hover:bg-accent-500"
    >
      {label}
    </a>
  )
}

// Marks a page or block as not yet written, so a reviewer can never mistake
// scaffolding for finished work.
export function Placeholder({ title = 'Placeholder', owner, due, children }) {
  return (
    <Card className="border-dashed border-amber-300 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-900/10">
      <CardBody>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge tone="yellow">Not yet written</Badge>
          {owner && <Badge tone="slate">Owner: {owner}</Badge>}
          {due && <Badge tone="slate">{due}</Badge>}
        </div>
        <h3 className="mb-1.5 text-base font-semibold text-navy-900 dark:text-slate-100">{title}</h3>
        <div className="text-sm leading-6 text-slate-600 dark:text-slate-400">{children}</div>
      </CardBody>
    </Card>
  )
}
