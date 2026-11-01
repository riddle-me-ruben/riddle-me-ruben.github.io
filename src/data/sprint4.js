export const SERVICE_LEVEL_TERMS = [
  {
    term: 'SLI',
    name: 'Service Level Indicator',
    meaning:
      'ShareTab measures the percentage of time the live portal is reachable and the percentage of recorded expense transactions that contain the correct dollar amount during each sprint.',
  },
  {
    term: 'SLO',
    name: 'Service Level Objective',
    meaning:
      'During each 14-day sprint, ShareTab will maintain 99.9% portal availability and 99.99% transaction-dollar correctness.',
  },
  {
    term: 'SLA',
    name: 'Service Level Agreement',
    meaning:
      'If ShareTab misses either objective, new feature work pauses while the incident team restores reliability or correctness. The Communicator notifies the fixers according to the assigned severity deadline.',
  },
]

export const SERVICE_LEVELS = [
  {
    key: 'availability',
    objective: 'Availability',
    indicator: 'Percentage of minutes that the live ShareTab portal is reachable.',
    target: '99.9% uptime',
    window: 'Each 14-day sprint',
    measurement:
      'The Repository and Configuration Manager reviews recorded portal availability at the end of each sprint.',
    owner: 'Ruben J. Martinez, Repository and Configuration Manager',
    audience: 'Instructor, reviewers, and public visitors',
    budget: '20 minutes and 10 seconds of downtime per sprint',
    budgetMath: '0.1% of 20,160 sprint minutes',
    spendsIt: 'Each minute that the live portal is unavailable.',
    policy:
      'If downtime exceeds 20 minutes and 10 seconds in a sprint, new feature releases pause. The Incident Commander assigns recovery and reliability work, and releases resume only after the portal is stable.',
    notice:
      'Brenden Ucol tells the instructor within 4 hours for a Severity 1 incident. Other misses are included in the next weekly update.',
  },
  {
    key: 'correctness',
    objective: 'Transaction correctness',
    indicator:
      'Percentage of recorded expense transactions whose saved dollar amount matches the intended dollar amount.',
    target: '99.99% correct',
    window: 'Each 14-day sprint after transaction entry is implemented',
    measurement:
      'The Scrum Master reviews transaction test results and reported calculation incidents at the end of each sprint.',
    owner: 'Sebastian A. Ochoa, Scrum Master',
    audience: 'Affected ShareTab users and the instructor',
    budget: '0.01%, or 1 incorrect amount per 10,000 transactions',
    budgetMath: 'For fewer than 10,000 transactions, the practical budget is zero incorrect amounts',
    spendsIt: 'A transaction that stores or displays the wrong dollar amount.',
    policy:
      'If the correctness budget is spent, releases that change transaction calculations pause. The Fixers correct the calculation and add a regression test. The Incident Commander approves the return to feature work.',
    notice:
      'Brenden Ucol notifies affected users as soon as the error is confirmed and tells the instructor within 4 hours for Severity 1 or in the weekly update for Severity 2.',
  },
]

export const SEVERITY_LEVELS = [
  {
    level: 'Severity 1',
    example:
      'The portal is unavailable within 48 hours of a deadline or review, or a widespread calculation error affects balances.',
    response: 'Start fixing within 2 hours',
    notice: 'Tell the instructor within 4 hours',
  },
  {
    level: 'Severity 2',
    example:
      'A required page or link is broken, or an isolated transaction calculation error has a known workaround.',
    response: 'Start fixing within 24 hours',
    notice: 'Include it in the weekly update',
  },
  {
    level: 'Severity 3',
    example: 'Content is stale beyond its objective, or a minor visual defect does not block required content.',
    response: 'Address it by the next weekly check',
    notice: 'Tell the instructor only if it repeats',
  },
]

export const INCIDENT_ROLES = [
  {
    role: 'Incident Commander',
    member: 'Sebastian M. Lucero-Chavez',
    responsibility: 'Holds the overall picture, sets severity, assigns work, and decides when normal work resumes.',
  },
  {
    role: 'Fixers',
    member: 'Ruben J. Martinez and Sebastian A. Ochoa',
    responsibility: 'The only team members who change the site or calculation logic during an incident.',
  },
  {
    role: 'Communicator',
    member: 'Brenden N. Ucol',
    responsibility: 'Updates the instructor, affected users, and the team at the times defined by the severity level.',
  },
  {
    role: 'Everyone Else',
    member: 'Amichai A. Fernandez',
    responsibility: 'Stays out of the repository during the incident and supports the response only when assigned.',
  },
]

export const SKETCH_GROUPS = [
  {
    title: 'Core expense flow',
    image: '/sprint-4/sharetab-core-sketches.png',
    alt: 'Hand-drawn ShareTab sketches for the home screen, payment redirects, and group tab.',
    description:
      'The first sheet explores the main dashboard, handoffs to external payment services, and a group view that summarizes the total tab and each member balance.',
    features: [
      'Home screen with safe-to-spend guidance, upcoming bills, savings, and net balance',
      'Payment redirects to Apple Pay, PayPal, Cash App, Venmo, and Zelle',
      'Group tab with a total balance and paid or owed amounts by member',
    ],
  },
  {
    title: 'Spending analytics',
    image: '/sprint-4/sharetab-analytics-sketch.png',
    alt: 'Hand-drawn ShareTab spending analytics screen with a trend chart and category totals.',
    description:
      'The second sheet explores a paid analytics view with a spending trend, category breakdown, average spending, and the amount remaining in the budget.',
    features: [
      'Monthly spending trend compared with the previous month',
      'Category totals for food, shopping, transportation, fun, and other expenses',
      'Average spending and estimated budget remaining',
    ],
  },
]
