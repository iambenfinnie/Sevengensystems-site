const services = [
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to boost your online presence.',
  },
  {
    title: 'Brand Strategy',
    description: 'Build a strong brand identity that resonates with your target audience.',
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that tells your story and drives conversions.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic to your site.',
  },
]

function Services() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            We offer a wide range of marketing services to help your business succeed.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
