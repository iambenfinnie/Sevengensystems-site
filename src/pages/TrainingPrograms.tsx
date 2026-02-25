import { Link } from 'react-router-dom'

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

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Training Programs</h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Three tiers of AI training, each building on the last. Start where it makes sense
            for your organization. Every tier is practical, role-relevant, and delivered at your pace.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 space-y-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">{tier.tag}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{tier.name}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{tier.description}</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">What's included</h3>
                  <ul className="mt-4 space-y-3">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 block" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Who it's for</h3>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{tier.who}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Interested in training for your team?</h2>
          <p className="mt-4 text-lg text-teal-100 leading-relaxed">
            We'll walk you through the options and help you decide what makes sense — no commitment required.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-teal-700 hover:bg-teal-50 transition-colors"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
