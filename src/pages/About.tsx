function About() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h1>
            <p className="mt-6 text-lg text-gray-500">
              We are a team of passionate marketers dedicated to helping businesses
              reach their full potential. With years of experience in the industry,
              we understand what it takes to succeed in today&apos;s competitive market.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our mission is to deliver innovative marketing solutions that drive
              real results. We believe in transparency, collaboration, and
              continuous improvement.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="rounded-lg bg-gray-100 p-8">
              <h2 className="text-xl font-semibold text-gray-900">Our Values</h2>
              <ul className="mt-4 space-y-3 text-gray-500">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Excellence in everything we do
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Client success is our success
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Innovation and creativity
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  Integrity and transparency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
