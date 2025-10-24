import { Metadata } from 'next'
import { useTranslations } from '@/hooks/use-translations'

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
  const t = useTranslations()
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{t('privacy.title')}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t('privacy.subtitle')}</p>
          <p className="text-sm text-muted-foreground mb-12 border-b border-border pb-4">{t('privacy.lastUpdated')}</p>
          
          <div className="space-y-8">
            {Object.entries(t('privacy.sections')).map(([key, section]) => (
              <div key={key} className="bg-card p-6 rounded-lg border border-border">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
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
        </div>
      </div>
    </div>
  )
}
