import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Opptim.Ai - Ahorra tiempo y dinero con agentes de IA',
  description: 'Agencia especializada en la creación de agentes de IA automatizados para hacer las tareas más repetitivas y tediosas de tu negocio. Ahorra tiempo y dinero con automatización inteligente.',
  generator: 'Opptim.Ai',
  keywords: ['IA', 'Inteligencia Artificial', 'Automatización', 'Chatbot', 'Agentes de IA', 'Opptim.Ai'],
  authors: [{ name: 'Opptim.Ai' }],
  openGraph: {
    title: 'Opptim.Ai - Ahorra tiempo y dinero con agentes de IA',
    description: 'Automatiza tu negocio con agentes de IA. Atención 100% personalizada, disponibilidad 24/7 y resultados garantizados.',
    type: 'website',
    locale: 'es_ES',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} ${inter.variable}`}>
        <LanguageProvider>
          <main id="main-content" role="main">
            {children}
          </main>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
