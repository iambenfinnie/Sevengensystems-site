import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <div>
      {/* Hero — problem first */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your organization wants to use AI — but where do you start?
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Most organizations know AI matters but are not sure what is practical, what is safe, or who to trust.
            Seven Gen Systems helps you move forward with training programs that build real skills and
            implementation services that embed AI into your actual operations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Book a Strategy Call
              </Button>
            </Link>
            <Link to="/training-programs">
              <Button variant="secondary" size="lg">
                Join Training Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">The challenge</h2>
          <p className="mt-2 text-sm text-gray-600">
            Organizations across sectors are hearing that AI can help — but the reality on the ground is more complicated.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Staff are uncertain about what AI can actually do for their roles',
              'Leadership wants to adopt AI but lacks a clear, low-risk starting point',
              'Vendors over-promise and under-deliver, creating skepticism',
              'Sensitive data and community trust make experimentation feel risky',
              'There is no internal capacity to evaluate, build, or maintain AI systems',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-0.5 text-gray-400">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we do about it */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">What we do about it</h2>
          <p className="mt-2 text-sm text-gray-600">
            We offer two things: training that builds your team's confidence and skill, and implementation
            that puts AI to work in your everyday operations.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-sm font-medium text-gray-900">Training programs</h3>
              <p className="mt-2 text-sm text-gray-600">
                Structured, role-relevant AI training — from foundations to hands-on application to
                embedded enablement. Your team learns skills they can use the next day.
              </p>
              <Link to="/training-programs" className="mt-3 inline-block text-sm text-blue-700 underline hover:text-blue-900">
                View training programs
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-sm font-medium text-gray-900">AI Operations</h3>
              <p className="mt-2 text-sm text-gray-600">
                We identify where AI fits into your existing workflows and build reliable systems
                that reduce manual work — scoped tightly, with clear success criteria.
              </p>
              <Link to="/operational-ai" className="mt-3 inline-block text-sm text-blue-700 underline hover:text-blue-900">
                Learn about implementation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With — inline section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Who we work with</h2>
          <p className="mt-2 text-sm text-gray-600">
            We work with organizations that operate under real constraints — limited budgets, public accountability,
            sensitive data, and communities that deserve careful, respectful approaches to technology adoption.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                name: 'Indigenous organizations and band councils',
                desc: 'Managing community programs, economic development, and essential services with respect for data sovereignty and existing governance structures.',
              },
              {
                name: 'Nonprofits and community organizations',
                desc: 'Mission-driven organizations that run lean, report to funders, and need to demonstrate measurable outcomes without open-ended technology projects.',
              },
              {
                name: 'Government departments and agencies',
                desc: 'Public-sector teams responsible for program delivery, workforce development, or digital modernization with clear scope and accountability requirements.',
              },
              {
                name: 'Small and medium-sized businesses',
                desc: 'Businesses with operational bottlenecks that want practical AI adoption — not a research project — working with their existing team and systems.',
              },
            ].map((org) => (
              <div key={org.name}>
                <h3 className="text-sm font-medium text-gray-900">{org.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{org.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">How we work</h2>
          <p className="mt-2 text-sm text-gray-600">
            Every engagement is scoped, documented, and accountable.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'We start with a conversation — no commitment, no pitch deck',
              'We define success criteria together, in writing, before work begins',
              'Deliverables are fixed-scope: clear timelines, no surprises',
              'Your team keeps everything — no vendor lock-in, no dependency',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-0.5 text-gray-400">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900">Not sure where to start?</h2>
          <p className="mt-2 text-sm text-gray-600">
            That is normal. We are happy to talk through what might make sense for your organization — no obligation.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button variant="primary" size="md">
                Book a Strategy Call
              </Button>
            </Link>
            <Link to="/training-programs">
              <Button variant="secondary" size="md">
                Join Training Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
