'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full bg-zinc-900/60 border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-zinc-900 transition-colors'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    // Simulate async send — replace with your preferred service (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1500))
    setState('success')
    setTimeout(() => setState('idle'), 5000)
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-16 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center">
        <span className="text-4xl">✅</span>
        <h3 className="text-white font-semibold text-lg">Message Sent!</h3>
        <p className="text-zinc-400 text-sm">I'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-zinc-500 mb-1.5 font-medium uppercase tracking-wide">
            Name
          </label>
          <input type="text" name="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-zinc-500 mb-1.5 font-medium uppercase tracking-wide">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-zinc-500 mb-1.5 font-medium uppercase tracking-wide">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Project inquiry, collaboration..."
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs text-zinc-500 mb-1.5 font-medium uppercase tracking-wide">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 active:translate-y-0"
      >
        {state === 'loading' ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message →'
        )}
      </button>
    </form>
  )
}
