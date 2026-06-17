'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google'
import {
  ArrowRight,
  PhoneCall,
  BarChart3,
  GraduationCap,
  Workflow,
  TrendingUp,
  ShieldCheck,
  PenLine,
  Bot,
  Mic,
  Sparkles,
  MapPin,
  Leaf,
  Check,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Fonts                                                               */
/* ------------------------------------------------------------------ */

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

/* ------------------------------------------------------------------ */
/* Palette                                                             */
/* ------------------------------------------------------------------ */

const PAPER = '#F5F2EC'
const INK = '#16130F'
const MUTED = '#6B6459'
const COBALT = '#2440FF'
const HAIRLINE = 'rgba(22, 19, 15, 0.12)'
const HAIRLINE_SOFT = 'rgba(22, 19, 15, 0.07)'

/* ------------------------------------------------------------------ */
/* Kinetic headline reveal (mask + translateY)                        */
/* ------------------------------------------------------------------ */

function RevealLine({
  children,
  delay = 0,
  reduce,
}: {
  children: React.ReactNode
  delay?: number
  reduce: boolean
}) {
  return (
    <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
      <motion.span
        style={{ display: 'block', willChange: 'transform' }}
        initial={reduce ? { y: 0 } : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Rotating word (kinetic detail in the deck)                         */
/* ------------------------------------------------------------------ */

const ROTATING = ['receptionists', 'dashboards', 'workshops', 'workflows']

function RotatingWord({ reduce }: { reduce: boolean }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (reduce) return
    const id: ReturnType<typeof setInterval> = setInterval(() => {
      setI((prev) => (prev + 1) % ROTATING.length)
    }, 2200)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <span
      style={{
        display: 'inline-block',
        position: 'relative',
        color: INK,
        fontWeight: 600,
      }}
    >
      <motion.span
        key={i}
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ display: 'inline-block', borderBottom: `2px solid ${COBALT}` }}
      >
        {ROTATING[i]}
      </motion.span>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Count-up (stat row)                                                 */
/* ------------------------------------------------------------------ */

function CountUp({
  to,
  suffix = '',
  prefix = '',
  reduce,
}: {
  to: number
  suffix?: string
  prefix?: string
  reduce: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(reduce ? to : 0)

  useEffect(() => {
    if (reduce) {
      setVal(to)
      return
    }
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, reduce])

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* LIVE TILE A — 24/7 ticking clock (AI receptionist Jane)            */
/* ------------------------------------------------------------------ */

function ClockTile({ reduce }: { reduce: boolean }) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id: ReturnType<typeof setInterval> = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const fmt = (n: number) => n.toString().padStart(2, '0')
  const hh = now ? fmt(now.getHours()) : '00'
  const mm = now ? fmt(now.getMinutes()) : '00'
  const ss = now ? fmt(now.getSeconds()) : '00'

  return (
    <Tile
      cobalt
      eyebrow="AI receptionist · Jane"
      title="Answers every call. 24 / 7."
      icon={<PhoneCall size={18} strokeWidth={2} />}
    >
      <div
        className={mono.className}
        style={{
          fontSize: 'clamp(36px, 6vw, 58px)',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.06em',
        }}
        aria-label={`Local time ${hh}:${mm}:${ss}`}
      >
        <span>{hh}</span>
        <span style={{ opacity: reduce ? 1 : 0.55 }}>:</span>
        <span>{mm}</span>
        <span
          style={{
            fontSize: '0.45em',
            color: 'rgba(255,255,255,0.7)',
            marginLeft: '0.2em',
          }}
        >
          {ss}
        </span>
      </div>
      <div
        style={{
          marginTop: 18,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <motion.span
          animate={reduce ? undefined : { opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 8,
            height: 8,
            borderRadius: 99,
            background: '#FFFFFF',
            display: 'inline-block',
          }}
        />
        <span
          className={mono.className}
          style={{
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          On the line · no voicemail
        </span>
      </div>
    </Tile>
  )
}

/* ------------------------------------------------------------------ */
/* LIVE TILE B — animated sparkline / bars (dashboards)               */
/* ------------------------------------------------------------------ */

const BAR_SEED = [38, 52, 44, 66, 58, 74, 62, 86, 78, 96]

function SparkTile({ reduce }: { reduce: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <Tile
      eyebrow="Growth dashboards"
      title="See what's working, live."
      icon={<BarChart3 size={18} strokeWidth={2} />}
    >
      <div
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 7,
          height: 96,
          marginTop: 6,
        }}
      >
        {BAR_SEED.map((h, idx) => (
          <motion.div
            key={idx}
            initial={reduce ? { height: `${h}%` } : { height: '6%' }}
            animate={inView || reduce ? { height: `${h}%` } : { height: '6%' }}
            transition={{
              duration: 0.7,
              delay: reduce ? 0 : idx * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              flex: 1,
              borderRadius: 4,
              background:
                idx >= BAR_SEED.length - 2 ? COBALT : 'rgba(22, 19, 15, 0.16)',
              willChange: 'height',
            }}
          />
        ))}
      </div>
      <div
        style={{
          marginTop: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          color: INK,
        }}
      >
        <TrendingUp size={16} strokeWidth={2.25} color={COBALT} />
        <span className={mono.className} style={{ fontSize: 12, color: MUTED }}>
          Leads, calls &amp; conversions in one view
        </span>
      </div>
    </Tile>
  )
}

/* ------------------------------------------------------------------ */
/* LIVE TILE C — typing effect (content systems)                      */
/* ------------------------------------------------------------------ */

const TYPE_LINES = [
  'Drafting follow-up for new lead…',
  'Generating this week’s blog post…',
  'Replying to a quote request…',
]

function TypingTile({ reduce }: { reduce: boolean }) {
  const [lineIdx, setLineIdx] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    if (reduce) {
      setText(TYPE_LINES[0])
      return
    }
    let char = 0
    let deleting = false
    let active = true

    const run = () => {
      if (!active) return
      const full = TYPE_LINES[lineIdx]
      if (!deleting) {
        char++
        setText(full.slice(0, char))
        if (char >= full.length) {
          deleting = true
          timeout = setTimeout(run, 1400)
          return
        }
        timeout = setTimeout(run, 42)
      } else {
        char--
        setText(full.slice(0, char))
        if (char <= 0) {
          deleting = false
          setLineIdx((p) => (p + 1) % TYPE_LINES.length)
          return
        }
        timeout = setTimeout(run, 22)
      }
    }

    let timeout: ReturnType<typeof setTimeout> = setTimeout(run, 300)
    return () => {
      active = false
      clearTimeout(timeout)
    }
  }, [lineIdx, reduce])

  return (
    <Tile
      eyebrow="Content systems"
      title="Words that keep the pipeline warm."
      icon={<PenLine size={18} strokeWidth={2} />}
    >
      <div
        style={{
          marginTop: 4,
          background: PAPER,
          border: `1px solid ${HAIRLINE}`,
          borderRadius: 10,
          padding: '16px 16px',
          minHeight: 92,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          className={mono.className}
          style={{
            fontSize: 14,
            color: INK,
            lineHeight: 1.5,
            wordBreak: 'break-word',
          }}
        >
          {text}
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
            style={{
              display: 'inline-block',
              width: 8,
              height: 17,
              marginLeft: 3,
              transform: 'translateY(3px)',
              background: COBALT,
            }}
          />
        </span>
      </div>
    </Tile>
  )
}

/* ------------------------------------------------------------------ */
/* Generic bento tile shell                                           */
/* ------------------------------------------------------------------ */

function Tile({
  children,
  eyebrow,
  title,
  icon,
  cobalt = false,
  style,
}: {
  children?: React.ReactNode
  eyebrow: string
  title: string
  icon: React.ReactNode
  cobalt?: boolean
  style?: React.CSSProperties
}) {
  const reduce = useReducedMotion() ?? false
  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? undefined : { y: -6 }}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 'clamp(20px, 3vw, 30px)',
        borderRadius: 18,
        background: cobalt ? COBALT : '#FFFFFF',
        border: cobalt ? '1px solid transparent' : `1px solid ${HAIRLINE}`,
        boxShadow: cobalt
          ? '0 18px 40px -24px rgba(36,64,255,0.55)'
          : '0 1px 0 rgba(22,19,15,0.04)',
        color: cobalt ? '#FFFFFF' : INK,
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            color: cobalt ? '#FFFFFF' : COBALT,
          }}
        >
          {icon}
        </span>
        <span
          className={mono.className}
          style={{
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: cobalt ? 'rgba(255,255,255,0.78)' : MUTED,
          }}
        >
          {eyebrow}
        </span>
      </div>
      <h3
        className={display.className}
        style={{
          fontSize: 'clamp(19px, 2.2vw, 24px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.08,
          margin: '0 0 14px',
          color: cobalt ? '#FFFFFF' : INK,
        }}
      >
        {title}
      </h3>
      <div style={{ marginTop: 'auto' }}>{children}</div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Static pillar tile (Grow / Automate / Learn summaries)             */
/* ------------------------------------------------------------------ */

function PillarTile({
  eyebrow,
  title,
  desc,
  icon,
  items,
}: {
  eyebrow: string
  title: string
  desc: string
  icon: React.ReactNode
  items: string[]
}) {
  return (
    <Tile eyebrow={eyebrow} title={title} icon={icon}>
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.55,
          color: MUTED,
          margin: '0 0 16px',
        }}
      >
        {desc}
      </p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
        {items.map((it) => (
          <li
            key={it}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              fontSize: 14,
              color: INK,
            }}
          >
            <Check size={15} strokeWidth={2.5} color={COBALT} />
            {it}
          </li>
        ))}
      </ul>
    </Tile>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function PressDemoPage() {
  const reduce = useReducedMotion() ?? false

  const trust = [
    { icon: <Leaf size={15} strokeWidth={2} />, label: 'Indigenous-owned' },
    { icon: <ShieldCheck size={15} strokeWidth={2} />, label: 'CCIB Certified' },
    { icon: <MapPin size={15} strokeWidth={2} />, label: 'Canada-wide' },
  ]

  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      style={{
        background: PAPER,
        color: INK,
        fontFamily: 'var(--font-body), system-ui, sans-serif',
        minHeight: '100vh',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* ---------- Top bar ---------- */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(245,242,236,0.82)',
          backdropFilter: 'saturate(160%) blur(10px)',
          WebkitBackdropFilter: 'saturate(160%) blur(10px)',
          borderBottom: `1px solid ${HAIRLINE_SOFT}`,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <span
            className={display.className}
            style={{
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                background: COBALT,
                borderRadius: 3,
                display: 'inline-block',
              }}
            />
            Seven Gen Systems
          </span>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: COBALT,
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: 600,
              padding: '10px 16px',
              borderRadius: 99,
              textDecoration: 'none',
            }}
          >
            Book a discovery call
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: 'clamp(56px, 9vw, 120px) 24px clamp(48px, 7vw, 90px)',
        }}
      >
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={mono.className}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: MUTED,
            border: `1px solid ${HAIRLINE}`,
            background: '#FFFFFF',
            padding: '7px 13px',
            borderRadius: 99,
            marginBottom: 'clamp(28px, 4vw, 44px)',
          }}
        >
          <Sparkles size={14} strokeWidth={2} color={COBALT} />
          Practical AI that actually works
        </motion.div>

        <h1
          className={display.className}
          style={{
            fontSize: 'clamp(46px, 9vw, 120px)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 0.95,
            margin: 0,
            maxWidth: '15ch',
          }}
        >
          <RevealLine delay={0.05} reduce={reduce}>
            We build AI into
          </RevealLine>
          <RevealLine delay={0.16} reduce={reduce}>
            the way you{' '}
            <span style={{ color: COBALT }}>already</span>
          </RevealLine>
          <RevealLine delay={0.27} reduce={reduce}>
            work.
          </RevealLine>
        </h1>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.5 }}
          style={{
            fontSize: 'clamp(17px, 2vw, 20px)',
            lineHeight: 1.5,
            color: MUTED,
            maxWidth: '46ch',
            margin: 'clamp(28px, 4vw, 40px) 0 0',
          }}
        >
          An Indigenous-owned AI automation &amp; training company. We build{' '}
          <RotatingWord reduce={reduce} /> that fit the business you run today
          &mdash; for Canadian small businesses and the buyers who fund them.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.62 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 22,
            marginTop: 'clamp(28px, 4vw, 40px)',
          }}
        >
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: COBALT,
              color: '#FFFFFF',
              fontSize: 16,
              fontWeight: 600,
              padding: '15px 24px',
              borderRadius: 99,
              textDecoration: 'none',
              boxShadow: '0 16px 34px -18px rgba(36,64,255,0.7)',
            }}
          >
            Book a discovery call
            <ArrowRight size={17} strokeWidth={2.5} />
          </Link>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              color: INK,
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
              borderBottom: `2px solid ${INK}`,
              paddingBottom: 2,
            }}
          >
            Meet Jane, our AI receptionist
          </Link>
        </motion.div>
      </section>

      {/* ---------- Trust row ---------- */}
      <section
        style={{
          borderTop: `1px solid ${HAIRLINE_SOFT}`,
          borderBottom: `1px solid ${HAIRLINE_SOFT}`,
          background: 'rgba(255,255,255,0.45)',
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '20px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'clamp(18px, 4vw, 40px)',
          }}
        >
          <span
            className={mono.className}
            style={{
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: MUTED,
            }}
          >
            Trusted, certified, Canadian
          </span>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(16px, 3vw, 32px)',
            }}
          >
            {trust.map((t) => (
              <span
                key={t.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: INK,
                }}
              >
                <span style={{ color: COBALT, display: 'inline-flex' }}>{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Bento: What we build ---------- */}
      <section
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: 'clamp(64px, 9vw, 110px) 24px clamp(40px, 6vw, 70px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            marginBottom: 'clamp(28px, 4vw, 46px)',
          }}
        >
          <h2
            className={display.className}
            style={{
              fontSize: 'clamp(34px, 5.5vw, 64px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 0.98,
              margin: 0,
            }}
          >
            What we build
          </h2>
          <p
            style={{
              fontSize: 16,
              color: MUTED,
              maxWidth: '34ch',
              margin: 0,
            }}
          >
            Three pillars &mdash; Grow, Automate, Learn &mdash; running live, not
            in a slide deck.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridAutoRows: 'minmax(190px, auto)',
            gap: 16,
          }}
        >
          {/* Live clock — large, cobalt */}
          <div style={{ gridColumn: 'span 3' }} className="tile-clock">
            <ClockTile reduce={reduce} />
          </div>

          {/* Live sparkline */}
          <div style={{ gridColumn: 'span 3' }} className="tile-spark">
            <SparkTile reduce={reduce} />
          </div>

          {/* Grow pillar */}
          <div style={{ gridColumn: 'span 2' }} className="tile-pillar">
            <PillarTile
              eyebrow="Grow"
              title="Get found. Get booked."
              icon={<TrendingUp size={18} strokeWidth={2} />}
              desc="Lead generation and websites that turn attention into booked work."
              items={['AI lead generation', 'Sites that convert', 'Growth systems']}
            />
          </div>

          {/* Automate pillar */}
          <div style={{ gridColumn: 'span 2' }} className="tile-pillar">
            <PillarTile
              eyebrow="Automate"
              title="Hand off the busywork."
              icon={<Workflow size={18} strokeWidth={2} />}
              desc="Voice agents and workflow automation that run while you do the work."
              items={['AI voice agents', 'Workflow automation', 'Custom AI tools']}
            />
          </div>

          {/* Learn pillar */}
          <div style={{ gridColumn: 'span 2' }} className="tile-pillar">
            <PillarTile
              eyebrow="Learn"
              title="Your team, AI-fluent."
              icon={<GraduationCap size={18} strokeWidth={2} />}
              desc="Hands-on workshops and training, including grant-funded programs."
              items={['AI workshops', 'Practical training', 'Grant-funded programs']}
            />
          </div>

          {/* Live typing — wide */}
          <div style={{ gridColumn: 'span 4' }} className="tile-type">
            <TypingTile reduce={reduce} />
          </div>

          {/* Jane / voice agent accent */}
          <div style={{ gridColumn: 'span 2' }} className="tile-jane">
            <Tile
              eyebrow="Voice agents"
              title="Meet Jane."
              icon={<Bot size={18} strokeWidth={2} />}
            >
              <p style={{ fontSize: 15, lineHeight: 1.55, color: MUTED, margin: '0 0 14px' }}>
                Our AI receptionist greets callers, books appointments, and never
                takes a day off.
              </p>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  color: COBALT,
                }}
              >
                <Mic size={15} strokeWidth={2.25} />
                Sounds human, works around the clock
              </span>
            </Tile>
          </div>
        </div>
      </section>

      {/* ---------- Stat row ---------- */}
      <section
        style={{
          borderTop: `1px solid ${HAIRLINE_SOFT}`,
          background: 'rgba(255,255,255,0.5)',
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: 'clamp(48px, 7vw, 80px) 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(24px, 4vw, 48px)',
          }}
        >
          {[
            { v: 24, suffix: '/7', label: 'Calls answered by Jane, every day' },
            { v: 3, suffix: '', label: 'Pillars: Grow, Automate, Learn' },
            { v: 100, suffix: '%', label: 'Indigenous-owned, CCIB Certified' },
            { v: 10, suffix: '+', label: 'Provinces & territories served' },
          ].map((s) => (
            <div key={s.label}>
              <div
                className={display.className}
                style={{
                  fontSize: 'clamp(40px, 6vw, 64px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  color: INK,
                }}
              >
                <CountUp to={s.v} suffix={s.suffix} reduce={reduce} />
              </div>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  lineHeight: 1.45,
                  color: MUTED,
                  maxWidth: '24ch',
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Final CTA (cobalt block) ---------- */}
      <section style={{ padding: 'clamp(56px, 8vw, 100px) 24px' }}>
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            background: COBALT,
            borderRadius: 28,
            padding: 'clamp(40px, 6vw, 80px)',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              opacity: 0.5,
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative' }}>
            <h2
              className={display.className}
              style={{
                fontSize: 'clamp(34px, 6vw, 72px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 0.98,
                margin: 0,
                maxWidth: '16ch',
              }}
            >
              Let&rsquo;s put AI to work in your business.
            </h2>
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.82)',
                maxWidth: '50ch',
                margin: '20px 0 0',
              }}
            >
              A 30-minute discovery call &mdash; no jargon, no pressure. We&rsquo;ll
              map the fastest practical win for the way you already work.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 20,
                marginTop: 'clamp(28px, 4vw, 40px)',
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#FFFFFF',
                  color: COBALT,
                  fontSize: 16,
                  fontWeight: 700,
                  padding: '16px 26px',
                  borderRadius: 99,
                  textDecoration: 'none',
                }}
              >
                Book a discovery call
                <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
              <span
                className={mono.className}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 12,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                <Leaf size={14} strokeWidth={2} />
                Indigenous-owned · Canada-wide
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer
        style={{
          borderTop: `1px solid ${HAIRLINE_SOFT}`,
          padding: '28px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <span
            className={display.className}
            style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Seven Gen Systems
          </span>
          <span className={mono.className} style={{ fontSize: 12, color: MUTED }}>
            Practical AI that actually works &middot; Canada
          </span>
        </div>
      </footer>

      {/* ---------- Responsive bento ---------- */}
      <style>{`
        @media (max-width: 860px) {
          .tile-clock, .tile-spark, .tile-type { grid-column: span 6 !important; }
          .tile-pillar, .tile-jane { grid-column: span 3 !important; }
        }
        @media (max-width: 560px) {
          .tile-clock, .tile-spark, .tile-type,
          .tile-pillar, .tile-jane { grid-column: span 6 !important; }
        }
      `}</style>
    </main>
  )
}
