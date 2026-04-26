'use client'

import { useRef } from 'react'

const inputClass =
  'w-full bg-zinc-900/60 border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/60 focus:bg-zinc-900 transition-colors'

const TO_EMAIL = 'satriawanfadil67@gmail.com'

export default function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const name = nameRef.current?.value.trim() ?? ''
    const email = emailRef.current?.value.trim() ?? ''
    const subject = subjectRef.current?.value.trim() || `New message from ${name}`
    const message = messageRef.current?.value.trim() ?? ''

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      message && `\n${message}`,
    ]
      .filter(Boolean)
      .join('\n')

    const mailto = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-xs text-zinc-500 leading-relaxed">
        For inquiries, please contact me directly via email or LinkedIn. Submitting this
        form will open your default email client.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-zinc-500 mb-1.5 font-medium uppercase tracking-wide">
            Name
          </label>
          <input ref={nameRef} type="text" name="name" placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-zinc-500 mb-1.5 font-medium uppercase tracking-wide">
            Email
          </label>
          <input ref={emailRef} type="email" name="email" placeholder="your@email.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-xs text-zinc-500 mb-1.5 font-medium uppercase tracking-wide">
          Subject
        </label>
        <input
          ref={subjectRef}
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
          ref={messageRef}
          name="message"
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 active:translate-y-0"
      >
        Send Message →
      </button>
    </form>
  )
}
