'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, useReducedMotion, animate } from 'motion/react'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { TrendingUp, Bot, GraduationCap, ArrowRight, Phone } from 'lucide-react'

const display = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'] })

/* ---- palette ---------------------------------------------------------- */
const INK = '#07090E'
const TEXT = '#E8ECFF'
const MUTED = '#95A0C0'
const GLASS = 'rgba(255,255,255,0.04)'
const GLASS_BORDER = 'rgba(255,255,255,0.08)'
const AURORA = 'linear-gradient(105deg, #5BE3D6 0%, #8B7CFF 52%, #E26AC5 100%)'

/* ---- aurora mesh canvas ----------------------------------------------- */
type Blob = {
  hue: [number, number, number]
  x: number
  y: number
  r: number
  ax: number
  ay: number
  px: number
  py: number
  sx: number
  sy: number
}

function AuroraCanvas({ frozen }: { frozen: boolean }) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // low-res offscreen buffer for the soft "alive" glow, then blurred up
    const buffer = document.createElement('canvas')
    const bctx = buffer.getContext('2d')
    if (!bctx) return

    const blobs: Blob[] = [
      { hue: [91, 227, 214], x: 0.28, y: 0.32, r: 0.46, ax: 0.16, ay: 0.10, px: 0, py: 1.6, sx: 0.00021, sy: 0.00017 },
      { hue: [139, 124, 255], x: 0.62, y: 0.40, r: 0.52, ax: 0.18, ay: 0.14, px: 2.1, py: 0.4, sx: 0.00017, sy: 0.00024 },
      { hue: [226, 106, 197], x: 0.50, y: 0.66, r: 0.44, ax: 0.20, ay: 0.12, px: 4.0, py: 3.2, sx: 0.00023, sy: 0.00015 },
      { hue: [120, 180, 255], x: 0.78, y: 0.70, r: 0.40, ax: 0.14, ay: 0.16, px: 1.0, py: 2.5, sx: 0.00019, sy: 0.00021 },
    ]

    let raf = 0
    let w = 0
    let h = 0
    let bw = 0
    let bh = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const SCALE = 0.18 // render blobs tiny then upscale + blur

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      bw = Math.max(2, Math.round(w * SCALE))
      bh = Math.max(2, Math.round(h * SCALE))
      buffer.width = bw
      buffer.height = bh
    }
    resize()

    const draw = (t: number) => {
      bctx.clearRect(0, 0, bw, bh)
      bctx.globalCompositeOperation = 'lighter' // additive blend

      for (const b of blobs) {
        const cx = (b.x + Math.sin(t * b.sx + b.px) * b.ax) * bw
        const cy = (b.y + Math.cos(t * b.sy + b.py) * b.ay) * bh
        const rad = b.r * bw
        const breathe = 0.82 + 0.18 * Math.sin(t * 0.0004 + b.px)
        const g = bctx.createRadialGradient(cx, cy, 0, cx, cy, rad * breathe)
        const [rr, gg, bb] = b.hue
        g.addColorStop(0, `rgba(${rr},${gg},${bb},0.85)`)
        g.addColorStop(0.45, `rgba(${rr},${gg},${bb},0.32)`)
        g.addColorStop(1, `rgba(${rr},${gg},${bb},0)`)
        bctx.fillStyle = g
        bctx.beginPath()
        bctx.arc(cx, cy, rad * breathe, 0, Math.PI * 2)
        bctx.fill()
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = INK
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'lighter'
      ctx.filter = 'blur(48px)'
      ctx.imageSmoothingEnabled = true
      ctx.drawImage(buffer, 0, 0, bw, bh, 0, 0, canvas.width, canvas.height)
      ctx.filter = 'none'
      ctx.globalCompositeOperation = 'source-over'
    }

    const loop = (t: number) => {
      draw(t)
      raf = window.requestAnimationFrame(loop)
    }

    if (frozen) {
      draw(8200) // a pleasant static frame
    } else {
      raf = window.requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [frozen])

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  )
}

/* ---- reactive AI orb (Jane) ------------------------------------------- */
function AiOrb({ animated }: { animated: boolean }) {
  const [bars, setBars] = useState<number[]>(() => Array.from({ length: 11 }, () => 0.4))

  useEffect(() => {
    if (!animated) return
    let raf = 0
    const tick = (t: number) => {
      setBars((prev) =>
        prev.map((_, i) => {
          const v = 0.5 + 0.45 * Math.sin(t * 0.006 + i * 0.7) * Math.cos(t * 0.0021 + i)
          return Math.max(0.12, Math.abs(v))
        }),
      )
      raf = window.requestAnimationFrame(tick)
    }
    raf = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(raf)
  }, [animated])

  return (
    <div
      style={{
        position: 'relative',
        width: 240,
        height: 240,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      {/* pulsing concentric rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          aria-hidden
          style={{
            position: 'absolute',
            width: 200,
            height: 200,
            borderRadius: '50%',
            border: '1px solid rgba(139,124,255,0.35)',
          }}
          initial={false}
          animate={
            animated
              ? { scale: [1, 1.45], opacity: [0.5, 0] }
              : { scale: 1.2, opacity: 0.18 }
          }
          transition={
            animated
              ? { duration: 3.2, repeat: Infinity, delay: i * 1.05, ease: 'easeOut' }
              : { duration: 0 }
          }
        />
      ))}

      {/* core sphere */}
      <motion.div
        style={{
          width: 168,
          height: 168,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 36% 30%, #BFF7F0 0%, #6FE0D6 18%, #8B7CFF 52%, #E26AC5 84%, #5a2e6b 100%)',
          boxShadow:
            '0 0 60px 8px rgba(139,124,255,0.55), 0 0 120px 30px rgba(226,106,197,0.28), inset 0 0 40px rgba(255,255,255,0.25)',
          display: 'grid',
          placeItems: 'center',
          position: 'relative',
        }}
        animate={animated ? { scale: [1, 1.045, 1] } : { scale: 1 }}
        transition={animated ? { duration: 3.6, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
      >
        {/* waveform bars */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            height: 56,
            padding: '0 10px',
            mixBlendMode: 'screen',
          }}
        >
          {bars.map((b, i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: `${Math.round(b * 100)}%`,
                minHeight: 6,
                borderRadius: 4,
                background: 'rgba(255,255,255,0.92)',
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

/* ---- count-up stat ----------------------------------------------------- */
function CountUp({
  to,
  suffix = '',
  prefix = '',
  animated,
}: {
  to: number
  suffix?: string
  prefix?: string
  animated: boolean
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(animated ? 0 : to)

  useEffect(() => {
    if (!animated || !inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    })
    return () => controls.stop()
  }, [animated, inView, to])

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(val)}
      {suffix}
    </span>
  )
}

/* ---- pillar card ------------------------------------------------------- */
type Pillar = {
  icon: typeof TrendingUp
  kicker: string
  title: string
  desc: string
}

const PILLARS: Pillar[] = [
  {
    icon: TrendingUp,
    kicker: 'GROW',
    title: 'Get found, get booked',
    desc: 'AI lead generation, websites that actually convert, and growth systems that keep your pipeline full.',
  },
  {
    icon: Bot,
    kicker: 'AUTOMATE',
    title: 'Let the busywork run itself',
    desc: 'AI voice agents and receptionists, workflow automation, and custom AI tools built around how you work.',
  },
  {
    icon: GraduationCap,
    kicker: 'LEARN',
    title: 'Make your team AI-fluent',
    desc: 'Hands-on AI workshops and training, including grant-funded programs for Canadian organizations.',
  },
]

function PillarCard({ p, index, animated }: { p: Pillar; index: number; animated: boolean }) {
  const [hover, setHover] = useState(false)
  const Icon = p.icon
  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={animated ? { opacity: 0, y: 28 } : false}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        borderRadius: 22,
        padding: '30px 28px 32px',
        background: GLASS,
        border: `1px solid ${hover ? 'rgba(139,124,255,0.45)' : GLASS_BORDER}`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        overflow: 'hidden',
        transition: 'border-color 0.4s ease, transform 0.4s ease',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      {/* aurora glow on hover */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: -2,
          borderRadius: 22,
          background: 'radial-gradient(120% 80% at 20% 0%, rgba(139,124,255,0.28), rgba(91,227,214,0.10) 40%, transparent 70%)',
          opacity: hover ? 1 : 0,
          transition: 'opacity 0.45s ease',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(139,124,255,0.12)',
            border: '1px solid rgba(139,124,255,0.28)',
            marginBottom: 22,
          }}
        >
          <Icon size={24} strokeWidth={1.7} color="#BFC8FF" />
        </div>
        <div
          className={mono.className}
          style={{ fontSize: 11, letterSpacing: '0.24em', color: '#5BE3D6', marginBottom: 12 }}
        >
          {p.kicker}
        </div>
        <h3
          className={display.className}
          style={{ fontSize: 21, fontWeight: 600, color: TEXT, margin: '0 0 10px', letterSpacing: '-0.01em' }}
        >
          {p.title}
        </h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.62, color: MUTED, margin: 0 }}>{p.desc}</p>
      </div>
    </motion.div>
  )
}

/* ---- page -------------------------------------------------------------- */
export default function AuroraPage() {
  const reduce = useReducedMotion()
  const animated = !reduce

  return (
    <main
      className={body.className}
      style={{ background: INK, color: TEXT, minHeight: '100dvh', overflowX: 'hidden' }}
    >
      {/* top bar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px clamp(20px, 5vw, 56px)',
          background: 'linear-gradient(to bottom, rgba(7,9,14,0.72), rgba(7,9,14,0))',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className={display.className} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span
            aria-hidden
            style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              background: AURORA,
              boxShadow: '0 0 16px rgba(139,124,255,0.6)',
            }}
          />
          <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em' }}>Seven Gen Systems</span>
        </div>
        <Link
          href="/contact"
          style={{
            fontSize: 13.5,
            fontWeight: 600,
            color: INK,
            background: TEXT,
            padding: '9px 18px',
            borderRadius: 999,
            textDecoration: 'none',
          }}
        >
          Book a discovery call
        </Link>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section
        style={{
          position: 'relative',
          minHeight: '100dvh',
          display: 'grid',
          placeItems: 'center',
          padding: '120px clamp(20px, 5vw, 56px) 80px',
          isolation: 'isolate',
        }}
      >
        <AuroraCanvas frozen={!animated} />
        {/* readability veil */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(120% 90% at 50% 35%, rgba(7,9,14,0) 30%, rgba(7,9,14,0.55) 100%)',
            zIndex: 1,
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 920, textAlign: 'center' }}>
          <motion.div
            className={mono.className}
            initial={animated ? { opacity: 0, y: 10 } : false}
            animate={animated ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 11.5,
              letterSpacing: '0.2em',
              color: '#9FB0E6',
              padding: '7px 14px',
              borderRadius: 999,
              border: `1px solid ${GLASS_BORDER}`,
              background: GLASS,
              marginBottom: 30,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#5BE3D6', boxShadow: '0 0 10px #5BE3D6' }} />
            INDIGENOUS-OWNED AI · CANADA-WIDE
          </motion.div>

          <motion.h1
            className={display.className}
            initial={animated ? { opacity: 0, y: 18 } : false}
            animate={animated ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(38px, 7vw, 76px)',
              lineHeight: 1.04,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              margin: '0 0 22px',
            }}
          >
            AI that{' '}
            <span
              style={{
                background: AURORA,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              actually works
            </span>
            <br />
            for your organization.
          </motion.h1>

          <motion.p
            initial={animated ? { opacity: 0, y: 14 } : false}
            animate={animated ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.18 }}
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              lineHeight: 1.6,
              color: MUTED,
              maxWidth: 600,
              margin: '0 auto 38px',
            }}
          >
            Practical AI automation and training for Canadian businesses and the public sector. We build for the
            long term, the way the seventh-generation principle teaches.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={animated ? { opacity: 0, y: 14 } : false}
            animate={animated ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.26 }}
            style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}
          >
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                fontSize: 15,
                fontWeight: 600,
                color: INK,
                background: AURORA,
                padding: '14px 26px',
                borderRadius: 999,
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(139,124,255,0.4)',
              }}
            >
              Book a discovery call <ArrowRight size={17} strokeWidth={2.2} />
            </Link>
            <a
              href="#orb"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                fontSize: 15,
                fontWeight: 600,
                color: TEXT,
                background: GLASS,
                border: `1px solid ${GLASS_BORDER}`,
                padding: '14px 24px',
                borderRadius: 999,
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <Phone size={16} strokeWidth={2} /> Talk to our AI
            </a>
          </motion.div>

          {/* THE ORB */}
          <motion.div
            id="orb"
            initial={animated ? { opacity: 0, scale: 0.9 } : false}
            animate={animated ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 1, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
          >
            <AiOrb animated={animated} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span
                className={display.className}
                style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em' }}
              >
                Talk to our AI
              </span>
              <span className={mono.className} style={{ fontSize: 11.5, letterSpacing: '0.14em', color: MUTED }}>
                MEET JANE · 24/7 AI RECEPTIONIST
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- TRUST STRIP ---------------- */}
      <section
        style={{
          borderTop: `1px solid ${GLASS_BORDER}`,
          borderBottom: `1px solid ${GLASS_BORDER}`,
          padding: '22px clamp(20px, 5vw, 56px)',
          background: 'rgba(255,255,255,0.015)',
        }}
      >
        <p
          className={mono.className}
          style={{
            margin: 0,
            textAlign: 'center',
            fontSize: 12.5,
            letterSpacing: '0.16em',
            color: MUTED,
          }}
        >
          INDIGENOUS-OWNED <span style={{ color: '#5BE3D6' }}>·</span> CCIB CERTIFIED{' '}
          <span style={{ color: '#8B7CFF' }}>·</span> CANADA-WIDE
        </p>
      </section>

      {/* ---------------- PILLARS ---------------- */}
      <section style={{ padding: 'clamp(72px, 12vw, 130px) clamp(20px, 5vw, 56px)', maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ maxWidth: 680, marginBottom: 52 }}>
          <div className={mono.className} style={{ fontSize: 11.5, letterSpacing: '0.24em', color: '#8B7CFF', marginBottom: 16 }}>
            THREE WAYS WE HELP
          </div>
          <h2
            className={display.className}
            style={{ fontSize: 'clamp(28px, 4.5vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08, margin: 0 }}
          >
            Grow. Automate. Learn.
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, color: MUTED, marginTop: 16 }}>
            One partner for the full arc — from getting found, to running on autopilot, to building real AI fluency
            inside your team.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: 20,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {PILLARS.map((p, i) => (
            <PillarCard key={p.kicker} p={p} index={i} animated={animated} />
          ))}
        </div>
      </section>

      {/* ---------------- STAT BENTO ---------------- */}
      <section style={{ padding: '0 clamp(20px, 5vw, 56px) clamp(72px, 12vw, 130px)', maxWidth: 1180, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gap: 20,
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >
          {[
            { value: 24, suffix: '/7', label: 'Jane answers every call — no voicemail, no missed lead.' },
            { value: 3, suffix: '', label: 'Pillars under one roof: grow, automate, and learn.' },
            { value: 100, suffix: '%', label: 'Indigenous-owned and CCIB certified, serving all of Canada.' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                borderRadius: 22,
                padding: '34px 28px',
                background: GLASS,
                border: `1px solid ${GLASS_BORDER}`,
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
              }}
            >
              <div
                className={display.className}
                style={{
                  fontSize: 'clamp(44px, 7vw, 64px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  background: AURORA,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                <CountUp to={s.value} suffix={s.suffix} animated={animated} />
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: MUTED, margin: '16px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section style={{ padding: '0 clamp(20px, 5vw, 56px) clamp(80px, 12vw, 140px)', maxWidth: 1180, margin: '0 auto' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: 28,
            padding: '2px',
            background: AURORA,
            boxShadow: '0 30px 90px rgba(139,124,255,0.22)',
          }}
        >
          <div
            style={{
              borderRadius: 26,
              background: '#0A0D16',
              padding: 'clamp(40px, 7vw, 76px) clamp(28px, 6vw, 72px)',
              textAlign: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(80% 120% at 50% 0%, rgba(139,124,255,0.22), transparent 60%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative' }}>
              <h2
                className={display.className}
                style={{
                  fontSize: 'clamp(30px, 5vw, 52px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.06,
                  margin: '0 0 18px',
                }}
              >
                Let&apos;s build something that lasts.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: MUTED, maxWidth: 560, margin: '0 auto 34px' }}>
                Tell us where AI could save your team time or win you more work. We&apos;ll show you what&apos;s
                practical, today.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 9,
                    fontSize: 15.5,
                    fontWeight: 600,
                    color: INK,
                    background: TEXT,
                    padding: '15px 28px',
                    borderRadius: 999,
                    textDecoration: 'none',
                  }}
                >
                  Book a discovery call <ArrowRight size={17} strokeWidth={2.2} />
                </Link>
                <a
                  href="#orb"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 9,
                    fontSize: 15.5,
                    fontWeight: 600,
                    color: TEXT,
                    background: GLASS,
                    border: `1px solid ${GLASS_BORDER}`,
                    padding: '15px 26px',
                    borderRadius: 999,
                    textDecoration: 'none',
                  }}
                >
                  <Phone size={16} strokeWidth={2} /> Talk to Jane
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* footer line */}
        <p
          className={mono.className}
          style={{
            textAlign: 'center',
            fontSize: 11.5,
            letterSpacing: '0.16em',
            color: MUTED,
            marginTop: 40,
          }}
        >
          SEVEN GEN SYSTEMS · BUILT FOR THE SEVENTH GENERATION
        </p>
      </section>
    </main>
  )
}
