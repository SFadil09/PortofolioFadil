import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import { projects } from '@/data/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <AnimatedSection className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to Projects
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection delay={0.05} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl leading-none">{project.icon}</span>
            <span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
            {project.title}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
        </AnimatedSection>

        {/* Technologies */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="bg-zinc-900/50 border border-white/[0.08] rounded-2xl p-6">
            <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-zinc-300 bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection delay={0.15} className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Project Overview</h2>
          <div className="text-zinc-400 leading-relaxed whitespace-pre-line text-[15px] space-y-4">
            {project.longDescription.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </AnimatedSection>

        {/* Highlights */}
        <AnimatedSection delay={0.2} className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5">Key Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-zinc-400">
                <span className="text-indigo-400 mt-0.5 flex-shrink-0 font-bold">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Footer nav */}
        <AnimatedSection delay={0.25}>
          <div className="flex flex-wrap gap-3 pt-6 border-t border-white/[0.06]">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.1] hover:border-white/[0.18] text-zinc-300 hover:text-white text-sm font-medium transition-all"
            >
              ← All Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20"
            >
              Discuss a Project →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
