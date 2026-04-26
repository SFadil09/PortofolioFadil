import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from '@/components/AnimatedSection'
import KRTISlider from '@/components/KRTISlider'

export const metadata: Metadata = {
  title: 'Certificates & Achievements',
  description:
    'A showcase of certifications, competitions, and recognitions by Satriawan Muammar Fadil.',
}

const certCards = [
  {
    slug: 'krti',
    title: 'KRTI (Kontes Robot Terbang Indonesia)',
    issuer: 'Ministry of Education, Culture, Research, and Technology – Indonesia',
    year: '2024',
    description:
      'Participated in the Indonesian Flying Robot Contest (KRTI), focusing on UAV system design, control systems, and mechanical integration.',
    image: '/krti-certificate.jpg',
    category: 'Competition',
  },
]

export default function Certificates() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <AnimatedSection className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-3">
            Credentials
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Certificates &amp; Achievements
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A showcase of certifications, competitions, and recognitions.
          </p>
        </AnimatedSection>

        {/* ── Cards Grid ── */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {certCards.map((cert, i) => (
            <AnimatedSection key={cert.slug} delay={i * 0.1}>
              <Link
                href={`/certificates/${cert.slug}`}
                className="group relative flex flex-col bg-zinc-900/60 border border-white/[0.07] rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-colors duration-300 h-full"
              >
                {/* Top shimmer */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                

                <div className="flex flex-col flex-1 p-5">
                  {/* Year + category */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[11px] font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                      {cert.year}
                    </span>
                    <span className="text-[11px] font-medium text-zinc-400 bg-white/[0.05] border border-white/[0.07] px-2.5 py-1 rounded-full">
                      {cert.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-1 leading-snug group-hover:text-indigo-300 transition-colors duration-200">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs text-indigo-400/80 font-medium mb-3">{cert.issuer}</p>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed flex-1">{cert.description}</p>

                  {/* CTA */}
                  <p className="inline-flex items-center gap-1.5 text-sm text-indigo-400 group-hover:text-indigo-300 font-medium transition-colors mt-4">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  )
}

