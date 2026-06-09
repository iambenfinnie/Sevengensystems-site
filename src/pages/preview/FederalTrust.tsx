import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function FederalTrust() {
  useEffect(() => {
    document.title = 'Seven Gen Systems · Federal Trust (preview)'
  }, [])

  return (
    <div className="federal-trust">
      <style>{styles}</style>

      {/* MASTHEAD */}
      <header className="ft-masthead">
        <div className="ft-rule-thick" />
        <div className="ft-masthead-row">
          <div className="ft-wordmark">
            <span className="ft-leaf">◆</span>
            <span>SEVEN GEN SYSTEMS</span>
          </div>
          <div className="ft-issue">Vol. I · No. 4 · Halifax, Nova Scotia · April 2026</div>
        </div>
        <div className="ft-rule" />
        <nav className="ft-nav">
          <a href="#case">The Firm</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#work">Selected Work</a>
          <a href="#pursuing">Currently Pursuing</a>
          <a href="#qualifications">Qualifications</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="ft-rule-thick" />
      </header>

      {/* EDITORIAL OPEN */}
      <section className="ft-open">
        <p className="ft-tag">An editorial</p>
        <h1 className="ft-headline">
          An Indigenous-majority-owned AI firm,<br />
          built to be a real prime,<br />
          <em>not a flag of convenience.</em>
        </h1>
        <p className="ft-deck">
          Seven Gen Systems delivers operational AI for federal departments and Canadian small businesses. We carry the credentials, and the receipts.
        </p>
        <p className="ft-byline">
          <span className="ft-byline-by">By</span> Robert Maclean &amp; Benjamin Finnie
          <span className="ft-byline-sep">·</span>
          <span className="ft-byline-role">Co-Founders, Seven Gen Systems Ltd.</span>
        </p>
        <div className="ft-rule" style={{ marginTop: 56 }} />
      </section>

      {/* THE CASE */}
      <section className="ft-case" id="case">
        <h2 className="ft-section-h">The case</h2>
        <div className="ft-case-body">
          <p className="ft-dropcap">
            Most AI vendors talking to the federal government are doing one of two things. Either they are American firms positioning a Canadian flag of convenience, or they are pass-through brokers fronting offshore delivery on behalf of a domestic shell. Neither survives a real look at where the work happens, who does it, and who keeps the institutional knowledge. The Procurement Strategy for Indigenous Business exists, in part, to keep that work in the country and a meaningful share of it under Indigenous ownership.
          </p>
          <p>
            Seven Gen Systems is a real prime. We are 51 percent Indigenous-owned. Our co-founder and chief executive, Robert Maclean, holds the controlling interest required by the Indigenous Business Directory. We are certified by the Canadian Council for Indigenous Business. We are registered on SAP Ariba and CanadaBuys. We hold a GST/BN. The IBD file is current.
          </p>
          <p>
            More importantly, we do the work. Every project on the ledger below is built and operated by Seven Gen, end to end. There is no parent in another jurisdiction. There is no offshore subcontractor handling delivery while a Canadian face handles the paperwork. When you contract with us, you contract with the team that ships.
          </p>
          <p>
            This matters because the federal AI category is moving fast, and contracts written this year will define institutional capability for a decade. Putting a real Indigenous prime on the file now is a fairness question. It is also a competence question. We have to be good at this work, not just present in the room.
          </p>
          <p>
            What follows is the case for hiring us. Three disciplines we build to, three engagements we have shipped, the qualifications that make us eligible to compete, and the solicitations we are currently pursuing.
          </p>
        </div>
      </section>

      <div className="ft-rule" />

      {/* CAPABILITIES */}
      <section className="ft-capabilities" id="capabilities">
        <h2 className="ft-section-h">Capabilities, mapped to the AI Source List</h2>
        <p className="ft-section-deck">
          Public Services and Procurement Canada divides the AI Source List into three disciplines. We build to all three, and we accept that the disciplines are graded by what runs in production, not by what shows well in a demo.
        </p>
        <div className="ft-cap-grid">
          <article className="ft-cap">
            <div className="ft-cap-num">I.</div>
            <h3 className="ft-cap-title">Machine Interactions</h3>
            <p>
              Voice and chat interfaces that handle real customer load on real phone lines and websites. We deploy AI receptionists, qualification flows, and triage systems that integrate with existing CRM, calendar, and case management. The work is graded on answer rate, time to resolution, and call deflection.
            </p>
            <p className="ft-cap-eyebrow">In production:</p>
            <ul className="ft-cap-list">
              <li>24/7 receptionist on a small-business phone line, integrated with Google Calendar and a Notion CRM</li>
              <li>Qualification flow that routes warm leads to a human and books cold ones into a self-service path</li>
              <li>Multi-language voice intake for service businesses with rural customers</li>
            </ul>
          </article>

          <article className="ft-cap">
            <div className="ft-cap-num">II.</div>
            <h3 className="ft-cap-title">Cognitive Automation</h3>
            <p>
              Workflow automation that uses language models for the parts of an operation that are hard to script. Document review, classification, summarization, routing across the systems already in use. We integrate with Make.com, n8n, Microsoft, and Google.
            </p>
            <p className="ft-cap-eyebrow">In production:</p>
            <ul className="ft-cap-list">
              <li>Procurement opportunity scanner that ingests CanadaBuys, scores against capability criteria, and posts a daily digest to Slack</li>
              <li>Auto-review request engine that lifts an SMB from 4.6 to 4.9 stars in ninety days</li>
              <li>Internal ticketing that classifies, prioritizes, and routes inbound email without human triage</li>
            </ul>
          </article>

          <article className="ft-cap">
            <div className="ft-cap-num">III.</div>
            <h3 className="ft-cap-title">Insights &amp; Predictive Modelling</h3>
            <p>
              Sales and operational dashboards that turn the data already inside an organization into a daily decision surface. Forecasting, leaderboard ranking, anomaly detection on top of the customer and operational systems already in place.
            </p>
            <p className="ft-cap-eyebrow">In production:</p>
            <ul className="ft-cap-list">
              <li>Sales leaderboard for a multi-truck heat pump dealer, re-ranking representatives in real time</li>
              <li>Field operations dashboard for a land clearing company surfacing job profitability per crew per week</li>
              <li>Pest control sales analytics that surface deal velocity and territory gaps</li>
            </ul>
          </article>
        </div>
      </section>

      <div className="ft-rule" />

      {/* SELECTED WORK */}
      <section className="ft-work" id="work">
        <h2 className="ft-section-h">Selected work</h2>
        <p className="ft-section-deck">Three engagements, all live, all built and operated by Seven Gen.</p>

        <article className="ft-work-item">
          <div className="ft-work-meta">
            <p className="ft-work-num">01.</p>
            <p className="ft-work-tag">Atlantic Canada · Land clearing</p>
          </div>
          <div className="ft-work-body">
            <h3 className="ft-work-title">Bush Busters</h3>
            <p>
              Two SEO-optimized sites built and deployed for a heavy-equipment land clearing operator. One serves the local Atlantic market; the other targets a high-traffic East Tennessee secondary market. Both are live, both are tracked, and both are part of our AI Source List capability evidence under Machine Interactions and Insights and Predictive Modelling.
            </p>
            <ul className="ft-metric-list">
              <li>Organic search traffic up across both markets since launch</li>
              <li>Inbound calls routed through Google Business Profile and AI receptionist</li>
              <li>Lead capture wired into the operator&apos;s CRM with no manual data entry</li>
            </ul>
          </div>
        </article>

        <article className="ft-work-item">
          <div className="ft-work-meta">
            <p className="ft-work-num">02.</p>
            <p className="ft-work-tag">Atlantic Canada · HVAC sales operations</p>
          </div>
          <div className="ft-work-body">
            <h3 className="ft-work-title">Scotian Heat Pumps</h3>
            <p>
              A live sales leaderboard and field operations dashboard built for a multi-truck heat pump dealer in Nova Scotia. The dashboard surfaces representative ranking, deal velocity, win rate, and pipeline health from the existing sales stack, with daily Slack alerts to leadership.
            </p>
            <ul className="ft-metric-list">
              <li>Re-ranks sales representatives in real time</li>
              <li>Adopted by the full sales team within thirty days</li>
              <li>Replaced a manual spreadsheet pulled together each Monday morning</li>
            </ul>
          </div>
        </article>

        <article className="ft-work-item">
          <div className="ft-work-meta">
            <p className="ft-work-num">03.</p>
            <p className="ft-work-tag">British Columbia · IT consulting &amp; deal-flow</p>
          </div>
          <div className="ft-work-body">
            <h3 className="ft-work-title">East Kootenay Digital</h3>
            <p>
              Website rebuild and ongoing partnership with a British Columbia IT consulting operator. Delivered as part of a long-form distribution and procurement-scout relationship. The partnership now produces inbound federal procurement opportunities on a near-daily cadence.
            </p>
            <ul className="ft-metric-list">
              <li>Site shipped and live</li>
              <li>Daily inbound procurement deal-flow into the Seven Gen pipeline</li>
              <li>Reciprocal partnership: site value exchanged for sustained scout relationship</li>
            </ul>
          </div>
        </article>
      </section>

      <div className="ft-rule" />

      {/* CURRENTLY PURSUING */}
      <section className="ft-pursuing" id="pursuing">
        <h2 className="ft-section-h">Currently pursuing</h2>
        <p className="ft-section-deck ft-italic">
          We publish what we are hunting. If we are shortlisted on something you are tracking, you will know.
        </p>
        <table className="ft-ledger">
          <thead>
            <tr>
              <th>Solicitation</th>
              <th>Notice type</th>
              <th>Issuer</th>
              <th>Closes</th>
              <th>Disciplines</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ft-mono">WS4286933967</td>
              <td>ITQ · AI Source List</td>
              <td>Public Services and Procurement Canada</td>
              <td>30 Sept 2026</td>
              <td>I, II, III</td>
            </tr>
            <tr>
              <td className="ft-mono">24-XYZ-99-AI</td>
              <td>RFI · Indigenous AI Capability Survey</td>
              <td>Innovation, Science and Economic Development Canada</td>
              <td>15 May 2026</td>
              <td>Cross-disciplinary</td>
            </tr>
            <tr>
              <td className="ft-mono">ACOA-2026-AI-12</td>
              <td>Standing Offer · SMB digitization advisory</td>
              <td>Atlantic Canada Opportunities Agency</td>
              <td>Rolling</td>
              <td>II, III</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="ft-rule" />

      {/* QUALIFICATIONS */}
      <section className="ft-qual" id="qualifications">
        <h2 className="ft-section-h">Compliance &amp; qualifications</h2>
        <dl className="ft-qual-list">
          <div className="ft-qual-row">
            <dt>Indigenous Business Directory (IBD)</dt>
            <dd>Active · file current</dd>
          </div>
          <div className="ft-qual-row">
            <dt>Canadian Council for Indigenous Business (CCIB)</dt>
            <dd>Certified</dd>
          </div>
          <div className="ft-qual-row">
            <dt>SAP Ariba · CanadaBuys supplier profile</dt>
            <dd>Active</dd>
          </div>
          <div className="ft-qual-row">
            <dt>GST / BN</dt>
            <dd className="ft-mono">707060166</dd>
          </div>
          <div className="ft-qual-row">
            <dt>Incorporation</dt>
            <dd>Alberta, Canada</dd>
          </div>
          <div className="ft-qual-row">
            <dt>Indigenous ownership</dt>
            <dd>51 percent · Robert Maclean, Co-Founder &amp; CEO</dd>
          </div>
          <div className="ft-qual-row">
            <dt>Shareholders agreement</dt>
            <dd>Drafted · Robert holds final decision authority per IBD</dd>
          </div>
        </dl>
      </section>

      <div className="ft-rule" />

      {/* PRINCIPALS */}
      <section className="ft-principals">
        <h2 className="ft-section-h">Principals</h2>
        <div className="ft-principal">
          <h3>Robert Maclean</h3>
          <p className="ft-principal-role">Co-Founder &amp; Chief Executive Officer</p>
          <p>
            Robert leads commercial relationships and small business delivery for Seven Gen. He carries the controlling interest required by the Indigenous Business Directory and holds final decision authority on contracts and shareholder matters. Before Seven Gen, Robert built and ran service businesses in Atlantic Canada.
          </p>
        </div>
        <div className="ft-principal">
          <h3>Benjamin Finnie</h3>
          <p className="ft-principal-role">Co-Founder &amp; Head of Technology and Automation</p>
          <p>
            Ben leads technology, automation, and federal business development. He has more than four million dollars in personal sales revenue across HVAC, solar, and security, and a close rate near ninety-five percent. He is enrolled in Information Systems at Brigham Young University and runs the federal procurement strategy for Seven Gen.
          </p>
        </div>
      </section>

      <div className="ft-rule" />

      {/* CONTACT */}
      <section className="ft-contact" id="contact">
        <h2 className="ft-section-h">Direct lines</h2>
        <div className="ft-contact-grid">
          <div>
            <p className="ft-contact-label">Email</p>
            <p className="ft-contact-val">
              <a href="mailto:ben@sevengensystems.com">ben@sevengensystems.com</a>
            </p>
          </div>
          <div>
            <p className="ft-contact-label">Schedule</p>
            <p className="ft-contact-val">
              <a href="https://cal.com/ben-finnie/intro" target="_blank" rel="noreferrer">
                cal.com/ben-finnie/intro
              </a>
              <span className="ft-contact-note">twenty-minute introduction</span>
            </p>
          </div>
          <div>
            <p className="ft-contact-label">Response time</p>
            <p className="ft-contact-val">Under one business day.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ft-footer">
        <div className="ft-rule-thick" />
        <div className="ft-footer-row">
          <div>
            <p className="ft-wordmark">
              <span className="ft-leaf">◆</span>
              <span>SEVEN GEN SYSTEMS</span>
            </p>
            <p className="ft-foot-note">
              Incorporated in Alberta, Canada · Indigenous-majority-owned. IBD active · CCIB certified · GST/BN <span className="ft-mono">707060166</span>.
            </p>
            <p className="ft-foot-note">© 2026 Seven Gen Systems Ltd. All rights reserved.</p>
          </div>
          <div className="ft-foot-links">
            <Link to="/preview">← all directions</Link>
            <Link to="/">current site</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const styles = `
.federal-trust {
  --paper: oklch(96% 0.014 80);
  --ink: oklch(18% 0.008 200);
  --muted: oklch(45% 0.012 200);
  --rule: oklch(72% 0.008 200);
  --accent: oklch(38% 0.13 25);
  --tinted: oklch(94% 0.018 80);

  background: var(--paper);
  color: var(--ink);
  font-family: 'Newsreader', Georgia, serif;
  font-feature-settings: 'kern', 'liga', 'onum';
  min-height: 100vh;
}
.federal-trust * { box-sizing: border-box; }
.federal-trust a { color: inherit; text-decoration: none; border-bottom: 1px solid currentColor; padding-bottom: 1px; transition: opacity 200ms; }
.federal-trust a:hover { opacity: 0.6; }

/* MASTHEAD */
.ft-masthead { padding: 28px 64px 0; }
.ft-rule-thick { border-top: 3px solid var(--ink); }
.ft-rule { border-top: 1px solid var(--rule); }
.ft-masthead-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 14px 0 12px;
}
.ft-wordmark {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.ft-leaf { color: var(--accent); font-size: 11px; }
.ft-issue {
  font-style: italic;
  font-size: 13px;
  color: var(--muted);
}
.ft-nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 14px 0;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--muted);
}
.ft-nav a { border-bottom: none; }
.ft-nav a:hover { color: var(--ink); opacity: 1; }

/* OPEN */
.ft-open { padding: 80px 64px 48px; max-width: 1200px; margin: 0 auto; text-align: center; }
.ft-tag {
  font-family: 'Newsreader', serif;
  font-style: italic;
  font-size: 14px;
  color: var(--accent);
  margin: 0 0 24px;
  letter-spacing: 0.4px;
}
.ft-headline {
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-size: clamp(36px, 5.4vw, 80px);
  line-height: 1.04;
  letter-spacing: -0.018em;
  margin: 0 0 36px;
  max-width: 1100px;
  margin-inline: auto;
}
.ft-headline em { font-style: italic; color: var(--accent); }
.ft-deck {
  font-size: 22px;
  line-height: 1.45;
  max-width: 720px;
  margin: 0 auto 32px;
  color: var(--ink);
}
.ft-byline {
  font-family: 'Newsreader', serif;
  font-style: italic;
  font-size: 15px;
  color: var(--muted);
  margin: 0;
}
.ft-byline-by { font-style: normal; font-size: 11px; letter-spacing: 1.4px; text-transform: uppercase; margin-right: 6px; font-family: 'Inter', sans-serif; }
.ft-byline-sep { margin: 0 10px; }

/* SECTIONS */
.ft-case, .ft-capabilities, .ft-work, .ft-pursuing, .ft-qual, .ft-principals, .ft-contact {
  padding: 64px 64px 56px;
  max-width: 1200px;
  margin: 0 auto;
}
.ft-section-h {
  font-family: 'Newsreader', serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 28px;
  font-style: italic;
}
.ft-section-deck {
  font-size: 18px;
  line-height: 1.55;
  max-width: 680px;
  margin: 0 0 40px;
}
.ft-italic { font-style: italic; }

/* CASE */
.ft-case-body {
  column-count: 2;
  column-gap: 56px;
  font-size: 17px;
  line-height: 1.62;
}
.ft-case-body p { margin: 0 0 18px; break-inside: avoid; }
.ft-dropcap::first-letter {
  font-size: 4.4em;
  float: left;
  line-height: 0.88;
  font-weight: 600;
  margin: 6px 10px 0 -2px;
  color: var(--accent);
}

/* CAPABILITIES */
.ft-cap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  margin-top: 32px;
}
.ft-cap-num {
  font-family: 'Newsreader', serif;
  font-style: italic;
  font-size: 32px;
  color: var(--accent);
  margin-bottom: 8px;
}
.ft-cap-title {
  font-family: 'Newsreader', serif;
  font-weight: 600;
  font-size: 26px;
  line-height: 1.15;
  margin: 0 0 14px;
}
.ft-cap p { font-size: 15.5px; line-height: 1.6; margin: 0 0 16px; }
.ft-cap-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--muted);
  margin: 18px 0 8px !important;
}
.ft-cap-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--muted);
}
.ft-cap-list li {
  padding: 8px 0;
  border-top: 1px solid var(--rule);
  break-inside: avoid;
}
.ft-cap-list li:last-child { border-bottom: 1px solid var(--rule); }

/* WORK */
.ft-work-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 56px;
  padding: 32px 0;
  border-top: 1px solid var(--rule);
}
.ft-work-item:last-child { border-bottom: 1px solid var(--rule); }
.ft-work-num {
  font-family: 'Newsreader', serif;
  font-style: italic;
  font-size: 32px;
  color: var(--accent);
  margin: 0 0 6px;
}
.ft-work-tag {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0;
}
.ft-work-title {
  font-family: 'Newsreader', serif;
  font-weight: 600;
  font-size: 30px;
  margin: 0 0 14px;
  line-height: 1.1;
}
.ft-work-body p { font-size: 16.5px; line-height: 1.6; margin: 0 0 16px; }
.ft-metric-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  font-size: 14.5px;
  color: var(--muted);
  font-family: 'Inter', sans-serif;
}
.ft-metric-list li { padding: 6px 0; border-top: 1px dotted var(--rule); }

/* PURSUING */
.ft-ledger {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}
.ft-ledger th {
  text-align: left;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--muted);
  padding: 12px 16px 12px 0;
  border-bottom: 2px solid var(--ink);
}
.ft-ledger td {
  padding: 18px 16px 18px 0;
  border-bottom: 1px solid var(--rule);
  vertical-align: top;
}
.ft-mono { font-family: 'JetBrains Mono', monospace; font-size: 13px; }

/* QUAL */
.ft-qual-list {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
}
.ft-qual-row {
  display: grid;
  grid-template-columns: 320px 1fr;
  padding: 14px 0;
  border-top: 1px solid var(--rule);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
}
.ft-qual-row:last-child { border-bottom: 1px solid var(--rule); }
.ft-qual-row dt { font-weight: 600; color: var(--ink); }
.ft-qual-row dd { margin: 0; color: var(--muted); }

/* PRINCIPALS */
.ft-principal { padding: 24px 0; border-top: 1px solid var(--rule); max-width: 760px; }
.ft-principal:last-child { border-bottom: 1px solid var(--rule); }
.ft-principal h3 {
  font-family: 'Newsreader', serif;
  font-size: 26px;
  font-weight: 600;
  margin: 0 0 4px;
}
.ft-principal-role {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 12px;
  font-weight: 500;
}
.ft-principal p:last-child { font-size: 16px; line-height: 1.6; margin: 0; }

/* CONTACT */
.ft-contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.ft-contact-label {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 8px;
  font-weight: 500;
}
.ft-contact-val {
  font-family: 'Newsreader', serif;
  font-size: 22px;
  margin: 0;
}
.ft-contact-note {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-style: italic;
  color: var(--muted);
  margin-top: 4px;
}

/* FOOTER */
.ft-footer {
  margin-top: 40px;
  padding: 0 64px 56px;
  max-width: 1200px;
  margin-inline: auto;
}
.ft-footer-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 24px;
  gap: 40px;
}
.ft-foot-note {
  font-family: 'Inter', sans-serif;
  font-size: 12.5px;
  color: var(--muted);
  margin: 8px 0 0;
  max-width: 560px;
  line-height: 1.5;
}
.ft-foot-links {
  display: flex;
  gap: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: var(--muted);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .ft-masthead { padding: 20px 24px 0; }
  .ft-open, .ft-case, .ft-capabilities, .ft-work, .ft-pursuing, .ft-qual, .ft-principals, .ft-contact, .ft-footer { padding-left: 24px; padding-right: 24px; }
  .ft-masthead-row { flex-direction: column; align-items: flex-start; gap: 6px; }
  .ft-nav { flex-wrap: wrap; gap: 18px; padding: 12px 0; justify-content: flex-start; }
  .ft-case-body { column-count: 1; }
  .ft-cap-grid { grid-template-columns: 1fr; gap: 32px; }
  .ft-work-item { grid-template-columns: 1fr; gap: 12px; padding: 24px 0; }
  .ft-qual-row { grid-template-columns: 1fr; gap: 4px; }
  .ft-contact-grid { grid-template-columns: 1fr; }
  .ft-footer-row { flex-direction: column; gap: 24px; }
  .ft-ledger { font-size: 12px; }
  .ft-ledger th, .ft-ledger td { padding-right: 8px; }
}
`
