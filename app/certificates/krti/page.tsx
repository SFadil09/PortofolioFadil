import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import KRTISlider from '@/components/KRTISlider'

export const metadata: Metadata = {
  title: 'KRTI 2024 – Certificates & Achievements',
  description:
    'KRTI (Kontes Robot Terbang Indonesia) 2024 – Indonesian Flying Robot Contest participation certificate and documentation.',
}

export default function KRTIDetail() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <AnimatedSection className="mb-8">
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to Certificates
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={0.05} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl leading-none">🏆</span>
            <span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
              Competition
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
            KRTI (Kontes Robot Terbang Indonesia)
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Participated in the Indonesian Flying Robot Contest (KRTI), focusing on UAV system
            design, control systems, and mechanical integration.
          </p>
        </AnimatedSection>

        {/* Meta */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="bg-zinc-900/50 border border-white/[0.08] rounded-2xl p-6">
            <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">
              Event Details
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <span className="text-zinc-500 w-20 flex-shrink-0">Issuer</span>
                <span className="text-zinc-300">
                  Ministry of Education, Culture, Research, and Technology – Indonesia
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-zinc-500 w-20 flex-shrink-0">Year</span>
                <span className="text-zinc-300">2024</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <span className="text-zinc-500 w-20 flex-shrink-0">Category</span>
                <span className="text-zinc-300">UAV Fixed-Wing (Fixed Wing)</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Certificate image */}
        <AnimatedSection delay={0.15} className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Certificate</h2>
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900/50">
            <Image
              src="/krti-certificate.jpg"
              alt="KRTI 2024 Certificate"
              width={900}
              height={640}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="mt-4">
            <a
              href="/krti-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5"
            >
              View Certificate PDF ↗
            </a>
          </div>
        </AnimatedSection>

        {/* Documentation slider */}
        <AnimatedSection delay={0.2} className="mb-12">
          <KRTISlider />
        </AnimatedSection>

        {/* Footer nav */}
        <AnimatedSection delay={0.25}>
          <div className="flex flex-wrap gap-3 pt-6 border-t border-white/[0.06]">
            <Link
              href="/certificates"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.1] hover:border-white/[0.18] text-zinc-300 hover:text-white text-sm font-medium transition-all"
            >
              ← All Certificates
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20"
            >
              Get in Touch →
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </main>
  )
}
