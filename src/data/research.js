// Phase 2 market research — ShareTab.
// Source: team interview packet, Sept 8-10 2026. Every claim below traces to a
// real interview; quotes are reproduced verbatim. Do not add findings that are
// not in the source packet.
//
// Twenty-five interviews were conducted across two candidate ideas. The
// thirteen on the finance idea are the basis for this document.

export const RESEARCH = {
  total: 25,
  finance: 13,
  window: 'Sept 8-10, 2026',
}

// --- Required section 1: aggregate findings ---------------------------------

export const AGGREGATE_FINDINGS = [
  {
    title: 'Dividing the bill is already a solved problem',
    seenIn: 11,
    body:
      'Almost every subject described a division method that works for them and that they did not complain about: an even calculator split, itemizing by what each person ordered, or a percentage split when one side drank and the other did not. Nobody asked for a better calculator. The friction consistently appeared after the split, not during it.',
    quotes: [
      'We used the calculator app and divided the bill by all of us there.',
      'If it is 100 bucks, we will start 50-50, if they have a couple of drinks we will pay like 30-70.',
    ],
  },
  {
    title: 'Payment-app mismatch forces manual workarounds',
    seenIn: 10,
    body:
      'Zelle, Venmo, Cash App, Apple Pay, PayPal and Mercado Pago all appeared in the corpus, and subjects rarely shared an app with the person who owed them. Their workarounds were consistent: install the other person’s app, route the money through a third person who has both, or fall back to cash.',
    quotes: [
      'I had to send the money to another friend who had Zelle and Venmo, and they then sent the money to the person who has Venmo.',
      'I asked him if they would take Zelle or Apple Pay or Cash App. And, they said they had none of those, so we agreed on cash.',
    ],
  },
  {
    title: 'Memory is the tracking system, and it fails',
    seenIn: 12,
    body:
      'No subject used a dedicated tool to record who owed what. The methods recorded were mental notes, ad-hoc texts, a hand-written list, or scrolling back through payment-app history days later to reconstruct the debt. Subjects described forgetting as the normal outcome rather than the exception.',
    quotes: [
      'I do not write it down and just rely on people remembering, so I probably have a lot of unpaid stuff.',
      'I had to go back through my Zelle requests and through my transactions and then see who had or had not sent me to make a list of who owed me. I think that when it piles on you, it does get a bit complicated.',
    ],
  },
  {
    title: 'Small debts are written off because asking costs more than the money',
    seenIn: 7,
    body:
      'The dominant resolution for a small debt is not collection but forgiveness. Subjects described a mental threshold, often around $100, below which they stop tracking, and several reframed the debt as a gift to avoid the discomfort of chasing it.',
    quotes: [
      'I kinda felt bad about constantly bothering some people about it so i kind of dropped a few of the like payments but i did get like 2 or three of the bigger ones.',
      'I value people’s company more, so I do not really keep track unless it is a large amount, maybe over $100.',
    ],
  },
  {
    title: 'The large-amount tail is where real money is lost',
    seenIn: 6,
    body:
      'Once amounts get large, write-off stops being acceptable and the failure becomes expensive and long-lived. The corpus contains a $2,000 unreimbursed conference expense, a $180 loan that ended with the debtor blocking the lender, and roughly a year of untracked shared-account activity between siblings settled by guessing.',
    quotes: [
      'A UTEP organization owes me $2k for a conference I paid for, but they ignore my texts and refuse to pay me back.',
      'My cousin owes me about 180 bucks because I helped her with a car trouble she had, and she moved out of state, so she ran with my money and hasn’t paid me back.',
    ],
  },
  {
    title: 'Reminders are delayed, informal and socially graded',
    seenIn: 8,
    body:
      'Where subjects did chase a debt, the reminder was a manual one-to-one message sent one day to one week after the expense. Several deliberately avoided the group chat to reduce awkwardness, and escalation scaled with the relationship rather than the amount.',
    quotes: [
      'Instead of sending a group chat message, I would just send an individual message being like “Hey, you owe me so much for blank.”',
      'If it is a friend, I have politely reminded them, usually casually or subtly ... However, if it is a client, I hunt them down.',
    ],
  },
  {
    title: 'Recurring household bills are the stable case, not the painful one',
    seenIn: 6,
    body:
      'Contrary to our original framing, recurring bills generated the least friction. Subjects described them as fixed, pre-agreed and often automated: a designated payer per bill, a family phone plan, an auto-drafted amount, or a shared account. Volatility lives in one-off social spending.',
    quotes: [
      'It is a recurring payment, so a fixed amount is already agreed upon. So basically, I just set it up, so it is taken out of my account each month.',
      'My brother foots the electricity and then I take care of the internet bill alongside my phone bill.',
    ],
  },
]

// --- Required section 2: top pick, deep dive --------------------------------

export const TOP_PICK = {
  headline: 'The unmet need is the shared ledger, not the split calculator',
  statement:
    'Across 13 interviews the arithmetic of splitting an expense was never the reported problem. What repeatedly failed was everything downstream of it: recording who owes what, remembering it days later, settling it across people who do not share a payment app, and asking for it without damaging the relationship. ShareTab should be built as a lightweight shared ledger with a low-friction reminder mechanism — explicitly not as another payment rail.',
  whyItRose: [
    {
      title: 'It is the only failure every finance interview shares',
      body: 'All 13 finance interviews were marked as revealing a specific, repeatable problem. Division methods varied widely between subjects; the breakdown in tracking and settlement did not.',
    },
    {
      title: 'The workarounds are already elaborate',
      body: 'Subjects are installing apps they do not want, routing money through intermediaries, scrolling months of transaction history and keeping hand-written lists. People building workarounds that expensive have a problem worth solving.',
    },
    {
      title: 'The cost is measurable at the tail',
      body: 'The corpus contains $2,000, $400 and $180 incidents plus an unbounded tail of written-off small balances. Subjects volunteered the dollar figures without being prompted.',
    },
    {
      title: 'It avoids the regulated surface entirely',
      body: 'Because subjects want a record rather than a new way to move money, the winning scope does not require handling funds. That keeps a semester-length project feasible.',
    },
  ],
  evidence: [
    '13 of 13 finance interviews recorded a specific, repeatable problem in the post-interview synthesis.',
    '12 of 13 named a tracking failure: forgetting a balance, losing track of it, or reconstructing it after the fact.',
    '10 of 13 described a payment-app mismatch that required a manual workaround.',
    'Largest single unpaid balance reported: $2,000, still outstanding at time of interview.',
  ],
}

// --- Required section 3: what didn't work / what we pivoted from ------------

export const PIVOTS = [
  {
    abandoned: 'That the core problem is splitting the bill',
    why: 'Subjects produced a working division method in nearly every interview and never volunteered it as a pain point. One subject did the whole thing with the phone’s calculator app and considered the matter closed.',
    changed: 'The product concept moved from a splitting calculator to a shared ledger. Split entry stays deliberately minimal.',
    downstream: 'Charter scope · Business Strategy',
  },
  {
    abandoned: 'That ShareTab needs payment integration',
    why: 'Subjects were not looking for a new place to send money — they already hold two or three apps and switch between them willingly. What they lacked was a record of what was owed.',
    changed: 'Payment rails are now explicitly out of scope. ShareTab records how a debt was settled; it never touches funds.',
    downstream: 'Charter scope boundary',
  },
  {
    abandoned: 'That roommates and recurring household bills are the primary segment',
    why: 'Recurring bills turned out to be the most stable category in the corpus — fixed amounts, designated payers, auto-drafts and shared accounts. The instability was in one-off social spending: restaurants, trips, group orders and event tickets.',
    changed: 'The target user shifted from roommates splitting rent to social groups splitting irregular one-off expenses. The working name is retained for continuity.',
    downstream: 'Charter stakeholder register · Business Strategy',
  },
  {
    abandoned: 'That users want automated, aggressive debt collection',
    why: 'The corpus shows the opposite instinct. Subjects soften or drop requests to protect relationships, and one described making the balance a gift specifically to release the burden from both sides.',
    changed: 'Reminders are user-initiated and private by default, and forgiving a balance is treated as a normal action rather than a failure state.',
    downstream: 'Charter scope · feature backlog',
  },
  {
    abandoned: 'Project Idea 2 — UTEP Course Auto Advisor and Load Balancer',
    why: '[TODO] — a team member must write the comparative go/no-go reasoning. Course policy prohibits AI use for go/no-go reasoning in any sprint deliverable, so this has to be written by hand and defended in Q&A.',
    changed: '[TODO] — record the date and forum in which the team made the final selection.',
    downstream: 'All Sprint 1 documents',
    isTodo: true,
  },
]
