import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Government & Procurement — Indigenous-Owned AI',
  description:
    'Seven Gen Systems is an Indigenous-owned AI firm delivering operational AI for Canadian federal departments and agencies. PSIB-eligible, CCIB certified, SAP Ariba registered.',
  alternates: { canonical: '/government' },
  openGraph: {
    title: 'Government & Procurement — Indigenous-Owned AI',
    description:
      'An Indigenous-owned AI firm delivering operational AI for Canadian federal departments and agencies. PSIB-eligible and certified.',
    url: '/government',
  },
  twitter: {
    title: 'Government & Procurement — Indigenous-Owned AI',
    description:
      'An Indigenous-owned AI firm delivering operational AI for Canadian federal departments and agencies.',
  },
}

const govServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Delivery for Federal Departments & Agencies',
  serviceType: 'Indigenous-owned AI delivery',
  provider: { '@type': 'Organization', name: 'Seven Gen Systems', url: 'https://sevengensystems.com' },
  areaServed: { '@type': 'Country', name: 'Canada' },
  audience: { '@type': 'Audience', audienceType: 'Government departments and agencies' },
  description:
    'Indigenous-owned AI automation, conversational AI, and predictive modelling delivery for Canadian federal departments. PSIB-eligible, CCIB certified, SAP Ariba registered.',
}

const CAPABILITY_STATEMENT_PATH = '/Seven-Gen-Systems-Capability-Statement.pdf'
const INTRO_BOOKING = 'https://cal.com/ben-finnie/intro'

const certifications = [
  { name: 'Indigenous Business Directory', status: 'Verified' },
  { name: 'Canadian Council for Indigenous Business', status: 'Certified' },
  { name: 'Procurement Business Number', status: 'Active' },
  { name: 'SAP Ariba', status: 'Registered' },
  { name: 'GST / Business Number', status: 'Active' },
]

const disciplines = [
  {
    title: 'Machine Interactions',
    desc: 'Conversational AI, voice agents, and AI receptionists that handle real interactions with the public and with staff — deployed, monitored, and accountable.',
    examples: ['AI voice agents & receptionists', 'Citizen-facing intake & triage', 'Internal knowledge assistants'],
  },
  {
    title: 'Cognitive Automation',
    desc: 'Workflow automation and document processing that removes manual steps from program delivery, with auditable logic and clear human oversight.',
    examples: ['Document processing & extraction', 'Case & workflow automation', 'Operational dashboards'],
  },
  {
    title: 'Insights & Predictive Modelling',
    desc: 'Dashboards, forecasting, and predictive analytics that turn departmental data into decisions, with methodology documented for evaluation.',
    examples: ['Predictive analytics', 'Reporting & data visualization', 'Program performance modelling'],
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(govServiceJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
            Federal &amp; Public Sector
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl">
            Indigenous-owned AI delivery for Canadian government.
          </h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
            Seven Gen Systems delivers operational AI for Canadian federal departments and agencies.
            We are Indigenous-owned, PSIB-eligible, and we build and operate every engagement end to
            end, with delivery kept in Canada.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={CAPABILITY_STATEMENT_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-lg bg-teal-500 text-slate-900 hover:bg-teal-400 transition-colors"
            >
              View capability statement
            </a>
            <a
              href={INTRO_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-lg border border-slate-600 text-white hover:bg-slate-800 transition-colors"
            >
              Book an intro call
            </a>
          </div>
        </div>
      </section>

      {/* Certifications / registrations */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Verified credentials &amp; registrations
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-600/10">
                  <svg className="h-3.5 w-3.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 leading-tight">{cert.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{cert.status}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-400">
            Eligible as a prime contractor under the Procurement Strategy for Indigenous Business (PSIB).
          </p>
        </div>
      </section>

      {/* Capabilities mapped to disciplines */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Capabilities</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We deliver across three disciplines, each built and operated in-house, each documented
              so evaluators can see the method, not just the outcome.
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {disciplines.map((d) => (
              <div key={d.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <h3 className="text-lg font-semibold text-slate-900">{d.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{d.desc}</p>
                <ul className="mt-5 space-y-2">
                  {d.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data sovereignty & responsible AI */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Data sovereignty &amp; responsible AI
          </h2>
          <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
            <p>
              We respect Indigenous data sovereignty and the OCAP&reg; principles — Ownership,
              Control, Access, and Possession. When we work with Indigenous organizations and
              communities, the data and the decisions about it stay with the community.
            </p>
            <p>
              Every deployment is scoped, auditable, and built with clear human oversight. We
              document the methodology behind each model and automation so it can stand up to
              evaluation, and delivery stays in Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Teaming */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Teaming</h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            We partner with established prime contractors and bring Indigenous procurement
            eligibility, AI delivery capability, and accountable execution. If you are bidding
            federal work and want an Indigenous-owned AI delivery partner, tell us what you are
            pursuing.
          </p>
          <div className="mt-10">
            <a
              href={INTRO_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-lg bg-teal-500 text-slate-900 hover:bg-teal-400 transition-colors"
            >
              Start a teaming conversation
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-700 text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Bring Indigenous-owned AI delivery to your next bid.
          </h2>
          <p className="mt-5 text-lg text-teal-100 leading-relaxed">
            Read our capability statement, or book a short call to talk through what you are
            pursuing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={CAPABILITY_STATEMENT_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-lg bg-white text-teal-700 hover:bg-teal-50 transition-colors"
            >
              View capability statement
            </a>
            <a
              href={INTRO_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 text-sm font-semibold rounded-lg border border-teal-400 text-white hover:bg-teal-600 transition-colors"
            >
              Book an intro call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
