import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Satriawan Muammar Fadil – IoT & Automation Engineer',
  description:
    'Portfolio of Satriawan Muammar Fadil, an IoT & Automation Engineer and Electrical Engineering graduate based in Yogyakarta, Indonesia.',
}

const stats = [
  { value: '3.52', label: 'GPA', unit: '/ 4.00' },
  { value: '3+', label: 'Years', unit: 'Experience' },
  { value: '3', label: 'Core', unit: 'Projects' },
  { value: '2', label: 'Industries', unit: 'Served' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(99,102,241,0.14),transparent)]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-60" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8 select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for Work
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-4">
            Satriawan
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Muammar Fadil
            </span>
          </h1>

          {/* Role */}
          <p className="text-base md:text-lg text-zinc-400 font-medium mb-5 tracking-wide">
            IoT &amp; Automation Engineer · Electrical Engineering Graduate
          </p>

          {/* Summary */}
          <p className="text-zinc-500 max-w-xl mx-auto mb-10 text-sm md:text-[15px] leading-relaxed">
            Building intelligent systems at the intersection of hardware and software.
            Specialized in industrial IoT, smart building infrastructure, and control systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Projects <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/[0.1] hover:border-white/[0.18] bg-white/[0.04] hover:bg-white/[0.07] text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 pointer-events-none">
          <span className="text-[10px] text-zinc-400 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-400 to-transparent" />
        </div>
      </section>

      {/* ── Stats ── */}
      <AnimatedSection className="px-6 border-y border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-6 text-center bg-zinc-900/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500">
                  {s.label}{' '}
                  <span className="text-zinc-600">{s.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Featured Projects ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-2">
                  Featured Work
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Recent Projects</h2>
              </div>
              <Link
                href="/projects"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                View all →
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative rounded-3xl p-10 md:p-14 overflow-hidden border border-white/[0.07]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Build Something
              </h2>
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed max-w-md mx-auto">
                Open to freelance projects and full-time roles in IoT, automation, and
                embedded systems engineering.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-0.5"
              >
                Start a Conversation →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
