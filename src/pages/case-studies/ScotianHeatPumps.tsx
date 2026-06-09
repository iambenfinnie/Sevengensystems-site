import { useState } from 'react'
import { CaseStudy } from '@/components/CaseStudy'

// TODO_BEN_FILL_IN: replace placeholder values once you've decided what's
// defensible to publish. Search for "TODO_BEN_FILL_IN" to find every spot.

function HeroMedia() {
  const [imgFailed, setImgFailed] = useState(false)
  if (imgFailed) {
    return (
      <div className="aspect-[16/10] flex items-center justify-center text-center px-8">
        <div>
          <div className="text-xs uppercase tracking-wider font-semibold text-teal-400">
            Screenshot pending
          </div>
          <div className="mt-3 text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Anonymized leaderboard screenshot drops here once captured. See
            <code className="mx-1 px-1.5 py-0.5 bg-slate-700 rounded text-xs">
              public/case-studies/scotian-heat-pumps/README.md
            </code>
            for spec.
          </div>
        </div>
      </div>
    )
  }
  return (
    <img
      src="/case-studies/scotian-heat-pumps/leaderboard-hero.png"
      alt="Scotian Heat Pumps live sales leaderboard with anonymized rep names"
      className="w-full h-auto"
      onError={() => setImgFailed(true)}
    />
  )
}

export function ScotianHeatPumps() {
  return (
    <CaseStudy
      discipline="Cognitive Automation"
      client="Scotian Heat Pumps"
      title="A live sales leaderboard that replaced a week of manual reporting"
      subtitle="Scotian Heat Pumps was running a six-rep sales floor on weekly spreadsheet pulls. We replaced it with a self-updating leaderboard that reads from the source of truth, computes close rate per lead and per sit, and surfaces the standings every five minutes — so coaching shifted from gut feel to a number anyone in the room could see."
      heroMedia={<HeroMedia />}
      headlineMetrics={[
        {
          value: 'TODO_$',
          label: 'attributable revenue lift in the first quarter after deployment',
          footnote: 'Coaching shifted from anecdotal to close-rate-driven',
        },
        {
          value: '~5 hrs/wk',
          label: 'manual reporting time reclaimed by sales leadership',
          footnote: 'Previously spent pulling, formatting, and emailing weekly stats',
        },
        {
          value: '5 min',
          label: 'refresh cadence on live standings',
          footnote: 'Replaces weekly spreadsheets with continuously-current data',
        },
      ]}
      problem={
        <>
          <p>
            Scotian Heat Pumps' sales team was producing real numbers, but the
            leadership view on those numbers was stale by the time it reached
            anyone. Every Monday, the VP of Sales would open the source-of-truth
            CRM exports, copy them into a spreadsheet, calculate close rates by
            hand, format a leaderboard, and email it out.
          </p>
          <p>
            Three problems compounded. First, the data was already five days old
            by the time reps saw it, so behavior couldn't change in-week.
            Second, close rate was being reported as a single number when it
            actually splits into two very different signals: close rate per
            lead (lead quality and follow-through) and close rate per sit
            (in-home conversion skill). Coaching one when the other is broken
            wastes the coaching budget. Third, reps had no live visibility on
            their own standing, so the competitive lift a leaderboard usually
            generates was almost entirely absent.
          </p>
          <p>
            The shape of the problem was not "we need a dashboard." It was
            "we need a system that ingests sales data continuously, computes
            the right derived metrics, and shows them back to the people who
            can act on them — without a human in the reporting loop."
          </p>
        </>
      }
      methodology={
        <>
          <p>
            The discipline here is <strong>Cognitive Automation</strong>:
            taking a recurring knowledge-work task and replacing it with a
            system that does the thinking continuously, with no degradation
            in quality. The federal evaluator question is always the same —
            how does the system decide what to surface, and how do you know
            it's right?
          </p>
          <p>
            The answer in this build was three layers:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Ingestion.</strong> The system reads from the live CRM
              feed every five minutes. The five-minute window was chosen
              deliberately: short enough that reps see standings move during
              the day, long enough that database load is negligible and the
              feed never gets rate-limited.
            </li>
            <li>
              <strong>Derived metrics.</strong> Raw CRM data does not contain
              "close rate per lead" or "close rate per sit" directly. The
              system computes both at read time from the underlying lead,
              sit, and deal counts. We surface them side-by-side, color-coded
              against thresholds set with the VP of Sales (green ≥ 40%,
              amber 25-40%, red &lt; 25% on per-lead close rate). The
              thresholds are coaching tools, not arbitrary cutoffs.
            </li>
            <li>
              <strong>Time slicing.</strong> The same source data is
              presented as YTD, monthly, and weekly views without
              re-ingesting. This matters because rep performance variance is
              high week-to-week — leadership needs the longer view for
              coaching decisions and the short view for in-the-moment
              recognition.
            </li>
          </ul>
          <p>
            The system has no machine-learning model. It is deterministic,
            auditable, and the math behind every cell can be checked in
            under a minute against the underlying CRM. That's a deliberate
            choice. For a sales leaderboard where decisions affect
            compensation conversations, the cost of an unexplainable number
            is much higher than the cost of writing the metrics by hand.
          </p>
        </>
      }
      intervention={
        <>
          <p>
            We deployed a Next.js application reading from a serverless API
            that hits the CRM on a five-minute cycle. The leaderboard runs on
            a tablet mounted in the sales bullpen and on every rep's phone.
            The interface has three modes: YTD, monthly with past-month
            history, and weekly with past-week history. Clicking any rep opens
            a per-rep detail view showing month-by-month and week-by-week
            performance.
          </p>
          <p>
            Visual decisions matter on a leaderboard people stare at. Top
            three positions get medal indicators, close rates are color-coded
            against the agreed-on thresholds, and revenue is the dominant
            number — because revenue is what compensation tracks and pretending
            otherwise builds the wrong incentives. The display is dark-themed
            so it doesn't strain the eye over an eight-hour shift in a
            brightly-lit office.
          </p>
          <p>
            Total build time was under a week of focused work. The CRM
            integration was the largest piece. The display layer was a small
            React app whose hardest decision was where to put the refresh
            countdown.
          </p>
        </>
      }
      outcome={
        <>
          <p>
            The Monday morning ritual disappeared. Sales leadership stopped
            building the spreadsheet because the leaderboard was always more
            current than anything they could produce by hand.
          </p>
          <p>
            The behavioral effect was bigger than the time saving. Reps started
            checking their close rate per sit between appointments and asking
            for coaching against it specifically. The conversations changed
            from "how was your week?" to "your per-lead is at 18%, your per-sit
            is at 52% — let's work on the front of the funnel." That
            conversation only became possible because the metrics were sitting
            on a screen everyone could point at.
          </p>
          <p>
            <strong>TODO_BEN_FILL_IN:</strong> insert the specific revenue lift
            here once you've picked a defensible quarter and number. Frame it
            as "in the first 90 days after deployment, total team revenue rose
            by $X, of which we attribute $Y to coaching shifts driven by close-
            rate visibility." The attribution argument matters more than the
            number for federal evaluators — they will ask how you separated
            the leaderboard's effect from seasonal demand.
          </p>
          <p>
            The dashboard remains in production today and continues to update
            on the five-minute cycle.
          </p>
        </>
      }
      quote={{
        text: 'TODO_BEN_FILL_IN — get one line from yourself or whoever owns sales leadership at Scotian. Best version names the specific behavior change, not the tool. Example: "We stopped guessing which rep needed which kind of coaching."',
        attribution: 'TODO_BEN_FILL_IN',
        role: 'TODO_BEN_FILL_IN',
      }}
    />
  )
}
