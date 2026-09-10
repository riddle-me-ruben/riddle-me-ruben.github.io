// Shared visual primitives. Styling lives in src/styles/components.css — these
// components pick a semantic class rather than carrying long utility strings,
// so a theme change happens in CSS and not across every page.

export function Card({ children, variant = 'default', className = '', ...props }) {
  const variants = {
    default: 'card card-hover',
    accent: 'card card-accent',
    todo: 'card-todo',
    danger: 'card-danger',
    flat: 'card',
  }
  return (
    <div className={`${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ icon: Icon, title, subtitle, action }) {
  return (
    <div className="card-header">
      <div className="flex items-start gap-3">
        {Icon && (
          <span className="card-header-icon">
            <Icon size={18} />
          </span>
        )}
        <div>
          <h3 className="card-title">{title}</h3>
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return <div className={`card-body ${className}`}>{children}</div>
}

// Tone -> full class name. Written out rather than interpolated, because
// Tailwind scans source for literal class names and purges anything it can't
// see; `badge-${tone}` would be stripped from the build.
const badgeTones = {
  neon: 'badge-neon',
  muted: 'badge-muted',
  todo: 'badge-todo',
  danger: 'badge-danger',
  done: 'badge-done',
}

export function Badge({ children, tone = 'muted', icon: Icon, className = '' }) {
  return (
    <span className={`badge ${badgeTones[tone] || badgeTones.muted} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-5">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-xl font-bold text-ink-50 sm:text-2xl">{title}</h2>
      {description && <p className="mt-2 max-w-3xl text-sm leading-6 text-ink-300">{description}</p>}
    </div>
  )
}

export function Prose({ children, className = '' }) {
  return <div className={`doc-prose ${className}`}>{children}</div>
}

export function DocSection({ id, number, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="doc-heading">
        {number && <span className="doc-heading-number">{number}</span>}
        {title}
      </h3>
      {children}
    </section>
  )
}

export function Quote({ children, cite }) {
  return (
    <figure className="doc-quote">
      <blockquote>&ldquo;{children}&rdquo;</blockquote>
      {cite && <figcaption>{cite}</figcaption>}
    </figure>
  )
}

export function MarkerList({ items, tone = 'neon' }) {
  const toneClass = { neon: '', danger: 'marker-list-danger', todo: 'marker-list-todo' }
  return (
    <ul className={`marker-list ${toneClass[tone] || ''}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export function Table({ columns, children }) {
  return (
    <div className="data-table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

// Guidelines require every public document to also exist as a downloadable
// PDF. Until the file is generated this renders as a visible pending chip
// rather than a link that 404s.
export function PdfLink({ href, label = 'Download PDF', available = false }) {
  if (!available) {
    return (
      <span className="pdf-pending" title="PDF not yet generated">
        <span className="todo-tag">[TODO]</span>
        PDF
      </span>
    )
  }
  return (
    <a href={href} download className="btn btn-primary btn-sm">
      {label}
    </a>
  )
}

// Marks unwritten content. Every instance carries a literal [TODO] so the gaps
// are greppable and can never be mistaken for finished work.
export function Todo({ title, owner, children }) {
  return (
    <div className="card-todo p-4">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="todo-tag">[TODO]</span>
        {owner && <Badge tone="todo">{owner}</Badge>}
      </div>
      {title && <h3 className="mb-1.5 text-base font-semibold text-ink-50">{title}</h3>}
      <div className="todo-body">{children}</div>
    </div>
  )
}
