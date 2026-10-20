import { Card, CardBody, Badge, SectionHeading, DocSection, MarkerList, Prose } from '../../components/ui.jsx'
import { PHASE3, INTERVIEWS, PHASE3_PATTERNS } from '../../data/sprint3Interviews.js'

export default function Sprint3MarketResearch() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 3 / Market Research</p>
        <SectionHeading
          eyebrow="Sprint 3"
          title="Phase 3 Interviews"
          description={`A third round of discovery interviews with UTEP students, conducted ${PHASE3.date} by the full team. Every interview covered the same problem area: ${PHASE3.problemArea.toLowerCase()}`}
        />
      </header>

      {/* ---------------- Method ---------------- */}
      <DocSection title="How this round was run">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card>
            <CardBody>
              <p className="label mb-1">Interviews</p>
              <p className="text-2xl font-bold text-neon-300">{INTERVIEWS.length}</p>
              <p className="mt-1 text-xs text-ink-400">All conducted on {PHASE3.date}</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <p className="label mb-1">Interviewers</p>
              <p className="text-2xl font-bold text-neon-300">{PHASE3.interviewers.length}</p>
              <p className="mt-1 text-xs text-ink-400">The full team ran each session together</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <p className="label mb-1">Phase</p>
              <p className="text-2xl font-bold text-neon-300">{PHASE3.phase}</p>
              <p className="mt-1 text-xs text-ink-400">Follows the Phase 1 and Phase 2 rounds</p>
            </CardBody>
          </Card>
        </div>

        <Card className="mt-4">
          <CardBody>
            <Prose>
              <p>
                <strong>Recruiting.</strong> {PHASE3.recruiting}
              </p>
              <p className="!mb-0">
                <strong>Consent and anonymity.</strong> {PHASE3.consentNote} Subjects are recorded by role
                descriptor only; no subject names appear anywhere in this record.
              </p>
            </Prose>
          </CardBody>
        </Card>
      </DocSection>

      {/* ---------------- Patterns ---------------- */}
      <DocSection title="What came out of this round">
        <Prose className="mb-4">
          <p>
            Three interviews is a small sample, so these are signals to test rather than conclusions. Each
            pattern below names the interviews it came from.
          </p>
        </Prose>

        <div className="grid gap-4 lg:grid-cols-2">
          {PHASE3_PATTERNS.map((p) => (
            <Card key={p.title}>
              <CardBody>
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-ink-50">{p.title}</h3>
                  <Badge tone="muted">
                    {p.seenIn.length === 1 ? 'Interview' : 'Interviews'} {p.seenIn.join(', ')}
                  </Badge>
                </div>
                <p className="text-sm leading-6 text-ink-300">{p.body}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </DocSection>

      {/* ---------------- Full transcripts ---------------- */}
      <DocSection title="Interview records">
        <Prose className="mb-4">
          <p>
            Each sheet below carries the subject descriptor, the questions as asked, the answers as recorded, and
            the one-sentence takeaway written within twenty-four hours of the conversation.
          </p>
        </Prose>

        <div className="space-y-3">
          {INTERVIEWS.map((iv) => (
            <details key={iv.id} className="research-disclosure">
              <summary>
                <span>
                  Interview {iv.id} &middot; {iv.role}
                </span>
                <span className="text-xs font-normal text-ink-400">
                  {iv.location} &middot; {iv.time}
                </span>
              </summary>

              <div className="research-disclosure-body">
                <dl className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ['Date', PHASE3.date],
                    ['Time', iv.time],
                    ['Location', iv.location],
                    ['Role descriptor', iv.role],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-lg border border-ink-700 bg-ink-800/40 p-3">
                      <dt className="label mb-1">{k}</dt>
                      <dd className="text-sm font-medium text-ink-100">{v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="label mb-1">Relevant experience</p>
                <p className="mb-5 text-sm leading-6 text-ink-300">{iv.experience}</p>

                <p className="label mb-3">Question responses</p>
                <ol className="mb-5 space-y-4">
                  {iv.responses.map((r, i) => (
                    <li key={i} className="border-l-2 border-ink-700 pl-4">
                      <p className="mb-1 text-sm font-semibold text-ink-50">
                        {i + 1}. {r.q}
                      </p>
                      <p className="text-sm leading-6 text-ink-300">{r.a}</p>
                    </li>
                  ))}
                </ol>

                <div className="rounded-lg border border-neon-700 bg-neon-500/5 p-4">
                  <p className="label mb-1">One-sentence takeaway</p>
                  <p className="text-sm leading-6 text-neon-300">{iv.takeaway}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </DocSection>

      {/* ---------------- Limitations ---------------- */}
      <DocSection title="Limitations of this round">
        <Card>
          <CardBody>
            <MarkerList
              items={[
                'Three interviews, all conducted on a single afternoon at two UTEP locations. This is a convenience sample and is not representative.',
                'No subject consented to follow-up, so nothing here can be re-verified with the original subjects.',
                'Several answers gave no figures where one was asked for — repayment time in particular was described qualitatively in all three interviews rather than measured.',
                'Two subjects referred to products they could not fully identify (one believed an app was Rocket Money, one could not recall the name of a Canadian transfer service), so those references are recorded as stated rather than confirmed.',
              ]}
            />
          </CardBody>
        </Card>
      </DocSection>
    </article>
  )
}
