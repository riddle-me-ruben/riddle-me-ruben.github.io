import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Wallet, Menu, X, ChevronDown } from 'lucide-react'
import { PROJECT } from '../data/team.js'

// Single source of truth for navigation. Sprint entries carry `children`,
// which render as a dropdown on desktop and an indented group on mobile.
export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  {
    to: '/sprint-1',
    label: 'Sprint 1',
    children: [
      { to: '/sprint-1/market-research', label: 'Market Research' },
      { to: '/sprint-1/business-strategy', label: 'Business Strategy' },
      { to: '/sprint-1/project-charter', label: 'Project Charter' },
      { to: '/sprint-1/contributions', label: 'Contributions' },
    ],
  },
  { to: '/sprint-2', label: 'Sprint 2' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <div className="page flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-500 text-ink-950">
            <Wallet size={20} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-ink-50 sm:text-base">
              {PROJECT.name} <span className="text-ink-500">·</span> Living Project Portal
            </p>
            <p className="text-xs text-ink-400">{PROJECT.course}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.to} className="group relative">
                <NavLink
                  to={item.to}
                  className={`nav-link ${pathname.startsWith(item.to) ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </NavLink>
                <div className="invisible absolute left-0 top-full z-50 w-56 pt-1 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="nav-dropdown">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        className={({ isActive }) =>
                          `nav-dropdown-link ${isActive ? 'nav-dropdown-link-active' : ''}`
                        }
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-ink-200 md:hidden"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-ink-700/80 bg-ink-950 px-4 py-2 md:hidden">
          <div className="flex flex-col gap-1 pb-2">
            {NAV.map((item) => (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-3 border-l border-ink-700 pl-3">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-2 text-sm ${
                            isActive ? 'font-medium text-neon-300' : 'text-ink-400'
                          }`
                        }
                      >
                        {c.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
