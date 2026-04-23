import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Satriawan Muammar Fadil for project inquiries, freelance work, and collaboration opportunities.',
}

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'satriawanfadil67@gmail.com',
    href: 'mailto:satriawanfadil67@gmail.com',
    external: false,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/satriawanmf25',
    href: 'https://linkedin.com/in/satriawanmf25',
    external: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Yogyakarta, Indonesia',
    href: null,
    external: false,
  },
]

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Let&apos;s Work Together
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Have a project in mind or an opportunity to discuss? My inbox is always open —
            I&apos;ll respond within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left – Contact Info */}
          <AnimatedSection delay={0.1}>
            <h2 className="text-lg font-semibold text-white mb-6">Get in Touch</h2>

            <div className="space-y-3 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-white/[0.07] rounded-xl hover:border-white/[0.12] transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-[11px] text-zinc-500 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-zinc-300 hover:text-indigo-400 transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-zinc-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 p-6">
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
                  Open to freelance projects, full-time positions, and interesting
                  collaborations in IoT, automation, and embedded systems.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right – Form */}
          <AnimatedSection delay={0.15}>
            <h2 className="text-lg font-semibold text-white mb-6">Send a Message</h2>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </main>
  )
}
