'use client'

import { useState } from 'react'

const EMAIL = 'satriawanfadil67@gmail.com'

const cards = [
  {
    id: 'email',
    icon: '📧',
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    copyable: true,
  },
  {
    id: 'linkedin',
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/satriawanmf25',
    href: 'https://linkedin.com/in/satriawanmf25',
    external: true,
    copyable: false,
  },
  {
    id: 'location',
    icon: '📍',
    label: 'Location',
    value: 'Yogyakarta, Indonesia',
    href: null,
    external: false,
    copyable: false,
  },
]

export default function ContactCards() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex flex-col items-center gap-8">
      {/* 2×2 grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center gap-4 p-5 bg-zinc-900/50 border border-white/[0.07] rounded-xl hover:border-indigo-500/40 hover:bg-zinc-900/80 hover:scale-[1.02] transition-all duration-200"
          >
            <span className="text-2xl flex-shrink-0">{card.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-zinc-500 uppercase tracking-wide mb-0.5">
                {card.label}
              </p>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="text-sm text-zinc-300 hover:text-indigo-400 transition-colors truncate block"
                >
                  {card.value}
                </a>
              ) : (
                <p className="text-sm text-zinc-300 truncate">{card.value}</p>
              )}
            </div>
            {card.copyable && (
              <button
                onClick={copyEmail}
                title="Copy email"
                className="flex-shrink-0 text-zinc-500 hover:text-indigo-400 transition-colors ml-1"
              >
                {copied ? (
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                )}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Download CV */}
      <a
        href="/cv-fadil.pdf"
        download
        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5 active:translate-y-0"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download CV
      </a>

      {/* Availability */}
      <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 p-6 w-full max-w-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 to-violet-500/5" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-semibold text-white">Currently Available</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Open to freelance projects, full-time positions, and collaborations in IoT,
            smart building systems, automation, and embedded systems.
          </p>
        </div>
      </div>
    </div>
  )
}
