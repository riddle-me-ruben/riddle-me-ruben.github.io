import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Wallet, Menu, X, ChevronDown } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { PROJECT } from '../data/team.js'

// Guidelines §2: Home, About Us, and one top-level page per sprint. Earlier
// sprint pages stay live for the rest of the semester, so this list only ever
// grows — nothing is replaced.
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
      { to: '/sprint-1/contributions', label: 'Contributions & AI Disclosure' },
    ],
  },
  { to: '/sprint-2', label: 'Sprint 2' },
]

const linkBase =
  'flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors'
const linkIdle =
  'text-slate-600 hover:bg-slate-100 hover:text-navy-800 dark:text-slate-300 dark:hover:bg-navy-800 dark:hover:text-white'
const linkActive = 'bg-navy-800 text-white shadow-card dark:bg-accent-600'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-navy-800 dark:bg-navy-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-accent-400 shadow-card">
            <Wallet size={20} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-navy-900 dark:text-slate-50 sm:text-base">
              {PROJECT.name} · Living Project Portal
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{PROJECT.course}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.to} className="group relative">
                <NavLink
                  to={item.to}
                  className={() =>
                    `${linkBase} ${pathname.startsWith(item.to) ? linkActive : linkIdle}`
                  }
                >
                  {item.label}
                  <ChevronDown size={14} />
                </NavLink>
                <div className="invisible absolute left-0 top-full z-50 w-60 pt-1 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-cardHover dark:border-navy-800 dark:bg-navy-900">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-sm transition-colors ${
                            isActive
                              ? 'bg-slate-100 font-medium text-navy-900 dark:bg-navy-800 dark:text-white'
                              : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-navy-800'
                          }`
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
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-700 transition-colors hover:bg-slate-100 dark:border-navy-700 dark:bg-navy-900 dark:text-accent-400 dark:hover:bg-navy-800"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-700 dark:border-navy-700 dark:bg-navy-900 dark:text-slate-200 md:hidden"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-2 dark:border-navy-800 dark:bg-navy-950 md:hidden">
          <div className="flex flex-col gap-1 pb-2">
            {NAV.map((item) => (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-3 border-l border-slate-200 pl-3 dark:border-navy-800">
                    {item.children.map((c) => (
                      <NavLink
                        key={c.to}
                        to={c.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-2 text-sm ${
                            isActive
                              ? 'font-medium text-navy-900 dark:text-white'
                              : 'text-slate-600 dark:text-slate-400'
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
