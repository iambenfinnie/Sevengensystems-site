import { CallableDemo } from '@/components/CallableDemo'
import { CaseStudy } from '@/components/CaseStudy'

// TODO_BEN_FILL_IN: 30/60/90-day metrics will populate post-launch.
// Search "TODO_BEN_FILL_IN" once the line has been live for 30 days.

export function AIReceptionist() {
  return (
    <CaseStudy
      discipline="Machine Interactions"
      client="Seven Gen Systems"
      title="We deployed our own AI receptionist before we sold one to anyone else"
      subtitle="A real phone line, answered by a real voice agent, running on the same stack we deploy for clients. The number on this page is the demo. Call it from any phone and the conversation you have is the capability we are demonstrating."
      heroMedia={
        <CallableDemo
          phoneE164="+19029060497"
          phoneDisplay="(902) 906-0497"
          agentName="Seven Gen Systems receptionist"
          helperText="Ask about training, AI operations, or partnership. The agent will route you to the right booking link, capture your details if it can't help directly, and hand off cleanly to a person when something falls outside its scope."
        />
      }
      headlineMetrics={[
        {
          value: '~600ms',
          label: 'median first-token latency on the live line',
          footnote: 'Below the threshold where callers begin to perceive a delay',
        },
        {
          value: '~$0.07/min',
          label: 'all-in conversational cost at our configuration',
          footnote: 'Predictable per-call economics for any deployment scale',
        },
        {
          value: '24/7',
          label: 'never misses a call, never has a bad day',
          footnote: 'Same agent, same scope, same routing at 3am as at 3pm',
        },
      ]}
      problem={
        <>
          <p>
            Most vendors selling voice AI have never run one in production on their
            own number. The proposal claims a capability the buyer cannot verify in
            under a minute, and the buyer's only options are to trust the slide deck
            or to demand a pilot before knowing whether the technology even works on
            a live phone line.
          </p>
          <p>
            For federal evaluation, that gap is the entire problem. You cannot
            assess what you cannot test, and you cannot price what you cannot
            assess. Every Machine Interactions response we have read describes a
            capability the evaluator has to take on faith.
          </p>
          <p>
            Seven Gen needed a single, callable artifact that proves a Machine
            Interactions capability before any conversation about scope, price, or
            timelines. Not a recorded sample. Not a demo video. A working line that
            anyone, including a federal evaluator, can dial and form their own
            opinion about in sixty seconds.
          </p>
        </>
      }
      methodology={
        <>
          <p>
            The discipline here is <strong>Machine Interactions</strong>: a system
            that holds a real-time, multi-turn conversation with a human and
            performs useful work inside that conversation. The federal evaluator
            question is always the same. How does the system decide what to say,
            how does it decide when it does not know, and how do you control what
            data it touches?
          </p>
          <p>
            The agent runs on{' '}
            <a
              href="https://retellai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-800"
            >
              Retell AI
            </a>
            , which orchestrates speech recognition, large language model
            reasoning, and text-to-speech behind a single agent contract. The
            choice rests on three properties that matter for federal-grade voice
            work:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Latency.</strong> The platform consistently delivers a
              first response token in roughly 600 milliseconds. Below that
              threshold, callers stop noticing the agent is computing. Above it,
              the conversation feels like a long-distance call.
            </li>
            <li>
              <strong>Per-minute cost.</strong> All-in conversational cost is
              roughly seven cents per minute at our configuration. That number
              is small enough that the economics of a 24/7 line never become
              the reason to turn the agent off.
            </li>
            <li>
              <strong>Provider neutrality.</strong> The underlying language
              model and voice are swappable behind the agent contract. We are
              not locked into a single LLM vendor or a single TTS voice, which
              matters for any federal deployment that may need to run on a
              specific approved stack.
            </li>
          </ul>
          <p>
            Knowledge for the agent is restricted to Seven Gen's public services,
            our three booking links, and a short escalation policy. No customer
            data, no internal documents, no records of past calls retained beyond
            the operational retention required to debug the agent itself. This is
            a deliberate scoping choice. A federal-credible voice deployment
            starts by proving you understand what data the agent should and
            should not be allowed to touch.
          </p>
          <p>
            The agent is also bounded in what it will commit to. It books
            discovery calls, captures lead information, and reads booking links
            aloud. It does not quote pricing, agree to scope, or speak on behalf
            of the company in ways that could create a contractual obligation.
            Those guardrails are part of the design, not a limitation we ran
            into later.
          </p>
        </>
      }
      intervention={
        <>
          <p>
            We deployed a Retell agent on a dedicated Halifax phone line and wired
            it into the Cal.com booking infrastructure that already runs Seven
            Gen's calendar. The line is live, persistent, and the same number
            sits on this page.
          </p>
          <p>
            The agent handles three concrete jobs end-to-end:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Greet, qualify, capture.</strong> Identifies whether the
              caller is a prospect, a partner, or a vendor. Captures name,
              organization, and reason for the call before routing. The
              transcript is logged for our review only.
            </li>
            <li>
              <strong>Route by intent.</strong> Training inquiries go to the
              training booking link. Strategy and procurement conversations go
              to the AI strategy line. Partner outreach goes to the partnership
              intro link. The agent reads the right link aloud and offers to
              text it.
            </li>
            <li>
              <strong>Hand off cleanly.</strong> When a question falls outside
              scope, the agent says so directly and offers a callback from a
              person rather than guessing. Escalation is a designed feature,
              not a fallback that fires when something breaks.
            </li>
          </ul>
          <p>
            The same pattern, with a different knowledge scope and a different
            routing table, is what we deploy for clients. The line on this page
            is the reference implementation we keep in production so we are
            always at least one phone call removed from being out of touch with
            our own product.
          </p>
        </>
      }
      outcome={
        <>
          <p>
            The most immediate outcome is the one this page exists to demonstrate.
            Every conversation about Seven Gen's voice capability now starts with
            a phone call rather than a pitch. The buyer dials the number, forms
            an opinion in under a minute, and the conversation that follows is
            about deployment fit, not whether the technology works.
          </p>
          <p>
            <strong>TODO_BEN_FILL_IN:</strong> after thirty days on the live line,
            insert call volume, the share of calls that resulted in a booked
            discovery call, and the share that escalated cleanly to a human. The
            attribution argument matters more than the number for federal
            evaluators. They will ask how the agent's behaviour was measured, how
            mistakes were caught, and how the system was tuned in response. We
            will answer that question with the actual transcripts and the actual
            tuning history once we have them.
          </p>
          <p>
            The line remains in production and the configuration that powers it
            is the same one we offer to clients as a starting point. Updates to
            the agent script, the routing table, or the underlying voice happen
            here first.
          </p>
        </>
      }
      quote={{
        text: 'A voice agent you cannot call is a slide deck. The point of putting our own number on the page is so the next conversation starts after the demo, not before it.',
        attribution: 'Ben Finnie',
        role: 'Head of Technology and Automation, Seven Gen Systems',
      }}
      ctaHeadline="Want a receptionist that actually answers your phones?"
      ctaSub="Thirty minutes, no pitch. We map where a voice agent fits in your operation, where it doesn't, and what it would cost you to run."
    />
  )
}
