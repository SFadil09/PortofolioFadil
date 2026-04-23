import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { experiences } from '@/data/experience'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Work experience and professional background of Satriawan Muammar Fadil – IoT engineer, lab assistant, UAV team lead.',
}

const typeBadge: Record<string, string> = {
  work: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  organization: 'text-violet-400 bg-violet-500/10 border-violet-500/25',
}

const typeLabel: Record<string, string> = {
  work: 'Work',
  organization: 'Organization',
}

export default function Experience() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-3">
            Career Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Experience
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A timeline of my professional journey — from lab assistant to IoT engineer.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-white/[0.07] to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.id} delay={i * 0.07}>
                <div className="relative pl-11">
                  {/* Dot */}
                  <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-indigo-500/50 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>

                  {/* Card */}
                  <div className="bg-zinc-900/50 border border-white/[0.07] rounded-2xl p-5 hover:border-white/[0.12] transition-colors">
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-semibold leading-snug">{exp.role}</h3>
                        <p className="text-indigo-400 text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span
                          className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${typeBadge[exp.type]}`}
                        >
                          {typeLabel[exp.type]}
                        </span>
                        <span className="text-[11px] text-zinc-500 tabular-nums">{exp.period}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-xs text-zinc-500 mb-3 flex items-center gap-1">
                      <span>📍</span> {exp.location}
                    </p>

                    {/* Description */}
                    <ul className="space-y-1.5">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-sm text-zinc-400 flex items-start gap-2">
                          <span className="text-indigo-400/70 mt-[3px] flex-shrink-0">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
