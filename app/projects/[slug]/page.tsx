import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
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

        {/* Diagrams & Design Images */}
        {project.projectImages && (
          <AnimatedSection delay={0.25} className="mb-12 space-y-8">
            <h2 className="text-xl font-bold text-white">Technical Diagrams</h2>

            {project.projectImages.blockDiagram && (
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                  Control System Block Diagram
                </h3>
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900/50">
                  <Image
                    src={project.projectImages.blockDiagram}
                    alt="Control System Block Diagram"
                    width={900}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            )}

            {project.projectImages.wiring && (
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                  System Wiring Diagram
                </h3>
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900/50">
                  <Image
                    src={project.projectImages.wiring}
                    alt="System Wiring Diagram"
                    width={900}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            )}

            {project.projectImages.design3D && (
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                  Mechanical Design (3D Model)
                </h3>
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900/50">
                  <Image
                    src={project.projectImages.design3D}
                    alt="Mechanical Design (3D Model)"
                    width={900}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            )}

            {project.projectImages.commsDiagram && (
              <div>
                <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                  System Communication Diagram
                </h3>
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900/50">
                  <Image
                    src={project.projectImages.commsDiagram.src}
                    alt={project.projectImages.commsDiagram.alt}
                    width={900}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {project.projectImages.commsDiagram.caption && (
                  <p className="text-xs text-zinc-500 mt-3 text-center leading-relaxed">
                    {project.projectImages.commsDiagram.caption}
                  </p>
                )}
              </div>
            )}
          </AnimatedSection>
        )}

        {/* HKI Certificate */}
        {project.certificate && (
          <AnimatedSection delay={0.3} className="mb-12">
            <h2 className="text-xl font-bold text-white mb-5">Intellectual Property (HKI)</h2>
            <div className="bg-zinc-900/50 border border-white/[0.08] rounded-2xl overflow-hidden">
              {project.certificate.preview && (
                <div className="relative w-full border-b border-white/[0.06]">
                  <Image
                    src={project.certificate.preview}
                    alt={project.certificate.title}
                    width={900}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}              <div className="p-6">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {project.certificate.title}
                    </h3>
                    <p className="text-xs text-indigo-400 mt-1">{project.certificate.issuer}</p>
                  </div>
                  <span className="text-[11px] font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full flex-shrink-0">
                    {project.certificate.year}
                  </span>
                </div>
                {project.certificate.description && (
                  <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                    {project.certificate.description}
                  </p>
                )}
                {project.certificate.file && (
                  <a
                    href={project.certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5"
                  >
                    View Certificate ↗
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        )}

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
