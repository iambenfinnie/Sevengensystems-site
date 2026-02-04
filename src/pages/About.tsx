import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">About Us</h1>
          <p className="mt-4 text-gray-600">
            Seven Gen Systems is an Indigenous-owned AI education and implementation firm.
            We help organizations build practical AI skills and adopt working automation —
            with clear scope, honest guidance, and no vendor lock-in.
          </p>
        </div>
      </section>

      {/* Seven Generations Principle */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">The Seven Generations principle</h2>
          <p className="mt-3 text-sm text-gray-600">
            Our name reflects a principle rooted in Indigenous governance: that the decisions we make
            today should consider their impact seven generations into the future.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            For us, this is a design and decision-making lens. It means we build systems that
            are sustainable, understandable, and transferable — not clever solutions that create
            dependency or technical debt. It means we prioritize long-term organizational health
            over short-term efficiency gains.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            It also means we are honest about what AI can and cannot do, and we do not recommend
            technology unless we believe it will serve an organization well over time.
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
            <div>
              <h3 className="text-sm font-medium text-gray-900">Build for independence</h3>
              <p className="mt-1 text-sm text-gray-600">
                Our goal is for your organization to be stronger after working with us — not more dependent on us.
                Everything we deliver is designed to be understood, operated, and owned by your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Founders</h2>

<p className="mt-3 text-sm text-gray-600">
  Seven Gen Systems is Indigenous-owned and grounded in Seven Generations thinking — building practical systems that last.
  We prioritize sustainability, trust, accountability, and responsible AI adoption that creates measurable outcomes.
</p>

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
