import { Card, CardBody, Badge, SectionHeading, Prose } from '../components/ui.jsx'
import { TEAM, PROJECT } from '../data/team.js'

export default function About() {
  return (
    <div className="space-y-8">
      <div>
        <SectionHeading
          eyebrow="Required page"
          title="About Us"
          description={`The five members managing ${PROJECT.name} for ${PROJECT.course}. Each member owns a specific part of this portal and is individually accountable for it.`}
        />
      </div>

      <Prose>
        <p>
          This page is required by the portal guidelines and is kept current as roles shift. Every member is
          expected to be able to explain any page of this portal during the final presentation Q&amp;A, not only
          the page they personally wrote.
        </p>
      </Prose>

      <div className="grid gap-4 sm:grid-cols-2">
        {TEAM.map((m) => (
          <Card key={m.id}>
            <CardBody>
              <div className="mb-3 flex items-start gap-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${m.color}`}
                >
                  {m.initials}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-navy-900 dark:text-slate-100">{m.name}</h3>
                  <p className="text-sm text-accent-600 dark:text-accent-400">{m.role}</p>
                </div>
              </div>

              <p
                className={`mb-4 text-sm leading-6 ${
                  m.bioPlaceholder
                    ? 'rounded-lg border border-dashed border-amber-300 bg-amber-50/60 p-3 text-amber-700 dark:border-amber-800 dark:bg-amber-900/10 dark:text-amber-300'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {m.bio}
              </p>

              <div className="space-y-2">
                <div>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Owns on this project
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{m.owns}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {m.research.finance > 0 && (
                    <Badge tone="accent">{m.research.finance} finance interviews</Badge>
                  )}
                  {m.research.education > 0 && (
                    <Badge tone="slate">{m.research.education} education interviews</Badge>
                  )}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
