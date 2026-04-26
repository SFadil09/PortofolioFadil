'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative flex flex-col bg-zinc-900/60 border border-white/[0.07] rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-colors duration-300"
    >
      {/* Top shimmer on hover */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Cover image */}

      <div className="flex flex-col flex-1 p-6">
        {/* Icon + Category */}
        <div className="flex items-start justify-between mb-5">
          <div className="text-3xl leading-none">{project.icon}</div>
          <span className="text-[11px] font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white mb-2 leading-snug group-hover:text-indigo-300 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-zinc-400 bg-white/[0.05] border border-white/[0.07] px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] text-zinc-500 px-2.5 py-0.5">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors group/link"
        >
          View Details
          <span className="group-hover/link:translate-x-1 transition-transform duration-200">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  )
}
