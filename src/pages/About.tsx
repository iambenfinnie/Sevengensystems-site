import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">About Us</h1>
          <p className="mt-4 text-gray-600">
            Seven Gen Systems is an Indigenous-owned firm that delivers AI training and automation
            implementation. We keep things scoped, honest, and practical.
          </p>
        </div>
      </section>

      {/* Seven Generations Principle */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">The Seven Generations principle</h2>
          <p className="mt-3 text-sm text-gray-600">
            Our name comes from an Indigenous governance principle: decisions today should
            account for their impact seven generations forward. For us that means we build
            things that last — systems your team can understand, maintain, and own — and
            we do not recommend technology we would not trust to hold up over time.
          </p>
        </div>
      </section>

      {/* How we operate */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">How we operate</h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Under-promise, over-deliver</h3>
              <p className="mt-1 text-sm text-gray-600">
                We scope conservatively and would rather surprise you with the result than with the invoice.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Prove value before scale</h3>
              <p className="mt-1 text-sm text-gray-600">
                Every engagement starts small. We show results on a fixed-scope project before discussing anything bigger.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Lean and accountable</h3>
              <p className="mt-1 text-sm text-gray-600">
                We hold accountability for every deliverable. QA and client relationships stay with us.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Build for independence</h3>
              <p className="mt-1 text-sm text-gray-600">
                You should be stronger after working with us, not more dependent on us. Everything we deliver is yours to keep and run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Founders</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src="/team/rob-maclean.jpg"
                alt="Robert Maclean, CEO of Seven Gen Systems"
                className="w-36 h-36 rounded-lg object-cover object-[center_20%] flex-shrink-0"
              />
              <div>
                <h3 className="text-base font-medium text-gray-900">Robert Maclean</h3>
                <p className="text-sm text-gray-500">CEO</p>
                <p className="mt-3 text-sm text-gray-600">
                  Robert Maclean leads Seven Gen Systems with a simple goal: helping organizations use AI to make their work easier and more effective. He focuses on practical systems that reduce busywork, strengthen operations, and deliver results teams can count on.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  He believes technology should create real opportunity, not complexity, and works to make AI more accessible, responsible, and useful — especially for communities often left out of new technologies. His approach is grounded in long-term thinking, trust, and accountability.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src="/team/ben-finnie.jpg"
                alt="Ben Finnie, Head of Systems & Automation at Seven Gen Systems"
                className="w-36 h-36 rounded-lg object-cover object-[center_35%] flex-shrink-0"
              />
              <div>
                <h3 className="text-base font-medium text-gray-900">Ben Finnie</h3>
                <p className="text-sm text-gray-500">Head of Systems & Automation</p>
                <p className="mt-3 text-sm text-gray-600">
                  Ben Finnie leads systems and automation at Seven Gen Systems, designing and implementing AI workflows that solve real operational problems — not experimental or hype-driven use cases.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  His focus is on building clear, reliable automations that teams can understand, maintain, and trust over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900">Want to learn more about what we do?</h2>
          <div className="mt-4">
            <Link to="/contact">
              <Button variant="primary" size="md">
                Let's connect
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
