// Phase 3 market research interviews, ShareTab (Team 008).
// Source: "Project Idea 1: Roommate Budget Tracker Web App (Finance)" interview
// sheets, conducted 10/13/2026. Subjects are recorded by role descriptor only;
// no subject names appear here. Answers are summarised from the sheets as
// written — do not add findings the sheets do not contain.

export const PHASE3 = {
  phase: 3,
  date: 'October 13, 2026',
  problemArea: 'Splitting shared expenses between roommates, friends, and groups who may use different payment methods.',
  interviewers: ['Ruben Martinez', 'Brenden Ucol', 'Amichai Fernandez', 'Sebastian Lucero-Chavez', 'Sebastian Ochoa'],
  recruiting:
    'The group went around several areas of UTEP and approached people, asking whether they had previous experience sharing expenses for everyday activities and whether they used an application to help them do so.',
  consentNote: 'Consent to take notes was given in every interview. No subject consented to follow-up contact, so these findings cannot be re-verified with the original subjects.',
}

export const INTERVIEWS = [
  {
    id: 1,
    time: '3:24 PM',
    location: 'UTEP Business Administration Building',
    role: 'UTEP Student',
    experience:
      'Has split expenses within a group for different activities, and described how they did so along with the tools used to track those expenses.',
    takeaway:
      'This student’s strongest need is an automated budgeting app with category allocations and overspending alerts, following a month in which they spent $1,000 of $1,500 in federal aid.',
    responses: [
      {
        q: 'What have you used to manage your finances, and have you found an alternative?',
        a: 'Used Excel for a while but wanted a more automated app, and had not yet found a reliable alternative.',
      },
      {
        q: 'What made you choose Excel over other methods?',
        a: 'Earned an Excel Expert certification during sophomore year of high school, which made Excel a familiar option, but had forgotten some of the steps over time and wanted an app with automation already built in.',
      },
      {
        q: 'What features would make a budgeting app appealing to you?',
        a: 'Wanted clear spending categories for needs and wants — including utilities, entertainment, outings with friends, and food — with money allocated to each category.',
      },
      {
        q: 'Are you more interested in tracking expenses or dividing your budget?',
        a: 'More interested in allocating a budget. After receiving $1,500 in federal aid, they spent $1,000 in one month because the money was all in their checking account and easy to spend by swiping a card. They wanted separate budget allocations and warnings when approaching or exceeding a limit.',
      },
      {
        q: 'The last time you ate out with friends, how did you split the bill, what tool did you use, and how long did it take?',
        a: 'Described a visit to Olive Garden where the restaurant’s device had an app that identified who ordered each item and helped handle the split. They did not give a specific time for splitting the bill or receiving repayment.',
      },
    ],
  },
  {
    id: 2,
    time: '3:48 PM',
    location: 'UTEP Library',
    role: 'UTEP Student',
    experience:
      'Has split expenses within a group for different activities, and described how they did so along with the tools used to track those expenses.',
    takeaway:
      'This student wants easy bank transfers, clear visibility into spending and pending charges, and practical budgeting guidance that gives them a reason to keep using a finance app.',
    responses: [
      {
        q: 'When you split a bill with friends, what tools do you use and what makes the process difficult?',
        a: 'Discussed payment platforms such as Cash App and Zelle, describing confusing interfaces and a Zelle process that required entering a new recipient’s phone number, adding the person as a contact, and entering the information again.',
      },
      {
        q: 'How do you track expenses, and have you tried a financial app?',
        a: 'Had briefly tried an app they believed was Rocket Money and wanted better awareness of money leaving their account. Seeing spending and subscriptions together in one place was appealing.',
      },
      {
        q: 'What would make a financial app more useful or help you continue using it?',
        a: 'Wanted a built-in calculator that suggests spending amounts for categories such as car payments, food, and leisure based on income, along with guidance on what to do with unallocated money. They were unsure whether Rocket Money already offered those features.',
      },
      {
        q: 'How long did it take to get paid back the last time you split an expense?',
        a: 'Said repayment did not take very long when the other person intended to pay promptly, but gave no exact duration. They felt delays depended on the person and on whether their banks made the chosen transfer service easy to use.',
      },
      {
        q: 'Would having payments and finances in one place be helpful?',
        a: 'Wanted broad integration with commonly used banks, easy transfers, and a clear view of account balances. They referred to a shared transfer service in Canada as an example but could not recall its name.',
      },
      {
        q: 'What account information should an all-in-one app make clear?',
        a: 'Wanted pending charges shown prominently so users do not mistake money about to leave the account for money available to spend, which they felt could help prevent overdrafts.',
      },
      {
        q: 'Does your current solution satisfy these needs, and why did you stop using the app?',
        a: 'Did not identify a particular disliked feature. The app simply did not keep them coming back, making continued engagement the main issue they described.',
      },
    ],
  },
  {
    id: 3,
    time: '4:02 PM',
    location: 'UTEP Library',
    role: 'UTEP Student',
    experience:
      'Has split expenses within a group for different activities, and described how they did so along with the tools used to track those expenses.',
    takeaway:
      'This student’s frequent need to remind friends about repayment suggests value in a mobile app that supports equal and itemized splits and payment reminders, while earning trust before adding AI access to financial information.',
    responses: [
      {
        q: 'When you eat out with friends, how do you split the bill and pay each other back?',
        a: 'One person usually pays the bill, and the others reimburse that person through Zelle or Cash App. The group calculates the split separately after the initial payment rather than tracking it within those apps.',
      },
      {
        q: 'Do you divide the total equally or itemize the receipt?',
        a: 'The approach depends on the group: sometimes they divide the total equally by the number of diners, and other times they review the receipt and assign each person’s items.',
      },
      {
        q: 'Do friends usually pay on time, or do you have to remind them?',
        a: 'Friends sometimes forget unintentionally, and someone often has to remind them to send their share. The student said they are usually the person who handles the split, but did not provide an exact repayment time.',
      },
      {
        q: 'Do you use a dedicated bill-splitting app or another tool?',
        a: 'Mostly uses the calculator app on their phone, and turns to Excel when the calculation becomes more complicated.',
      },
      {
        q: 'Why do you choose Excel?',
        a: 'Excel is familiar and makes it convenient to add amounts and divide costs.',
      },
      {
        q: 'What would make you switch from Excel or the calculator to another app?',
        a: 'Wanted an app that is easy to use on a phone and offers useful features beyond a calculator. They avoid Excel on mobile because they do not think it works or displays well there.',
      },
      {
        q: 'How do you feel about AI features in a finance app?',
        a: 'Uses AI frequently and was open to AI in a future finance app, but had not used a finance app with built-in AI or personally linked financial information to ChatGPT because they did not yet trust it with that information.',
      },
    ],
  },
]

// Patterns the team read across the three Phase 3 sheets. Each is traceable to
// specific interviews; the numbers in `seenIn` refer to interview ids above.
export const PHASE3_PATTERNS = [
  {
    title: 'Budgeting, not just splitting, is what subjects asked for',
    seenIn: [1, 2],
    body:
      'Both subjects who talked about personal finance wanted category allocations and guidance on what to do with their money, not only a record of who owes what. One wanted warnings when approaching or exceeding a limit after overspending federal aid; the other wanted a calculator that suggests amounts per category based on income.',
  },
  {
    title: 'Spreadsheets are the incumbent, and they lose on mobile',
    seenIn: [1, 3],
    body:
      'Excel came up in two of the three interviews as the current tool, chosen because it is familiar rather than because it is good. Both subjects named the same limitation: one had forgotten the steps and wanted automation, the other avoids Excel on a phone because it does not display well.',
  },
  {
    title: 'Payment apps are used for settling, never for tracking',
    seenIn: [2, 3],
    body:
      'Zelle and Cash App appeared as the way money moves, but neither subject tracked balances inside them. One described calculating the split separately after the initial payment; the other described Zelle’s recipient setup as repetitive and confusing.',
  },
  {
    title: 'Reminding people is still manual work',
    seenIn: [3],
    body:
      'Friends forget unintentionally and someone has to chase them. This subject is usually the person who handles the split and therefore the person doing the reminding — consistent with the reminder friction recorded in earlier phases.',
  },
  {
    title: 'Visibility into pending money is an unmet need',
    seenIn: [2],
    body:
      'One subject specifically wanted pending charges shown prominently so users do not mistake money about to leave the account for money available to spend, framing it as overdraft prevention.',
  },
  {
    title: 'Interest in AI is real but gated on trust',
    seenIn: [3],
    body:
      'The one subject asked about AI uses it frequently and was open to it in a finance app, but had not linked financial information to an AI tool because they did not yet trust it with that data.',
  },
]
