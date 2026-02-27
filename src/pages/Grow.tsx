import { Link } from 'react-router-dom'

export function Grow() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">Grow</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Get More Clients<br className="hidden sm:block" /> On Autopilot.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We build the systems that attract, nurture, and convert leads — so you can focus on doing the work, not chasing the work.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-500 transition-colors"
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Great businesses lose to louder ones.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            You're good at what you do. But if your pipeline depends on referrals and word of mouth alone, you're leaving revenue on the table every month.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Most business owners don't have time to post consistently, follow up with every lead, or build out a content strategy. We use AI to do it for you — predictably, affordably, and without you lifting a finger.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we build for you</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Every service below is designed to generate real business outcomes — more leads, more booked calls, more revenue.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: 'Lead Generation Systems',
                desc: 'We set up automated funnels that capture and qualify leads around the clock. Whether it\'s landing pages, lead magnets, or targeted outreach — the system works while you sleep.',
                outcome: 'More booked calls without manual prospecting.',
              },
              {
                title: 'AI Content Creation',
                desc: 'We create a steady stream of on-brand content — blog posts, social captions, email sequences — using AI trained on your voice and your industry. Consistent, professional, done for you.',
                outcome: 'Stay top of mind without spending hours writing.',
              },
              {
                title: 'Rank & Rent Websites',
                desc: 'We build and rank local websites in your target market, then rent them to you as a source of inbound leads. Pay for performance, not promises.',
                outcome: 'A predictable flow of local clients already searching for your service.',
              },
              {
                title: 'Social Media Content',
                desc: 'We produce and schedule AI-assisted social content across the platforms your clients actually use. No more staring at a blank screen wondering what to post.',
                outcome: 'A consistent online presence that builds trust and drives enquiries.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-8 hover:border-teal-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                <p className="mt-4 text-sm font-semibold text-teal-600">{service.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { stat: 'More Leads', label: 'Qualified enquiries coming to you, not the other way around.' },
              { stat: 'More Calls', label: 'A booked calendar without manually following up with every prospect.' },
              { stat: 'More Revenue', label: 'Systems that compound over time — not one-off campaigns.' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-400">{item.stat}</div>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How it works</h2>
          </div>
          <div className="grid gap-12 sm:grid-cols-3 text-center">
            {[
              {
                number: '01',
                title: 'Discovery Call',
                desc: 'We learn about your business, your ideal client, and where you\'re currently getting leads — then identify the biggest growth opportunities.',
              },
              {
                number: '02',
                title: 'Build Your System',
                desc: 'We design and build your lead generation engine — funnels, content, and automation — tailored to your market and your goals.',
              },
              {
                number: '03',
                title: 'Launch & Optimize',
                desc: 'We go live and monitor results. As data comes in, we refine the system so performance improves over time.',
              },
            ].map((step) => (
              <div key={step.number}>
                <div className="text-5xl font-extrabold text-teal-200">{step.number}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white">
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
      </section>

    </div>
  )
}
