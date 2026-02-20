const NAVY = '#1d3557'
const CINZEL = "'Cinzel', Georgia, serif"

function SevenMark({ height }: { height: number }) {
  const w = Math.round(height * 0.8) // 200/250 aspect ratio
  return (
    <svg
      viewBox="0 0 200 250"
      width={w}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Seven body */}
      <path
        d="M 12,18 L 182,18 L 182,62 L 112,238 L 65,238 L 98,62 L 12,62 Z"
        fill={NAVY}
      />

      {/* Feather/circuit spine */}
      <path
        d="M 155,30 Q 130,135 90,232"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Branch pair 1 */}
      <line x1="148" y1="50" x2="168" y2="44" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="172" cy="42" r="3.5" fill="white"/>
      <line x1="146" y1="60" x2="125" y2="66" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="121" cy="68" r="3.5" fill="white"/>

      {/* Branch pair 2 */}
      <line x1="140" y1="84" x2="160" y2="78" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="164" cy="76" r="3.5" fill="white"/>
      <line x1="138" y1="94" x2="117" y2="100" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="113" cy="102" r="3.5" fill="white"/>

      {/* Branch pair 3 */}
      <line x1="131" y1="116" x2="152" y2="110" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="156" cy="108" r="3.5" fill="white"/>
      <line x1="129" y1="126" x2="108" y2="132" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="104" cy="134" r="3.5" fill="white"/>

      {/* Branch pair 4 */}
      <line x1="121" y1="147" x2="141" y2="141" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="145" cy="139" r="3.5" fill="white"/>
      <line x1="119" y1="157" x2="98" y2="163" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="94" cy="165" r="3.5" fill="white"/>

      {/* Branch pair 5 */}
      <line x1="111" y1="177" x2="131" y2="171" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="135" cy="169" r="3.5" fill="white"/>
      <line x1="109" y1="187" x2="88" y2="193" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="84" cy="195" r="3.5" fill="white"/>

      {/* Branch pair 6 */}
      <line x1="100" y1="208" x2="120" y2="202" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="124" cy="200" r="3.5" fill="white"/>
      <line x1="98" y1="218" x2="77" y2="224" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="73" cy="226" r="3.5" fill="white"/>
    </svg>
  )
}

export function Logo({ height = 48, showTagline = true }: { height?: number; showTagline?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="Seven Gen Systems">
      <SevenMark height={height} />
      <div style={{ lineHeight: 1 }}>
        <div
          style={{
            fontFamily: CINZEL,
            fontSize: `${Math.round(height * 0.43)}px`,
            color: NAVY,
            letterSpacing: '0.18em',
            fontWeight: 700,
          }}
        >
          SEVEN GEN
        </div>
        <div
          style={{
            fontFamily: CINZEL,
            fontSize: `${Math.round(height * 0.235)}px`,
            color: NAVY,
            letterSpacing: '0.42em',
            fontWeight: 400,
            marginTop: '3px',
          }}
        >
          SYSTEMS
        </div>
        {showTagline && (
          <div
            style={{
              borderTop: `1px solid ${NAVY}`,
              marginTop: '5px',
              paddingTop: '4px',
              fontFamily: CINZEL,
              fontSize: `${Math.round(height * 0.175)}px`,
              color: NAVY,
              letterSpacing: '0.12em',
              fontWeight: 400,
            }}
          >
            Learn Today · Automate Tomorrow
          </div>
        )}
      </div>
    </div>
  )
}
