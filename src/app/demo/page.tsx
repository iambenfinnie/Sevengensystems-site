import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Design directions',
  robots: { index: false, follow: false },
}

const directions = [
  {
    href: '/demo/aurora',
    name: 'Aurora',
    tag: 'Dark · WebGL · AI-forward',
    desc: 'Near-black, a living gradient hero and a reactive AI orb. Linear/Vercel energy — undeniably an AI company.',
    bg: 'linear-gradient(135deg, #07090e 0%, #131033 100%)',
    fg: '#e8ecff',
    accent: '#5be3d6',
  },
  {
    href: '/demo/press',
    name: 'Press',
    tag: 'Light · Editorial · Bento',
    desc: 'Warm paper, oversized kinetic type, one bold cobalt accent, asymmetric bento with live tiles. Credible for federal too.',
    bg: '#f5f2ec',
    fg: '#16130f',
    accent: '#2440ff',
  },
  {
    href: '/demo/seventh',
    name: 'Seventh',
    tag: 'Indigenous-futurism · Warm-tech',
    desc: 'Animated seven-generation rings, copper and aurora-green on forest dark. The lane no competitor owns.',
    bg: 'linear-gradient(135deg, #0b1410 0%, #1a2b1f 100%)',
    fg: '#f3ede2',
    accent: '#e8a24a',
  },
]

export default function DemoIndex() {
  return (
    <div style={{ minHeight: '100dvh', background: '#0a0a0b', color: '#e7e7ea' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px 96px' }}>
        <p style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5, margin: 0 }}>
          Seven Gen Systems · Fresh directions · 2026
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '18px 0 14px' }}>
          Three new looks. Same company.
        </h1>
        <p style={{ maxWidth: 640, fontSize: 17, lineHeight: 1.6, opacity: 0.66, margin: 0 }}>
          Each is a fully distinct visual language — color, type, motion, and a different signature hero. Open any one full-screen, then tell me which direction to build the real site in.
        </p>

        <div style={{ display: 'grid', gap: 18, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: 48 }}>
          {directions.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              style={{
                display: 'block', textDecoration: 'none', borderRadius: 20, overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)', background: d.bg, color: d.fg,
                minHeight: 280, padding: 28, position: 'relative',
              }}
            >
              <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: d.accent, fontWeight: 600 }}>
                {d.tag}
              </span>
              <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 14 }}>{d.name}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, opacity: 0.8, marginTop: 12, maxWidth: 360 }}>{d.desc}</p>
              <span style={{ position: 'absolute', bottom: 26, left: 28, fontSize: 14, fontWeight: 600, color: d.accent }}>
                Open full-screen →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
