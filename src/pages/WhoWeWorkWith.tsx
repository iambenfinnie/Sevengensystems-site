export function WhoWeWorkWith() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Who We Work With</h1>
          <p className="mt-4 text-gray-600">
            We work with organizations that operate under real constraints — limited budgets, public accountability,
            sensitive data, and communities that deserve careful, respectful approaches to technology adoption.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Types of organizations</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Indigenous organizations and band councils</h3>
              <p className="mt-1 text-sm text-gray-600">
                Organizations managing community programs, economic development, and essential services.
                They need technology that respects data sovereignty, builds internal capacity, and
                operates within existing governance structures.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Nonprofits and community development organizations</h3>
              <p className="mt-1 text-sm text-gray-600">
                Mission-driven organizations that run lean, report to funders, and need to demonstrate
                measurable outcomes. They cannot afford open-ended technology projects or tools
                that create vendor dependency.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Government departments and agencies</h3>
              <p className="mt-1 text-sm text-gray-600">
                Public-sector teams responsible for program delivery, workforce development, or digital
                modernization. They require clear scope, documented processes, and accountability
                at every step.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Small and medium-sized businesses</h3>
              <p className="mt-1 text-sm text-gray-600">
                Businesses with operational bottlenecks that want practical AI adoption — not a
                research project. They need solutions that work with their existing team and
                systems, not a wholesale transformation.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Workforce and economic development agencies</h3>
              <p className="mt-1 text-sm text-gray-600">
                Organizations funding or coordinating skills development, employment programs, or
                economic capacity building. They need training partners who can deliver
                structured, accountable programs with clear outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">What these organizations have in common</h2>
          <ul className="mt-6 space-y-2">
            {[
              'They operate under real constraints: limited budgets, public reporting, sensitive data',
              'They are cautious about AI — and they should be',
              'They need to see clear value before committing to anything larger',
              'They want their team to understand and control the systems they adopt',
              'They cannot afford hype, scope creep, or vendor lock-in',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-0.5 text-gray-400">—</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            If this sounds like your organization, we are probably a good fit.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">How we earn trust</h2>
          <p className="mt-2 text-sm text-gray-600">
            We don't ask for trust upfront. We structure every engagement to demonstrate value before
            asking for anything more.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Written scope and success criteria</h3>
              <p className="mt-1 text-sm text-gray-600">
                Every engagement starts with a documented scope. You know exactly what will be delivered,
                when, and how success will be measured.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Fixed deliverables, no surprises</h3>
              <p className="mt-1 text-sm text-gray-600">
                Budgets are predictable. Changes go through a documented process. There are no
                open-ended invoices.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Your team retains control</h3>
              <p className="mt-1 text-sm text-gray-600">
                Everything we build is designed to be understood, operated, and maintained by
                your staff — not just by us.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Responsible data practices</h3>
              <p className="mt-1 text-sm text-gray-600">
                Your data stays yours. We follow responsible handling practices and do not use
                your information beyond the agreed scope.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
