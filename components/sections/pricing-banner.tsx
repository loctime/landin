'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { contactInfo } from '@/data/homepage-data'
import { useTranslations } from '@/hooks/use-translations'
import './pricing-banner-electric.css'

const PricingBanner = React.memo(() => {
  const { t } = useTranslations()
  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* SVG Filter para el efecto eléctrico */}
      <svg className="absolute pointer-events-none">
        <defs>
          <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Contenedor con efecto eléctrico */}
        <div className="electric-card-container">
          <div className="electric-inner-container">
            <div className="electric-border-outer">
              <div className="electric-main-card"></div>
            </div>
          <div className="electric-glow-layer-1"></div>
          <div className="electric-glow-layer-2"></div>
        </div>
        
        {/* Overlays removidos para quitar las luces blancas */}

          {/* Contenido del banner */}
          <div className="electric-content-container">
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
      </div>
    </section>
  )
})

PricingBanner.displayName = 'PricingBanner'

export { PricingBanner }

