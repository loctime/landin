import { Metadata } from 'next'
import { useTranslations } from '@/hooks/use-translations'

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
  const t = useTranslations()
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{t('terms.title')}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t('terms.subtitle')}</p>
          <p className="text-sm text-muted-foreground mb-12 border-b border-border pb-4">{t('terms.lastUpdated')}</p>
          
          <div className="space-y-8">
            {Object.entries(t('terms.sections')).map(([key, section]) => (
              <div key={key} className="bg-card p-6 rounded-lg border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
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
        </div>
      </div>
    </div>
  )
}
