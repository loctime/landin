import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
