import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Política de Privacidad - Opptim.Ai',
  description: 'Política de privacidad y protección de datos de Opptim.Ai. Información sobre cómo recopilamos, utilizamos y protegemos su información personal.',
  keywords: ['privacidad', 'protección de datos', 'RGPD', 'Opptim.Ai', 'política de privacidad'],
  openGraph: {
    title: 'Política de Privacidad - Opptim.Ai',
    description: 'Política de privacidad y protección de datos de Opptim.Ai',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header con logo y botón de volver */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al inicio</span>
            </Link>
          </div>
          
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 text-3xl font-bold">
              <span className="text-foreground">Opptim</span>
              <span className="text-primary">.Ai</span>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Política de Privacidad</h1>
          <p className="text-xl text-muted-foreground mb-8">Información sobre el tratamiento de datos personales</p>
          <p className="text-sm text-muted-foreground mb-12 border-b border-border pb-4">Última actualización: Diciembre 2024</p>
          
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introducción</h2>
              <p className="text-muted-foreground leading-relaxed">
                En Opptim.Ai, nos comprometemos a proteger la privacidad y seguridad de la información personal de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando utiliza nuestros servicios de automatización con inteligencia artificial.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Información que Recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Recopilamos información que usted nos proporciona directamente, como nombre, dirección de correo electrónico, número de teléfono, información de la empresa y cualquier otra información que decida compartir con nosotros para la prestación de nuestros servicios. También recopilamos datos de uso y información técnica para mejorar nuestros servicios.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Cómo Utilizamos su Información</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos su información personal para: proporcionar y mejorar nuestros servicios, comunicarnos con usted, procesar transacciones, enviar actualizaciones sobre nuestros servicios, configurar sus agentes de IA personalizados y cumplir con obligaciones legales.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Protección de Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos encriptación, acceso restringido y monitoreo continuo de nuestros sistemas.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Cookies y Tecnologías Similares</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Puede gestionar las cookies desde la configuración de su navegador.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Sus Derechos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tiene derecho a acceder, rectificar, eliminar, limitar el procesamiento, portabilidad de datos y oponerse al procesamiento de su información personal. Para ejercer estos derechos, contáctenos en info@opptim.ai
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos en: info@opptim.ai
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Información de Contacto</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Email:</strong> info@opptim.ai
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Responsable del tratamiento:</strong> Opptim.Ai
            </p>
            <p className="text-muted-foreground">
              <strong>Finalidad:</strong> Prestación de servicios de automatización con IA
            </p>
          </div>
          
          {/* Botón de volver al final */}
          <div className="mt-12 text-center">
            <Link href="/">
              <Button className="inline-flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al inicio</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
