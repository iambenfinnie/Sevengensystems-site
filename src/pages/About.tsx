import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">About Seven Gen Systems</h1>
          <p className="mt-4 text-gray-600">
            Seven Gen Systems is an Indigenous-owned firm focused on AI education and automation implementation.
            We work with organizations that want to build practical AI skills and adopt working automation
            — without the hype, without open-ended contracts, and without vendor lock-in.
          </p>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">How we operate</h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Under-promise, over-deliver</h3>
              <p className="mt-1 text-sm text-gray-600">
                We scope conservatively and aim to exceed expectations. We would rather deliver a reliable result
                than make promises we cannot keep.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Prove value before scale</h3>
              <p className="mt-1 text-sm text-gray-600">
                Every engagement starts small and focused. We demonstrate results on a fixed-scope project
                before discussing anything larger.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Lean and accountable</h3>
              <p className="mt-1 text-sm text-gray-600">
                Seven Gen Systems holds accountability for every deliverable. We may work with delivery partners
                for specialized tasks, but quality assurance and client relationships stay with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">What we deliver</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Modular training</h3>
              <p className="mt-1 text-sm text-gray-600">
                Role-based AI training tied to real workflows. Practical, not theoretical.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Fixed-scope automations</h3>
              <p className="mt-1 text-sm text-gray-600">
                Automations built to written success criteria, tested and handed off to your team.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Ongoing systems support</h3>
              <p className="mt-1 text-sm text-gray-600">
                Optional monthly support for organizations that want continued help after a successful project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Leadership</h2>
          <div className="mt-6 space-y-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src="/team/rob-maclean.jpg"
                alt="Robert Maclean, CEO of Seven Gen Systems"
                className="w-36 h-36 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-base font-medium text-gray-900">Robert Maclean</h3>
                <p className="text-sm text-gray-500">CEO</p>
                <p className="mt-3 text-sm text-gray-600">
                  Robert Maclean is the CEO of Seven Gen Systems, leading the company's focus on practical AI
                  training and automation for organizations that want real results — not hype.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  He brings a systems-first mindset to AI adoption, emphasizing simple, reliable implementations
                  that reduce manual work, improve operations, and deliver measurable value. Robert is committed
                  to building responsible, long-term solutions grounded in Indigenous principles of sustainability,
                  trust, and accountability.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src="/team/ben-finnie.jpg"
                alt="Ben Finnie, Head of Systems & Automation at Seven Gen Systems"
                className="w-36 h-36 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-base font-medium text-gray-900">Ben Finnie</h3>
                <p className="text-sm text-gray-500">Head of Systems & Automation</p>
                <p className="mt-3 text-sm text-gray-600">
                  Ben Finnie is the Head of Systems & Automation at Seven Gen Systems, responsible for the
                  technical design and implementation of the company's AI-driven workflows and internal systems.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  He focuses on turning real operational needs into reliable, maintainable automations —
                  prioritizing clarity, stability, and measurable impact over experimental or hype-driven tools.
                  Ben works closely with delivery teams and clients to ensure systems integrate smoothly into
                  existing operations and perform consistently in real-world environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900">Want to learn more?</h2>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/programs">
              <Button variant="primary" size="md">
                View Programs
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
