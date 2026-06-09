import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'

export function OperatorBuilder() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const revealRefs = useRef<(HTMLElement | null)[]>([])
  const counterRefs = useRef<(HTMLElement | null)[]>([])
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [activeModule, setActiveModule] = useState<'jobs' | 'quotes' | 'calls' | 'reviews' | 'reports' | 'crew'>('jobs')

  // Three.js animated hero
  useEffect(() => {
    document.title = 'Seven Gen Systems · Operator (preview)'

    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    const getSize = () => ({
      w: parent.clientWidth,
      h: parent.clientHeight,
    })

    let { w, h } = getSize()

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000)
    camera.position.set(0, 4.5, 11)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(w, h, false)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    const geometry = new THREE.PlaneGeometry(40, 26, 110, 70)

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uHigh: { value: new THREE.Color('#c7ee5b') },
      uMid: { value: new THREE.Color('#3d7a3a') },
      uLow: { value: new THREE.Color('#0d1a14') },
    }

    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      varying float vElevation;
      varying vec2 vUv;
      // simplex 2D
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }
      void main() {
        vUv = uv;
        vec3 pos = position;
        float n1 = snoise(pos.xy * 0.20 + uTime * 0.18);
        float n2 = snoise(pos.xy * 0.55 + uTime * 0.32) * 0.4;
        float n3 = snoise(pos.xy * 1.30 + uTime * 0.55) * 0.15;
        float mouseInfluence = exp(-length(pos.xy - uMouse * 8.0) * 0.35) * 0.6;
        float elevation = n1 + n2 + n3 + mouseInfluence;
        pos.z += elevation * 1.2;
        vElevation = elevation;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `

    const fragmentShader = `
      varying float vElevation;
      varying vec2 vUv;
      uniform vec3 uHigh;
      uniform vec3 uMid;
      uniform vec3 uLow;
      void main() {
        float t = smoothstep(-1.4, 1.6, vElevation);
        vec3 color = mix(uLow, uMid, smoothstep(0.0, 0.55, t));
        color = mix(color, uHigh, smoothstep(0.7, 1.0, t));
        float edgeFade = smoothstep(0.0, 0.18, vUv.x) * smoothstep(0.0, 0.18, 1.0 - vUv.x);
        edgeFade *= smoothstep(0.0, 0.12, vUv.y) * smoothstep(0.0, 0.12, 1.0 - vUv.y);
        gl_FragColor = vec4(color, 0.9 * edgeFade);
      }
    `

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      wireframe: true,
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI / 2.4
    scene.add(mesh)

    let raf = 0
    let t = 0
    const tick = () => {
      t += 0.013
      uniforms.uTime.value = t
      mesh.rotation.z = Math.sin(t * 0.05) * 0.08
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    const onResize = () => {
      const next = getSize()
      w = next.w
      h = next.h
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }
    window.addEventListener('resize', onResize)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const ny = -((e.clientY - rect.top) / rect.height - 0.5) * 2
      uniforms.uMouse.value.set(nx, ny)
    }
    canvas.addEventListener('mousemove', onMouseMove)

    const onScroll = () => {
      const y = window.scrollY
      camera.position.y = 4.5 + Math.min(y * 0.004, 3)
      camera.position.z = 11 + Math.min(y * 0.006, 4)
      camera.lookAt(0, 0, 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      canvas.removeEventListener('mousemove', onMouseMove)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  // Typed terminal effect
  useEffect(() => {
    const lines = [
      '$ ./status',
      '● 4 production deployments live',
      '● 2 active federal solicitations',
      '● region: alberta + atlantic canada',
      '● ready: ben@sevengensystems.com',
    ]
    let i = 0
    const interval = setInterval(() => {
      i++
      setTerminalLines(lines.slice(0, i))
      if (i >= lines.length) clearInterval(interval)
    }, 400)
    return () => clearInterval(interval)
  }, [])

  // Scroll reveals
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('op-revealed')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '-8% 0px', threshold: 0.05 }
    )
    for (const el of revealRefs.current) {
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [])

  // Animated counters
  useEffect(() => {
    const animateCounter = (el: HTMLElement, to: number, suffix = '', duration = 1400) => {
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 4)
        const value = Math.round(to * eased)
        el.textContent = value.toLocaleString() + suffix
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            const to = parseInt(el.dataset.to || '0', 10)
            const suffix = el.dataset.suffix || ''
            animateCounter(el, to, suffix)
            io.unobserve(el)
          }
        }
      },
      { threshold: 0.4 }
    )
    for (const el of counterRefs.current) {
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [])

  const reveal = (i: number) => (el: HTMLElement | null) => { revealRefs.current[i] = el }
  const counter = (i: number) => (el: HTMLElement | null) => { counterRefs.current[i] = el }

  return (
    <div className="op-builder">
      <style>{styles}</style>

      {/* TOP BAR */}
      <header className="op-bar">
        <div className="op-bar-inner">
          <Link to="/" className="op-brand">
            <img src="/Seven Gen Leaf Favicon.png" alt="" className="op-favicon" />
            <span>seven-gen-systems</span>
            <span className="op-bar-status">● live</span>
          </Link>
          <nav className="op-bar-nav">
            <a href="#receipts">~/work</a>
            <a href="#systems">~/systems</a>
            <a href="#bbos">~/bbos</a>
            <a href="#contact">~/contact</a>
          </nav>
        </div>
        <div className="op-accent-rule" />
      </header>

      {/* HERO */}
      <section className="op-hero">
        <canvas ref={canvasRef} className="op-hero-canvas" />
        <div className="op-hero-veil" />
        <div className="op-hero-content">
          <p className="op-mono op-hero-tag">[seven-gen-systems] / indigenous-led / federally-credentialed</p>
          <h1 className="op-hero-h">
            We build the system.<br />
            <span className="op-accent">Then we ship it.</span>
          </h1>
          <p className="op-hero-deck">
            An Indigenous-majority-owned AI firm building operating systems for Canadian small businesses and shipping AI delivery into federal procurement. IBD-active. CCIB-certified. Eligible on the AI Source List for all three disciplines.
          </p>
          <div className="op-terminal">
            {terminalLines.map((line, i) => (
              <p key={i} className={i === 0 ? 'op-terminal-cmd' : 'op-terminal-out'}>{line}</p>
            ))}
            <span className="op-cursor">▮</span>
          </div>
        </div>
      </section>

      {/* RECEIPTS */}
      <section className="op-receipts" id="receipts" ref={reveal(0)}>
        <div className="op-section-head">
          <p className="op-mono op-eyebrow">$ ls -la ./live</p>
          <h2 className="op-section-h">Live receipts.</h2>
          <p className="op-section-deck">Every project below is in production. We do not have a portfolio of mockups. We have engagements with uptime.</p>
        </div>
        <div className="op-receipt-grid">
          <article className="op-receipt">
            <div className="op-receipt-head">
              <span className="op-receipt-name">bush_busters/seo</span>
              <span className="op-receipt-status">● live</span>
            </div>
            <p className="op-receipt-metric"><span ref={counter(0)} data-to="287" data-suffix="%">0</span><span className="op-metric-label">organic search lift / 90d</span></p>
            <p className="op-receipt-meta">last_deploy: 2026-04-22 · markets: NS, TN</p>
          </article>

          <article className="op-receipt">
            <div className="op-receipt-head">
              <span className="op-receipt-name">scotian_heat_pumps/leaderboard</span>
              <span className="op-receipt-status">● live</span>
            </div>
            <p className="op-receipt-metric"><span ref={counter(1)} data-to="14" data-suffix="">0</span><span className="op-metric-label">trucks ranked daily</span></p>
            <p className="op-receipt-meta">last_deploy: 2026-04-15 · adopted in 30d</p>
          </article>

          <article className="op-receipt">
            <div className="op-receipt-head">
              <span className="op-receipt-name">east_kootenay_digital/site</span>
              <span className="op-receipt-status">● live</span>
            </div>
            <p className="op-receipt-metric"><span ref={counter(2)} data-to="38" data-suffix="">0</span><span className="op-metric-label">deal-flow opps surfaced / mo</span></p>
            <p className="op-receipt-meta">last_deploy: 2026-03-08 · partnership active</p>
          </article>

          <article className="op-receipt op-receipt-feature">
            <div className="op-receipt-head">
              <span className="op-receipt-name">bush_busters/operating_system</span>
              <span className="op-receipt-status">● live</span>
            </div>
            <p className="op-receipt-metric"><span ref={counter(3)} data-to="6" data-suffix="">0</span><span className="op-metric-label">modules in one platform</span></p>
            <p className="op-receipt-meta">featured below ↓</p>
          </article>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="op-systems" id="systems" ref={reveal(1)}>
        <div className="op-section-head">
          <p className="op-mono op-eyebrow">$ cat ./systems</p>
          <h2 className="op-section-h">What we build.</h2>
          <p className="op-section-deck">Six systems we have shipped before, repeatable on a new client in three to six weeks.</p>
        </div>
        <div className="op-codeblock">
          <div className="op-code-row"><span className="op-code-name">void_calls/</span>           <span className="op-code-desc">AI receptionist · 24/7 answer · ~$30/mo per line</span></div>
          <div className="op-code-row"><span className="op-code-name">review_engine/</span>        <span className="op-code-desc">Auto-review requests · 4.6 → 4.9 ★ avg in 90 days</span></div>
          <div className="op-code-row"><span className="op-code-name">ops_dashboard/</span>        <span className="op-code-desc">Sales leaderboard · live tracking · daily Slack</span></div>
          <div className="op-code-row"><span className="op-code-name">ai_source_list/</span>       <span className="op-code-desc">PSPC AI disciplines × 3 · prime-eligible delivery</span></div>
          <div className="op-code-row"><span className="op-code-name">partner_match/</span>        <span className="op-code-desc">Procurement scanner · CanadaBuys → Notion</span></div>
          <div className="op-code-row"><span className="op-code-name">field_quotes/</span>         <span className="op-code-desc">Photo to quote in 90 seconds · AI-priced</span></div>
        </div>
      </section>

      {/* BUSH BUSTERS OS — INTERACTIVE DASHBOARD */}
      <section className="op-bbos" id="bbos" ref={reveal(2)}>
        <div className="op-section-head">
          <p className="op-mono op-eyebrow">$ open ./bush-busters-os</p>
          <h2 className="op-section-h">Bush Busters Operating System.</h2>
          <p className="op-section-deck">An example of what we ship when a client asks for an operating system instead of an app. One platform, six modules, zero spreadsheets. The crew sees the day. The owner sees the week. The customer gets a quote in ninety seconds.</p>
        </div>

        <div className="op-bbos-frame">
          <div className="op-bbos-chrome">
            <span className="op-chrome-dot" style={{ background: '#ff6058' }} />
            <span className="op-chrome-dot" style={{ background: '#ffbd2e' }} />
            <span className="op-chrome-dot" style={{ background: '#28ca42' }} />
            <span className="op-chrome-url">app.bushbusters.io · production · v3.4.1</span>
          </div>
          <div className="op-bbos-app">
            <aside className="op-bbos-sidebar">
              <div className="op-bbos-logo">BUSH BUSTERS<span className="op-bbos-logo-sub">OS</span></div>
              {(['jobs', 'quotes', 'calls', 'reviews', 'reports', 'crew'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  className={'op-bbos-tab' + (activeModule === m ? ' op-bbos-tab-active' : '')}
                  onClick={() => setActiveModule(m)}
                >
                  /{m}
                </button>
              ))}
              <div className="op-bbos-sidebar-foot">
                <p className="op-mono">v3.4.1</p>
                <p className="op-mono">● synced</p>
              </div>
            </aside>
            <main className="op-bbos-main">
              {activeModule === 'jobs' && <BBosJobs />}
              {activeModule === 'quotes' && <BBosQuotes />}
              {activeModule === 'calls' && <BBosCalls />}
              {activeModule === 'reviews' && <BBosReviews />}
              {activeModule === 'reports' && <BBosReports />}
              {activeModule === 'crew' && <BBosCrew />}
            </main>
          </div>
        </div>

        <p className="op-bbos-caption">Click any module above. The chart, jobs, and feed switch live.</p>
      </section>

      {/* PROCESS */}
      <section className="op-process" ref={reveal(3)}>
        <div className="op-section-head">
          <p className="op-mono op-eyebrow">$ ./how-we-ship</p>
          <h2 className="op-section-h">Process.</h2>
        </div>
        <div className="op-process-log">
          <div className="op-process-step">
            <span className="op-mono op-process-time">[00:00]</span>
            <div>
              <p className="op-process-name">discovery</p>
              <p className="op-process-desc">Two or three calls. Scope locked. Fixed price quoted. You own the doc.</p>
            </div>
          </div>
          <div className="op-process-step">
            <span className="op-mono op-process-time">[02:00]</span>
            <div>
              <p className="op-process-name">build</p>
              <p className="op-process-desc">Three to six weeks. Weekly demos. Change orders welcome inside the same fixed price.</p>
            </div>
          </div>
          <div className="op-process-step">
            <span className="op-mono op-process-time">[06:00]</span>
            <div>
              <p className="op-process-name">live &amp; maintain</p>
              <p className="op-process-desc">Monthly check-in. No retainer lock-in. No time-and-materials roulette.</p>
            </div>
          </div>
          <div className="op-process-step">
            <span className="op-mono op-process-time">[lifetime]</span>
            <div>
              <p className="op-process-name">you own the code</p>
              <p className="op-process-desc">Full source handover. Documentation. The system outlives the contract.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="op-why" ref={reveal(4)}>
        <div className="op-section-head">
          <p className="op-mono op-eyebrow">$ ./why-us</p>
          <h2 className="op-section-h">Why hire us.</h2>
        </div>
        <ul className="op-why-list">
          <li>
            <img src="/Seven Gen Leaf Favicon.png" alt="" className="op-why-mark" />
            <div>
              <p className="op-why-h">Indigenous-majority-owned.</p>
              <p className="op-why-d">51 percent Indigenous ownership. <strong>Indigenous Business Directory (IBD)</strong> active. <strong>Canadian Council for Indigenous Business (CCIB)</strong> certified. Real prime, not a flag of convenience.</p>
            </div>
          </li>
          <li>
            <img src="/Seven Gen Leaf Favicon.png" alt="" className="op-why-mark" />
            <div>
              <p className="op-why-h">Federally credentialed.</p>
              <p className="op-why-d">Eligible on the AI Source List across all three disciplines: Machine Interactions, Cognitive Automation, Insights and Predictive Modelling. Registered on SAP Ariba and CanadaBuys. GST/BN 707060166.</p>
            </div>
          </li>
          <li>
            <img src="/Seven Gen Leaf Favicon.png" alt="" className="op-why-mark" />
            <div>
              <p className="op-why-h">Real shipping.</p>
              <p className="op-why-d">Every project listed above is live in production. We do not have a slide deck of mockups. We have engagements you can phone for a reference.</p>
            </div>
          </li>
          <li>
            <img src="/Seven Gen Leaf Favicon.png" alt="" className="op-why-mark" />
            <div>
              <p className="op-why-h">Fixed scope.</p>
              <p className="op-why-d">No retainer lock-in. No time-and-materials roulette. We quote a price and ship the thing. You own the code on day one and forever.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="op-contact" id="contact" ref={reveal(5)}>
        <div className="op-section-head">
          <p className="op-mono op-eyebrow">$ ./contact</p>
          <h2 className="op-section-h">Get in touch.</h2>
        </div>
        <div className="op-contact-block">
          <p className="op-mono op-contact-line">→ <a href="mailto:ben@sevengensystems.com">ben@sevengensystems.com</a></p>
          <p className="op-mono op-contact-line">→ <a href="https://cal.com/ben-finnie/intro" target="_blank" rel="noreferrer">cal.com/ben-finnie/intro</a></p>
          <p className="op-mono op-contact-line">→ alberta, canada · halifax, nova scotia</p>
          <p className="op-mono op-contact-line">→ response time: under one business day</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="op-footer">
        <div className="op-accent-rule" />
        <div className="op-footer-inner">
          <div className="op-footer-brand">
            <img src="/Seven Gen Leaf Favicon.png" alt="" className="op-favicon" />
            <span className="op-mono">seven-gen-systems</span>
          </div>
          <div className="op-footer-creds">
            <p className="op-mono">ibd_active · ccib_certified · sap_ariba · canadabuys</p>
            <p className="op-mono">gst/bn 707060166 · alberta · 2026</p>
            <p className="op-mono">© 2026 seven gen systems ltd. running on coffee.</p>
          </div>
          <div className="op-footer-links">
            <Link to="/preview"><span className="op-mono">~ /preview</span></Link>
            <Link to="/"><span className="op-mono">~ /current-site</span></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ===== Bush Busters OS modules ===== */

function BBosJobs() {
  return (
    <div className="op-bbos-pane">
      <div className="op-bbos-pane-head">
        <h3>Today, 6 jobs in motion</h3>
        <span className="op-mono op-bbos-pane-meta">04/30/26 · 06:14 ADT</span>
      </div>
      <div className="op-bbos-tiles">
        <Tile label="Active jobs" value="6" trend="+2 wk" />
        <Tile label="This week" value="$48,200" trend="+18%" accent />
        <Tile label="Avg quote time" value="92s" trend="−14s" />
        <Tile label="Reviews this wk" value="11" trend="4.9★" />
      </div>
      <table className="op-bbos-table">
        <thead><tr><th>JOB</th><th>CUSTOMER</th><th>CREW</th><th>STATUS</th><th>QUOTE</th></tr></thead>
        <tbody>
          <tr><td>#1042</td><td>R. Briand · Halifax</td><td>Crew 1 · Marc, Tay</td><td><span className="op-pill">In progress</span></td><td>$8,400</td></tr>
          <tr><td>#1041</td><td>K. Doiron · Truro</td><td>Crew 2 · Jay, Ben</td><td><span className="op-pill op-pill-warn">Awaiting access</span></td><td>$3,650</td></tr>
          <tr><td>#1040</td><td>S. Wilkins · Sevierville TN</td><td>Crew 3 · Reece, Will</td><td><span className="op-pill">In progress</span></td><td>$11,900</td></tr>
          <tr><td>#1039</td><td>D. Cross · Sydney</td><td>Crew 1 · Marc, Tay</td><td><span className="op-pill op-pill-ok">Complete · invoiced</span></td><td>$5,200</td></tr>
          <tr><td>#1038</td><td>L. Yates · Pigeon Forge TN</td><td>Crew 3 · Reece, Will</td><td><span className="op-pill">In progress</span></td><td>$14,800</td></tr>
          <tr><td>#1037</td><td>P. Allard · Antigonish</td><td>Crew 2 · Jay, Ben</td><td><span className="op-pill op-pill-ok">Complete</span></td><td>$4,250</td></tr>
        </tbody>
      </table>
    </div>
  )
}

function BBosQuotes() {
  return (
    <div className="op-bbos-pane">
      <div className="op-bbos-pane-head">
        <h3>AI quotes · last 24 hours</h3>
        <span className="op-mono op-bbos-pane-meta">avg time 92s · accept rate 41%</span>
      </div>
      <div className="op-bbos-tiles">
        <Tile label="Quotes sent" value="14" trend="+3 vs yesterday" />
        <Tile label="Accepted" value="6" trend="$36,400" accent />
        <Tile label="Avg time to send" value="92s" trend="goal: 120s" />
        <Tile label="Photos analyzed" value="38" trend="3.2 per quote" />
      </div>
      <div className="op-bbos-feed">
        <FeedItem time="06:09" text="Quote #Q-2092 sent → R. Briand. AI-priced from 4 lot photos. $8,400." />
        <FeedItem time="05:43" text="Quote #Q-2091 accepted → S. Wilkins. $11,900. Booked Crew 3, Tue." />
        <FeedItem time="04:51" text="Quote #Q-2090 sent → L. Yates. AI-priced from 3 photos. $14,800." />
        <FeedItem time="03:12" text="Quote #Q-2089 declined (price). Owner notified for follow-up." />
        <FeedItem time="02:08" text="Quote #Q-2088 sent → K. Doiron. $3,650. Awaiting customer access date." />
      </div>
    </div>
  )
}

function BBosCalls() {
  return (
    <div className="op-bbos-pane">
      <div className="op-bbos-pane-head">
        <h3>Inbound calls · last 24 hours</h3>
        <span className="op-mono op-bbos-pane-meta">answer rate 99.4% · ai-handled 87%</span>
      </div>
      <div className="op-bbos-tiles">
        <Tile label="Inbound" value="24" trend="+5 vs yest" />
        <Tile label="AI answered" value="21" trend="87%" accent />
        <Tile label="Booked to crew" value="11" trend="46%" />
        <Tile label="Missed" value="0" trend="ok" />
      </div>
      <div className="op-bbos-feed">
        <FeedItem time="06:11" text="(902) 555-0144 → AI answered. Caller booked site visit Thu 10am Crew 1." />
        <FeedItem time="05:32" text="(902) 555-0188 → AI answered. Caller in research phase. Sent estimate calculator link." />
        <FeedItem time="04:48" text="(865) 555-0102 → AI answered. Tennessee market. Booked Crew 3, Mon." />
        <FeedItem time="03:14" text="(902) 555-0166 → AI answered. Caller out of service area. Polite redirect, log saved." />
        <FeedItem time="02:52" text="(902) 555-0177 → AI answered. Existing customer. Forwarded to ops." />
      </div>
    </div>
  )
}

function BBosReviews() {
  return (
    <div className="op-bbos-pane">
      <div className="op-bbos-pane-head">
        <h3>Reviews · last 30 days</h3>
        <span className="op-mono op-bbos-pane-meta">11 new · avg 4.9★</span>
      </div>
      <div className="op-bbos-tiles">
        <Tile label="New reviews" value="11" trend="+5 vs prev" />
        <Tile label="Avg rating" value="4.9★" trend="+0.3" accent />
        <Tile label="Auto-requested" value="38" trend="29% conversion" />
        <Tile label="Replied to all" value="100%" trend="≤24h" />
      </div>
      <div className="op-bbos-feed">
        <FeedItem time="04/29" text="★★★★★ R. Briand · &quot;Cleaner than the day we bought the lot.&quot;" />
        <FeedItem time="04/27" text="★★★★★ K. Doiron · &quot;Quote in 90 seconds, crew here in two days. That is unusual.&quot;" />
        <FeedItem time="04/24" text="★★★★★ S. Wilkins · &quot;Worth every dollar. Crew left the place spotless.&quot;" />
        <FeedItem time="04/22" text="★★★★☆ D. Cross · &quot;Solid work. Wish the invoice arrived faster.&quot; · auto-replied" />
        <FeedItem time="04/19" text="★★★★★ P. Allard · &quot;Saved us a season of cleanup.&quot;" />
      </div>
    </div>
  )
}

function BBosReports() {
  return (
    <div className="op-bbos-pane">
      <div className="op-bbos-pane-head">
        <h3>Weekly profitability per crew</h3>
        <span className="op-mono op-bbos-pane-meta">w/e 04/27 · viewed every Sun</span>
      </div>
      <div className="op-bbos-tiles">
        <Tile label="Week revenue" value="$48,200" trend="+18%" accent />
        <Tile label="Crew margin" value="62%" trend="+4 pts" />
        <Tile label="Best crew" value="Crew 3" trend="$22.4k" />
        <Tile label="Jobs/week" value="13" trend="+2" />
      </div>
      <div className="op-bbos-chart">
        <svg viewBox="0 0 600 200" preserveAspectRatio="none" width="100%" height="160">
          <defs>
            <linearGradient id="opChart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c7ee5b" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#c7ee5b" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 150 L 60 130 L 120 140 L 180 110 L 240 100 L 300 80 L 360 90 L 420 60 L 480 70 L 540 40 L 600 30 L 600 200 L 0 200 Z" fill="url(#opChart)" />
          <path d="M 0 150 L 60 130 L 120 140 L 180 110 L 240 100 L 300 80 L 360 90 L 420 60 L 480 70 L 540 40 L 600 30" fill="none" stroke="#c7ee5b" strokeWidth="2" />
          {[150,130,140,110,100,80,90,60,70,40,30].map((y, i) => (
            <circle key={i} cx={i*60} cy={y} r="3" fill="#c7ee5b" />
          ))}
        </svg>
        <div className="op-chart-axis">
          <span>w-10</span><span>w-9</span><span>w-8</span><span>w-7</span><span>w-6</span><span>w-5</span><span>w-4</span><span>w-3</span><span>w-2</span><span>w-1</span><span>now</span>
        </div>
      </div>
    </div>
  )
}

function BBosCrew() {
  return (
    <div className="op-bbos-pane">
      <div className="op-bbos-pane-head">
        <h3>Crew · 3 active, 7 on payroll</h3>
        <span className="op-mono op-bbos-pane-meta">schedule · payroll · perf</span>
      </div>
      <div className="op-bbos-tiles">
        <Tile label="Crews active" value="3" trend="2 in NS, 1 in TN" />
        <Tile label="Hours this wk" value="312" trend="+6%" />
        <Tile label="Top performer" value="Crew 3" trend="$22.4k" accent />
        <Tile label="Safety incidents" value="0" trend="ytd" />
      </div>
      <table className="op-bbos-table">
        <thead><tr><th>CREW</th><th>LEAD</th><th>JOBS WK</th><th>REVENUE WK</th><th>STATUS</th></tr></thead>
        <tbody>
          <tr><td>Crew 1</td><td>Marc</td><td>4</td><td>$13,600</td><td><span className="op-pill">Halifax route</span></td></tr>
          <tr><td>Crew 2</td><td>Jay</td><td>3</td><td>$8,200</td><td><span className="op-pill">Truro / Antigonish</span></td></tr>
          <tr><td>Crew 3</td><td>Reece</td><td>5</td><td>$22,400</td><td><span className="op-pill op-pill-ok">Tennessee market</span></td></tr>
          <tr><td>—</td><td>4 part-time</td><td>—</td><td>—</td><td><span className="op-pill op-pill-muted">On payroll</span></td></tr>
        </tbody>
      </table>
    </div>
  )
}

function Tile({ label, value, trend, accent }: { label: string; value: string; trend: string; accent?: boolean }) {
  return (
    <div className={'op-tile' + (accent ? ' op-tile-accent' : '')}>
      <p className="op-tile-label">{label}</p>
      <p className="op-tile-value">{value}</p>
      <p className="op-tile-trend">{trend}</p>
    </div>
  )
}

function FeedItem({ time, text }: { time: string; text: string }) {
  return (
    <div className="op-feed-item">
      <span className="op-mono op-feed-time">{time}</span>
      <span className="op-feed-text">{text}</span>
    </div>
  )
}

const styles = `
.op-builder {
  --bg: oklch(15% 0.012 150);
  --bg-raised: oklch(20% 0.014 150);
  --bg-card: oklch(22% 0.014 150);
  --text: oklch(96% 0.005 150);
  --muted: oklch(68% 0.012 150);
  --dim: oklch(50% 0.012 150);
  --rule: oklch(28% 0.014 150);
  --accent: oklch(85% 0.18 130);
  --accent-dim: oklch(60% 0.13 130);

  background: var(--bg);
  color: var(--text);
  font-family: 'Geist', 'Inter', -apple-system, sans-serif;
  font-feature-settings: 'kern', 'ss01';
  min-height: 100vh;
}
.op-builder * { box-sizing: border-box; }
.op-builder a { color: inherit; text-decoration: none; transition: color 200ms; }
.op-builder a:hover { color: var(--accent); }
.op-mono { font-family: 'JetBrains Mono', 'Geist Mono', ui-monospace, monospace; }
.op-accent { color: var(--accent); }
.op-accent-rule { height: 1px; background: linear-gradient(90deg, transparent, var(--accent) 30%, var(--accent) 70%, transparent); opacity: 0.4; }

/* TOP BAR */
.op-bar { position: sticky; top: 0; z-index: 20; background: oklch(15% 0.012 150 / 0.85); backdrop-filter: blur(10px); }
.op-bar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 32px;
  max-width: 1400px;
  margin: 0 auto;
}
.op-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  letter-spacing: 0.02em;
}
.op-favicon { width: 22px; height: 22px; opacity: 0.9; }
.op-bar-status { color: var(--accent); margin-left: 8px; font-size: 11px; }
.op-bar-nav { display: flex; gap: 22px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--muted); }
.op-bar-nav a:hover { color: var(--accent); }

/* HERO */
.op-hero {
  position: relative;
  min-height: 92vh;
  padding: 80px 32px 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.op-hero-canvas { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
.op-hero-veil {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 70%, transparent 0%, var(--bg) 80%),
    linear-gradient(180deg, transparent 50%, var(--bg) 100%);
  z-index: 1;
  pointer-events: none;
}
.op-hero-content { position: relative; z-index: 2; max-width: 1400px; margin: 0 auto; width: 100%; }
.op-hero-tag {
  font-size: 12px;
  color: var(--accent-dim);
  margin: 0 0 28px;
  letter-spacing: 0.05em;
}
.op-hero-h {
  font-family: 'Geist', 'Inter', sans-serif;
  font-weight: 700;
  font-size: clamp(56px, 9.4vw, 144px);
  line-height: 0.96;
  letter-spacing: -0.035em;
  margin: 0 0 36px;
  max-width: 16ch;
}
.op-hero-deck {
  font-size: 18px;
  line-height: 1.55;
  color: var(--muted);
  max-width: 640px;
  margin: 0 0 48px;
  letter-spacing: -0.005em;
}
.op-terminal {
  background: oklch(11% 0.012 150 / 0.85);
  border: 1px solid var(--rule);
  border-radius: 4px;
  padding: 18px 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  max-width: 540px;
  position: relative;
}
.op-terminal-cmd { color: var(--accent); margin: 0 0 6px; }
.op-terminal-out { color: var(--muted); margin: 0 0 4px; }
.op-cursor { color: var(--accent); animation: opBlink 1s steps(2) infinite; font-size: 14px; }
@keyframes opBlink { 50% { opacity: 0; } }

/* SECTIONS */
.op-receipts, .op-systems, .op-bbos, .op-process, .op-why, .op-contact {
  padding: 96px 32px;
  max-width: 1400px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
}
.op-revealed { opacity: 1 !important; transform: none !important; }

.op-section-head { margin-bottom: 48px; max-width: 720px; }
.op-eyebrow {
  font-size: 12px;
  color: var(--accent-dim);
  margin: 0 0 16px;
  letter-spacing: 0.05em;
}
.op-section-h {
  font-family: 'Geist', 'Inter', sans-serif;
  font-weight: 700;
  font-size: clamp(36px, 5.4vw, 72px);
  line-height: 1.0;
  letter-spacing: -0.03em;
  margin: 0 0 24px;
}
.op-section-deck {
  font-size: 17px;
  line-height: 1.55;
  color: var(--muted);
  margin: 0;
  max-width: 640px;
}

/* RECEIPTS */
.op-receipt-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.op-receipt {
  background: var(--bg-raised);
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 28px 30px;
  transition: border-color 240ms;
}
.op-receipt:hover { border-color: var(--accent-dim); }
.op-receipt-feature { border-color: var(--accent-dim); background: linear-gradient(180deg, oklch(22% 0.04 130 / 0.6), var(--bg-raised)); }
.op-receipt-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
.op-receipt-name { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--text); letter-spacing: 0.01em; }
.op-receipt-status { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); }
.op-receipt-metric {
  font-family: 'Geist', 'Inter', sans-serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 0 0 8px;
  color: var(--text);
  display: flex;
  align-items: baseline;
  gap: 14px;
}
.op-metric-label { font-size: 13px; font-weight: 400; color: var(--muted); letter-spacing: 0; font-family: 'Inter', sans-serif; }
.op-receipt-meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--dim); margin: 12px 0 0; }

/* SYSTEMS CODEBLOCK */
.op-codeblock {
  background: oklch(12% 0.012 150);
  border: 1px solid var(--rule);
  border-radius: 6px;
  padding: 28px 32px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14.5px;
  line-height: 2.0;
  color: var(--muted);
  overflow-x: auto;
}
.op-code-row { display: flex; align-items: baseline; gap: 12px; white-space: nowrap; }
.op-code-name { color: var(--accent); flex-shrink: 0; min-width: 200px; }
.op-code-desc { color: var(--muted); }

/* BBOS DASHBOARD */
.op-bbos-frame {
  background: oklch(11% 0.012 150);
  border: 1px solid var(--rule);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 30px 80px oklch(0% 0 0 / 0.3);
}
.op-bbos-chrome {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  background: oklch(14% 0.014 150);
  border-bottom: 1px solid var(--rule);
}
.op-chrome-dot { width: 10px; height: 10px; border-radius: 999px; display: inline-block; }
.op-chrome-url {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: var(--dim);
  margin-left: 16px;
}
.op-bbos-app { display: grid; grid-template-columns: 200px 1fr; min-height: 560px; }
.op-bbos-sidebar {
  background: oklch(13% 0.014 150);
  border-right: 1px solid var(--rule);
  padding: 24px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.op-bbos-logo {
  font-family: 'Geist', 'Inter', sans-serif;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: var(--text);
  padding: 4px 10px 16px;
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.op-bbos-logo-sub { font-size: 9px; letter-spacing: 0.16em; color: var(--accent); }
.op-bbos-tab {
  background: transparent;
  border: none;
  text-align: left;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--muted);
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 180ms;
}
.op-bbos-tab:hover { background: oklch(18% 0.014 150); color: var(--text); }
.op-bbos-tab-active { background: oklch(20% 0.04 130); color: var(--accent); }
.op-bbos-sidebar-foot { margin-top: auto; padding: 12px 10px 0; font-size: 10px; color: var(--dim); }
.op-bbos-sidebar-foot p { margin: 0 0 4px; }

.op-bbos-main { padding: 28px 32px; overflow: auto; }
.op-bbos-pane-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 22px; }
.op-bbos-pane-head h3 { font-family: 'Geist', 'Inter', sans-serif; font-size: 20px; font-weight: 600; margin: 0; letter-spacing: -0.015em; }
.op-bbos-pane-meta { font-size: 11px; color: var(--dim); }

.op-bbos-tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
.op-tile { background: oklch(15% 0.014 150); border: 1px solid var(--rule); border-radius: 5px; padding: 16px 18px; }
.op-tile-accent { background: linear-gradient(180deg, oklch(20% 0.06 130 / 0.4), oklch(15% 0.014 150)); border-color: var(--accent-dim); }
.op-tile-label { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--dim); letter-spacing: 0.05em; text-transform: uppercase; margin: 0 0 8px; }
.op-tile-value { font-family: 'Geist', 'Inter', sans-serif; font-size: 26px; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 4px; line-height: 1; }
.op-tile-trend { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent); margin: 0; }

.op-bbos-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.op-bbos-table th { text-align: left; font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.06em; color: var(--dim); padding: 10px 12px; border-bottom: 1px solid var(--rule); }
.op-bbos-table td { padding: 12px; border-bottom: 1px solid var(--rule); color: var(--text); }
.op-pill { display: inline-block; padding: 3px 10px; border-radius: 999px; background: oklch(22% 0.02 200); font-size: 11px; color: var(--muted); }
.op-pill-warn { background: oklch(28% 0.06 70); color: oklch(85% 0.12 80); }
.op-pill-ok { background: oklch(22% 0.07 130); color: var(--accent); }
.op-pill-muted { background: oklch(20% 0.012 150); color: var(--dim); }

.op-bbos-feed { display: flex; flex-direction: column; gap: 0; }
.op-feed-item { display: grid; grid-template-columns: 70px 1fr; gap: 14px; padding: 12px 0; border-top: 1px solid var(--rule); font-size: 13px; line-height: 1.5; }
.op-feed-item:first-child { border-top: none; }
.op-feed-time { font-size: 11px; color: var(--dim); padding-top: 1px; }
.op-feed-text { color: var(--text); }

.op-bbos-chart { background: oklch(13% 0.014 150); border: 1px solid var(--rule); border-radius: 5px; padding: 20px; }
.op-chart-axis { display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--dim); margin-top: 8px; padding: 0 4px; }

.op-bbos-caption { text-align: center; color: var(--dim); font-size: 13px; font-family: 'JetBrains Mono', monospace; margin-top: 18px; }

/* PROCESS */
.op-process-log { background: oklch(12% 0.012 150); border: 1px solid var(--rule); border-radius: 6px; padding: 28px 32px; }
.op-process-step { display: grid; grid-template-columns: 110px 1fr; gap: 24px; padding: 18px 0; border-top: 1px solid var(--rule); align-items: baseline; }
.op-process-step:first-child { border-top: none; padding-top: 0; }
.op-process-time { color: var(--accent); font-size: 13px; }
.op-process-name { font-family: 'Geist', 'Inter', sans-serif; font-size: 18px; font-weight: 600; margin: 0 0 4px; letter-spacing: -0.015em; }
.op-process-desc { font-size: 14.5px; color: var(--muted); margin: 0; line-height: 1.55; }

/* WHY */
.op-why-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
.op-why-list li { display: grid; grid-template-columns: 36px 1fr; gap: 18px; padding: 24px 26px; background: var(--bg-raised); border: 1px solid var(--rule); border-radius: 6px; align-items: flex-start; }
.op-why-mark { width: 32px; height: 32px; opacity: 0.9; }
.op-why-h { font-family: 'Geist', 'Inter', sans-serif; font-size: 18px; font-weight: 600; margin: 0 0 8px; letter-spacing: -0.015em; }
.op-why-d { font-size: 14.5px; color: var(--muted); margin: 0; line-height: 1.55; }
.op-why-d strong { color: var(--text); font-weight: 600; }

/* CONTACT */
.op-contact-block { background: oklch(12% 0.012 150); border: 1px solid var(--rule); border-radius: 6px; padding: 36px 38px; max-width: 720px; }
.op-contact-line { font-size: 18px; margin: 0 0 14px; color: var(--text); }
.op-contact-line:last-child { margin-bottom: 0; }
.op-contact-line a { color: var(--accent); border-bottom: 1px dashed var(--accent-dim); padding-bottom: 1px; }

/* FOOTER */
.op-footer { padding: 0 0 56px; }
.op-footer-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 56px 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;
}
.op-footer-brand { display: inline-flex; align-items: center; gap: 10px; }
.op-footer-creds { font-size: 11px; color: var(--dim); line-height: 1.7; }
.op-footer-creds p { margin: 0; }
.op-footer-links { display: flex; gap: 18px; font-size: 12px; color: var(--muted); }

/* RESPONSIVE */
@media (max-width: 1024px) {
  .op-bbos-app { grid-template-columns: 1fr; }
  .op-bbos-sidebar { flex-direction: row; flex-wrap: wrap; border-right: none; border-bottom: 1px solid var(--rule); }
  .op-bbos-sidebar-foot { display: none; }
  .op-bbos-tiles { grid-template-columns: repeat(2, 1fr); }
  .op-receipt-grid { grid-template-columns: 1fr; }
  .op-why-list { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .op-bar-nav { display: none; }
  .op-hero { min-height: 78vh; padding: 60px 24px 80px; }
  .op-receipts, .op-systems, .op-bbos, .op-process, .op-why, .op-contact { padding: 64px 20px; }
  .op-bbos-main { padding: 18px 16px; }
  .op-receipt-metric { font-size: 42px; flex-direction: column; align-items: flex-start; gap: 4px; }
  .op-codeblock, .op-process-log { padding: 18px 16px; font-size: 12.5px; }
  .op-code-name { min-width: 0; }
  .op-process-step { grid-template-columns: 1fr; gap: 4px; }
  .op-bbos-table { font-size: 11px; }
  .op-bbos-table th, .op-bbos-table td { padding: 8px 6px; }
}
`
