import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function OperationalAI() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">AI Operations</h1>
          <p className="mt-4 text-gray-600">
            Operational AI means embedding artificial intelligence into the workflows your team already
            uses — not as a standalone project, but as a practical layer that reduces manual work,
            improves consistency, and gives people better information to make decisions.
          </p>
        </div>
      </section>

      {/* What it looks like */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">What this looks like in practice</h2>
          <p className="mt-2 text-sm text-gray-600">
            We don't build AI for its own sake. We look at where your team spends time on
            repetitive, manual, or error-prone tasks — and build targeted automations that help.
          </p>
          <div className="mt-6 space-y-4">
            {[
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
              <div key={item.area}>
                <h3 className="text-sm font-medium text-gray-900">{item.area}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People, not replacement */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Supporting people, not replacing them</h2>
          <p className="mt-2 text-sm text-gray-600">
            Our approach is designed to make your existing team more effective — not to reduce headcount
            or automate away expertise. AI handles the repetitive parts so your people can focus on
            the work that requires judgment, relationships, and context.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              'AI handles routine tasks; your team handles the decisions',
              'Systems are transparent — your staff can see what the AI is doing and why',
              'Nothing is deployed without your team understanding how to use and manage it',
              'You retain full control of all systems after the engagement ends',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-0.5 text-gray-400">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Implementation flow */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">How we implement</h2>
          <p className="mt-2 text-sm text-gray-600">
            We take a conservative, step-by-step approach. Nothing gets built until we've agreed
            on what success looks like.
          </p>
          <ol className="mt-6 space-y-4">
            {[
              {
                step: '1',
                title: 'Understand your operations',
                desc: 'We learn how your team works today — what is manual, what is slow, where errors happen. No assumptions.',
              },
              {
                step: '2',
                title: 'Identify practical opportunities',
                desc: 'We recommend specific, scoped areas where AI can make a measurable difference. We are honest about what it cannot do.',
              },
              {
                step: '3',
                title: 'Define success criteria together',
                desc: 'We document what "done" looks like before any build work starts. You review and approve the scope in writing.',
              },
              {
                step: '4',
                title: 'Build and validate',
                desc: 'We build the automation, test it against your success criteria, and make sure your team can operate it.',
              },
              {
                step: '5',
                title: 'Hand off and support',
                desc: 'You own everything we build. If you want ongoing support, we offer it — but there is no lock-in.',
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-900 text-white text-sm flex items-center justify-center font-medium">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900">Want to explore what's possible for your organization?</h2>
          <p className="mt-2 text-sm text-gray-600">
            We'll talk through your operations and let you know where AI might help — and where it probably won't.
          </p>
          <div className="mt-6">
            <Link to="/contact">
              <Button variant="primary" size="md">
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
