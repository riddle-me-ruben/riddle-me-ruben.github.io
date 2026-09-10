// The five team members. Guidelines require every member to have a short bio
// on About Us covering who they are and what part of the project they own.
//
// `photo`: drop a square image into public/team/ and set the path here, e.g.
//   photo: '/team/ruben.jpg'
// While it is null the avatar falls back to initials, so the layout is
// identical whether or not photos exist yet.

export const TEAM = [
  {
    id: 'aaf',
    name: 'Amichai A. Fernandez',
    initials: 'AF',
    photo: null,
    owns: 'Portal build & deployment · sprint cadence',
    bio: '[TODO] — 2-3 sentences: year and major, relevant background, and what you own on this project.',
    bioTodo: true,
    interviews: 5,
  },
  {
    id: 'sao',
    name: 'Sebastian A. Ochoa',
    initials: 'SO',
    photo: null,
    owns: 'Business Strategy · stakeholder register',
    bio: '[TODO] — 2-3 sentences: year and major, relevant background, and what you own on this project.',
    bioTodo: true,
    interviews: 5,
  },
  {
    id: 'rjm',
    name: 'Ruben J. Martinez',
    initials: 'RM',
    photo: null,
    owns: 'Repository & architecture · market research lead',
    bio: '[TODO] — 2-3 sentences: year and major, relevant background, and what you own on this project.',
    bioTodo: true,
    interviews: 5,
  },
  {
    id: 'smlc',
    name: 'Sebastian M. Lucero-Chavez',
    initials: 'SL',
    photo: null,
    owns: 'Interview synthesis · quality review',
    bio: '[TODO] — 2-3 sentences: year and major, relevant background, and what you own on this project.',
    bioTodo: true,
    interviews: 5,
  },
  {
    id: 'bnu',
    name: 'Brenden N. Ucol',
    initials: 'BU',
    photo: null,
    owns: 'Project Charter · comparative research',
    bio: '[TODO] — 2-3 sentences: year and major, relevant background, and what you own on this project.',
    bioTodo: true,
    interviews: 5,
  },
]

export function memberById(id) {
  return TEAM.find((m) => m.id === id)
}

export const PROJECT = {
  name: 'ShareTab',
  subtitle: 'Roommate Budget Tracker',
  // Guidelines: Home needs a one-sentence description of the business problem.
  oneSentenceProblem:
    'When groups split shared expenses, the money is easy to divide but almost impossible to track — so balances are forgotten, chased awkwardly across mismatched payment apps, or quietly written off.',
  course: 'CS 4390 / 5388 — Software Project Management',
  institution: 'The University of Texas at El Paso',
  repoUrl: 'https://github.com/riddle-me-ruben/project-spm',
}
