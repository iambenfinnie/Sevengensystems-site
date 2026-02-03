const services = [
  {
    title: 'Web Development',
    description: 'Custom websites built with modern technologies.',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    title: 'Consulting',
    description: 'Expert guidance for your digital transformation.',
  },
]

export function Services() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            We offer a range of services to help your business succeed.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
