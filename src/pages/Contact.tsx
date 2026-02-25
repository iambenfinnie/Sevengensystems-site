import { useState, FormEvent } from 'react'

const EMPTY_FORM = { name: '', email: '', organization: '', message: '' }

export function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setStatus('success')
      setFormData(EMPTY_FORM)
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <div>

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Book a Free Discovery Call</h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Whether you need AI training for your team, guidance on where to start, or help
            implementing workflows — we're happy to hear from you. No pitch, just a conversation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8">

          <div className="mb-8 rounded-xl bg-white border border-slate-200 px-6 py-4 flex items-center gap-3">
            <span className="text-teal-600 font-semibold text-sm">Email us directly:</span>
            <a
              href="mailto:contact@sevengensystems.com"
              className="text-sm text-slate-600 hover:text-teal-600 transition-colors"
            >
              contact@sevengensystems.com
            </a>
          </div>

          {status === 'success' ? (
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-10 text-center">
              <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="mt-4 text-lg font-semibold text-teal-900">Message sent!</p>
              <p className="mt-2 text-sm text-teal-700">
                Thanks for reaching out. We'll be in touch soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-medium text-teal-700 underline hover:text-teal-900"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Send a message</h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Organization <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-lg bg-teal-600 text-white hover:bg-teal-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  )
}
