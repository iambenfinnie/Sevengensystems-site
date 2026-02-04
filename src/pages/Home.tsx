import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Practical AI training and automation for Indigenous organizations, nonprofits, and small businesses.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We help your team build real skills and working systems — with clear scope, written success criteria, and no vendor lock-in.
          </p>
          <ul className="mt-6 space-y-2 text-left max-w-md mx-auto">
            <li className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="mt-0.5 text-gray-400">—</span>
              Practical: training tied to your actual workflows and tools
            </li>
            <li className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="mt-0.5 text-gray-400">—</span>
              Low-risk: fixed scope, defined deliverables, no surprises
            </li>
            <li className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="mt-0.5 text-gray-400">—</span>
              Accountable: written acceptance criteria before work begins
            </li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/partners">
              <Button variant="primary" size="lg">
                Partner / Funder Inquiry
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">How we work</h2>
          <p className="mt-2 text-sm text-gray-600">
            Every engagement follows the same four-step process. No open-ended contracts.
          </p>
          <ol className="mt-6 space-y-4">
            {[
              {
                step: '1',
                title: 'Discover & define success criteria',
                desc: 'We document what "done" looks like before any work starts. You review and approve the scope in writing.',
              },
              {
                step: '2',
                title: 'Build a fixed-scope deliverable',
                desc: 'A training module or automation — scoped tightly, with a clear timeline and no scope creep.',
              },
              {
                step: '3',
                title: 'Validate against success criteria',
                desc: 'We test the deliverable against the criteria you approved. You confirm it works before the engagement closes.',
              },
              {
                step: '4',
                title: 'Optional ongoing support',
                desc: 'If you want continued help, we offer a monthly support retainer. No obligation.',
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-900 text-white text-sm flex items-center justify-center font-medium">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Safeguards */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Built-in safeguards</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Privacy-first data handling</h3>
              <p className="mt-1 text-sm text-gray-600">
                Your data stays yours. We follow responsible data practices and will not use your information beyond the agreed scope.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Scope control</h3>
              <p className="mt-1 text-sm text-gray-600">
                Every project has a written scope. Changes go through a documented change-order process — no surprises on your invoice.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">No vendor lock-in</h3>
              <p className="mt-1 text-sm text-gray-600">
                We build systems your staff can understand, maintain, and own. You keep full control when the engagement ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Community impact</h2>
          <p className="mt-2 text-sm text-gray-600">
            Our work is rooted in building long-term capability — not creating dependency.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              'Practical skills your team keeps and builds on after the engagement',
              'Systems designed so your staff can operate and modify them independently',
              'Capacity building that strengthens organizational resilience over time',
              'Respectful delivery that centers your community\'s priorities and pace',
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
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900">Ready to explore working together?</h2>
          <p className="mt-2 text-sm text-gray-600">
            Whether you are a funder, a partner organization, or exploring AI for your team — we are happy to talk.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/partners">
              <Button variant="primary" size="md">
                Partner / Funder Inquiry
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
