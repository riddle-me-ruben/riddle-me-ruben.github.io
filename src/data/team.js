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
    owns: 'Market Research Lead',
    bio: '',
    interviews: 5,
  },
  {
    id: 'sao',
    name: 'Sebastian A. Ochoa',
    initials: 'SO',
    photo: null,
    owns: 'Scrum Master',
    bio: '',
    interviews: 5,
  },
  {
    id: 'rjm',
    name: 'Ruben J. Martinez',
    initials: 'RM',
    photo: null,
    owns: 'Repository & Configuration Manager',
    bio:
      'Ruben is a Master of Science in Computer Science candidate at The University of Texas at El Paso, with expertise in advanced algorithms and software engineering. His professional software engineering experience includes hands-on work within Scrum teams and the delivery of production systems. He oversees ShareTab\'s repository, configuration, and integration workflow.',
    interviews: 5,
  },
  {
    id: 'smlc',
    name: 'Sebastian M. Lucero-Chavez',
    initials: 'SL',
    photo: null,
    owns: 'Full-Stack Developer',
    bio: '',
    interviews: 5,
  },
  {
    id: 'bnu',
    name: 'Brenden N. Ucol',
    initials: 'BU',
    photo: null,
    owns: 'Documentation Lead',
    bio: '',
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
    'When groups split shared expenses, dividing the money is easy. Tracking each balance is not. People forget what they owe, chase payments awkwardly across mismatched apps, or quietly write debts off.',
  course: 'CS 4390 / 5388 - Software Project Management',
  institution: 'The University of Texas at El Paso',
  repoUrl: 'https://github.com/riddle-me-ruben/project-spm',
}
