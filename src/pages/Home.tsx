import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to Our
            <span className="block text-blue-600">Marketing Site</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            We help businesses grow with innovative marketing solutions.
            Discover how we can transform your brand and reach new audiences.
          </p>
          <div className="mt-10 flex justify-center gap-4">
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

export default Home
