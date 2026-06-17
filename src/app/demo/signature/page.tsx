'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Workflow,
  GraduationCap,
  PhoneCall,
  Wrench,
  LineChart,
  Compass,
  Hammer,
  Anchor,
  Clock,
  CheckCircle2,
} from 'lucide-react';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });
const body = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], display: 'swap' });

/* ----------------------------------------------------------------------------
   Color tokens
---------------------------------------------------------------------------- */
const C = {
  bg: '#F7F9F9',
  surface: '#FFFFFF',
  tint: '#EEF4F3',
  ink: '#0E1B19',
  muted: '#5A6B68',
  hairline: 'rgba(14,27,25,0.10)',
  tealDeep: '#0B453E',
  teal: '#0D9488',
  tealBright: '#2DD4BF',
  darkA: '#0B1F1C',
  darkB: '#0C2521',
} as const;

/* ----------------------------------------------------------------------------
   Small primitives
---------------------------------------------------------------------------- */
type EyebrowProps = { children: React.ReactNode; onDark?: boolean };
function Eyebrow({ children, onDark = false }: EyebrowProps) {
  return (
    <span
      className={mono.className}
      style={{
        fontSize: 12,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: onDark ? C.tealBright : C.teal,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      {children}
    </span>
  );
}

type RevealProps = { children: React.ReactNode; delay?: number; y?: number };
function Reveal({ children, delay = 0, y = 22 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y }}
      animate={inView || reduce ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Count-up that triggers on view */
type CountUpProps = { to: number; suffix?: string; prefix?: string; duration?: number };
function CountUp({ to, suffix = '', prefix = '', duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion();
  const [val, setVal] = useState<number>(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setVal(to);
      return;
    }
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/* ----------------------------------------------------------------------------
   HERO: manual -> automated pipeline animation
---------------------------------------------------------------------------- */
const MANUAL_TASKS = [
  { label: 'Missed call', x: 4, y: 6 },
  { label: 'Manual quote', x: 52, y: 2 },
  { label: 'Follow-up forgotten', x: 8, y: 56 },
  { label: 'Spreadsheet handoff', x: 50, y: 60 },
];

const NODES = [
  { label: 'Intake', cx: 70 },
  { label: 'AI agent', cx: 175 },
  { label: 'CRM', cx: 280 },
  { label: 'Done', cx: 385 },
];

function PipelineVisual() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<'manual' | 'auto'>(reduce ? 'auto' : 'manual');

  useEffect(() => {
    if (reduce) return;
    const t1 = window.setTimeout(() => setPhase('auto'), 1600);
    const loop = window.setInterval(() => {
      setPhase('manual');
      window.setTimeout(() => setPhase('auto'), 1500);
    }, 7000);
    return () => {
      window.clearTimeout(t1);
      window.clearInterval(loop);
    };
  }, [reduce]);

  const isAuto = phase === 'auto';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '100%',
        height: 360,
        borderRadius: 18,
        border: `1px solid ${C.hairline}`,
        background: C.surface,
        overflow: 'hidden',
        boxShadow: '0 24px 60px -40px rgba(11,69,62,0.35)',
      }}
    >
      {/* dot grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(14,27,25,0.06) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          opacity: 0.7,
        }}
      />
      {/* header chip */}
      <div
        className={mono.className}
        style={{
          position: 'absolute',
          top: 14,
          left: 16,
          fontSize: 10.5,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: C.muted,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: isAuto ? C.tealBright : '#C0CBC9',
            boxShadow: isAuto ? `0 0 10px ${C.tealBright}` : 'none',
            transition: 'all .5s ease',
          }}
        />
        {isAuto ? 'automated pipeline · live' : 'manual workflow'}
      </div>

      {/* MANUAL CARDS */}
      {MANUAL_TASKS.map((t, i) => (
        <motion.div
          key={t.label}
          initial={false}
          animate={{
            opacity: isAuto ? 0 : 1,
            scale: isAuto ? 0.9 : 1,
            filter: isAuto ? 'blur(2px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.55, delay: isAuto ? i * 0.04 : 0.4 + i * 0.06, ease: 'easeOut' }}
          className={body.className}
          style={{
            position: 'absolute',
            left: `${t.x}%`,
            top: `${t.y + 16}%`,
            padding: '9px 13px',
            borderRadius: 10,
            border: `1px solid ${C.hairline}`,
            background: '#FBFCFC',
            color: C.muted,
            fontSize: 12.5,
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            boxShadow: '0 6px 18px -14px rgba(14,27,25,0.5)',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 2,
              background: '#C7322C',
              opacity: 0.7,
            }}
          />
          {t.label}
        </motion.div>
      ))}

      {/* AUTOMATED PIPELINE */}
      <motion.svg
        viewBox="0 0 440 160"
        width="100%"
        height="160"
        preserveAspectRatio="xMidYMid meet"
        style={{ position: 'absolute', left: 0, right: 0, bottom: 30 }}
        initial={false}
        animate={{ opacity: isAuto ? 1 : 0 }}
        transition={{ duration: 0.6, delay: isAuto ? 0.45 : 0 }}
      >
        <defs>
          <linearGradient id="sgFlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={C.teal} />
            <stop offset="100%" stopColor={C.tealBright} />
          </linearGradient>
        </defs>

        {/* base connecting line */}
        <line x1={70} y1={80} x2={385} y2={80} stroke={C.hairline} strokeWidth={2} />
        {/* lit progress line */}
        <motion.line
          x1={70}
          y1={80}
          x2={385}
          y2={80}
          stroke="url(#sgFlow)"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={false}
          animate={{ pathLength: isAuto ? 1 : 0 }}
          transition={{ duration: 1, delay: isAuto ? 0.6 : 0, ease: 'easeInOut' }}
        />

        {/* traveling signal */}
        {isAuto && !reduce && (
          <motion.circle
            r={4.5}
            fill={C.tealBright}
            cy={80}
            initial={{ cx: 70, opacity: 0 }}
            animate={{ cx: [70, 385], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1, repeatDelay: 0.3 }}
            style={{ filter: `drop-shadow(0 0 6px ${C.tealBright})` }}
          />
        )}

        {NODES.map((n, i) => (
          <g key={n.label}>
            <motion.circle
              cx={n.cx}
              cy={80}
              r={13}
              fill={C.surface}
              stroke={C.teal}
              strokeWidth={2}
              initial={false}
              animate={{ scale: isAuto ? 1 : 0.4, opacity: isAuto ? 1 : 0 }}
              transition={{ duration: 0.5, delay: isAuto ? 0.5 + i * 0.12 : 0, ease: 'backOut' }}
              style={{ transformOrigin: `${n.cx}px 80px` }}
            />
            <circle cx={n.cx} cy={80} r={4} fill={C.teal} />
            <text
              x={n.cx}
              y={112}
              textAnchor="middle"
              className={mono.className}
              style={{ fontSize: 10, letterSpacing: '0.04em', fill: C.muted }}
            >
              {n.label}
            </text>
          </g>
        ))}
      </motion.svg>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Bento: growth bars (animated)
---------------------------------------------------------------------------- */
function GrowthBars() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const reduce = useReducedMotion();
  const heights = [34, 46, 40, 58, 66, 78, 92];
  return (
    <div ref={ref} style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 96 }}>
      {heights.map((h, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { height: 6, opacity: 0.4 }}
          animate={inView || reduce ? { height: `${h}%`, opacity: 1 } : undefined}
          transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flex: 1,
            borderRadius: 5,
            background:
              i >= heights.length - 2
                ? `linear-gradient(180deg, ${C.tealBright}, ${C.teal})`
                : 'rgba(13,148,136,0.22)',
          }}
        />
      ))}
    </div>
  );
}

/* Bento: mini pipeline */
function MiniPipeline() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 200 56" width="100%" height="56" aria-hidden="true">
      <line x1={16} y1={28} x2={184} y2={28} stroke={C.hairline} strokeWidth={2} />
      {[16, 72, 128, 184].map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy={28} r={9} fill={C.surface} stroke={C.teal} strokeWidth={1.6} />
          <circle cx={cx} cy={28} r={3} fill={C.teal} opacity={i === 1 ? 1 : 0.5} />
        </g>
      ))}
      {!reduce && (
        <motion.circle
          r={3.5}
          fill={C.tealBright}
          cy={28}
          initial={{ cx: 16 }}
          animate={{ cx: [16, 184] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: `drop-shadow(0 0 5px ${C.tealBright})` }}
        />
      )}
    </svg>
  );
}

/* Bento: ticking clock (the demoted receptionist) */
function TickingClock() {
  const reduce = useReducedMotion();
  const [deg, setDeg] = useState<number>(0);
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setDeg((d) => d + 6), 1000);
    return () => window.clearInterval(id);
  }, [reduce]);
  return (
    <svg viewBox="0 0 64 64" width={64} height={64} aria-hidden="true">
      <circle cx={32} cy={32} r={28} fill="none" stroke="rgba(45,212,191,0.35)" strokeWidth={2} />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <circle
            key={i}
            cx={32 + Math.sin(a) * 23}
            cy={32 - Math.cos(a) * 23}
            r={1.1}
            fill="rgba(45,212,191,0.55)"
          />
        );
      })}
      {/* minute hand */}
      <line
        x1={32}
        y1={32}
        x2={32}
        y2={14}
        stroke={C.tealBright}
        strokeWidth={2}
        strokeLinecap="round"
        style={{ transformOrigin: '32px 32px', transform: `rotate(${deg}deg)`, transition: reduce ? 'none' : 'transform .5s cubic-bezier(.34,1.56,.64,1)' }}
      />
      {/* hour hand */}
      <line
        x1={32}
        y1={32}
        x2={32}
        y2={22}
        stroke={C.teal}
        strokeWidth={2.4}
        strokeLinecap="round"
        style={{ transformOrigin: '32px 32px', transform: `rotate(${deg / 12 + 120}deg)` }}
      />
      <circle cx={32} cy={32} r={2.4} fill={C.tealBright} />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
   Differentiator: seven breathing concentric rings
---------------------------------------------------------------------------- */
function SevenRings() {
  const reduce = useReducedMotion();
  const rings = [10, 19, 28, 37, 46, 55, 64];
  return (
    <svg viewBox="0 0 150 150" width="100%" height="100%" aria-hidden="true">
      <defs>
        <radialGradient id="ringGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={C.tealBright} />
          <stop offset="100%" stopColor={C.teal} />
        </radialGradient>
      </defs>
      {rings.map((r, i) => (
        <motion.circle
          key={r}
          cx={75}
          cy={75}
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth={1.4}
          opacity={0.25 + (i / rings.length) * 0.6}
          initial={false}
          animate={reduce ? undefined : { scale: [1, 1.045, 1], opacity: [0.25 + (i / rings.length) * 0.55, 0.2 + (i / rings.length) * 0.7, 0.25 + (i / rings.length) * 0.55] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
          style={{ transformOrigin: '75px 75px' }}
        />
      ))}
      <circle cx={75} cy={75} r={3.2} fill={C.tealBright} />
    </svg>
  );
}

/* ----------------------------------------------------------------------------
   Content data
---------------------------------------------------------------------------- */
const PILLARS = [
  {
    icon: TrendingUp,
    name: 'Grow',
    line: 'Turn attention into booked work.',
    items: ['AI-assisted lead generation', 'Websites engineered to convert', 'Growth & market-intelligence dashboards'],
  },
  {
    icon: Workflow,
    name: 'Automate',
    line: 'Take the busywork off your team.',
    items: ['Quoting, scheduling & invoicing flows', 'Custom AI tools for your stack', '24/7 AI receptionist'],
  },
  {
    icon: GraduationCap,
    name: 'Learn',
    line: 'Leave your people more capable.',
    items: ['Hands-on AI workshops', 'Role-specific training', 'Grant-funded programs'],
  },
];

const STEPS = [
  { icon: Compass, n: '01', title: 'Discovery', body: 'We map how your organization actually works today — the calls, the quotes, the handoffs — and find where AI earns its keep.' },
  { icon: Hammer, n: '02', title: 'Build', body: 'We design and build the system into your existing tools and process. No rip-and-replace, no science projects.' },
  { icon: Anchor, n: '03', title: 'Embed & support', body: 'We stay until it sticks — training your team, tuning the system, and standing behind it for the long term.' },
];

/* ----------------------------------------------------------------------------
   PAGE
---------------------------------------------------------------------------- */
export default function SignaturePage() {
  const reduce = useReducedMotion();

  // Kinetic headline: mask + translateY per line
  const headlineLines = ['AI that gets', 'built in.'];
  const accentLine = 'Not bolted on.';

  const lineVariant = useCallback(
    (i: number) => ({
      initial: reduce ? { y: 0, opacity: 1 } : { y: '110%' },
      animate: { y: '0%', opacity: 1 },
      transition: { duration: 0.85, delay: 0.12 + i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
    [reduce],
  );

  return (
    <div className={body.className} style={{ background: C.bg, color: C.ink, minHeight: '100vh', overflowX: 'hidden' }}>
      {/* ===================== TOP BAR ===================== */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'saturate(180%) blur(12px)',
          background: 'rgba(247,249,249,0.78)',
          borderBottom: `1px solid ${C.hairline}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" className={display.className} style={{ fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em', color: C.ink, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 9 }}>
            <span aria-hidden="true" style={{ width: 22, height: 22, display: 'inline-block' }}>
              <svg viewBox="0 0 24 24" width="22" height="22">
                {[4, 7, 10].map((r, i) => (
                  <circle key={r} cx={12} cy={12} r={r} fill="none" stroke={C.teal} strokeWidth={1.5} opacity={0.4 + i * 0.25} />
                ))}
                <circle cx={12} cy={12} r={1.6} fill={C.tealBright} />
              </svg>
            </span>
            Seven Gen Systems
          </Link>
          <Link
            href="/contact"
            style={{
              background: C.teal,
              color: '#fff',
              padding: '9px 17px',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
            }}
          >
            Book a discovery call <ArrowRight size={15} />
          </Link>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '76px 24px 40px' }}>
        {/* dot grid backdrop */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(14,27,25,0.05) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 30% 30%, #000 35%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 30% 30%, #000 35%, transparent 75%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', display: 'grid', gap: 48, gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', alignItems: 'center' }} className="sg-hero-grid">
          <div>
            <Reveal>
              <Eyebrow>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.tealBright }} />
                Indigenous-owned AI · Canada
              </Eyebrow>
            </Reveal>

            <h1
              className={display.className}
              style={{ fontSize: 'clamp(40px, 6.4vw, 74px)', lineHeight: 1.02, letterSpacing: '-0.035em', fontWeight: 600, margin: '22px 0 0' }}
            >
              {headlineLines.map((ln, i) => (
                <span key={ln} style={{ display: 'block', overflow: 'hidden' }}>
                  <motion.span style={{ display: 'block' }} {...lineVariant(i)}>
                    {ln}
                  </motion.span>
                </span>
              ))}
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span style={{ display: 'block', color: C.teal }} {...lineVariant(headlineLines.length)}>
                  {accentLine}
                </motion.span>
              </span>
            </h1>

            <Reveal delay={0.5}>
              <p style={{ marginTop: 24, fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.6, color: C.muted, maxWidth: 520 }}>
                Most AI ends up in a slide deck. We design, build, and embed AI systems into how your
                organization already works — and stay until it sticks.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div style={{ marginTop: 30, display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  style={{
                    background: C.teal,
                    color: '#fff',
                    padding: '13px 22px',
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 9,
                    boxShadow: '0 14px 30px -16px rgba(13,148,136,0.8)',
                  }}
                >
                  Book a discovery call <ArrowRight size={17} />
                </Link>
                <a href="#systems" style={{ color: C.ink, fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, borderBottom: `1.5px solid ${C.hairline}`, paddingBottom: 2 }}>
                  See what we build <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.35} y={30}>
            <PipelineVisual />
          </Reveal>
        </div>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <div style={{ borderTop: `1px solid ${C.hairline}`, borderBottom: `1px solid ${C.hairline}`, background: C.tint }}>
        <div
          className={mono.className}
          style={{ maxWidth: 1200, margin: '0 auto', padding: '15px 24px', fontSize: 12.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}
        >
          <span>Indigenous-owned</span>
          <span style={{ color: C.tealBright }}>·</span>
          <span>CCIB Certified</span>
          <span style={{ color: C.tealBright }}>·</span>
          <span>Canada-wide</span>
        </div>
      </div>

      {/* ===================== WHAT WE BUILD (PILLARS) ===================== */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 24px 40px' }}>
        <Reveal>
          <Eyebrow>What we build</Eyebrow>
          <h2 className={display.className} style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', fontWeight: 600, margin: '14px 0 0', maxWidth: 720, lineHeight: 1.08 }}>
            Three ways we put AI to work inside your business.
          </h2>
        </Reveal>

        <div style={{ marginTop: 48, display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.name} delay={idx * 0.08}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  style={{ height: '100%', borderRadius: 16, border: `1px solid ${C.hairline}`, background: C.surface, padding: 26, display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 11, background: C.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.teal }}>
                    <Icon size={22} strokeWidth={1.9} />
                  </div>
                  <h3 className={display.className} style={{ fontSize: 23, fontWeight: 600, letterSpacing: '-0.02em', margin: '20px 0 4px' }}>
                    {p.name}
                  </h3>
                  <p style={{ color: C.muted, fontSize: 14.5, margin: 0 }}>{p.line}</p>
                  <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {p.items.map((it) => (
                      <li key={it} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: C.ink }}>
                        <CheckCircle2 size={16} style={{ color: C.teal, flexShrink: 0 }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===================== BENTO: SYSTEMS WE SHIP ===================== */}
      <section id="systems" style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 40px' }}>
        <Reveal>
          <Eyebrow>Systems we ship</Eyebrow>
          <h2 className={display.className} style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', fontWeight: 600, margin: '14px 0 0', maxWidth: 720, lineHeight: 1.08 }}>
            Working software, not slideware.
          </h2>
        </Reveal>

        <div className="sg-bento" style={{ marginTop: 48, display: 'grid', gap: 18, gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: 'minmax(170px, auto)' }}>
          {/* Growth tile (live) - wide */}
          <Reveal>
            <BentoShell style={{ gridColumn: 'span 4' }}>
              <BentoHead icon={LineChart} label="Growth dashboard" tag="live" />
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
                <div>
                  <div className={display.className} style={{ fontSize: 40, fontWeight: 600, letterSpacing: '-0.03em', color: C.ink, lineHeight: 1 }}>
                    +<CountUp to={38} suffix="%" />
                  </div>
                  <div style={{ color: C.muted, fontSize: 13, marginTop: 6 }}>qualified leads, illustrative</div>
                </div>
                <div style={{ width: '52%' }}>
                  <GrowthBars />
                </div>
              </div>
            </BentoShell>
          </Reveal>

          {/* Receptionist tile (live, demoted) */}
          <Reveal delay={0.06}>
            <BentoShell style={{ gridColumn: 'span 2' }}>
              <BentoHead icon={PhoneCall} label="AI receptionist" tag="24/7" />
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14 }}>
                <TickingClock />
                <div>
                  <div className={display.className} style={{ fontSize: 18, fontWeight: 600, color: C.ink }}>Meet Jane</div>
                  <p style={{ color: C.muted, fontSize: 13, margin: '4px 0 0' }}>And yes — we run our own 24/7 AI receptionist.</p>
                </div>
              </div>
            </BentoShell>
          </Reveal>

          {/* Pipeline tile (live) */}
          <Reveal delay={0.04}>
            <BentoShell style={{ gridColumn: 'span 3' }}>
              <BentoHead icon={Workflow} label="Workflow automation" tag="live" />
              <div style={{ marginTop: 'auto' }}>
                <MiniPipeline />
                <p style={{ color: C.muted, fontSize: 13, margin: '10px 0 0' }}>Intake → AI agent → CRM → Done, running on autopilot.</p>
              </div>
            </BentoShell>
          </Reveal>

          {/* Custom tools (static) */}
          <Reveal delay={0.08}>
            <BentoShell style={{ gridColumn: 'span 2' }}>
              <BentoHead icon={Wrench} label="Custom AI tools" />
              <p style={{ color: C.muted, fontSize: 14, margin: 'auto 0 0', lineHeight: 1.5 }}>
                Bespoke agents and internal tools wired into the stack you already use.
              </p>
            </BentoShell>
          </Reveal>

          {/* Training (static) */}
          <Reveal delay={0.1}>
            <BentoShell style={{ gridColumn: 'span 1' }}>
              <BentoHead icon={GraduationCap} label="Training" />
              <p style={{ color: C.muted, fontSize: 13, margin: 'auto 0 0', lineHeight: 1.5 }}>
                Workshops that leave your team able to run it.
              </p>
            </BentoShell>
          </Reveal>
        </div>
      </section>

      {/* ===================== DIFFERENTIATOR ===================== */}
      <section style={{ background: C.tint, borderTop: `1px solid ${C.hairline}`, borderBottom: `1px solid ${C.hairline}`, marginTop: 56 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '92px 24px' }}>
          <div className="sg-diff-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.25fr)', gap: 56, alignItems: 'center' }}>
            <Reveal>
              <div style={{ position: 'relative', width: '100%', maxWidth: 360, aspectRatio: '1 / 1', margin: '0 auto' }}>
                <SevenRings />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <Eyebrow>Why we&apos;re built differently</Eyebrow>
                <h2 className={display.className} style={{ fontSize: 'clamp(28px,3.6vw,46px)', letterSpacing: '-0.03em', fontWeight: 600, margin: '16px 0 0', lineHeight: 1.08 }}>
                  We weigh every decision <span style={{ color: C.teal }}>seven generations</span> ahead.
                </h2>
                <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.65, color: C.muted, maxWidth: 560 }}>
                  Seven Gen Systems is Indigenous-owned, and our name is a commitment. The Haudenosaunee
                  seventh-generation principle asks that every choice be measured by its impact seven
                  generations from now.
                </p>
                <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.65, color: C.muted, maxWidth: 560 }}>
                  In practice, that means we don&apos;t ship and bounce. We build AI systems meant to last —
                  documented, owned by your team, and supported well past launch. Durability over hype,
                  every time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 24px 40px' }}>
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className={display.className} style={{ fontSize: 'clamp(28px,3.6vw,44px)', letterSpacing: '-0.03em', fontWeight: 600, margin: '14px 0 0', maxWidth: 720, lineHeight: 1.08 }}>
            From first call to embedded system.
          </h2>
        </Reveal>
        <div style={{ marginTop: 48, display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={idx * 0.08}>
                <div style={{ height: '100%', borderRadius: 16, border: `1px solid ${C.hairline}`, background: C.surface, padding: 26 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 11, background: C.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.teal }}>
                      <Icon size={21} strokeWidth={1.9} />
                    </div>
                    <span className={mono.className} style={{ fontSize: 13, color: C.muted, letterSpacing: '0.1em' }}>{s.n}</span>
                  </div>
                  <h3 className={display.className} style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-0.02em', margin: '18px 0 8px' }}>{s.title}</h3>
                  <p style={{ color: C.muted, fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ===================== FINAL CTA (DARK) ===================== */}
      <section style={{ padding: '0 24px 0', marginTop: 56 }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            borderRadius: 24,
            overflow: 'hidden',
            position: 'relative',
            background: `linear-gradient(135deg, ${C.darkA}, ${C.darkB})`,
            border: `1px solid rgba(45,212,191,0.18)`,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(45,212,191,0.10) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse 70% 80% at 80% 30%, #000, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 80% 30%, #000, transparent 70%)',
            }}
          />
          <div style={{ position: 'relative', padding: 'clamp(48px,7vw,88px) clamp(28px,5vw,72px)' }}>
            <Reveal>
              <Eyebrow onDark>
                <Clock size={13} /> Built for the long term
              </Eyebrow>
              <h2 className={display.className} style={{ color: '#fff', fontSize: 'clamp(30px,4.4vw,56px)', letterSpacing: '-0.035em', fontWeight: 600, margin: '18px 0 0', maxWidth: 760, lineHeight: 1.04 }}>
                Let&apos;s find the AI that earns its keep in <span style={{ color: C.tealBright }}>your</span> business.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 17, lineHeight: 1.6, margin: '20px 0 0', maxWidth: 560 }}>
                A 30-minute discovery call. No pitch deck — we map where AI actually fits and what it&apos;s worth.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center' }}>
                <Link
                  href="/contact"
                  style={{ background: C.tealBright, color: C.darkA, padding: '14px 24px', borderRadius: 12, fontSize: 15.5, fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 9 }}
                >
                  Book a discovery call <ArrowRight size={17} />
                </Link>
                <span className={mono.className} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Indigenous-owned · CCIB Certified · Canada-wide
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer style={{ background: C.darkA, marginTop: 24, borderTop: '1px solid rgba(45,212,191,0.14)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              {[4, 7, 10].map((r, i) => (
                <circle key={r} cx={12} cy={12} r={r} fill="none" stroke={C.tealBright} strokeWidth={1.4} opacity={0.4 + i * 0.25} />
              ))}
              <circle cx={12} cy={12} r={1.6} fill={C.tealBright} />
            </svg>
            <span className={display.className} style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>Seven Gen Systems</span>
          </div>
          <span className={mono.className} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12.5, letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} Seven Gen Systems Ltd. · Built to last.
          </span>
          <Link href="/contact" style={{ color: C.tealBright, fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Book a discovery call <ArrowRight size={14} />
          </Link>
        </div>
      </footer>

      {/* responsive + reduced-motion CSS */}
      <style>{`
        @media (max-width: 880px) {
          .sg-hero-grid { grid-template-columns: 1fr !important; }
          .sg-diff-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .sg-bento { grid-template-columns: 1fr 1fr !important; }
          .sg-bento > div { grid-column: span 2 !important; }
        }
        @media (max-width: 560px) {
          .sg-bento { grid-template-columns: 1fr !important; }
          .sg-bento > div { grid-column: span 1 !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
        }
      `}</style>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Bento shell helpers
---------------------------------------------------------------------------- */
type BentoShellProps = { children: React.ReactNode; style?: React.CSSProperties };
function BentoShell({ children, style }: BentoShellProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{
        height: '100%',
        borderRadius: 16,
        border: `1px solid ${C.hairline}`,
        background: C.surface,
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 18px 40px -34px rgba(14,27,25,0.45)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

type BentoHeadProps = { icon: typeof Wrench; label: string; tag?: string };
function BentoHead({ icon: Icon, label, tag }: BentoHeadProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: C.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.teal }}>
          <Icon size={16} strokeWidth={2} />
        </span>
        <span className={display.className} style={{ fontSize: 14.5, fontWeight: 600, letterSpacing: '-0.01em', color: C.ink }}>{label}</span>
      </div>
      {tag && (
        <span className={mono.className} style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.teal, border: `1px solid ${C.hairline}`, borderRadius: 999, padding: '3px 8px' }}>
          {tag}
        </span>
      )}
    </div>
  );
}
