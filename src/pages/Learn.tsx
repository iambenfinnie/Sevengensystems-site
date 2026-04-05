import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function Learn() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Learn
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
          >
            Your Team Can Use AI.<br className="hidden sm:block" /> We'll Show Them How.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
          >
            Practical, hands-on AI workshops for businesses and organizations. No tech background required, no jargon, just real skills your team can use starting Monday.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-500 transition-colors"
            >
              Book a Free Discovery Call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Grants Callout ───────────────────────────────────────────────── */}
      <motion.section
        className="bg-teal-50 border-y border-teal-100"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-800 font-semibold text-lg">
            Many organizations can fund AI workshops through existing grants.
          </p>
          <p className="mt-2 text-teal-700 text-sm leading-relaxed max-w-xl mx-auto">
            Whether it's workforce development funding, digital adoption programs, or industry-specific grants, there's a good chance your training doesn't have to come out of your operating budget. Ask us about options on your discovery call.
          </p>
        </div>
      </motion.section>

      {/* ── Who This Is For ──────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Built for real teams, not just tech people.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our workshops are designed for the people in your business who actually do the work: managers, coordinators, customer service reps, operations staff. No coding. No jargon. Just practical skills that save time and improve results.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We adapt every workshop to your industry, your tools, and your real workflows. By the end of the session, your team won't just know about AI. They'll know how to use it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Training Tiers ───────────────────────────────────────────────── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Three levels of training</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Start where your team is. Scale from there.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                tier: 'Tier 1',
                title: 'Foundations',
                subtitle: 'Best for teams new to AI',
                featured: false,
                features: [
                  "What AI is and what it isn't",
                  'Where it fits into your day-to-day work',
                  'How to use it without making mistakes',
                  'Real examples from your industry',
                  'A shared vocabulary for your whole team',
                ],
              },
              {
                tier: 'Tier 2',
                title: 'Applied AI',
                subtitle: 'Best for teams ready to build habits',
                featured: true,
                features: [
                  'Everything in Tier 1',
                  'Hands-on exercises with real tools',
                  'Practical prompting techniques',
                  'Workflow integration strategies',
                  'Reference materials to take away',
                ],
              },
              {
                tier: 'Tier 3',
                title: 'Embedded Enablement',
                subtitle: 'Best for organizations going all-in',
                featured: false,
                features: [
                  'Everything in Tiers 1 & 2',
                  'Internal AI champion development',
                  'Custom resource library for your team',
                  'Leadership advisory support',
                  'Follow-up sessions as you scale',
                ],
              },
            ].map((tier, i) => (
              <motion.div
                key={tier.tier}
                className={`rounded-xl border p-8 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-default ${
                  tier.featured
                    ? 'border-teal-400 bg-white shadow-md'
                    : 'border-slate-200 bg-white hover:border-teal-300'
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                {tier.featured && (
                  <span className="inline-block bg-teal-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">{tier.tier}</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">{tier.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{tier.subtitle}</p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 text-teal-500">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Expect ───────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What to expect</h2>
          </motion.div>
          <div className="grid gap-12 sm:grid-cols-3 text-center">
            {[
              {
                number: '01',
                title: 'We Learn Your Context',
                desc: "Before we build anything, we understand your organization: your team, your tools, and where AI would make the biggest difference.",
              },
              {
                number: '02',
                title: 'We Design Your Workshop',
                desc: 'Every session is customized. The examples, the exercises, and the outcomes are built around your industry and your real challenges.',
              },
              {
                number: '03',
                title: 'We Deliver & Stay Available',
                desc: "We run the session and make sure your team leaves confident. We're available after the fact to answer questions as they start using what they've learned.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.12 }}
              >
                <div className="text-5xl font-extrabold text-teal-200">{step.number}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Train ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Who we train</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                name: 'Small & Mid-size Businesses',
                desc: 'Owners and teams who want to use AI to work smarter, without hiring a data scientist or spending months on implementation.',
              },
              {
                name: 'Nonprofits & Training Organizations',
                desc: 'Mission-driven teams that run lean and need practical skills, not theory. Grant-funded options often available.',
              },
              {
                name: 'Government Departments',
                desc: 'Public-sector teams responsible for program delivery or digital modernization, with clear, accountable outcomes.',
              },
              {
                name: 'Indigenous Organizations & Band Councils',
                desc: 'Community programs and economic development teams. We bring cultural awareness and genuine respect for self-determination.',
              },
            ].map((org, i) => (
              <motion.div
                key={org.name}
                className="rounded-xl border border-slate-200 bg-white p-7"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <h3 className="font-semibold text-slate-900">{org.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{org.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <motion.section
        className="bg-teal-700 text-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to bring AI training to your team?
          </h2>
          <p className="mt-5 text-lg text-teal-100 leading-relaxed">
            Book a free 30-minute call. We'll talk through what your team needs, what format works best, and whether there's funding available to cover the cost.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-teal-700 hover:bg-teal-50 transition-colors"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  )
}
