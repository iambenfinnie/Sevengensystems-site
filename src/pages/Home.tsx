import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, PhoneCall, TrendingUp, Zap, GraduationCap, CheckCircle2 } from 'lucide-react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

// ---------------------------------------------------------------------------
// Rotating hero phrases — cycles through Seven Gen's three service pillars
// ---------------------------------------------------------------------------
const rotatingPhrases = [
  'We build custom AI tools for you.',
  'We automate your workflows.',
  'We train your whole team.',
  'We grow your client pipeline.',
  'We make AI actually stick.',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

// ---------------------------------------------------------------------------
// Count-up stat component
// Animates from 0 to `end` when scrolled into view.
// Respects prefers-reduced-motion — jumps straight to final value if set.
// ---------------------------------------------------------------------------
function CountUpStat({
  end,
  suffix,
  decimals = 0,
}: {
  end: number
  suffix: string
  decimals?: number
}) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(end)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1800 // ms — ease-out over ~1.8s
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // cubic ease-out
            setValue(eased * end)
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-extrabold text-teal-400">
      {display}{suffix}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Stats data — updated labels (change 4)
// ---------------------------------------------------------------------------
const stats = [
  {
    end: 92,
    suffix: '%',
    decimals: 0,
    label: 'of large companies now run AI in their daily operations',
  },
  {
    end: 7.5,
    suffix: ' hrs',
    decimals: 1,
    label: 'saved per person per week. Time your team could spend on real work.',
  },
  {
    end: 78,
    suffix: '%',
    decimals: 0,
    label: "of organizations have already started. The ones that haven't are falling behind.",
  },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => {
      setPhraseIndex((i) => (i + 1) % rotatingPhrases.length)
    }, 2800)
    return () => clearTimeout(id)
  }, [phraseIndex])

  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

        <div className="relative mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8 text-center">

          {/* Static first line */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            We don't just talk about AI.
          </motion.h1>

          {/* Rotating animated second line */}
          <motion.div
            className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span className="relative flex w-full justify-center overflow-hidden pb-2 pt-1">
              &nbsp;
              {rotatingPhrases.map((phrase, index) => (
                <motion.span
                  key={index}
                  className="absolute text-teal-400 whitespace-nowrap"
                  initial={{ opacity: 0, y: 60 }}
                  animate={
                    phraseIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: phraseIndex > index ? -60 : 60 }
                  }
                  transition={{ type: 'spring', stiffness: 55, damping: 18 }}
                >
                  {phrase}
                </motion.span>
              ))}
            </span>
          </motion.div>

          <motion.p
            className="mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            We help organizations across Canada identify where AI makes the biggest difference, then we build it, automate it, and train your team to use it.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-500 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Book a Free Discovery Call
            </Link>
            <Link
              to="/grow"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-lg border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-colors"
            >
              See What We Do
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────────────────────── */}
      <div className="bg-slate-900 border-b border-slate-700">
        <div className="mx-auto max-w-5xl px-4 py-3.5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true">🇨🇦</span>
              <span>Canada Wide</span>
            </span>
            <span className="hidden sm:inline text-slate-700" aria-hidden="true">·</span>
            <span>Indigenous-Owned</span>
            <span className="hidden sm:inline text-slate-700" aria-hidden="true">·</span>
            <a
              href="https://www.ccib.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline underline-offset-2 decoration-teal-800 hover:decoration-teal-600 transition-colors"
            >
              CCIB Certified
            </a>
            <span className="hidden sm:inline text-slate-700" aria-hidden="true">·</span>
            <a
              href="https://www.sac-isc.gc.ca/REA-IBD/eng/profile?id=A3C3A567756E514C939557F91EB1DC5D&index=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 underline underline-offset-2 decoration-teal-800 hover:decoration-teal-600 transition-colors"
            >
              IBD Certified
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats Strip ──────────────────────────────────────────────────── */}
      <section className="bg-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <CountUpStat end={item.end} suffix={item.suffix} decimals={item.decimals} />
                <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-slate-600">
            Sources: AIPRM · LSE Global Research · Federal Reserve Bank of St. Louis
          </p>
        </div>
      </section>

      {/* ── Scroll Reveal ────────────────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="text-center px-4">
              <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-3">
                What we actually build
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                AI that fits the way you work
              </h2>
              <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base leading-relaxed">
                Every engagement is built around your business. Here's a look at what we deliver across our three service areas.
              </p>
            </div>
          }
        >
          {/* Dark service overview — swap this out for a real screenshot when ready */}
          <div className="h-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: TrendingUp,
                label: 'Grow',
                title: 'Get More Clients',
                desc: 'We build the tools that make your business easier to find, trust, and buy from.',
                color: 'text-teal-400',
                bg: 'bg-teal-900/30 border-teal-800/50',
                items: ['AI-powered lead intake & follow-up', 'Custom websites built to convert', 'Content creation systems', 'Market demand research & dashboards'],
              },
              {
                icon: Zap,
                label: 'Automate',
                title: 'Reclaim Your Time',
                desc: 'We replace manual busywork with intelligent systems that run while you sleep.',
                color: 'text-cyan-400',
                bg: 'bg-cyan-900/30 border-cyan-800/50',
                items: ['Workflow automation (quoting, scheduling, reporting)', 'AI voice agents for intake & customer service', 'CRM setup & integration', 'Custom AI tools built for your operation'],
              },
              {
                icon: GraduationCap,
                label: 'Learn',
                title: 'Train Your Team',
                desc: 'We give your people practical AI skills — not theory, but tools they\'ll use Monday morning.',
                color: 'text-emerald-400',
                bg: 'bg-emerald-900/30 border-emerald-800/50',
                items: ['AI Foundations workshop', 'Applied AI for your industry', 'Ongoing team enablement', 'Grant-funded options available'],
              },
            ].map((service) => (
              <div
                key={service.label}
                className={`rounded-xl border p-5 flex flex-col ${service.bg}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className={`w-5 h-5 ${service.color}`} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${service.color}`}>
                    {service.label}
                  </span>
                </div>
                <p className="text-base font-bold text-white">{service.title}</p>
                <p className="text-xs text-slate-400 mt-1 mb-3 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2 flex-1">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${service.color} opacity-70`} />
                      <span className="text-sm text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ContainerScroll>
      </section>

      {/* ── What We Do ───────────────────────────────────────────────────── */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Three ways we work with you</h2>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                label: 'Grow',
                title: 'Get More Clients',
                desc: 'We build the tools that make your business easier to find, trust, and buy from. AI-powered intake, websites that convert, and systems that do the follow-up for you.',
                link: '/grow',
                linkText: 'See how we help you grow →',
              },
              {
                label: 'Automate',
                title: 'Reclaim Your Time',
                desc: 'We replace manual busywork with intelligent systems that run while you sleep. Quoting, scheduling, reporting, intake — automated end to end.',
                link: '/automate',
                linkText: 'See what we automate →',
              },
              {
                label: 'Learn',
                title: 'Train Your Team',
                desc: 'Practical AI skills your people will actually use. Workshops are jargon-free, built around your industry, and often fundable through existing grants.',
                link: '/learn',
                linkText: 'See our training programs →',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className="rounded-xl border border-slate-200 p-7 hover:border-teal-300 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <p className="text-xs font-bold text-teal-600 uppercase tracking-widest">{service.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                <Link
                  to={service.link}
                  className="mt-5 inline-block text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  {service.linkText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <AnimatedTestimonials
        testimonials={[
          {
            id: 1,
            name: 'Ayob Assali',
            role: 'Commercial Sales & Leasing',
            company: 'KW Commercial',
            content: "The training was straightforward and immediately useful. I now use AI tools every day to draft emails and research deals. I'd recommend Seven Gen Systems to anyone looking to actually put AI to work in a fast-paced environment.",
            rating: 5,
          },
          {
            id: 2,
            name: 'Alex Lilley',
            role: 'Residential Real Estate Agent',
            company: 'Engel & Völkers',
            content: "I had no idea what I was missing until that first session. By the end, I couldn't believe how much was already possible with the tools I had. If you're in residential real estate and not using AI yet, this is where to start.",
            rating: 5,
          },
          {
            id: 3,
            name: 'Joel Finnie',
            role: 'CEO',
            company: 'Bush Busters',
            content: "Ben and the team helped me see some of the many ways AI can grow my business. They built custom tools for market research and quoting, and even helped me optimize my website. My only regret is not doing it sooner.",
            rating: 5,
          },
        ]}
      />

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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple process. Real outcomes.</h2>
          </motion.div>
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
                desc: "You get a clear scope: what we'll build or teach, what it costs, and what you can expect on the other side.",
              },
              {
                number: '03',
                title: 'Delivery & Support',
                desc: "We execute and stay involved until it's working. You walk away confident, not confused.",
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

      {/* ── Who We Work With ─────────────────────────────────────────────── */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Built for businesses ready to move past the hype
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We work with business owners, mid-size companies, nonprofits, and leadership teams that are done experimenting and ready to implement AI that actually sticks.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                name: 'Small & Mid-size Businesses',
                desc: 'Operational bottlenecks, manual work, and teams that are ready for AI but need it to actually fit their existing systems.',
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
                desc: 'Community programs, economic development, and essential services, with respect for data sovereignty and existing governance.',
              },
            ].map((org, i) => (
              <motion.div
                key={org.name}
                className="rounded-xl border border-slate-200 bg-white p-7"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <h3 className="font-semibold text-slate-900">{org.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{org.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
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
            Ready to see what AI can actually do for your business?
          </h2>
          <p className="mt-5 text-lg text-teal-100 leading-relaxed">
            Book a free 30-minute discovery call. No pitch, just an honest conversation about what's possible and where to start.
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
