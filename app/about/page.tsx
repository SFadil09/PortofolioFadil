import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Satriawan Muammar Fadil – Electrical Engineering graduate, IoT engineer, and automation specialist based in Yogyakarta, Indonesia.',
}

const technicalSkills = [
  {
    category: 'Software',
    items: ['MATLAB', 'Proteus', 'SolidWorks', 'Microsoft Office'],
  },
  {
    category: 'Programming',
    items: ['C/C++', 'C#', 'Python', 'MicroPython'],
  },
  {
    category: 'Engineering',
    items: ['IoT Systems', 'PCB Design', '3D Design', 'PID Control'],
  },
  {
    category: 'Protocols & Standards',
    items: ['LoRaWAN', 'BACnet', 'Modbus RTU/TCP', 'MQTT'],
  },
]

const softSkills = [
  'Problem Solving',
  'Team Leadership',
  'Project Planning & Scheduling',
  'Communication',
  'Data Analysis',
  'Technical Documentation',
]

const contactItems = [
  { icon: '📍', label: 'Location', value: 'Yogyakarta, Indonesia', href: null },
  {
    icon: '📧',
    label: 'Email',
    value: 'satriawanfadil67@gmail.com',
    href: 'mailto:satriawanfadil67@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/satriawanmf25',
    href: 'https://linkedin.com/in/satriawanmf25',
  },
]

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Engineer. Problem Solver.{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Builder.
            </span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            I&apos;m Satriawan Muammar Fadil, an Electrical Engineering graduate passionate
            about building intelligent systems that bridge the physical and digital worlds.
          </p>
        </AnimatedSection>

        {/* Profile Card */}
        <AnimatedSection delay={0.1} className="mb-14">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Avatar */}
            <div className="flex flex-col items-center gap-5">
              <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-3xl shadow-2xl shadow-indigo-500/20 select-none">
                SMF
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">Satriawan Muammar Fadil</p>
                <p className="text-zinc-400 text-sm mt-0.5">IoT &amp; Automation Engineer</p>
              </div>
              <div className="space-y-2 text-sm text-zinc-400 w-full">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <span className="mt-0.5">{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors break-all leading-snug"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="leading-snug">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-4 text-zinc-400 leading-relaxed text-[15px]">
              <p>
                I&apos;m an Electrical Engineering graduate from Universitas Ahmad Dahlan with a
                GPA of <span className="text-white font-medium">3.52</span>, specializing in
                control systems and industrial automation. My passion lies in designing and
                implementing intelligent systems that solve real-world problems.
              </p>
              <p>
                My professional experience spans IoT infrastructure deployment for government
                projects at <span className="text-white font-medium">Ibu Kota Nusantara</span>,
                where I worked with LoRaWAN sensor networks, BACnet protocols, and water quality
                monitoring systems. I&apos;ve also served as a laboratory assistant and led a
                competitive UAV robotics team.
              </p>
              <p>
                I thrive at the intersection of hardware engineering and software development —
                particularly in industrial IoT, smart building systems, and embedded control
                systems.
              </p>
              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.15} className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
          <div className="bg-zinc-900/50 border border-white/[0.08] rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl flex-shrink-0">
                🎓
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-lg leading-snug">
                  Bachelor&apos;s Degree in Electrical Engineering
                </h3>
                <p className="text-indigo-400 text-sm font-medium mt-0.5">
                  Universitas Ahmad Dahlan
                </p>
                <p className="text-zinc-500 text-sm mt-0.5">2020 – 2025 · Yogyakarta, Indonesia</p>

                <div className="mt-3 inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                  <span className="text-zinc-400 text-xs">GPA</span>
                  <span className="text-indigo-400 font-bold text-sm">3.52 / 4.00</span>
                </div>

                <div className="mt-4 space-y-1.5 text-sm text-zinc-400">
                  <p>
                    <span className="text-zinc-300 font-medium">Final Project: </span>
                    Pneumatic-Based UAV Fixed-Wing Launcher Prototype with PID Control
                  </p>
                  <p className="text-zinc-500">
                    Relevant Courses: Control Systems · Industrial Automation · Microprocessors ·
                    Robotics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Technical Skills */}
        <AnimatedSection delay={0.2} className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {technicalSkills.map((group) => (
              <div
                key={group.category}
                className="bg-zinc-900/50 border border-white/[0.08] rounded-2xl p-5"
              >
                <h3 className="text-[11px] font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-zinc-300 bg-white/[0.05] border border-white/[0.07] px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Soft Skills */}
        <AnimatedSection delay={0.25}>
          <h2 className="text-2xl font-bold text-white mb-6">Soft Skills</h2>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="text-sm text-zinc-300 bg-zinc-900/50 border border-white/[0.08] hover:border-indigo-500/30 hover:text-white px-4 py-2 rounded-full transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
