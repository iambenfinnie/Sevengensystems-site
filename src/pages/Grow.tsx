import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function Grow() {
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
            Grow
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
          >
            Get More Clients<br className="hidden sm:block" /> On Autopilot.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
          >
            We build the systems that attract, nurture, and convert leads so you can focus on doing the work, not chasing the work.
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

      {/* ── The Problem ──────────────────────────────────────────────────── */}
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
              Great businesses lose to louder ones.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              You're good at what you do. But if your pipeline depends on referrals and word of mouth alone, you're leaving revenue on the table every month.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Most business owners don't have time to post consistently, follow up with every lead, or build out a content strategy. We use AI to do it for you, predictably, affordably, and without you lifting a finger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What We Build ────────────────────────────────────────────────── */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we build for you</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Every service below is designed to generate real business outcomes: more leads, more booked calls, more revenue.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: 'AI-Powered Lead Intake & Follow-Up',
                desc: "We build automated intake and follow-up systems that capture leads, qualify them, and keep them warm without you lifting a finger. The kind of system that booked a call at Stanford Hearing Centre while the team was out of office.",
                outcome: 'More booked calls without manual prospecting.',
              },
              {
                title: 'Custom Websites Built to Convert',
                desc: 'We design and build websites focused on one thing: turning visitors into inquiries. Clean, fast, and built around how your clients actually make decisions.',
                outcome: 'A site that works as a sales tool, not just a brochure.',
              },
              {
                title: 'Content Creation Systems',
                desc: 'We set up AI-assisted content pipelines that produce on-brand copy: email sequences, service pages, and campaign material, without you writing from scratch every time.',
                outcome: 'Stay visible and credible without spending hours on content.',
              },
              {
                title: 'Market Demand Research & Dashboards',
                desc: 'We build research tools that show you where demand is in your market: what people are searching, what competitors are missing, and where the opportunity sits.',
                outcome: 'Make business decisions based on data, not guesswork.',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-8 hover:border-teal-300 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-default"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                <p className="mt-4 text-sm font-semibold text-teal-600">{service.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { stat: 'More Leads', label: 'Qualified enquiries coming to you, not the other way around.' },
              { stat: 'More Calls', label: 'A booked calendar without manually following up with every prospect.' },
              { stat: 'More Revenue', label: 'Systems that compound over time, not one-off campaigns.' },
            ].map((item, i) => (
              <motion.div
                key={item.stat}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-400">{item.stat}</div>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How it works</h2>
          </motion.div>
          <div className="grid gap-12 sm:grid-cols-3 text-center">
            {[
              {
                number: '01',
                title: 'Discovery Call',
                desc: "We learn about your business, your ideal client, and where you're currently getting leads, then identify the biggest growth opportunities.",
              },
              {
                number: '02',
                title: 'Build Your System',
                desc: 'We design and build your lead generation engine: funnels, content, and automation, tailored to your market and your goals.',
              },
              {
                number: '03',
                title: 'Launch & Optimize',
                desc: 'We go live and monitor results. As data comes in, we refine the system so performance improves over time.',
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
            Ready to stop chasing clients?
          </h2>
          <p className="mt-5 text-lg text-teal-100 leading-relaxed">
            Book a free 30-minute discovery call. We'll look at your current pipeline and show you exactly where AI-powered growth can make the biggest difference.
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
