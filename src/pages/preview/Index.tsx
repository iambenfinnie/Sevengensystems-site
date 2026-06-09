import { Link } from 'react-router-dom'

export function PreviewIndex() {
  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
        minHeight: '100vh',
        background: 'oklch(14% 0.008 200)',
        color: 'oklch(96% 0.005 100)',
        padding: '64px 24px',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <header style={{ marginBottom: 80 }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: 1.6,
              opacity: 0.55,
              textTransform: 'uppercase',
              margin: 0,
              fontWeight: 500,
            }}
          >
            Seven Gen Systems / Design directions / 2026
          </p>
          <h1
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              margin: '20px 0 18px',
              fontWeight: 500,
              letterSpacing: -0.02,
              lineHeight: 1.05,
              maxWidth: 940,
            }}
          >
            Three different sites. Same company.
          </h1>
          <p style={{ opacity: 0.7, fontSize: 18, maxWidth: 680, lineHeight: 1.55, margin: 0 }}>
            Each direction targets the same dual audience (federal procurement and Canadian small business) but commits to a different tone, typography, and visual register. Click any one to view in full.
          </p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 18,
          }}
        >
          {/* A — Federal Trust */}
          <Link
            to="/preview/federal"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              background: 'oklch(95% 0.014 80)',
              borderRadius: 4,
              padding: '40px 32px 36px',
              minHeight: 380,
              position: 'relative',
              transition: 'transform 240ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10.5,
                letterSpacing: 1.8,
                color: 'oklch(35% 0.12 25)',
                textTransform: 'uppercase',
                fontWeight: 600,
                margin: 0,
              }}
            >
              Direction A · Institutional Broadsheet
            </p>
            <h2
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: 38,
                color: 'oklch(18% 0.008 200)',
                fontWeight: 500,
                lineHeight: 1.1,
                margin: '14px 0 18px',
                letterSpacing: -0.01,
              }}
            >
              Federal Trust
            </h2>
            <p style={{ color: 'oklch(35% 0.01 200)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              Editorial broadsheet. Warm cream paper, dark-ink serif, oxblood accent. Reads like the front page of a Canadian federal whitepaper. Includes a "Currently pursuing" solicitation log no other AI agency publishes.
            </p>
            <div
              style={{
                position: 'absolute',
                bottom: 32,
                left: 32,
                right: 32,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'oklch(35% 0.01 200)',
                fontSize: 12,
              }}
            >
              <span style={{ fontFamily: "'Newsreader', serif", fontStyle: 'italic' }}>For evaluators and procurement leads</span>
              <span style={{ color: 'oklch(35% 0.12 25)' }}>→</span>
            </div>
          </Link>

          {/* B — Seven Generations */}
          <Link
            to="/preview/seven-gen"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              background: 'oklch(94% 0.022 90)',
              borderRadius: 4,
              padding: '40px 32px 36px',
              minHeight: 380,
              position: 'relative',
              transition: 'transform 240ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10.5,
                letterSpacing: 1.8,
                color: 'oklch(58% 0.13 40)',
                textTransform: 'uppercase',
                fontWeight: 600,
                margin: 0,
              }}
            >
              Direction B · Editorial Identity
            </p>
            <h2
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: 38,
                color: 'oklch(28% 0.05 145)',
                fontWeight: 500,
                lineHeight: 1.1,
                margin: '14px 0 18px',
                letterSpacing: -0.01,
              }}
            >
              Seven Generations
            </h2>
            <p style={{ color: 'oklch(28% 0.04 145)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              Identity-led. Deep moss, warm cream, terracotta. Big serif. Long single-column scroll. Keeps the current leaf and wordmark exactly. Lean into the actual seven-generations principle as operating thesis.
            </p>
            <div
              style={{
                position: 'absolute',
                bottom: 32,
                left: 32,
                right: 32,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'oklch(28% 0.04 145)',
                fontSize: 12,
              }}
            >
              <span style={{ fontFamily: "'Newsreader', serif", fontStyle: 'italic' }}>For story-driven buyers (federal + SMB)</span>
              <span style={{ color: 'oklch(58% 0.13 40)' }}>→</span>
            </div>
          </Link>

          {/* C — Operator / Builder */}
          <Link
            to="/preview/operator"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              background: 'oklch(15% 0.012 150)',
              borderRadius: 4,
              padding: '40px 32px 36px',
              minHeight: 380,
              position: 'relative',
              border: '1px solid oklch(28% 0.02 150)',
              transition: 'transform 240ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10.5,
                letterSpacing: 0.4,
                color: 'oklch(85% 0.18 130)',
                margin: 0,
              }}
            >
              [direction-c] · operator / builder
            </p>
            <h2
              style={{
                fontFamily: "'Geist', 'Inter', sans-serif",
                fontSize: 40,
                color: 'oklch(96% 0.005 150)',
                fontWeight: 700,
                lineHeight: 1.05,
                margin: '14px 0 18px',
                letterSpacing: -0.025,
              }}
            >
              Terminal-native receipts.
            </h2>
            <p style={{ color: 'oklch(72% 0.01 150)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
              Near-black green-tint, chartreuse accent. Live receipts row. Capabilities as code blocks. Three.js animated topographic hero. Interactive Bush Busters OS dashboard mock. Tech-forward and shipping-loud.
            </p>
            <div
              style={{
                position: 'absolute',
                bottom: 32,
                left: 32,
                right: 32,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'oklch(72% 0.01 150)',
                fontSize: 12,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span>$ for technical buyers and SMB operators</span>
              <span style={{ color: 'oklch(85% 0.18 130)' }}>→</span>
            </div>
          </Link>
        </div>

        <footer style={{ marginTop: 96, opacity: 0.4, fontSize: 12, letterSpacing: 0.4 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: 1 }}>
            ← back to current site
          </Link>
          <span style={{ marginLeft: 24 }}>preview build · all three are mockups, no analytics, no forms wired</span>
        </footer>
      </div>
    </div>
  )
}
