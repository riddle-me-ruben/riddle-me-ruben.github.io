import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <div className="py-12 text-center">
      <SectionHeading eyebrow="404" title="Page not found" />
      <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
        That page isn&rsquo;t part of the portal.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-lg bg-navy-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-navy-700 dark:bg-accent-600 dark:hover:bg-accent-500"
      >
        Back to Home
      </Link>
    </div>
  )
}
