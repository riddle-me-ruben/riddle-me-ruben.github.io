// Single source of truth for the team. Guidelines §2 requires every member to
// have a short bio on the About Us page: who they are, their role, and what
// part of the project they own. Bios are PLACEHOLDER text until each member
// writes their own — they must be able to defend their page in the final Q&A.

export const TEAM = [
  {
    id: 'aaf',
    name: 'Amichai A. Fernandez',
    initials: 'AF',
    role: 'Project Lead / Product Owner',
    color: 'bg-navy-600',
    owns: 'Business Strategy · stakeholder register',
    bio: 'PLACEHOLDER — Amichai to write 2-3 sentences: year and major, relevant background, and what he owns on this project.',
    bioPlaceholder: true,
    research: { finance: 5, education: 0 },
  },
  {
    id: 'sao',
    name: 'Sebastian A. Ochoa',
    initials: 'SO',
    role: 'Scrum Master / Delivery Lead',
    color: 'bg-accent-500',
    owns: 'Portal build & deployment · sprint cadence',
    bio: 'PLACEHOLDER — Sebastian O. to write 2-3 sentences: year and major, relevant background, and what he owns on this project.',
    bioPlaceholder: true,
    research: { finance: 0, education: 5 },
  },
  {
    id: 'rjm',
    name: 'Ruben J. Martinez',
    initials: 'RM',
    role: 'Lead Engineer / Architecture',
    color: 'bg-emerald-600',
    owns: 'Repository & architecture · market research lead',
    bio: 'PLACEHOLDER — Ruben to write 2-3 sentences: year and major, relevant background, and what he owns on this project.',
    bioPlaceholder: true,
    research: { finance: 5, education: 0 },
  },
  {
    id: 'smlc',
    name: 'Sebastian M. Lucero-Chavez',
    initials: 'SL',
    role: 'QA Lead / Research Synthesis',
    color: 'bg-purple-600',
    owns: 'Interview synthesis · quality review',
    bio: 'PLACEHOLDER — Sebastian L-C. to write 2-3 sentences: year and major, relevant background, and what he owns on this project.',
    bioPlaceholder: true,
    research: { finance: 3, education: 2 },
  },
  {
    id: 'bnu',
    name: 'Brenden N. Ucol',
    initials: 'BU',
    role: 'Data & Infrastructure Lead',
    color: 'bg-cyan-600',
    owns: 'Project Charter · comparative research on Idea 2',
    bio: 'PLACEHOLDER — Brenden to write 2-3 sentences: year and major, relevant background, and what he owns on this project.',
    bioPlaceholder: true,
    research: { finance: 0, education: 5 },
  },
]

export function memberById(id) {
  return TEAM.find((m) => m.id === id)
}

export const PROJECT = {
  name: 'ShareTab',
  subtitle: 'Roommate Budget Tracker',
  domain: 'Finance',
  // Guidelines §2: Home needs a one-sentence description of the business problem.
  oneSentenceProblem:
    'When groups split shared expenses, the money is easy to divide but almost impossible to track — so balances are forgotten, chased awkwardly across mismatched payment apps, or quietly written off.',
  course: 'CS 4390 / 5388 — Software Project Management',
  institution: 'The University of Texas at El Paso',
  repoUrl: 'https://github.com/riddle-me-ruben/project-spm',
}
