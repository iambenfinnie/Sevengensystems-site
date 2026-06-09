import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export type Discipline =
  | 'Machine Interactions'
  | 'Cognitive Automation'
  | 'Insights & Predictive Modelling'

export interface CaseStudyMetric {
  value: string
  label: string
  footnote?: string
}

export interface CaseStudyQuote {
  text: string
  attribution: string
  role?: string
}

export interface CaseStudyProps {
  discipline: Discipline
  client: string
  title: string
  subtitle: string
  heroMedia?: ReactNode
  headlineMetrics: CaseStudyMetric[]
  problem: ReactNode
  methodology: ReactNode
  intervention: ReactNode
  outcome: ReactNode
  quote?: CaseStudyQuote
  ctaHeadline?: string
  ctaSub?: string
}

const disciplineColor: Record<Discipline, string> = {
  'Machine Interactions': 'bg-indigo-50 text-indigo-700 ring-indigo-200',
  'Cognitive Automation': 'bg-teal-50 text-teal-700 ring-teal-200',
  'Insights & Predictive Modelling': 'bg-amber-50 text-amber-700 ring-amber-200',
}

export function CaseStudy(props: CaseStudyProps) {
  const {
    discipline,
    client,
    title,
    subtitle,
    heroMedia,
    headlineMetrics,
    problem,
    methodology,
    intervention,
    outcome,
    quote,
    ctaHeadline = 'Want this kind of system in your organization?',
    ctaSub = 'Book a 30-minute discovery call. No pitch, just a working conversation about what you would automate first.',
  } = props

  return (
    <article>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${disciplineColor[discipline]}`}
            >
              {discipline}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-400">Case Study</span>
            <span className="text-xs uppercase tracking-wider text-slate-500">{client}</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">{subtitle}</p>
        </div>
        {heroMedia ? (
          <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-800">
              {heroMedia}
            </div>
          </div>
        ) : null}
      </section>

      {/* Headline metrics */}
      {headlineMetrics.length > 0 && (
        <section className="bg-slate-800 text-white">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <div
              className={`grid gap-10 text-center sm:gap-8 ${
                headlineMetrics.length === 2
                  ? 'sm:grid-cols-2'
                  : headlineMetrics.length === 3
                    ? 'sm:grid-cols-3'
                    : 'sm:grid-cols-2 lg:grid-cols-4'
              }`}
            >
              {headlineMetrics.map((m) => (
                <div key={m.label}>
                  <div className="text-4xl sm:text-5xl font-extrabold text-teal-400">{m.value}</div>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-xs mx-auto">{m.label}</p>
                  {m.footnote ? (
                    <p className="mt-2 text-xs text-slate-500 max-w-xs mx-auto">{m.footnote}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Body sections */}
      <Section eyebrow="The Problem" title="What was broken before">
        {problem}
      </Section>

      <Section eyebrow="Methodology" title="How the system thinks" tone="alt">
        {methodology}
      </Section>

      <Section eyebrow="Intervention" title="What we built">
        {intervention}
      </Section>

      <Section eyebrow="Outcome" title="What changed" tone="alt">
        {outcome}
      </Section>

      {quote ? (
        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl sm:text-3xl font-medium leading-snug">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <div className="mt-8 text-sm text-slate-400">
              <span className="font-semibold text-slate-200">{quote.attribution}</span>
              {quote.role ? ` — ${quote.role}` : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="bg-teal-700 text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">{ctaHeadline}</h2>
          <p className="mt-5 text-lg text-teal-100 leading-relaxed">{ctaSub}</p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-teal-700 hover:bg-teal-50 transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

interface SectionProps {
  eyebrow: string
  title: string
  tone?: 'default' | 'alt'
  children: ReactNode
}

function Section({ eyebrow, title, tone = 'default', children }: SectionProps) {
  const bg = tone === 'alt' ? 'bg-slate-50' : 'bg-white'
  return (
    <section className={bg}>
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-xs uppercase tracking-wider font-semibold text-teal-600">{eyebrow}</div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">{title}</h2>
        <div className="mt-8 text-base sm:text-lg text-slate-700 leading-relaxed space-y-5">
          {children}
        </div>
      </div>
    </section>
  )
}
