import { Link } from 'react-router-dom'
import { PROJECT } from '../data/team.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 dark:border-navy-800 dark:bg-navy-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 text-xs text-slate-500 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {PROJECT.name} &middot; {PROJECT.course} &middot; {PROJECT.institution}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/about" className="hover:text-navy-700 dark:hover:text-slate-300">
            About Us
          </Link>
          <a
            href={PROJECT.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-navy-700 dark:hover:text-slate-300"
          >
            Source on GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
