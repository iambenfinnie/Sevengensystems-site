import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const tiers = [
  {
    name: 'AI Foundations',
    tag: 'Tier 1 — Training',
    who: 'Staff and teams who need practical AI skills tied to their day-to-day work.',
    included: [
      'Role-based training modules (not generic overviews)',
      'Hands-on exercises using tools relevant to your workflows',
      'Written reference materials your team keeps',
    ],
    duration: 'Typically 1–3 sessions, scheduled around your availability.',
    done: 'Participants can independently use the tools covered, applied to their actual tasks.',
  },
  {
    name: 'Automation Proof Sprint',
    tag: 'Tier 2 — Implementation',
    who: 'Organizations with a specific workflow they want to automate or streamline.',
    included: [
      'Discovery session to define the problem and success criteria',
      'Fixed-scope build of one automation or integration',
      'Testing and validation against your written acceptance criteria',
      'Handoff documentation so your staff can operate it',
    ],
    duration: 'Typically 2–4 weeks from kickoff to validation.',
    done: 'The automation passes the acceptance criteria you approved, and your team can operate it without us.',
  },
  {
    name: 'Systems Support',
    tag: 'Tier 3 — Ongoing',
    who: 'Organizations that have completed a Proof Sprint and want continued support.',
    included: [
      'Monthly support hours for troubleshooting and adjustments',
      'Priority access for new automation requests',
      'Quarterly check-ins to review system health',
    ],
    duration: 'Month-to-month. Cancel anytime.',
    done: 'Your systems continue to run reliably. If you stop, everything still works — no lock-in.',
  },
]

export function Programs() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Programs</h1>
          <p className="mt-3 text-gray-600">
            Three tiers, each with a clear scope and a defined outcome. Start where it makes sense for your organization.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{tier.tag}</p>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">{tier.name}</h2>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Who it's for</h3>
                  <p className="text-sm text-gray-600">{tier.who}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900">What's included</h3>
                  <ul className="mt-1 space-y-1">
                    {tier.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-0.5 text-gray-400">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900">Typical duration</h3>
                  <p className="text-sm text-gray-600">{tier.duration}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900">What "done" means</h3>
                  <p className="text-sm text-gray-600">{tier.done}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900">Not sure which tier fits?</h2>
          <p className="mt-2 text-sm text-gray-600">
            We are happy to walk through your situation and recommend a starting point — no commitment required.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <Button variant="primary" size="md">
                Book a Call
              </Button>
            </Link>
            <Link to="/partners">
              <Button variant="outline" size="md">
                Partner / Funder Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
