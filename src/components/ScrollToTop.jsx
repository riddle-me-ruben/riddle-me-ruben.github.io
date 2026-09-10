import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Navigating between pages should land at the top, not wherever the previous
// page was scrolled to. Hash links (#section) are left alone.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
