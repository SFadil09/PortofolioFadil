import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Satriawan Muammar Fadil – IoT & Automation Engineer',
    template: '%s | Satriawan Muammar Fadil',
  },
  description:
    'Portfolio of Satriawan Muammar Fadil, an IoT & Automation Engineer and Electrical Engineering graduate based in Yogyakarta, Indonesia.',
  keywords: [
    'IoT Engineer',
    'Automation Engineer',
    'Electrical Engineering',
    'LoRaWAN',
    'BACnet',
    'Control Systems',
    'Portfolio',
    'Yogyakarta',
    'Indonesia',
  ],
  authors: [{ name: 'Satriawan Muammar Fadil' }],
  openGraph: {
    title: 'Satriawan Muammar Fadil – IoT & Automation Engineer',
    description:
      'Portfolio of an IoT & Automation Engineer based in Yogyakarta, Indonesia.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-[#0a0a0a] text-zinc-100 antialiased flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
