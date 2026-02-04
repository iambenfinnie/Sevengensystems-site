import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">
              Seven Gen Systems
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Indigenous-owned AI education and automation implementation.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wide">Pages</h3>
            <ul className="mt-2 space-y-1">
              <li><Link to="/who-we-work-with" className="text-sm text-gray-400 hover:text-white">Who We Work With</Link></li>
              <li><Link to="/training-programs" className="text-sm text-gray-400 hover:text-white">Training Programs</Link></li>
              <li><Link to="/operational-ai" className="text-sm text-gray-400 hover:text-white">Operational AI</Link></li>
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wide">Contact</h3>
            <p className="mt-2 text-sm text-gray-400">contact@sevengensystems.com</p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="text-sm text-gray-300 underline hover:text-white"
              >
                Let's connect →
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Seven Gen Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
