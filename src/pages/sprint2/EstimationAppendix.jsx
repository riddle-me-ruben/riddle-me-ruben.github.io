import { Link } from 'react-router-dom'
import { Card, CardBody, Badge, SectionHeading, DocSection, MarkerList, Table, Prose } from '../../components/ui.jsx'

// Source: "A First Look at Your Project's Size" (Part 1 sizing starter) and
// "Estimate One Slice of Your Project" (Part 2 activity), Team 008.
// Every number here is the team's own. Assumptions are labelled as such.

const HIDDEN_WORK_KEY = [
  ['T', 'Testing'],
  ['S', 'Security or privacy'],
  ['I', 'Integration with other systems'],
  ['D', 'Data (collection, cleaning, migration)'],
  ['H', 'Hosting and deployment'],
  ['U', 'Usability and accessibility'],
  ['O', 'Documentation or training'],
]

const CAPABILITIES = [
  ['1', 'Connect / redirect to third-party payment services', 'Martinez P1 #1–5; Fernandez P2 #1–5; Martinez P2 #1–4', 'T, I'],
  ['2', 'Create user accounts', 'Charter (enabling capability)', 'T, S, D, H, U'],
  ['3', 'Add friends', 'Martinez P2 #2, #3; Fernandez P2 #5', 'T, S, H, U'],
  ['4', 'Create groups', 'Charter (enabling capability)', 'T, S, H, U'],
  ['5', 'Split shared expenses', 'Martinez P1 #1–5', 'T, S, I, D, H, U, O'],
  ['6', 'Set payment reminders', 'Fernandez P2 #1, 2, 5', 'T, I, U'],
  ['7', 'Spending analytics (paid)', 'Charter (enabling capability)', 'T, S, I, D'],
]

const COMPARABLES = [
  {
    name: 'Splitwise',
    scale: 'Small',
    why: 'Same core job as ours. Roommates log shared costs, the app works out who owes whom, and people settle elsewhere. It launched as SplitTheRent, a rent-splitting tool. It also has our exact gap: it tracks balances but does not move money, so you leave the app and open Venmo or Zelle to actually pay.',
    started: 'November 2010',
    released: 'February 2011',
    time: '2 months',
    team: '11–50 people',
    worked: 'Debt simplification plus group invites drove word of mouth. Venmo settle-up integration in September 2013, and bank transfers added in April 2024 through Visa’s Tink. Funding went $1.4M (2014), $5M (2016), $20M Series A (2021).',
    failed: 'Monetization came in later with a subscription of $5.99 and $50 per month. It still cannot split a receipt by line item.',
    source: 'https://techcrunch.com/2021/04/28/splitwise-raises-20m-series-a-to-help-everyone-in-the-world-divvy-expenses/',
  },
  {
    name: 'Rocket Money',
    scale: 'Big',
    why: 'Rocket Money is an application to manage your finances, like how ShareTab tracks the balances you owe to your peers.',
    started: 'August 2015',
    released: 'January 2016',
    time: '4 months',
    team: '3 brothers on release',
    worked: 'Having a place where a user can see how many subscriptions they are paying for as well as how much they pay on a monthly basis. The card integration was also very easy to do since they leveraged Plaid.',
    failed: 'At first it could not cancel every subscription, and the founders’ goal of covering discovery, signup, pausing and cancellation was not there yet. The manual concierge model did not scale cheaply, it required handing over bank access, and the narrow tool eventually had to expand into full personal finance to keep growing.',
    source: 'https://www.producthunt.com/products/truebill-budget-bill-tracker#launches',
  },
  {
    name: 'SplitMyExpense',
    scale: 'Solo',
    why: 'Closest match to what we are building: a splitter with handoffs to Zelle and PayPal rather than in-app money movement.',
    started: '2020',
    released: 'June 2023',
    time: '~3 years',
    team: '1 person',
    worked: 'Aimed straight at Splitwise’s paywall. Marketed as free with no expense limit and no ads, with Splitwise import as the on-ramp, which kills switching cost.',
    failed: null,
    source: null,
  },
]

const STORY_POINT_ROWS = [
  ['Slice points', '22', 'From the Sprint 2 story table'],
  ['Team size', '5', 'The team we have'],
  ['Hours per person per sprint', '80', 'Assumption'],
  ['Velocity: low / middle / high', '15 / 20 / 30', 'Assumptions until we have sprint data'],
  ['Sprints needed (high to low velocity)', '0.73 / 1.10 / 1.46', 'Slice points ÷ velocity'],
  ['Effort in hours (low to high)', '293.33 / 440 / 586.67', 'Sprints × team size × hours per person per sprint'],
]

const FUNCTION_POINT_ROWS = [
  ['External Inputs (EI)', '2', '4', '8'],
  ['External Outputs (EO)', '1', '5', '5'],
  ['External Inquiries (EQ)', '2', '4', '8'],
  ['Internal Logical Files (ILF)', '3', '10', '30'],
  ['External Interface Files (EIF)', '1', '7', '7'],
]

const TEAM_CHECKS = [
  ['Our team is five or six people at most.', 'Beyond six, split into two teams.'],
  ['We counted our communication paths: n(n − 1) ÷ 2 = 10', 'Five people share 10 paths; ten share 45.'],
  ['We added explicit work for integrating the pieces of the slice.', 'Breaking work into pieces hides the cost of putting it back together.'],
  ['We did not assume that more people means proportionally more output.', 'Coordination grows faster than headcount.'],
  ['We estimated for the team we have.', 'Not for a larger team we wish we had.'],
  ['We adjusted, not copied, timelines from much larger teams.', 'Their effort includes their coordination costs.'],
]

const RECONCILE = [
  ['Method', 'Story Points to Cost', 'Function Points'],
  ['Estimate in hours (low to high)', '292 to 584 hours', '290 to 580 hours'],
  ['Middle value in hours', '440 hours', '435 hours'],
  ['Input that drives it most', 'Velocity', 'Productivity rate in hours per function point'],
  ['Is that input measured or assumed?', 'Assumed', 'Assumed'],
]

export default function EstimationAppendix() {
  return (
    <article className="stack-xl">
      <header>
        <p className="breadcrumb">Sprint 2 / Estimation Appendix</p>
        <SectionHeading
          eyebrow="Sprint 2"
          title="Estimation Appendix"
          description="The methods used to size ShareTab, the ranges they produced, and the reasoning behind them. The headline figures this appendix supports are on the Business Case page."
        />
      </header>

      {/* ---------------- Sizing: what Release 1 must do ---------------- */}
      <DocSection title="Release 1 capabilities and their hidden work">
        <Prose className="mb-4">
          <p>
            Sizing began from the charter&rsquo;s in-scope items and the strongest needs from the Sprint 1
            interviews. Each capability is written as what the system must do, not how, and tagged with the
            hidden work it carries — the effort that does not appear in a feature name but still has to be built.
          </p>
        </Prose>

        <div className="mb-4 flex flex-wrap gap-2">
          {HIDDEN_WORK_KEY.map(([letter, meaning]) => (
            <Badge key={letter} tone="muted">
              {letter} = {meaning}
            </Badge>
          ))}
        </div>

        <Table columns={['#', 'Capability', 'Evidence', 'Hidden work']}>
          {CAPABILITIES.map((row) => (
            <tr key={row[0]}>
              <td className="text-ink-400">{row[0]}</td>
              <td className="font-medium text-ink-50">{row[1]}</td>
              <td className="text-ink-400">{row[2]}</td>
              <td><Badge tone="neon">{row[3]}</Badge></td>
            </tr>
          ))}
        </Table>

        <Prose className="mt-4">
          <p>
            <strong>Testing (T) appears in every row.</strong> It is the one kind of hidden work no capability in
            Release 1 escapes, and all three comparable products below hit trouble in the same place.
          </p>
        </Prose>
      </DocSection>

      {/* ---------------- Outside view: our own experience ---------------- */}
      <DocSection title="Outside view: our own experience">
        <Card>
          <CardBody>
            <Prose>
              <p>
                The closest thing anyone on the team has built is a spend-limits authorization engine for
                credit-card holders, written during a summer internship. Spend limits let a primary account owner
                set how much joint users can spend — a business owner capping employees at $300, for example. The
                engine involved several components that had to be implemented carefully so the correct limit was
                applied against the correct customer.
              </p>
            </Prose>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-ink-700 bg-ink-800/40 p-3">
                <p className="label mb-1">Expected</p>
                <p className="text-lg font-bold text-ink-50">6 weeks</p>
              </div>
              <div className="rounded-lg border border-ink-700 bg-ink-800/40 p-3">
                <p className="label mb-1">Actual</p>
                <p className="text-lg font-bold text-ink-50">8 weeks</p>
              </div>
              <div className="rounded-lg border border-neon-700 bg-neon-500/5 p-3">
                <p className="label mb-1">Overrun</p>
                <p className="text-lg font-bold text-neon-300">+33%</p>
              </div>
            </div>

            <Prose className="mt-4">
              <p>
                <strong>What took longer:</strong> the comprehensive testing needed to guarantee the correct spend
                limit was activated against the correct customer. The team assumed the test cases were
                straightforward, then found additional complexity — cash limits and withdrawal amounts also had to
                be accounted for, along with scenarios and edge cases missed during initial planning.
              </p>
              <p>
                This is the single most relevant data point we own, and it points the same direction as the
                comparables: testing is where the schedule goes.
              </p>
            </Prose>
          </CardBody>
        </Card>
      </DocSection>

      {/* ---------------- Outside view: similar products ---------------- */}
      <DocSection title="Outside view: comparable products">
        <div className="grid gap-4 lg:grid-cols-3">
          {COMPARABLES.map((c) => (
            <Card key={c.name} variant={c.name === 'SplitMyExpense' ? 'accent' : 'default'}>
              <CardBody>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-ink-50">{c.name}</h3>
                  <Badge tone={c.name === 'SplitMyExpense' ? 'neon' : 'muted'}>{c.scale}</Badge>
                </div>
                <p className="mb-4 text-sm leading-6 text-ink-300">{c.why}</p>

                <dl className="mb-4 space-y-1.5 text-sm">
                  {[
                    ['Development started', c.started],
                    ['First public release', c.released],
                    ['Time to first release', c.time],
                    ['Team size', c.team],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-3">
                      <dt className="text-ink-400">{k}</dt>
                      <dd className="text-right font-medium text-ink-100">{v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="label mb-1">What worked</p>
                <p className="mb-3 text-sm leading-6 text-ink-300">{c.worked}</p>

                {c.failed && (
                  <>
                    <p className="label mb-1">What did not work</p>
                    <p className="mb-3 text-sm leading-6 text-ink-300">{c.failed}</p>
                  </>
                )}

                {c.source && (
                  <a href={c.source} target="_blank" rel="noreferrer" className="text-xs break-all">
                    Source
                  </a>
                )}
              </CardBody>
            </Card>
          ))}
        </div>

        <Card className="mt-4">
          <CardBody>
            <h3 className="mb-3 text-sm font-semibold text-ink-50">What the comparables tell us</h3>
            <MarkerList
              items={[
                'Time to first release ranged from 2 months (Splitwise, 11–50 people) to 4 months (Rocket Money, 3 people) to roughly 3 years (SplitMyExpense, 1 person). Adjusted for a team of five, our first release should ship in 2 to 3 months.',
                'Testing was the most common hidden work in our capability list, and all three comparables struggled with the same kind of work.',
                'A practice to copy, from SplitMyExpense: aim at the incumbent’s paywall. Free, no expense limit, no ads, with import as the on-ramp so switching cost is near zero.',
                'A mistake to avoid, from Rocket Money: the manual concierge model did not scale cheaply, required handing over bank access, and forced the narrow tool to expand into full personal finance to keep growing.',
              ]}
            />
            <p className="mt-4 border-t border-ink-700 pt-4 text-sm font-medium text-neon-300">
              Our comparables suggest a first release would take 2 to 3 months with a team of 5.
            </p>
          </CardBody>
        </Card>
      </DocSection>

      {/* ---------------- Methods ---------------- */}
      <DocSection title="Method 1 — Story points to cost">
        <Prose className="mb-4">
          <p>
            Effort based on the team&rsquo;s own sizing of the stories in the slice. Story points are relative, so
            they are converted using a velocity in points per two-week sprint. The team has run no sprints yet, so
            every velocity figure below is an assumption rather than a measurement.
          </p>
        </Prose>
        <Table columns={['Input', 'Value', 'Note']}>
          {STORY_POINT_ROWS.map((r) => (
            <tr key={r[0]}>
              <td className="font-medium text-ink-50">{r[0]}</td>
              <td className="text-neon-300">{r[1]}</td>
              <td className="text-ink-400">{r[2]}</td>
            </tr>
          ))}
        </Table>
      </DocSection>

      <DocSection title="Method 2 — Function points">
        <Prose className="mb-4">
          <p>
            Effort based on the functionality users get from the slice, counted in five categories and weighted.
            The productivity rate is the assumption that drives this method: we tested a low of 5 and a high of 10
            hours per function point.
          </p>
        </Prose>
        <Table columns={['Category', 'Count', 'Weight', 'Points']}>
          {FUNCTION_POINT_ROWS.map((r) => (
            <tr key={r[0]}>
              <td className="font-medium text-ink-50">{r[0]}</td>
              <td className="text-ink-300">{r[1]}</td>
              <td className="text-ink-300">{r[2]}</td>
              <td className="text-neon-300">{r[3]}</td>
            </tr>
          ))}
          <tr>
            <td className="font-semibold text-ink-50">Total function points</td>
            <td className="text-ink-500">—</td>
            <td className="text-ink-500">—</td>
            <td className="font-bold text-neon-300">58</td>
          </tr>
        </Table>
        <Card className="mt-4">
          <CardBody>
            <MarkerList
              items={[
                'Rate: low 5 and high 10 hours per function point. Labelled an assumption — we have no historical productivity data.',
                'Effort: 58 FP × 5 h = 290 hours (low); 58 FP × 10 h = 580 hours (high).',
              ]}
            />
          </CardBody>
        </Card>
      </DocSection>

      {/* ---------------- Team size check ---------------- */}
      <DocSection title="Team-size check">
        <Prose className="mb-4">
          <p>
            Larger teams spend more of their time coordinating, and estimators tend to underweight that cost. Each
            estimate was checked against the list below. All six checks passed.
          </p>
        </Prose>
        <Table columns={['Check', 'Result', 'Why it matters']}>
          {TEAM_CHECKS.map((r) => (
            <tr key={r[0]}>
              <td className="text-ink-200">{r[0]}</td>
              <td><Badge tone="done">Yes</Badge></td>
              <td className="text-ink-400">{r[1]}</td>
            </tr>
          ))}
        </Table>
      </DocSection>

      {/* ---------------- Reconciliation ---------------- */}
      <DocSection title="Comparing the two estimates">
        <Table columns={['', 'Method 1', 'Method 2']}>
          {RECONCILE.map((r) => (
            <tr key={r[0]}>
              <td className="font-medium text-ink-50">{r[0]}</td>
              <td className="text-ink-200">{r[1]}</td>
              <td className="text-ink-200">{r[2]}</td>
            </tr>
          ))}
        </Table>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Card variant="accent">
            <CardBody>
              <p className="label mb-1">Gap between methods</p>
              <p className="text-2xl font-bold text-neon-300">1.01</p>
              <p className="mt-1 text-xs text-ink-400">440 ÷ 435. Anything above roughly 2.0 would mean rechecking the counts.</p>
            </CardBody>
          </Card>
          <Card className="lg:col-span-2">
            <CardBody>
              <h3 className="mb-2 text-sm font-semibold text-ink-50">Why the two differ</h3>
              <Prose>
                <p className="text-sm">
                  Story Points to Cost produces an estimate of approximately 293 to 587 hours with a middle value
                  of 440 hours, while Function Points produces an estimate of 290 to 580 hours with a middle value
                  of 435 hours. The methods do not depend on the same assumption: Story Points to Cost is driven
                  primarily by assumed team velocity, while Function Points is driven primarily by the assumed
                  productivity rate. Velocity produces a spread of about 293 hours against the productivity
                  rate&rsquo;s 290, so velocity moves the estimate slightly more. Both inputs are assumptions
                  because the team has no historical project data yet. Actual velocity could be measured after
                  several completed sprints, while a more reliable productivity rate could be calculated after
                  tracking the hours required to implement similar functionality.
                </p>
              </Prose>
            </CardBody>
          </Card>
        </div>

        <Prose className="mt-4">
          <p>
            Because the two methods start from different information — one from the system&rsquo;s features, one
            from the team&rsquo;s own judgement of story size — their near-agreement is meaningful rather than
            circular.
          </p>
        </Prose>
      </DocSection>

      <Card>
        <CardBody>
          <Prose>
            <p className="text-sm">
              The dated range, cost, and calendar estimate these methods produce are presented on the{' '}
              <Link to="/sprint-2/business-case">Business Case</Link> page.
            </p>
          </Prose>
        </CardBody>
      </Card>
    </article>
  )
}
