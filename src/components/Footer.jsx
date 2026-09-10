import { Link } from 'react-router-dom'
import { PROJECT } from '../data/team.js'

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/80 bg-ink-900 py-6">
      <div className="page flex flex-col gap-2 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {PROJECT.name} · {PROJECT.course} · {PROJECT.institution}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/about" className="text-ink-400 hover:text-neon-300">
            About Us
          </Link>
          <a href={PROJECT.repoUrl} target="_blank" rel="noreferrer" className="text-ink-400 hover:text-neon-300">
            Source on GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
