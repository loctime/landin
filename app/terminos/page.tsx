import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Opptim.Ai',
  description: 'Términos y condiciones de uso de los servicios de Opptim.Ai. Condiciones legales para el uso de nuestros servicios de automatización con IA.',
  keywords: ['términos y condiciones', 'condiciones de uso', 'Opptim.Ai', 'servicios legales', 'contrato'],
  openGraph: {
    title: 'Términos y Condiciones - Opptim.Ai',
    description: 'Términos y condiciones de uso de los servicios de Opptim.Ai',
    type: 'website',
  },
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-4 text-foreground">Términos y Condiciones</h1>
          <p className="text-xl text-muted-foreground mb-8">Condiciones de uso de nuestros servicios</p>
          <p className="text-sm text-muted-foreground mb-12 border-b border-border pb-4">Última actualización: Diciembre 2024</p>
          
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Aceptación de los Términos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar los servicios de Opptim.Ai, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Descripción de los Servicios</h2>
              <p className="text-muted-foreground leading-relaxed">
                Opptim.Ai proporciona servicios de automatización empresarial mediante agentes de inteligencia artificial, incluyendo chatbots, sistemas de recordatorios, gestión de citas y otras soluciones de automatización personalizadas.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Obligaciones del Usuario</h2>
              <p className="text-muted-foreground leading-relaxed">
                El usuario se compromete a: proporcionar información veraz y actualizada, utilizar los servicios de manera responsable y conforme a la ley, no interferir con el funcionamiento de nuestros sistemas, y mantener la confidencialidad de sus credenciales de acceso.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Pagos y Facturación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los precios de nuestros servicios están claramente especificados. Los pagos se realizan según los términos acordados en el contrato de servicio. Los precios pueden estar sujetos a cambios con notificación previa de 30 días.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Propiedad Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos los derechos de propiedad intelectual sobre nuestros servicios, incluyendo software, algoritmos y contenido, pertenecen a Opptim.Ai. El usuario no adquiere derechos de propiedad sobre nuestros sistemas.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Limitación de Responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Opptim.Ai no será responsable por daños indirectos, incidentales o consecuenciales. Nuestra responsabilidad se limita al valor de los servicios contratados en el período de 12 meses anteriores al evento que origine la reclamación.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Terminación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cualquiera de las partes puede terminar el acuerdo con notificación previa de 30 días. Al terminar, el usuario debe cesar el uso de nuestros servicios y sus datos serán eliminados en 90 días.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Modificaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor al ser publicadas en nuestro sitio web con 30 días de antelación.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para cualquier consulta sobre estos Términos y Condiciones, puede contactarnos en: info@opptim.ai
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Información Legal</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="mb-2">
                  <strong>Empresa:</strong> Opptim.Ai
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> info@opptim.ai
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong>Servicios:</strong> Automatización con IA
                </p>
                <p className="mb-2">
                  <strong>Jurisdicción:</strong> España
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Nota importante:</strong> Al utilizar nuestros servicios, usted acepta estos términos y condiciones. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
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
