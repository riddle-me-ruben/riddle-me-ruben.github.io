export const PHASE1_RESEARCH = {
  totalInterviews: 25,
  interviewsPerConcept: 5,
  concepts: [
    {
      name: 'Roommate Budget Tracker Web App',
      area: 'Finance',
      owner: 'Ruben J. Martinez',
      description:
        'A shared expense tracker where groups record purchases, balances, reminders, and settlement status while continuing to use their preferred payment services.',
      signal:
        'All five interviews surfaced coordination problems around shared expenses. Participants relied on text messages, payment histories, memory, or another person to track and route payments.',
      selected: true,
      decision:
        'We continued with this concept because every interview revealed a concrete coordination problem, and the need extended beyond roommates to friends, families, and other groups.',
    },
    {
      name: 'Live UTEP Campus Parking Lot Tracker',
      area: 'Transportation',
      owner: 'Brenden N. Ucol',
      description:
        'A campus tool that would show current parking availability and help UTEP commuters choose a lot before arriving.',
      signal:
        'Students described crowded lots, searches lasting up to 30 minutes, late arrivals, parking outside assigned areas, and a parking citation. Early arrival reduced the problem for one participant.',
      selected: false,
      decision:
        'We moved away from this concept because it depended on reliable live occupancy data and remained specific to UTEP parking operations. The team prioritized a product that could be validated and built without campus infrastructure access.',
    },
    {
      name: 'Live Border Traffic App',
      area: 'Transportation',
      owner: 'Sebastian M. Lucero-Chavez',
      description:
        'A travel-planning tool that would combine current border wait information with crossing estimates and route guidance.',
      signal:
        'Border commuters described unpredictable waits, limited trust in available estimates, leaving much earlier than planned, and changing or canceling plans when the crossing was uncertain.',
      selected: false,
      decision:
        'We moved away from this concept because its usefulness depended on obtaining more reliable real-time border data than existing sources provided. That external dependency created substantial feasibility risk for a semester project.',
    },
    {
      name: 'Streaming Subscription Hub',
      area: 'Streaming Services',
      owner: 'Amichai A. Fernandez',
      description:
        'A single hub for managing streaming subscriptions, discovering content across services, and simplifying cancellation.',
      signal:
        'Participants saw value in consolidated discovery and cancellation, but the signal was mixed. Some described long searches and rising prices, while others considered their current process manageable.',
      selected: false,
      decision:
        'We moved away from this concept because the interviews did not reveal a consistent unmet need. Several participants were satisfied with their existing discovery and subscription-management habits.',
    },
    {
      name: 'UTEP Course Auto Advisor and Load Balancer',
      area: 'Education',
      owner: 'Sebastian A. Ochoa',
      description:
        'A third-party course planning tool that would recommend future UTEP computer science courses and help students balance semester workload.',
      signal:
        'All five participants used multiple information sources before advising. Four would consider a planning tool if its information were relevant and trustworthy, while one preferred peer guidance.',
      selected: false,
      decision:
        'This concept advanced to focused research, but we ultimately moved away from it because adoption depended on trustworthy institutional course data and advising guidance. ShareTab produced a clearer repeated problem with fewer external data dependencies.',
    },
  ],
}
