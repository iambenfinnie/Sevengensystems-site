import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const navLinks = [
  { to: '/learn', label: 'Learn' },
  { to: '/grow', label: 'Grow' },
  { to: '/automate', label: 'Automate' },
  { to: '/about', label: 'About' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:grid md:grid-cols-3">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <div style={{ height: '56px', width: '180px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Logo height={80} zoom={1.3} />
            </div>
          </Link>

          {/* Center nav links — truly centered via grid */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:flex justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-500 transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-3 py-2 text-sm font-semibold text-center rounded-lg bg-teal-600 text-white hover:bg-teal-500"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
