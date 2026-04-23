import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Portfolio of IoT, automation, robotics, and control systems engineering projects by Satriawan Muammar Fadil.',
}

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Projects
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            A collection of engineering projects spanning IoT, automation, robotics, and
            control systems — built in real-world and academic environments.
          </p>
        </AnimatedSection>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* More coming soon */}
        <AnimatedSection delay={0.3} className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.07] bg-white/[0.03] text-zinc-500 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            More projects coming soon
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
