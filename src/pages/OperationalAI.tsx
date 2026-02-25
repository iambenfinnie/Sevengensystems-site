import { Link } from 'react-router-dom'

export function OperationalAI() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">AI Operations</h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Embedding AI into the workflows your team already uses — not as a standalone project,
            but as a practical layer that reduces manual work, improves consistency, and gives
            people better information to make decisions.
          </p>
        </div>
      </section>

      {/* What it looks like */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What this looks like in practice</h2>
            <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
              We don't build AI for its own sake. We look at where your team spends time on
              repetitive, manual, or error-prone tasks — and build targeted automations that help.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                area: '24/7 AI Receptionist & Support',
                desc: 'An AI agent that handles inbound calls, qualifies leads, answers common questions, and routes to the right person — around the clock, without staff overhead.',
              },
              {
                area: 'Lead Follow-Up & Appointment Booking',
                desc: 'Automatically follow up with new leads, nurture prospects over time, and book meetings directly into your calendar — without anyone lifting a finger.',
              },
              {
                area: 'Document processing and data entry',
                desc: 'Extracting information from forms, reports, or emails and routing it to the right place — reducing manual input and copy-paste work.',
              },
              {
                area: 'Reporting and summarization',
                desc: 'Pulling together data from multiple sources into consistent, readable summaries — so your team spends less time compiling and more time acting.',
              },
              {
                area: 'Internal communications and triage',
                desc: 'Sorting, categorizing, or routing incoming requests so the right person gets the right information without manual screening.',
              },
              {
                area: 'Workflow coordination',
                desc: 'Connecting systems that do not talk to each other — reducing the gaps where things fall through the cracks.',
              },
            ].map((item) => (
              <div key={item.area} className="rounded-xl border border-slate-200 p-7 hover:border-teal-300 transition-colors">
                <h3 className="font-semibold text-slate-900">{item.area}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People, not replacement */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Supporting people, not replacing them</h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              Our approach is designed to make your existing team more effective — not to reduce headcount
              or automate away expertise. AI handles the repetitive parts so your people can focus on
              the work that requires judgment, relationships, and context.
            </p>
          </div>
          <ul className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              'AI handles routine tasks; your team handles the decisions',
              'Systems are transparent — your staff can see what the AI is doing and why',
              'Nothing is deployed without your team understanding how to use and manage it',
              'You retain full control of all systems after the engagement ends',
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 text-slate-300">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white block" />
                </span>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Implementation flow */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">How we implement</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              A conservative, step-by-step approach. Nothing gets built until we've agreed on what success looks like.
            </p>
          </div>
          <ol className="space-y-8">
            {[
              {
                step: '01',
                title: 'Understand your operations',
                desc: 'We learn how your team works today — what is manual, what is slow, where errors happen. No assumptions.',
              },
              {
                step: '02',
                title: 'Identify practical opportunities',
                desc: 'We recommend specific, scoped areas where AI can make a measurable difference. We are honest about what it cannot do.',
              },
              {
                step: '03',
                title: 'Define success criteria together',
                desc: 'We document what "done" looks like before any build work starts. You review and approve the scope in writing.',
              },
              {
                step: '04',
                title: 'Build and validate',
                desc: 'We build the automation, test it against your success criteria, and make sure your team can operate it.',
              },
              {
                step: '05',
                title: 'Hand off and support',
                desc: 'You own everything we build. If you want ongoing support, we offer it — but there is no lock-in.',
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Want to explore what's possible for your organization?</h2>
          <p className="mt-4 text-lg text-teal-100 leading-relaxed">
            We'll talk through your operations and let you know where AI might help — and where it probably won't.
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
