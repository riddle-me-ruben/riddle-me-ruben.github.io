import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <SectionHeading eyebrow="404" title="Page not found" />
      <p className="mb-6 text-sm text-ink-400">That page isn&rsquo;t part of the portal.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  )
}
