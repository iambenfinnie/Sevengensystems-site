import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white">Seven Gen Systems</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              AI that grows your business, automates your operations, and trains your team.
            </p>
            <p className="mt-4 text-xs text-slate-500">Alberta, Canada &nbsp;·&nbsp; 51% Indigenous-Owned &nbsp;·&nbsp; CCIB Certified</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/grow" className="text-sm text-slate-400 hover:text-white transition-colors">Grow</Link></li>
              <li><Link to="/automate" className="text-sm text-slate-400 hover:text-white transition-colors">Automate</Link></li>
              <li><Link to="/learn" className="text-sm text-slate-400 hover:text-white transition-colors">Learn</Link></li>
              <li><Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Get in Touch</h4>
            <p className="mt-4 text-sm text-slate-400">contact@sevengensystems.com</p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-500 transition-colors"
              >
                Book a Free Discovery Call
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Seven Gen Systems Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
