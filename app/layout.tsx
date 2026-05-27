import type { Metadata } from 'next'
import { Bebas_Neue, Cormorant_Garamond, DM_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Diaz — Photography',
  description: 'Photography portfolio — Combat, Music, Events, Training, Couples & Graduation',
  openGraph: {
    title: 'Diaz Photography',
    description: 'Portfolio of photography across combat sports, music, events, and portraiture.',
    images: ['/images/boxing2/dsc02238.webp'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${cormorant.variable} ${dmMono.variable}`}>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
