import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const reviewerChecklist = [
  'Is the scope of work clearly defined with written deliverables?',
  'Are there measurable acceptance criteria the funder can verify?',
  'Does the vendor avoid open-ended contracts or undefined timelines?',
  'Will the client organization retain ownership and control of all systems?',
  'Is the pricing fixed or capped, with a documented change-order process?',
  'Can the client operate independently after the engagement ends?',
]

export function Partners() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Partners & Funders</h1>
          <p className="mt-3 text-gray-600">
            We work with organizations that fund, support, or deliver workforce and economic development
            programs. This page is designed to give reviewers and decision-makers the information they need.
          </p>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Who we partner with</h2>
          <ul className="mt-4 space-y-2">
            {[
              'Indigenous organizations and band councils',
              'Nonprofits and community development organizations',
              'Grant-funded employers and workforce agencies',
              'Small and medium-sized businesses exploring AI adoption',
              'Government departments funding digital skills or automation programs',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-0.5 text-gray-400">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Funders Get */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">What funders and reviewers get</h2>
          <p className="mt-2 text-sm text-gray-600">
            Our engagement model is built for accountability and auditability.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Clear scope documents</h3>
              <p className="mt-1 text-sm text-gray-600">
                Every engagement begins with a written scope of work that defines deliverables, timelines, and acceptance criteria.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Measurable acceptance criteria</h3>
              <p className="mt-1 text-sm text-gray-600">
                Success is defined in writing before work starts. Deliverables are validated against those criteria before close-out.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Risk controls</h3>
              <p className="mt-1 text-sm text-gray-600">
                Fixed-scope pricing, documented change orders, and no open-ended contracts. Budgets stay predictable.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Client ownership</h3>
              <p className="mt-1 text-sm text-gray-600">
                All systems, training materials, and documentation belong to the client. No vendor lock-in, no dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Need From Partners */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">What we need from partners</h2>
          <p className="mt-2 text-sm text-gray-600">
            We are looking for partners who can help us reach the organizations that need this work.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              'Introductions to organizations that could benefit from AI training or automation',
              'Pilot opportunities to demonstrate our process with a real engagement',
              'Co-delivery opportunities where we provide AI expertise within your existing programs',
              'Feedback on how we can better serve the organizations in your network',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-0.5 text-gray-400">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviewer Checklist */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Reviewer quick-check</h2>
          <p className="mt-2 text-sm text-gray-600">
            Six questions a reviewer can answer about any Seven Gen Systems engagement:
          </p>
          <ol className="mt-6 space-y-3">
            {reviewerChecklist.map((question, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded border border-gray-300 bg-gray-50 flex items-center justify-center text-xs text-gray-400">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700">{question}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-gray-600">
            The answer to each of these should be <strong>yes</strong> for every engagement we deliver.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900">Interested in partnering or funding a pilot?</h2>
          <p className="mt-2 text-sm text-gray-600">
            We are happy to provide a scope document, budget outline, or answer questions about our process.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <Button variant="primary" size="md">
                Partner / Funder Inquiry
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="md">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
