import { useState } from 'react'

interface CallableDemoProps {
  phoneE164: string
  phoneDisplay: string
  agentName: string
  helperText?: string
}

export function CallableDemo({
  phoneE164,
  phoneDisplay,
  agentName,
  helperText = 'Call from any phone. Your conversation is the demo.',
}: CallableDemoProps) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneE164)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="p-8 sm:p-12">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
        </span>
        <span className="text-teal-300">Live demo</span>
        <span className="text-slate-500">·</span>
        <span className="text-slate-400">{agentName}</span>
      </div>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Direct line
          </p>
          <a
            href={`tel:${phoneE164}`}
            className="mt-3 block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white hover:text-teal-300 transition-colors"
          >
            {phoneDisplay}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`tel:${phoneE164}`}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg bg-teal-500 text-slate-900 hover:bg-teal-400 transition-colors sm:hidden"
          >
            Tap to call
          </a>
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-colors"
          >
            {copied ? (
              <>
                <CheckIcon /> Copied
              </>
            ) : (
              <>
                <CopyIcon /> Copy number
              </>
            )}
          </button>
        </div>
      </div>

      <p className="mt-8 text-sm text-slate-400 leading-relaxed max-w-2xl">{helperText}</p>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
