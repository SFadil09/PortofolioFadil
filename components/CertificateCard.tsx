'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Certificate } from '@/data/certificates'

interface Props {
  certificate: Certificate
  index: number
}

export default function CertificateCard({ certificate, index }: Props) {
  const card = (
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

      {/* Certificate image preview */}
      {certificate.image ? (
        <div className="relative w-full h-40 overflow-hidden bg-zinc-800/60">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent" />
        </div>
      ) : (
        <div className="w-full h-24 flex items-center justify-center bg-indigo-500/5 border-b border-white/[0.05]">
          <span className="text-5xl leading-none opacity-60 group-hover:opacity-90 transition-opacity">
            {certificate.icon ?? '🏆'}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        {/* Year badge */}
        <div className="flex items-start justify-between mb-3">
          <span className="text-[11px] font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
            {certificate.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white mb-1 leading-snug group-hover:text-indigo-300 transition-colors duration-200">
          {certificate.title}
        </h3>

        {/* Issuer */}
        <p className="text-xs text-indigo-400/80 font-medium mb-3">{certificate.issuer}</p>

        {/* Description */}
        {certificate.description && (
          <p className="text-sm text-zinc-400 leading-relaxed flex-1">{certificate.description}</p>
        )}

        {/* Credential link */}
        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors mt-4 group/link"
          >
            View Certificate
            <span className="group-hover/link:translate-x-1 transition-transform duration-200">↗</span>
          </a>
        )}
      </div>
    </motion.div>
  )

  return card
}
