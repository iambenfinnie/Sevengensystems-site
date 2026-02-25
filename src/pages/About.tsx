import { Link } from 'react-router-dom'

export function About() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About Us</h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Seven Gen Systems is an Indigenous-owned AI education and automation firm. We keep
            things scoped, honest, and practical — and we build systems that last.
          </p>
        </div>
      </section>

      {/* Seven Generations Principle */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-4">Our Name</div>
            <h2 className="text-3xl font-bold text-slate-900">The Seven Generations principle</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Our name comes from an Indigenous governance principle: decisions today should
              account for their impact seven generations forward. For us that means we build
              things that last — systems your team can understand, maintain, and own — and
              we do not recommend technology we would not trust to hold up over time.
            </p>
          </div>
        </div>
      </section>

      {/* How we operate */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">How we operate</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Under-promise, over-deliver',
                desc: 'We scope conservatively and would rather surprise you with the result than with the invoice.',
              },
              {
                title: 'Prove value before scale',
                desc: 'Every engagement starts small. We show results on a fixed-scope project before discussing anything bigger.',
              },
              {
                title: 'Lean and accountable',
                desc: 'We hold accountability for every deliverable. QA and client relationships stay with us.',
              },
              {
                title: 'Build for independence',
                desc: 'You should be stronger after working with us, not more dependent on us. Everything we deliver is yours to keep and run.',
              },
            ].map((value) => (
              <div key={value.title} className="rounded-xl border border-slate-200 bg-white p-7 hover:border-teal-300 transition-colors">
                <h3 className="font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">The team</h2>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <img
                src="/team/rob-maclean.jpg"
                alt="Robert Maclean, CEO of Seven Gen Systems"
                className="w-40 h-40 rounded-2xl object-cover object-[center_20%] flex-shrink-0 shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Robert Maclean</h3>
                <p className="text-sm font-medium text-teal-600 mt-1">CEO</p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Robert Maclean leads Seven Gen Systems with a simple goal: helping organizations use AI to make their work easier and more effective. He focuses on practical systems that reduce busywork, strengthen operations, and deliver results teams can count on.
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  He believes technology should create real opportunity, not complexity, and works to make AI more accessible, responsible, and useful — especially for communities often left out of new technologies. His approach is grounded in long-term thinking, trust, and accountability.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-12 flex flex-col sm:flex-row gap-8 items-start">
              <img
                src="/team/ben-finnie.jpg"
                alt="Ben Finnie, Head of Systems & Automation at Seven Gen Systems"
                className="w-40 h-40 rounded-2xl object-cover object-[center_35%] flex-shrink-0 shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Ben Finnie</h3>
                <p className="text-sm font-medium text-teal-600 mt-1">Head of Systems & Automation</p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Ben Finnie leads systems and automation at Seven Gen Systems, designing and implementing AI workflows that solve real operational problems — not experimental or hype-driven use cases.
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  His focus is on building clear, reliable automations that teams can understand, maintain, and trust over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Want to learn more about what we do?</h2>
          <p className="mt-4 text-lg text-teal-100">Let's have a conversation.</p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-teal-700 hover:bg-teal-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
