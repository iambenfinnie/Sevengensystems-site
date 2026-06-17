'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { Sprout, Bot, GraduationCap, ArrowRight, ArrowUpRight, Leaf } from 'lucide-react'
import { Sora, Inter } from 'next/font/google'

const sora = Sora({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap' })

/* ------------------------------------------------------------------ */
/*  Palette                                                            */
/* ------------------------------------------------------------------ */
const C = {
  bgTop: '#0B1410',
  bgBottom: '#15211A',
  text: '#F3EDE2',
  muted: '#A7B3A4',
  copper: '#E8A24A',
  aurora: '#5BE3A6',
  line: 'rgba(167,179,164,0.14)',
}

/* ================================================================== */
/*  SEVEN RINGS — living canvas centerpiece                            */
/*  Seven concentric rings, copper -> aurora gradient strokes, each    */
/*  ring breathes on its own phase; a ripple emanates outward on a     */
/*  loop. Reduced-motion -> a single static frozen frame.              */
/* ================================================================== */
function SevenRings() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const RING_COUNT = 7
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let raf = 0
    let start = performance.now()

    // Interpolate copper -> aurora across ring index.
    const ringColor = (t: number, alpha: number) => {
      const c1 = [232, 162, 74] // copper
      const c2 = [91, 227, 166] // aurora
      const r = Math.round(c1[0] + (c2[0] - c1[0]) * t)
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * t)
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * t)
      return `rgba(${r},${g},${b},${alpha})`
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (now: number) => {
      const elapsed = (now - start) / 1000
      const cx = width / 2
      const cy = height / 2
      const maxR = Math.min(width, height) / 2 - 14
      const baseStep = maxR / (RING_COUNT + 0.5)

      ctx.clearRect(0, 0, width, height)
      ctx.lineCap = 'round'

      // Soft central glow.
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.9)
      glow.addColorStop(0, 'rgba(232,162,74,0.16)')
      glow.addColorStop(0.45, 'rgba(91,227,166,0.05)')
      glow.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(cx, cy, maxR, 0, Math.PI * 2)
      ctx.fill()

      // Ripple: a wave of radius that sweeps outward every ~5.2s.
      const ripplePeriod = 5.2
      const ripplePhase = reduce ? 0.5 : (elapsed % ripplePeriod) / ripplePeriod
      const rippleR = ripplePhase * maxR

      for (let i = 0; i < RING_COUNT; i++) {
        const t = i / (RING_COUNT - 1)
        const ringBase = baseStep * (i + 1)

        // Breathing: each ring on its own phase, frozen when reduced.
        const breathe = reduce ? 0 : Math.sin(elapsed * 0.9 + i * 0.8) * (baseStep * 0.06)
        const radius = ringBase + breathe

        // Ripple proximity boosts brightness + width as the wave passes.
        const dist = Math.abs(radius - rippleR)
        const proximity = reduce ? 0.25 : Math.max(0, 1 - dist / (baseStep * 1.6))

        const baseAlpha = 0.32 + t * 0.14
        const alpha = Math.min(0.92, baseAlpha + proximity * 0.55)
        const lineW = 1.4 + proximity * 2.6

        ctx.beginPath()
        ctx.strokeStyle = ringColor(t, alpha)
        ctx.lineWidth = lineW
        ctx.shadowColor = ringColor(t, 0.5)
        ctx.shadowBlur = 8 + proximity * 18
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.shadowBlur = 0

      // Center seed dot.
      ctx.beginPath()
      ctx.fillStyle = ringColor(0, 0.95)
      ctx.shadowColor = 'rgba(232,162,74,0.8)'
      ctx.shadowBlur = 16
      ctx.arc(cx, cy, 4.5, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0

      if (!reduce) raf = requestAnimationFrame(draw)
    }

    resize()
    start = performance.now()
    if (reduce) {
      // One static, balanced frame.
      draw(start + 1000)
    } else {
      raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      resize()
      if (reduce) draw(performance.now())
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [reduce])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        maxWidth: 560,
        margin: '0 auto',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Motion helpers                                                     */
/* ------------------------------------------------------------------ */
const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const labelStyle: React.CSSProperties = {
  fontFamily: inter.style.fontFamily,
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
}

/* ------------------------------------------------------------------ */
/*  Pillar data                                                        */
/* ------------------------------------------------------------------ */
type Pillar = {
  step: string
  name: string
  Icon: typeof Sprout
  tag: string
  desc: string
  items: string[]
}

const PILLARS: Pillar[] = [
  {
    step: '01',
    name: 'Grow',
    Icon: Sprout,
    tag: 'Reach',
    desc: 'AI lead generation, websites that convert, and growth systems that compound.',
    items: ['AI lead generation', 'Websites that convert', 'Growth systems'],
  },
  {
    step: '02',
    name: 'Automate',
    Icon: Bot,
    tag: 'Build',
    desc: 'AI voice agents and receptionists, workflow automation, and custom AI tools.',
    items: ['AI voice agents & receptionists', 'Workflow automation', 'Custom AI tools'],
  },
  {
    step: '03',
    name: 'Learn',
    Icon: GraduationCap,
    tag: 'Endure',
    desc: 'AI workshops and training, plus grant-funded programs that build lasting capacity.',
    items: ['AI workshops & training', 'Grant-funded programs', 'Lasting team capacity'],
  },
]

/* ================================================================== */
/*  PAGE                                                               */
/* ================================================================== */
export default function SeventhPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={inter.className}
      style={{
        minHeight: '100vh',
        color: C.text,
        background: `linear-gradient(160deg, ${C.bgTop} 0%, ${C.bgBottom} 100%)`,
        backgroundAttachment: 'fixed',
        fontFamily: inter.style.fontFamily,
        overflowX: 'hidden',
      }}
    >
      {/* ---------------------------------------------------------- */}
      {/*  TOP BAR                                                    */}
      {/* ---------------------------------------------------------- */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          borderBottom: `1px solid ${scrolled ? C.line : 'transparent'}`,
          background: scrolled ? 'rgba(11,20,16,0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '18px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
              color: C.text,
            }}
          >
            <RingMark />
            <span
              style={{
                fontFamily: sora.style.fontFamily,
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: '-0.01em',
              }}
            >
              Seven Gen Systems
            </span>
          </Link>

          <Link
            href="/contact"
            style={{
              fontFamily: inter.style.fontFamily,
              fontSize: 14,
              fontWeight: 600,
              color: C.bgTop,
              background: C.copper,
              padding: '10px 18px',
              borderRadius: 999,
              textDecoration: 'none',
              boxShadow: '0 0 0 1px rgba(232,162,74,0.4), 0 8px 24px -10px rgba(232,162,74,0.6)',
            }}
          >
            Book a discovery call
          </Link>
        </div>
      </header>

      {/* ---------------------------------------------------------- */}
      {/*  HERO                                                       */}
      {/* ---------------------------------------------------------- */}
      <section
        style={{
          position: 'relative',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '64px 24px 88px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
            gap: 48,
            alignItems: 'center',
          }}
          className="seventh-hero-grid"
        >
          {/* Copy */}
          <motion.div initial="hidden" animate="show">
            <motion.div
              custom={0}
              variants={reveal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                ...labelStyle,
                color: C.aurora,
                border: `1px solid ${C.line}`,
                borderRadius: 999,
                padding: '7px 14px',
                marginBottom: 26,
              }}
            >
              <Leaf size={13} strokeWidth={2} aria-hidden="true" />
              Indigenous-owned AI, built for the long term
            </motion.div>

            <motion.h1
              custom={1}
              variants={reveal}
              style={{
                fontFamily: sora.style.fontFamily,
                fontWeight: 700,
                fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              Build it so the{' '}
              <span
                style={{
                  background: `linear-gradient(100deg, ${C.copper}, ${C.aurora})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                seventh generation
              </span>{' '}
              thanks you.
            </motion.h1>

            <motion.p
              custom={2}
              variants={reveal}
              style={{
                marginTop: 22,
                maxWidth: 460,
                fontSize: 18,
                lineHeight: 1.6,
                color: C.muted,
              }}
            >
              We build practical AI automation and training that actually works — weighed
              against its impact seven generations ahead, not the next quarter.
            </motion.p>

            <motion.div
              custom={3}
              variants={reveal}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}
            >
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontWeight: 600,
                  fontSize: 15,
                  color: C.bgTop,
                  background: C.copper,
                  padding: '14px 24px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  boxShadow: '0 0 40px -8px rgba(232,162,74,0.65), 0 0 0 1px rgba(232,162,74,0.5)',
                }}
              >
                Book a discovery call
                <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <Link
                href="/automate"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontWeight: 600,
                  fontSize: 15,
                  color: C.text,
                  background: 'rgba(243,237,226,0.04)',
                  border: `1px solid ${C.line}`,
                  padding: '14px 24px',
                  borderRadius: 999,
                  textDecoration: 'none',
                }}
              >
                See what we build
                <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <SevenRings />
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  PRINCIPLE STATEMENT                                        */}
      {/* ---------------------------------------------------------- */}
      <Divider />
      <section style={{ maxWidth: 920, margin: '0 auto', padding: '88px 24px' }}>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
          variants={reveal}
          style={{ ...labelStyle, color: C.copper, marginBottom: 24 }}
        >
          The seventh generation principle
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={1}
          variants={reveal}
          style={{
            fontFamily: sora.style.fontFamily,
            fontWeight: 500,
            fontSize: 'clamp(1.6rem, 3.4vw, 2.5rem)',
            lineHeight: 1.32,
            letterSpacing: '-0.015em',
            margin: 0,
          }}
        >
          The Haudenosaunee weigh every decision against its impact{' '}
          <span style={{ color: C.aurora }}>seven generations</span> ahead. We build the same
          way — systems engineered to still be working, and still be understood, long after the
          launch.
        </motion.p>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  PILLARS — the path                                         */}
      {/* ---------------------------------------------------------- */}
      <Divider />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 24px' }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={0}
          variants={reveal}
          style={{ marginBottom: 48 }}
        >
          <p style={{ ...labelStyle, color: C.copper, marginBottom: 14 }}>Three rings, one path</p>
          <h2
            style={{
              fontFamily: sora.style.fontFamily,
              fontWeight: 600,
              fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
              letterSpacing: '-0.02em',
              margin: 0,
              maxWidth: 640,
            }}
          >
            From first reach to lasting capacity.
          </h2>
        </motion.div>

        <div
          className="seventh-pillars"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: 20,
          }}
        >
          {PILLARS.map((p, i) => (
            <PillarCard key={p.name} pillar={p} index={i} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  TRUST STRIP                                                */}
      {/* ---------------------------------------------------------- */}
      <Divider />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px' }}>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '14px 40px',
          }}
        >
          {['Indigenous-owned', 'CCIB Certified', 'Canada-wide'].map((t, i) => (
            <motion.li
              key={t}
              custom={i}
              variants={reveal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                fontFamily: sora.style.fontFamily,
                fontWeight: 500,
                fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
                color: C.text,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 999,
                  background: i % 2 === 0 ? C.copper : C.aurora,
                  boxShadow: `0 0 14px ${i % 2 === 0 ? C.copper : C.aurora}`,
                }}
              />
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  FINAL CTA                                                  */}
      {/* ---------------------------------------------------------- */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 110px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 28,
            border: `1px solid ${C.line}`,
            padding: 'clamp(40px, 6vw, 72px)',
            textAlign: 'center',
            background: 'rgba(243,237,226,0.025)',
          }}
        >
          {/* copper glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(60% 120% at 50% -10%, rgba(232,162,74,0.28), rgba(232,162,74,0) 60%)',
              pointerEvents: 'none',
            }}
          />
          <motion.div
            aria-hidden="true"
            initial={false}
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '50%',
              bottom: -180,
              transform: 'translateX(-50%)',
              width: 420,
              height: 420,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(91,227,166,0.18), rgba(91,227,166,0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative' }}>
            <h2
              style={{
                fontFamily: sora.style.fontFamily,
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4.4vw, 3.1rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.08,
                margin: 0,
                maxWidth: 720,
                marginInline: 'auto',
              }}
            >
              Let&apos;s build something that lasts.
            </h2>
            <p
              style={{
                marginTop: 18,
                fontSize: 17,
                lineHeight: 1.6,
                color: C.muted,
                maxWidth: 520,
                marginInline: 'auto',
              }}
            >
              Whether you&apos;re a Canadian small business or a federal procurement buyer, we
              start with one honest conversation about what you actually need.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                marginTop: 34,
                fontWeight: 600,
                fontSize: 16,
                color: C.bgTop,
                background: C.copper,
                padding: '15px 28px',
                borderRadius: 999,
                textDecoration: 'none',
                boxShadow: '0 0 50px -6px rgba(232,162,74,0.7), 0 0 0 1px rgba(232,162,74,0.5)',
              }}
            >
              Book a discovery call
              <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  FOOTER                                                     */}
      {/* ---------------------------------------------------------- */}
      <footer style={{ borderTop: `1px solid ${C.line}` }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '28px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <RingMark />
            <span style={{ fontFamily: sora.style.fontFamily, fontWeight: 600, fontSize: 14 }}>
              Seven Gen Systems
            </span>
          </div>
          <span style={{ ...labelStyle, color: C.muted, fontSize: 11 }}>
            Indigenous-owned · CCIB Certified · Canada-wide
          </span>
        </div>
      </footer>

      {/* Responsive: stack hero + pillars on narrow viewports */}
      <style>{`
        @media (max-width: 860px) {
          .seventh-hero-grid { grid-template-columns: 1fr !important; }
          .seventh-pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Small ring wordmark glyph (static, reused in bar + footer)         */
/* ------------------------------------------------------------------ */
function RingMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="seventhMark" x1="0" y1="0" x2="26" y2="26">
          <stop offset="0" stopColor={C.copper} />
          <stop offset="1" stopColor={C.aurora} />
        </linearGradient>
      </defs>
      <circle cx="13" cy="13" r="11.5" stroke="url(#seventhMark)" strokeWidth="1.1" opacity="0.5" />
      <circle cx="13" cy="13" r="7.5" stroke="url(#seventhMark)" strokeWidth="1.2" opacity="0.8" />
      <circle cx="13" cy="13" r="3.5" stroke="url(#seventhMark)" strokeWidth="1.4" />
      <circle cx="13" cy="13" r="1.4" fill={C.copper} />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Divider                                                            */
/* ------------------------------------------------------------------ */
function Divider() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 1,
        maxWidth: 1200,
        margin: '0 auto',
        background: `linear-gradient(90deg, transparent, ${C.line}, transparent)`,
      }}
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Pillar card                                                        */
/* ------------------------------------------------------------------ */
function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const [hover, setHover] = useState(false)
  const { Icon } = pillar
  const accent = index === 1 ? C.aurora : C.copper

  return (
    <motion.article
      custom={index}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 22,
        border: `1px solid ${hover ? 'rgba(232,162,74,0.4)' : C.line}`,
        background: 'rgba(243,237,226,0.025)',
        padding: 28,
        transition: 'border-color 0.35s ease, transform 0.35s ease',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* warm hover glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: hover ? 1 : 0,
          transition: 'opacity 0.4s ease',
          background: `radial-gradient(80% 90% at 20% 0%, ${
            index === 1 ? 'rgba(91,227,166,0.14)' : 'rgba(232,162,74,0.14)'
          }, transparent 65%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 22,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 46,
              height: 46,
              borderRadius: 14,
              border: `1px solid ${C.line}`,
              background: 'rgba(11,20,16,0.4)',
              color: accent,
              boxShadow: hover ? `0 0 26px -6px ${accent}` : 'none',
              transition: 'box-shadow 0.35s ease',
            }}
          >
            <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
          </div>
          <span
            style={{
              fontFamily: sora.style.fontFamily,
              fontWeight: 700,
              fontSize: 14,
              color: C.muted,
              opacity: 0.7,
            }}
          >
            {pillar.step}
          </span>
        </div>

        <p style={{ ...labelStyle, color: accent, marginBottom: 10 }}>{pillar.tag}</p>
        <h3
          style={{
            fontFamily: sora.style.fontFamily,
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: '-0.01em',
            margin: '0 0 12px',
          }}
        >
          {pillar.name}
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: C.muted, margin: '0 0 20px' }}>
          {pillar.desc}
        </p>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
          {pillar.items.map((item) => (
            <li
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 14,
                color: C.text,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: accent,
                  flexShrink: 0,
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
