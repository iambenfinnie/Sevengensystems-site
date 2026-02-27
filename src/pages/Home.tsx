import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Want to use AI but don't know where to start?
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Most businesses waste hours every week on tasks AI could handle. We show your team how to use it — and build custom solutions that cut the busywork, speed up lead response, and fit the way you actually work.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-500 transition-colors"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              to="/grow"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
            >
              See What We Do
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { stat: '92%', label: 'of Fortune 500 companies now use AI in their operations' },
              { stat: '7.5 hrs', label: 'saved per worker, per week — nearly a full workday back' },
              { stat: '78%', label: 'of organizations have adopted AI in at least one business function' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-4xl sm:text-5xl font-extrabold text-teal-400">{item.stat}</div>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-slate-600">
            Sources: AIPRM · LSE Global Research · Federal Reserve Bank of St. Louis
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Three ways we work with you</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                label: 'Grow',
                title: 'Get More Clients On Autopilot',
                desc: 'Lead generation systems, AI content creation, and social media that fills your pipeline — without you doing the chasing.',
                link: '/grow',
                linkText: 'See how we help you grow →',
              },
              {
                label: 'Automate',
                title: 'Reclaim Your Time With AI',
                desc: 'Workflow automation, AI voice agents, CRM setup, and custom tools. We build systems that handle the repetitive work so your team can focus on what matters.',
                link: '/automate',
                linkText: 'See what we automate →',
              },
              {
                label: 'Learn',
                title: 'Train Your Team to Use AI',
                desc: 'Hands-on workshops for businesses and organizations. Practical, jargon-free, and often fundable through existing grants.',
                link: '/learn',
                linkText: 'See our training programs →',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 p-7 hover:border-teal-300 hover:shadow-sm transition-all"
              >
                <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">{service.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                <Link
                  to={service.link}
                  className="mt-5 inline-block text-sm font-semibold text-teal-600 hover:text-teal-700"
                >
                  {service.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple process. Real outcomes.</h2>
          </div>
          <div className="grid gap-12 sm:grid-cols-3 text-center">
            {[
              {
                number: '01',
                title: 'Discovery Call',
                desc: 'We learn how your business works, where the friction is, and what AI can realistically do for you. No commitment required.',
              },
              {
                number: '02',
                title: 'Custom Plan',
                desc: "You get a clear scope — what we'll build or teach, what it costs, and what you can expect on the other side.",
              },
              {
                number: '03',
                title: 'Delivery & Support',
                desc: "We execute and stay involved until it's working. You walk away confident, not confused.",
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

      {/* Problem We Solve */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Most AI initiatives fail. Here's why.</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            42% of companies abandoned most of their AI initiatives in 2025. Not because AI doesn't work — because it wasn't implemented with their team in mind.
          </p>
          <p className="mt-5 text-slate-400 leading-relaxed">
            A business buys the tools, runs a lunch-and-learn, and six months later nothing has changed. That's not an AI problem. That's a training and implementation problem.
          </p>
          <p className="mt-8 text-xl font-semibold text-teal-400">Seven Gen exists to close that gap.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Built different. On purpose.</h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Seven Gen Systems is Indigenous-owned — a point of pride that shapes how we do business. We operate with a long view: building relationships, not transactions, and creating solutions that last.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We're a small, focused team serving clients Canada wide. We don't oversell, we don't disappear after delivery, and we don't build things that need us around to maintain them. That's the Seven Gen way.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block text-sm font-semibold text-teal-600 hover:text-teal-700"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Built for businesses ready to move past the hype
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We work with business owners, mid-size companies, nonprofits, and leadership teams that are done experimenting and ready to implement AI that actually sticks.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                name: 'Small & Mid-size Businesses',
                desc: 'Operational bottlenecks, manual work, and teams that are ready for AI — but need it to actually fit their existing systems.',
              },
              {
                name: 'Nonprofits & Training Organizations',
                desc: 'Mission-driven teams that run lean, report to funders, and need measurable outcomes without open-ended tech projects.',
              },
              {
                name: 'Government Departments & Agencies',
                desc: 'Public-sector teams responsible for program delivery or digital modernization with clear scope and accountability requirements.',
              },
              {
                name: 'Indigenous Organizations & Band Councils',
                desc: 'Community programs, economic development, and essential services — with respect for data sovereignty and existing governance.',
              },
            ].map((org) => (
              <div key={org.name} className="rounded-xl border border-slate-200 bg-white p-7">
                <h3 className="font-semibold text-slate-900">{org.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{org.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-700 text-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to see what AI can actually do for your business?
          </h2>
          <p className="mt-5 text-lg text-teal-100 leading-relaxed">
            Book a free 30-minute discovery call. No pitch — just an honest conversation about what's possible and where to start.
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
