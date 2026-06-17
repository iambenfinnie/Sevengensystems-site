import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Seven Gen Systems — AI Strategy, Automation & Training'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #064e3b 0%, #0f172a 100%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: '#14b8a6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '34px',
              fontWeight: 800,
              color: '#042f2e',
            }}
          >
            7
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '30px', fontWeight: 700, color: 'white', lineHeight: 1 }}>
              Seven Gen Systems
            </span>
            <span
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#5eead4',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginTop: '6px',
              }}
            >
              Indigenous-Owned · Canada Wide
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: '68px',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            AI that actually works
          </span>
          <span style={{ fontSize: '68px', fontWeight: 800, color: '#2dd4bf', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            for your organization.
          </span>
          <span style={{ fontSize: '28px', color: '#cbd5e1', marginTop: '28px', fontWeight: 500 }}>
            Grow · Automate · Learn
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
