// Phase 2 market research corpus — ShareTab (Roommate Budget Tracker).
// Source: "Phase 2 Market Research Interview Questions" (team packet, Sept 8-10 2026).
// Only the 13 interviews conducted on Project Idea 1 (Finance) are represented here.
// The 12 interviews on Project Idea 2 (Course Auto Advisor) informed the pivot
// decision only and are summarized, not reproduced, on the Market Research page.

export const RESEARCH_SUMMARY = {
  totalInterviews: 25,
  financeInterviews: 13,
  educationInterviews: 12,
  interviewers: 5,
  windowStart: 'Sept 8, 2026',
  windowEnd: 'Sept 10, 2026',
  repeatableProblemYes: 13,
}

export const INTERVIEWER_COVERAGE = [
  { interviewer: 'Ruben Martinez', memberId: 'rjm', finance: 5, education: 0, locations: 'UTEP CCSB, remote' },
  { interviewer: 'Amichai Fernandez', memberId: 'aaf', finance: 5, education: 0, locations: 'UTEP CCSB, BUSN, TWH' },
  { interviewer: 'Sebastian Lucero-Chavez', memberId: 'smlc', finance: 3, education: 2, locations: 'UTEP CCSB' },
  { interviewer: 'Brenden Ucol', memberId: 'bnu', finance: 0, education: 5, locations: 'UTEP, remote' },
  { interviewer: 'Sebastian Ochoa', memberId: 'sao', finance: 0, education: 5, locations: 'In person' },
]

// ---------------------------------------------------------------------------
// Aggregate findings — patterns that recurred across the 13 finance interviews.
// ---------------------------------------------------------------------------

export const AGGREGATE_FINDINGS = [
  {
    id: 'split-solved',
    title: 'Dividing the bill is already a solved problem',
    strength: 'Strong',
    seenIn: 11,
    body:
      'Almost every subject described a division method that works for them and that they did not complain about: an even calculator split, itemizing by what each person ordered, a percentage split when one side drank and the other did not, or letting the ordering platform do the math. Nobody asked for a better calculator. The friction consistently appeared after the split, not during it.',
    evidence: [
      'We used the calculator app and divided the bill by all of us there.',
      'We split the check by the members of each family ... whatever each one ordered.',
      'If it is 100 bucks, we will start 50-50, if they have a couple of drinks we will pay like 30-70.',
    ],
  },
  {
    id: 'app-fragmentation',
    title: 'Payment-app mismatch forces manual workarounds',
    strength: 'Strong',
    seenIn: 10,
    body:
      'Zelle, Venmo, Cash App, Apple Pay, PayPal and Mercado Pago all appeared in the corpus, and subjects rarely shared a single app with the person who owed them. Their workarounds were consistent and costly: install the other person’s app, route the money through a third person who has both, or fall back to cash. This was described as routine, not exceptional.',
    evidence: [
      'I had to send the money to another friend who had Zelle and Venmo, and they then sent the money to the person who has Venmo.',
      'One of my friends did not have Zelle, so he would send through Venmo. So, I had to download an account for Venmo and do it that way because that was the only way that he could pay me back.',
      'I asked him if they would take Zelle or Apple Pay or Cash App. And, they said they had none of those, so we agreed on cash.',
    ],
  },
  {
    id: 'memory-is-the-ledger',
    title: 'Memory is the tracking system, and it fails',
    strength: 'Strong',
    seenIn: 12,
    body:
      'No subject used a dedicated tool to record who owed what. The recorded methods were mental notes, ad-hoc text messages, a hand-written list, or scrolling back through payment-app request history days later to reconstruct the debt. Subjects described forgetting as the normal outcome rather than the exception.',
    evidence: [
      'I do not write it down and just rely on people remembering, so I probably have a lot of unpaid stuff.',
      'Remembering the amount owed to me was through both a mental note and text.',
      'I had to go back through my Zelle requests and through my transactions and then see who had or had not sent me to make a list of who owed me. I think that when it piles on you, it does get a bit complicated.',
    ],
  },
  {
    id: 'social-cost',
    title: 'Small debts are written off because asking costs more than the money',
    strength: 'Strong',
    seenIn: 7,
    body:
      'The dominant resolution for a small debt is not collection — it is forgiveness. Subjects described an explicit mental threshold (often around $100) below which they stop tracking, and several reframed the debt as a gift to avoid the discomfort of chasing it. One subject named guilt directly as the reason they dropped several balances.',
    evidence: [
      'I kinda felt bad about constantly bothering some people about it so i kind of dropped a few of the like payments but i did get like 2 or three of the bigger ones.',
      'I value people’s company more, so I do not really keep track unless it is a large amount, maybe over $100.',
      '75% of the time I may just let them know that they will not owe me after. This is to, again, release the burden from both of us.',
    ],
  },
  {
    id: 'expensive-tail',
    title: 'The large-amount tail is where real money is lost',
    strength: 'Strong',
    seenIn: 6,
    body:
      'Once amounts get large, write-off stops being acceptable and the failure becomes expensive and long-lived. The corpus contains a $2,000 unreimbursed conference expense from a student organization, a $180 loan that ended with the debtor blocking the lender, a movie-theater debt never repaid at all, and roughly a year of untracked shared-account activity between siblings that was ultimately settled by guessing.',
    evidence: [
      'A UTEP organization owes me $2k for a conference I paid for, but they ignore my texts and refuse to pay me back.',
      'My cousin owes me about 180 bucks because I helped her with a car trouble she had, and she moved out of state, so she ran with my money and hasn’t paid me back.',
      'It became troublesome ... So, it became let’s look at the certain time period, but now we have to do math. And in all honesty, we just ended it. Just, let us guesstimate the amount and end all that.',
    ],
  },
  {
    id: 'reminder-latency',
    title: 'Reminders are delayed, informal and socially graded',
    strength: 'Moderate',
    seenIn: 8,
    body:
      'Where subjects did chase a debt, the reminder was a manual one-to-one message sent one day to one week after the expense. Several deliberately avoided the group chat and messaged individually to reduce awkwardness. Escalation intensity scaled with the relationship rather than the amount: gentle and indirect for friends, immediate and firm only for clients.',
    evidence: [
      'Instead of sending a group chat message, I would just send an individual message being like “Hey, you owe me so much for blank.” And then usually immediately after I send that message they will send it.',
      'If it is a friend, I have politely reminded them, usually casually or subtly ... However, if it is a client, I hunt them down.',
      'When I reminded my cousin she owed me money, she perhaps clicked the block button.',
    ],
  },
  {
    id: 'group-size',
    title: 'Group size and multi-venue outings multiply the error rate',
    strength: 'Moderate',
    seenIn: 5,
    body:
      'Subjects reported that the process degrades sharply past roughly three people, and degrades further when a single outing spans multiple venues with a different payer at each stop. The reported failure modes are money sent to the wrong payer and money sent in the wrong amount — errors of bookkeeping, not of arithmetic.',
    evidence: [
      'It is a messy and complicated situation when splitting bills, especially if it is more than 3 people.',
      'Someone paid in one restaurant, and someone else paid in a different restaurant, so sometimes we sent the money to the incorrect person or would send less than the actual amount.',
    ],
  },
  {
    id: 'recurring-stable',
    title: 'Recurring household bills are the stable case, not the painful one',
    strength: 'Moderate',
    seenIn: 6,
    body:
      'Contrary to the framing in our original problem statement, recurring bills generated the least friction in the corpus. Subjects described them as fixed, pre-agreed and often automated: a designated payer per bill, a family phone plan, an auto-drafted fixed amount, or a shared account. Volatility lives in one-off social spending, not in rent and utilities.',
    evidence: [
      'It is a recurring payment, so a fixed amount is already agreed upon. So basically, I just set it up, so it is taken out of my account each month.',
      'My brother foots the electricity and then I take care of the internet bill alongside my phone bill.',
      'Me and my wife do not really split bills because we share an account.',
    ],
  },
]

// ---------------------------------------------------------------------------
// Top pick, deep dive
// ---------------------------------------------------------------------------

export const TOP_PICK = {
  headline: 'The unmet need is the shared ledger, not the split calculator',
  statement:
    'Across 13 interviews the arithmetic of splitting an expense was never the reported problem. What repeatedly failed was everything downstream of it: recording who owes what, remembering it days later, settling it across people who do not share a payment app, and asking for it without damaging the relationship. ShareTab should be built as a lightweight shared ledger with a low-friction reminder mechanism — explicitly not as another payment rail.',
  whyItRose: [
    {
      title: 'It is the only failure every finance interview shares',
      body:
        'All 13 finance interviews were marked as revealing a specific, repeatable problem. Division methods varied widely between subjects; the breakdown in tracking and settlement did not vary. It was the one constant.',
    },
    {
      title: 'The workarounds are already elaborate',
      body:
        'Subjects are installing apps they do not want, routing money through intermediaries, scrolling months of transaction history, and keeping hand-written lists. People building workarounds that expensive have a problem worth solving.',
    },
    {
      title: 'The cost is measurable at the tail',
      body:
        'The corpus contains $2,000, $400 and $180 incidents plus an unbounded tail of written-off small balances. We do not have to argue that the pain is real — subjects volunteered the dollar figures.',
    },
    {
      title: 'It avoids the regulated surface entirely',
      body:
        'Because subjects want a record rather than a new way to move money, the winning scope does not require handling funds. That keeps a semester-length project feasible and keeps us out of payments compliance.',
    },
  ],
  quantified: [
    { label: 'Finance interviews', value: '13', sub: 'Ruben 5 · Amichai 5 · Lucero-Chavez 3' },
    { label: 'Revealed a repeatable problem', value: '13 / 13', sub: 'Per post-interview synthesis field' },
    { label: 'Named a tracking failure', value: '12 / 13', sub: 'Forgot, lost track, or reconstructed later' },
    { label: 'Largest single unpaid balance', value: '$2,000', sub: 'Student-org conference reimbursement' },
  ],
  designImplications: [
    'Record-keeping first. The core object is a debt with a payer, a debtor, an amount and a state — not a payment.',
    'Payment-method agnostic. Store which app was used to settle; never attempt to move the money.',
    'Reminders must be low-friction and private. Subjects avoid the group chat; a one-to-one nudge is the observed behavior to support.',
    'Support partial and forgiven balances as first-class states. Both appeared repeatedly and neither is an edge case.',
    'Optimize for one-off social spend, not recurring rent. Recurring bills are already stable for these users.',
  ],
}

// ---------------------------------------------------------------------------
// What did not work / what we pivoted from
// ---------------------------------------------------------------------------

export const PIVOTS = [
  {
    id: 'p1',
    abandoned: 'That the core problem is splitting the bill',
    was: 'Our Phase 1 problem statement led with the difficulty of "collecting everyone’s portion" and assumed the calculation was the burden.',
    why:
      'Subjects produced a working division method in nearly every interview and never volunteered it as a pain point. One subject did the whole thing with the phone’s calculator app and considered the matter closed.',
    changed:
      'The product concept moved from a splitting calculator to a shared ledger. Split entry stays deliberately minimal.',
    downstream: 'Charter scope, business strategy, Sprint 2 estimation',
  },
  {
    id: 'p2',
    abandoned: 'That ShareTab needs payment integration',
    was: 'The early concept assumed we would integrate with Venmo, Zelle or Cash App so users could settle inside the app.',
    why:
      'Subjects were not looking for a new place to send money — they already hold two or three apps and switch between them willingly. What they lacked was a record of what was owed. Integration would have added regulatory and technical scope without addressing the reported failure.',
    changed:
      'Payment rails are now explicitly out of scope. ShareTab records how a debt was settled; it never touches funds.',
    downstream: 'Charter scope boundary, risk register, Sprint 2 estimation',
  },
  {
    id: 'p3',
    abandoned: 'That roommates and recurring household bills are the primary segment',
    was: 'The project was named for roommates and framed around rent and utilities.',
    why:
      'Recurring bills turned out to be the most stable category in the corpus — fixed amounts, designated payers, auto-drafts, family plans and shared accounts. The instability was in one-off social spending: restaurants, trips, group orders and event tickets.',
    changed:
      'The target user shifted from "roommates splitting rent" to "social groups splitting irregular one-off expenses." The working name is retained for continuity.',
    downstream: 'Charter stakeholder register, business strategy, persona definition',
  },
  {
    id: 'p4',
    abandoned: 'That users want automated, aggressive debt collection',
    was: 'We assumed users would want the app to chase debtors on their behalf.',
    why:
      'The corpus shows the opposite instinct. Subjects deliberately soften or drop requests to protect relationships, and one described making the balance a gift specifically to "release the burden from both of us." An aggressive automated reminder would be socially unusable for the majority case.',
    changed:
      'Reminders are user-initiated and private by default, with forgiving a balance treated as a normal, first-class action rather than a failure state.',
    downstream: 'Charter scope, feature backlog, UX principles',
  },
  {
    id: 'p5',
    abandoned: 'Project Idea 2 — UTEP Course Auto Advisor and Load Balancer',
    was: 'The team carried two candidate ideas into Phase 2 and interviewed on both: the finance tracker and an education tool for course planning.',
    why:
      'PLACEHOLDER — the team must write the comparative go/no-go reasoning here. Note for the author: 12 interviews were conducted on Idea 2. Per course policy (Guidelines §10) AI may not be used for go/no-go reasoning, so this paragraph must be written by a team member and defended in Q&A.',
    changed: 'PLACEHOLDER — record the date and forum in which the team made the final selection.',
    downstream: 'All Sprint 1 documents',
    isPlaceholder: true,
  },
]

// ---------------------------------------------------------------------------
// Method / validity notes
// ---------------------------------------------------------------------------

export const METHOD_NOTES = [
  'All interviews followed a shared guided-interview sheet using Mom Test rules: subjects were asked about specific past experiences rather than opinions or hypotheticals.',
  'Subjects were recorded by role descriptor only. No subject names appear in the research record.',
  'Consent to take notes was obtained in every interview and recorded on the sheet.',
  'Each interviewer completed the post-interview synthesis, including verbatim quotes, within 24 hours.',
]

export const METHOD_LIMITATIONS = [
  'All subjects are UTEP students or their immediate circle. The sample does not represent non-student sharers, and El Paso / Juárez cross-border payment habits (Mercado Pago) may not generalize.',
  'Subjects were reached by approach in person or through social media, which is a convenience sample rather than a representative one.',
  'Two sheets filed by Sebastian Lucero-Chavez (interviews 4 and 5) carry a "Budgeting App" problem-area label but contain course-registration content. They are counted as education interviews here, not finance.',
  'Most sheets recorded no follow-up consent, so findings cannot be validated with the original subjects.',
]
