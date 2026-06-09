import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export function SevenGenerations() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.title = 'Seven Gen Systems · Seven Generations (preview)'

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('sg-revealed')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '-10% 0px', threshold: 0.05 }
    )

    for (const el of revealRefs.current) {
      if (el) io.observe(el)
    }

    return () => io.disconnect()
  }, [])

  const reveal = (i: number) => (el: HTMLElement | null) => {
    revealRefs.current[i] = el
  }

  return (
    <div className="seven-gen">
      <style>{styles}</style>

      {/* HEADER */}
      <header className="sg-header">
        <Link to="/" className="sg-brand" aria-label="Seven Gen Systems">
          <img src="/Seven Gen Leaf Logo.png" alt="" className="sg-leaf" />
          <span className="sg-wordmark">Seven Gen Systems</span>
        </Link>
        <nav className="sg-nav">
          <a href="#approach">Approach</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="sg-hero">
        <h1 className="sg-hero-title">
          Build it so the <em>seventh</em> generation thanks you.
        </h1>
        <p className="sg-hero-caption">
          A Haudenosaunee teaching that informs every system we ship, and the reason we built Seven Gen Systems.
        </p>
        <div className="sg-hero-bg" aria-hidden />
      </section>

      {/* THESIS */}
      <section className="sg-thesis" id="approach" ref={reveal(0)}>
        <p className="sg-eyebrow">Approach</p>
        <h2 className="sg-thesis-h">A long view of automation.</h2>
        <div className="sg-prose">
          <p>
            There is an old teaching among Haudenosaunee peoples: every important decision should consider its impact on the next seven generations. It was a way of weighing land, water, treaty, language, kinship. It is also, we think, the right way to weigh software.
          </p>
          <p>
            Most automation work is built to a calendar quarter. Vendor signs the contract, ships a workflow, hands off the documentation, and walks. The system runs for a while, then drifts, then quietly breaks. The customer pays again. The vendor calls it a renewal. Nobody is watching the seventh year, much less the seventh generation.
          </p>

          <blockquote className="sg-pullquote">
            We pick clients we expect to keep for a long time, and we write systems we expect them to inherit.
          </blockquote>

          <p>
            We are building Seven Gen Systems differently. We pick clients we expect to keep for a long time. We write systems we expect them to inherit, hand to a successor, and never have to rebuild from scratch. We document the operating decisions, not just the code. We write down what is brittle, what is load-bearing, what we would change if we were starting over.
          </p>
          <p>
            This is not a romantic posture. It is the only honest way to build automation for organizations that are themselves trying to last, whether that is a multi-truck heat pump dealer in Atlantic Canada, a federal department running an AI source list, or a small law firm whose missed calls cost cases. The systems should outlive the contract. The contract should be the smallest thing about the relationship.
          </p>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="sg-build" ref={reveal(1)}>
        <p className="sg-eyebrow">What we build</p>
        <h2 className="sg-section-h">Three commitments, written long.</h2>
        <div className="sg-build-grid">
          <article className="sg-build-item">
            <h3>Operating systems for small businesses.</h3>
            <p>
              We build internal operating platforms for owner-operated companies. Job and customer flow, AI-assisted phone reception, review automation, daily field dashboards, and the slow patient work of cleaning the data the business already generates. The deliverable is not a tool or a dashboard. It is the system the business runs on for the next decade.
            </p>
          </article>
          <article className="sg-build-item">
            <h3>Government-grade AI delivery.</h3>
            <p>
              We are an Indigenous-majority-owned AI firm registered to compete on federal procurement. We build to the AI Source List disciplines (Machine Interactions, Cognitive Automation, Insights and Predictive Modelling) and team with Indigenous primes and non-Indigenous primes who need an Indigenous AI partner of record. The work is real prime work, not pass-through.
            </p>
          </article>
          <article className="sg-build-item">
            <h3>Strategy and audits.</h3>
            <p>
              Before we recommend a build, we audit the operation. Where the calls are dropping, where the leads are leaking, where the sales process is spending a Saturday on something a workflow should be doing in a minute. Not every audit ends in a build. Some end with a one-page recommendation that costs nothing to implement. That is also the work.
            </p>
          </article>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="sg-work" id="work" ref={reveal(2)}>
        <p className="sg-eyebrow">Selected work</p>
        <h2 className="sg-section-h">Where the systems run.</h2>

        <article className="sg-work-card">
          <div className="sg-work-image sg-work-image-1" aria-hidden>
            <span className="sg-work-image-label">Atlantic Canada · Land clearing</span>
          </div>
          <div className="sg-work-text">
            <h3>Bush Busters</h3>
            <p>
              Two land clearing sites, two regional markets, one operating philosophy. Bush Busters runs heavy machines through forested cabin lots from Atlantic Canada to East Tennessee. We built and shipped the search infrastructure that turns Google searches in those markets into phone calls into booked jobs. Quiet work, but the kind that compounds.
            </p>
            <p className="sg-work-outcome">
              <em>Outcome:</em> a search and intake system the operator can run for a decade without touching us again, if it ever comes to that.
            </p>
          </div>
        </article>

        <article className="sg-work-card sg-work-flip">
          <div className="sg-work-image sg-work-image-2" aria-hidden>
            <span className="sg-work-image-label">Atlantic Canada · HVAC sales operations</span>
          </div>
          <div className="sg-work-text">
            <h3>Scotian Heat Pumps</h3>
            <p>
              A sales leaderboard for a multi-truck heat pump dealer in Nova Scotia. The kind of dashboard a sales manager wakes up to every morning, where the rep ordering improves on its own as the data flows. We are still iterating, and so are they. That is the right shape.
            </p>
            <p className="sg-work-outcome">
              <em>Outcome:</em> a daily decision surface that replaced a Monday morning spreadsheet and got better as the team trusted it.
            </p>
          </div>
        </article>

        <article className="sg-work-card">
          <div className="sg-work-image sg-work-image-3" aria-hidden>
            <span className="sg-work-image-label">A worked example · operating systems</span>
          </div>
          <div className="sg-work-text">
            <h3>The Bush Busters Operating System</h3>
            <p>
              What an operating system looks like when we build it: AI-assisted intake on the phone, a job board for the crew, an automatic quote generator from a photo of the lot, a review request engine, a weekly profitability report, and a single dashboard the owner reviews every Sunday with coffee. The point is not the components. The point is that they all live in one place, and the place keeps working when nobody is watching.
            </p>
            <p className="sg-work-outcome">
              <em>Outcome:</em> a small business that runs cleanly without any one person being the keeper of the spreadsheet.
            </p>
          </div>
        </article>
      </section>

      {/* WHY INDIGENOUS AI */}
      <section className="sg-why" ref={reveal(3)}>
        <p className="sg-eyebrow">Why Indigenous AI matters</p>
        <h2 className="sg-section-h">A different set of questions.</h2>
        <div className="sg-prose sg-prose-narrow">
          <p>
            The federal government has been buying technology to govern Indigenous people for as long as Canada has existed as a country. The pattern has been remarkably consistent. The institutional buyers and the institutional vendors have agreed on what good software looks like, and the institutional questions have been written by, and largely answered by, people whose ancestors were not here in 1492.
          </p>
          <blockquote className="sg-pullquote">
            The effect is at the level of the questions: what counts as success, what counts as a constraint, what counts as a generation, what counts as a community.
          </blockquote>
          <p>
            This has effects on how the software gets built. Not because non-Indigenous engineers cannot write a good database. They can. The effect is at the level of the questions: what counts as success, what counts as a constraint, what counts as a generation, what counts as a community. An AI firm that writes those questions from inside an Indigenous worldview is going to ship a different product. Not necessarily better on every benchmark, but different on the benchmarks that matter to people who plan in centuries.
          </p>
          <p>
            Seven Gen Systems exists to make that point with code. Quietly, professionally, on real budgets, against real solicitations. The point is the work.
          </p>
        </div>
      </section>

      {/* PRINCIPALS */}
      <section className="sg-principals" ref={reveal(4)}>
        <p className="sg-eyebrow">Principals</p>
        <h2 className="sg-section-h">Who you are working with.</h2>
        <div className="sg-principal-grid">
          <article>
            <h3>Robert Maclean</h3>
            <p className="sg-principal-role">Co-Founder &amp; Chief Executive Officer</p>
            <p>
              Robert is the institutional spine of Seven Gen. He runs commercial relationships and small business delivery, and he holds the controlling interest required by the Indigenous Business Directory. The shareholders agreement places final decision authority with Robert. We think this is the right way for an Indigenous firm to be structured, and we like that the federal government agrees.
            </p>
          </article>
          <article>
            <h3>Benjamin Finnie</h3>
            <p className="sg-principal-role">Co-Founder &amp; Head of Technology and Automation</p>
            <p>
              Ben runs technology, automation, and federal business development. He sells, he ships, and he reads the procurement notices on Sunday mornings the way other people read the sports section. Before Seven Gen, he sold heat pumps and solar and security door to door, and he is unembarrassed by it.
            </p>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sg-contact" id="contact" ref={reveal(5)}>
        <p className="sg-eyebrow">Get in touch</p>
        <h2 className="sg-contact-h">If you are building something you would like to last, write to us.</h2>
        <div className="sg-contact-lines">
          <a href="mailto:ben@sevengensystems.com" className="sg-contact-line">ben@sevengensystems.com</a>
          <a href="https://cal.com/ben-finnie/intro" target="_blank" rel="noreferrer" className="sg-contact-line">cal.com/ben-finnie/intro</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="sg-footer">
        <div className="sg-footer-inner">
          <div className="sg-footer-brand">
            <img src="/Seven Gen Leaf Logo.png" alt="" className="sg-leaf-small" />
            <span>Seven Gen Systems</span>
          </div>
          <div className="sg-footer-meta">
            <p>Indigenous-majority-owned. Built for the long view.</p>
            <p>Incorporated in Alberta · IBD active · CCIB certified · GST/BN 707060166</p>
            <p>© 2026 Seven Gen Systems Ltd.</p>
          </div>
          <div className="sg-footer-links">
            <Link to="/preview">all directions</Link>
            <Link to="/">current site</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const styles = `
.seven-gen {
  --paper: oklch(95.5% 0.022 88);
  --paper-warm: oklch(93% 0.028 80);
  --moss: oklch(28% 0.05 145);
  --moss-deep: oklch(22% 0.04 145);
  --ink: oklch(20% 0.02 145);
  --ink-muted: oklch(40% 0.025 145);
  --terracotta: oklch(58% 0.13 38);
  --terracotta-deep: oklch(45% 0.13 38);
  --rule: oklch(82% 0.025 88);

  background: var(--paper);
  color: var(--ink);
  font-family: 'Newsreader', Georgia, serif;
  font-feature-settings: 'kern', 'liga';
  min-height: 100vh;
}
.seven-gen * { box-sizing: border-box; }
.seven-gen a { color: inherit; text-decoration: none; transition: opacity 240ms; }
.seven-gen a:hover { opacity: 0.65; }

/* HEADER */
.sg-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 64px;
  position: sticky;
  top: 0;
  background: var(--paper);
  z-index: 10;
  border-bottom: 1px solid var(--rule);
}
.sg-brand { display: inline-flex; align-items: center; gap: 12px; }
.sg-leaf { height: 36px; width: auto; }
.sg-wordmark {
  font-family: 'Newsreader', serif;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.005em;
  color: var(--moss);
}
.sg-nav { display: flex; gap: 36px; font-family: 'Inter', sans-serif; font-size: 13px; letter-spacing: 0.4px; color: var(--ink-muted); font-weight: 500; }

/* HERO */
.sg-hero {
  position: relative;
  padding: 14vh 64px 16vh;
  max-width: 1320px;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
}
.sg-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 80% at 50% 10%, oklch(94% 0.04 90 / 0.7), transparent 65%),
    radial-gradient(ellipse 40% 50% at 85% 90%, oklch(70% 0.12 38 / 0.18), transparent 70%);
  z-index: 0;
  pointer-events: none;
}
.sg-hero-title, .sg-hero-caption { position: relative; z-index: 1; }
.sg-hero-title {
  font-family: 'Newsreader', serif;
  font-size: clamp(48px, 9vw, 132px);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.028em;
  color: var(--moss-deep);
  margin: 0 auto 36px;
  max-width: 14ch;
}
.sg-hero-title em {
  font-style: italic;
  color: var(--terracotta-deep);
}
.sg-hero-caption {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.55;
  color: var(--ink-muted);
  max-width: 540px;
  margin: 0 auto;
  letter-spacing: 0.1px;
}

/* SECTIONS */
.sg-thesis, .sg-build, .sg-work, .sg-why, .sg-principals, .sg-contact {
  padding: 12vh 64px;
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
}
.sg-revealed { opacity: 1 !important; transform: none !important; }

.sg-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: var(--terracotta-deep);
  margin: 0 0 18px;
  font-weight: 600;
}
.sg-thesis-h, .sg-section-h, .sg-contact-h {
  font-family: 'Newsreader', serif;
  font-weight: 400;
  font-size: clamp(36px, 5vw, 64px);
  line-height: 1.04;
  letter-spacing: -0.018em;
  color: var(--moss-deep);
  margin: 0 0 48px;
  max-width: 16ch;
}

/* PROSE */
.sg-prose {
  max-width: 700px;
  font-size: 19px;
  line-height: 1.62;
  color: var(--ink);
}
.sg-prose p { margin: 0 0 26px; }
.sg-prose-narrow { max-width: 660px; }

.sg-pullquote {
  font-family: 'Newsreader', serif;
  font-style: italic;
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.25;
  color: var(--terracotta-deep);
  margin: 40px 0 40px -1.2em;
  padding-left: 1.2em;
  border-left: 2px solid var(--terracotta);
  max-width: 22ch;
}

/* BUILD */
.sg-build-grid {
  display: grid;
  gap: 64px;
  max-width: 720px;
}
.sg-build-item h3 {
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-style: italic;
  font-size: 28px;
  line-height: 1.15;
  margin: 0 0 14px;
  color: var(--moss);
}
.sg-build-item p {
  font-size: 17.5px;
  line-height: 1.62;
  margin: 0;
  color: var(--ink);
}

/* WORK */
.sg-work-card {
  display: grid;
  grid-template-columns: 0.95fr 1fr;
  gap: 56px;
  align-items: center;
  margin-bottom: 96px;
}
.sg-work-flip { grid-template-columns: 1fr 0.95fr; }
.sg-work-flip .sg-work-image { order: 2; }
.sg-work-flip .sg-work-text { order: 1; }
.sg-work-image {
  aspect-ratio: 4 / 5;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 24px;
}
.sg-work-image-1 {
  background:
    linear-gradient(180deg, oklch(38% 0.05 145 / 0.0) 30%, oklch(20% 0.04 145 / 0.7) 100%),
    radial-gradient(ellipse 70% 60% at 30% 30%, oklch(55% 0.08 145), oklch(28% 0.05 145)),
    oklch(28% 0.05 145);
}
.sg-work-image-2 {
  background:
    linear-gradient(180deg, transparent 30%, oklch(28% 0.05 145 / 0.6) 100%),
    radial-gradient(ellipse 80% 70% at 70% 40%, oklch(65% 0.13 38 / 0.5), oklch(35% 0.05 145) 65%),
    oklch(28% 0.05 145);
}
.sg-work-image-3 {
  background:
    linear-gradient(180deg, transparent 35%, oklch(22% 0.04 145 / 0.65) 100%),
    radial-gradient(ellipse 60% 50% at 40% 70%, oklch(48% 0.06 145), oklch(24% 0.04 145)),
    oklch(24% 0.04 145);
}
.sg-work-image-label {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: oklch(94% 0.018 90);
  font-weight: 500;
}
.sg-work-text h3 {
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-size: clamp(28px, 3.4vw, 44px);
  line-height: 1.05;
  letter-spacing: -0.015em;
  color: var(--moss-deep);
  margin: 0 0 20px;
}
.sg-work-text p {
  font-size: 17px;
  line-height: 1.62;
  margin: 0 0 18px;
}
.sg-work-outcome {
  font-size: 15px !important;
  color: var(--ink-muted);
  border-top: 1px solid var(--rule);
  padding-top: 16px;
  margin-top: 18px !important;
}
.sg-work-outcome em { color: var(--terracotta-deep); font-style: italic; }

/* CONTACT */
.sg-contact { text-align: center; padding-bottom: 16vh; }
.sg-contact-h {
  margin-inline: auto;
  max-width: 24ch;
  margin-bottom: 56px;
}
.sg-contact-lines {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}
.sg-contact-line {
  font-family: 'Newsreader', serif;
  font-style: italic;
  font-size: clamp(20px, 2.4vw, 28px);
  color: var(--terracotta-deep);
  border-bottom: 1px solid var(--terracotta);
  padding-bottom: 2px;
}

/* PRINCIPALS */
.sg-principal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  max-width: 1000px;
}
.sg-principal-grid h3 {
  font-family: 'Newsreader', serif;
  font-weight: 500;
  font-size: 28px;
  margin: 0 0 4px;
  color: var(--moss-deep);
}
.sg-principal-role {
  font-family: 'Inter', sans-serif;
  font-size: 11.5px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--terracotta-deep);
  margin: 0 0 16px;
  font-weight: 600;
}
.sg-principal-grid p { font-size: 16px; line-height: 1.6; margin: 0; }

/* FOOTER */
.sg-footer {
  border-top: 1px solid var(--rule);
  padding: 56px 64px;
  background: var(--paper-warm);
}
.sg-footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.sg-footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Newsreader', serif;
  font-size: 18px;
  color: var(--moss);
}
.sg-leaf-small { height: 28px; width: auto; }
.sg-footer-meta { font-family: 'Inter', sans-serif; font-size: 12.5px; color: var(--ink-muted); line-height: 1.55; max-width: 380px; }
.sg-footer-meta p { margin: 0 0 4px; }
.sg-footer-links { display: flex; gap: 20px; font-family: 'Inter', sans-serif; font-size: 13px; }

/* RESPONSIVE */
@media (max-width: 900px) {
  .sg-header, .sg-thesis, .sg-build, .sg-work, .sg-why, .sg-principals, .sg-contact, .sg-hero, .sg-footer { padding-left: 24px; padding-right: 24px; }
  .sg-nav { gap: 18px; font-size: 12px; }
  .sg-work-card { grid-template-columns: 1fr; gap: 28px; margin-bottom: 64px; }
  .sg-work-flip .sg-work-image { order: 0; }
  .sg-work-flip .sg-work-text { order: 0; }
  .sg-work-image { aspect-ratio: 5 / 4; }
  .sg-principal-grid { grid-template-columns: 1fr; gap: 40px; }
  .sg-pullquote { margin-left: 0; }
}
@media (max-width: 600px) {
  .sg-wordmark { font-size: 17px; }
  .sg-nav a { font-size: 11.5px; }
}
`
