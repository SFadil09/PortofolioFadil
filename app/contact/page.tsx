import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ContactCards from '@/components/ContactCards'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Satriawan Muammar Fadil for project inquiries, freelance work, and collaboration opportunities.',
}

export default function Contact() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
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

        <AnimatedSection delay={0.1} className="flex flex-col items-center">
          <h2 className="text-lg font-semibold text-white mb-8 text-center">Get in Touch</h2>
          <ContactCards />
        </AnimatedSection>
      </div>
    </main>
  )
}

