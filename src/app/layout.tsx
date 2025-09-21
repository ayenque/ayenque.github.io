import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Angelo Yenque - Desarrollador Full Stack',
  description: 'Portfolio de Angelo Yenque, Desarrollador Full Stack especializado en React, Node.js, y desarrollo web moderno.',
  keywords: 'Angelo Yenque, desarrollador full stack, React, Node.js, JavaScript, TypeScript, desarrollo web',
  authors: [{ name: 'Angelo Yenque' }],
  creator: 'Angelo Yenque',
  openGraph: {
    title: 'Angelo Yenque - Desarrollador Full Stack',
    description: 'Portfolio de Angelo Yenque, Desarrollador Full Stack especializado en React, Node.js, y desarrollo web moderno.',
    url: 'https://ayenque.me',
    siteName: 'Angelo Yenque Portfolio',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angelo Yenque - Desarrollador Full Stack',
    description: 'Portfolio de Angelo Yenque, Desarrollador Full Stack especializado en React, Node.js, y desarrollo web moderno.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-dark-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}