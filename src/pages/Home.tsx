import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to Our Site
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help businesses grow with modern solutions and expert guidance.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/services">
              <Button variant="primary" size="lg">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
