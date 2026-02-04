import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const tiers = [
  {
    name: 'Foundations',
    tag: 'Tier 1',
    description:
      'A grounding in what AI is, what it can realistically do, and how it applies to your organization. Designed for teams that need a shared starting point before making decisions about AI adoption.',
    includes: [
      'Core concepts explained in plain language, without jargon',
      'Role-relevant examples showing where AI fits into everyday work',
      'Honest discussion of limitations, risks, and what AI cannot do',
      'A shared vocabulary so your team can evaluate AI opportunities together',
    ],
    who: 'Teams and leadership groups exploring AI for the first time, or organizations that want a common foundation before investing further.',
  },
  {
    name: 'Applied AI',
    tag: 'Tier 2',
    description:
      'Everything in Foundations, plus hands-on application. Participants work directly with AI tools in the context of their actual roles and workflows.',
    includes: [
      'Everything in Tier 1 — Foundations',
      'Guided, hands-on exercises using AI in real work scenarios',
      'Practical techniques participants can apply independently after training',
      'Reference materials your team keeps for ongoing use',
    ],
    who: 'Staff who will use AI in their day-to-day work and need practical, applied skill — not just awareness.',
  },
  {
    name: 'Embedded Enablement',
    tag: 'Tier 3',
    description:
      'Everything in Foundations and Applied AI, plus ongoing advisory support and internal resource development. Designed for organizations that want to build lasting internal AI capability.',
    includes: [
      'Everything in Tiers 1 & 2 — Foundations and Applied AI',
      'Advisory support for leadership on AI adoption decisions',
      'Internal resource development: guides, templates, and reference documents tailored to your organization',
      'Follow-up sessions to reinforce learning and address new questions',
    ],
    who: 'Organizations making a sustained commitment to AI capability building — especially those with multiple teams or departments involved.',
  },
]

export function TrainingPrograms() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Training Programs</h1>
          <p className="mt-4 text-gray-600">
            Three tiers of AI training, each building on the last. Start where it makes sense
            for your organization. Every tier is practical, role-relevant, and delivered at your pace.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{tier.tag}</p>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">{tier.name}</h2>
              <p className="mt-3 text-sm text-gray-600">{tier.description}</p>

              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-900">What's included</h3>
                <ul className="mt-2 space-y-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 text-gray-400">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <h3 className="text-sm font-medium text-gray-900">Who it's for</h3>
                <p className="mt-1 text-sm text-gray-600">{tier.who}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900">Interested in training for your team?</h2>
          <p className="mt-2 text-sm text-gray-600">
            We'll walk you through the options and help you decide what makes sense — no commitment required.
          </p>
          <div className="mt-6">
            <Link to="/contact">
              <Button variant="primary" size="md">
                Join training waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
