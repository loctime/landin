'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { contactInfo } from '@/data/homepage-data'
import { useTranslations } from '@/hooks/use-translations'

const PricingBanner = React.memo(() => {
  const { t } = useTranslations()
  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-opptim-green/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-opptim-green/40 rounded-2xl p-8 sm:p-12 text-center scroll-animate opacity-0 translate-y-8 shadow-2xl shadow-opptim-green/20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-opptim-green/20 border border-opptim-green/40 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-opptim-green" />
            <span className="text-opptim-green font-semibold text-sm">{t('pricing.badge')}</span>
          </div>

          {/* Título */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {t('pricing.title')}{' '}
            <span className="text-opptim-green bg-gradient-to-r from-opptim-green to-opptim-turquoise bg-clip-text text-transparent">
              {t('pricing.price')}
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 border border-opptim-green/20 rounded-lg p-4">
              <div className="text-opptim-green font-bold text-lg mb-1">✓ {t('pricing.benefits.setup.title')}</div>
              <div className="text-gray-400 text-sm">{t('pricing.benefits.setup.description')}</div>
            </div>
            <div className="bg-gray-800/50 border border-opptim-turquoise/20 rounded-lg p-4">
              <div className="text-opptim-turquoise font-bold text-lg mb-1">✓ {t('pricing.benefits.support.title')}</div>
              <div className="text-gray-400 text-sm">{t('pricing.benefits.support.description')}</div>
            </div>
            <div className="bg-gray-800/50 border border-opptim-blue/20 rounded-lg p-4">
              <div className="text-opptim-blue font-bold text-lg mb-1">✓ {t('pricing.benefits.contract.title')}</div>
              <div className="text-gray-400 text-sm">{t('pricing.benefits.contract.description')}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-opptim-green hover:bg-opptim-green/90 text-black font-bold px-8 py-6 text-lg sm:text-xl shadow-lg shadow-opptim-green/30 hover:shadow-opptim-green/50 transition-all"
              onClick={() => window.open(contactInfo.whatsapp, '_blank')}
            >
              💬 {t('pricing.cta.consult')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-opptim-turquoise/50 text-opptim-turquoise hover:bg-opptim-turquoise/10 px-8 py-6 text-lg sm:text-xl bg-transparent"
              onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
            >
              📧 {t('pricing.cta.info')}
            </Button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            {t('pricing.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  )
})

PricingBanner.displayName = 'PricingBanner'

export { PricingBanner }

