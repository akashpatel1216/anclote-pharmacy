import type { Metadata } from 'next'
import { Newsreader, Source_Sans_3 } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const displayFont = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Anclote Pharmacy',
  description: 'Independent pharmacy serving Tarpon Springs, FL with prescriptions, immunizations, medical equipment, and Medicare support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://secure.helcim.com/js/helcim.js" strategy="afterInteractive" />
        <Script src="https://arcpoint-labs-of-north-tampa.myhelcim.com/js/version2.js" strategy="afterInteractive" />
        <Script src="https://secure.helcim.app/helcim-pay/services/start.js" strategy="afterInteractive" />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
