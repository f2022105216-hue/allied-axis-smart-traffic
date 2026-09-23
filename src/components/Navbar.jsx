import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, Menu, ShieldCheck, X } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/traffic', label: 'Traffic' },
  { to: '/alerts', label: 'Alerts' },
  { to: '/traffic-rules', label: 'Rules' },
  { to: '/traffic-signs', label: 'Signs' },
  { to: '/safety-tips', label: 'Tips' },
  { to: '/emergency', label: 'Emergency' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/60">
            <ShieldCheck className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">Allied Axis</p>
            <h1 className="text-lg font-bold text-white">Traffic Safety</h1>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/60'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/report-issue"
          className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 lg:inline-flex"
        >
          Report Issue
          <ArrowRight className="h-4 w-4" />
        </NavLink>

        <button
          type="button"
          className="rounded-xl border border-slate-700 p-2 text-slate-200 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm ${
                    isActive ? 'bg-emerald-500/15 text-emerald-300' : 'text-slate-300 hover:bg-slate-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/report-issue"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 font-semibold text-slate-950"
            >
              Report Issue
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </div>
      )}
    </motion.header>
  )
}

export default Navbar
