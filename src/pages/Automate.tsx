import { Link } from 'react-router-dom'

export function Automate() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-4">Automate</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Reclaim Your Time<br className="hidden sm:block" /> With AI.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We identify the repetitive work eating up your day and build AI systems that handle it automatically — so your team can focus on what actually moves the needle.
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

      {/* Case Study */}
      <section className="bg-teal-50 border-y border-teal-100">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <span className="inline-block bg-teal-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Real Case Study
              </span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                AI Voice Agent for a Hearing Centre
              </h2>
              <p className="mt-3 text-slate-700 leading-relaxed">
                We built a custom AI voice agent for a hearing centre that now handles all inbound calls automatically. It answers common questions, books appointments, and routes complex inquiries to staff — without a human picking up the phone.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                The result: staff spend less time on the phone and more time with patients. The clinic runs smoother, and nothing falls through the cracks after hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we automate</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We don't just recommend tools — we build working systems tailored to how your business actually operates.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: 'Workflow Automation',
                desc: 'We map your manual, repetitive processes and automate them end-to-end. From data entry and reporting to approvals and handoffs — if it\'s eating up time, we can automate it.',
                outcome: 'Hours back every week for you and your team.',
              },
              {
                title: 'AI Voice Agents',
                desc: 'Custom voice agents that handle inbound calls, answer FAQs, book appointments, and route complex inquiries — 24 hours a day, without staff lifting a finger.',
                outcome: 'Never miss a lead or keep a client on hold again.',
              },
              {
                title: 'CRM Setup & Integration',
                desc: 'We set up and connect your CRM so leads are captured, tracked, and followed up automatically. No more spreadsheets, no more falling through the cracks.',
                outcome: 'A single source of truth for every client relationship.',
              },
              {
                title: 'Custom AI Tools',
                desc: 'Need something specific? We build custom AI tools that plug directly into your workflow — internal assistants, document processors, scheduling systems, and more.',
                outcome: 'AI built for your business, not a generic off-the-shelf product.',
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

      {/* What It Looks Like in Practice */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What automation looks like day-to-day</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              '24/7 call answering without hiring more staff',
              'Automatic lead follow-up within minutes of enquiry',
              'Meeting notes written and shared before the call ends',
              'Invoices and reports generated automatically',
              'New client onboarding handled start to finish',
              'Appointment reminders sent without anyone touching a keyboard',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className="flex-shrink-0 mt-0.5 text-teal-500">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">We build systems that support people — not replace them.</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            The best automation removes friction, not people. Our goal is to free your team from the work that shouldn't require a human, so they can do more of the work that does.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Every system we build is handed off with full documentation and training. You own it. We stay involved as long as you need us.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our implementation process</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-5 text-center">
            {[
              { number: '01', title: 'Understand Your Operations', desc: 'We map how your business runs today — the workflows, the bottlenecks, and the time sinks.' },
              { number: '02', title: 'Identify Opportunities', desc: 'We pinpoint the highest-value automation targets — the ones that save the most time and reduce the most risk.' },
              { number: '03', title: 'Define Success', desc: 'You know exactly what we\'re building, what it costs, and what success looks like before we start.' },
              { number: '04', title: 'Build & Test', desc: 'We build the system, test it against real scenarios, and refine it until it\'s ready.' },
              { number: '05', title: 'Hand Off & Support', desc: 'We train your team, hand over everything, and stay on call while you get comfortable.' },
            ].map((step) => (
              <div key={step.number}>
                <div className="text-4xl font-extrabold text-teal-200">{step.number}</div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            What would you do with 10 extra hours a week?
          </h2>
          <p className="mt-5 text-lg text-teal-100 leading-relaxed">
            Book a free 30-minute discovery call. We'll walk through your biggest time drains and show you exactly where automation can help — no tech jargon, no obligation.
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
