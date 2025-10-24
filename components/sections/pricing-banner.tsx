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
    <section className="elegant-section elegant-gradient relative overflow-hidden">
      {/* Elegant Background Effects */}
      <div className="absolute inset-0 elegant-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-36D6E6/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-45C789/5 rounded-full blur-3xl" />

      <div className="elegant-container relative z-10">
        {/* Elegant Pricing Card */}
        <div className="elegant-card max-w-4xl mx-auto p-8 sm:p-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 elegant-card px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-36D6E6" />
            <span className="text-36D6E6 font-semibold text-base">{t('pricing.badge')}</span>
          </div>

          {/* Título */}
          <h2 className="elegant-title text-5xl sm:text-6xl md:text-7xl text-white mb-6">
            {t('pricing.title')}{' '}
            <span className="elegant-text-gradient">
              {t('pricing.price')}
            </span>
          </h2>

          <p className="elegant-subtitle text-2xl sm:text-3xl text-gray-300 mb-12">
            {t('pricing.subtitle')}
          </p>

          {/* Beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="elegant-card p-6">
              <div className="text-36D6E6 font-bold text-xl mb-3">✓ {t('pricing.benefits.setup.title')}</div>
              <div className="text-gray-400 text-base">{t('pricing.benefits.setup.description')}</div>
            </div>
            <div className="elegant-card p-6">
              <div className="text-45C789 font-bold text-xl mb-3">✓ {t('pricing.benefits.support.title')}</div>
              <div className="text-gray-400 text-base">{t('pricing.benefits.support.description')}</div>
            </div>
            <div className="elegant-card p-6">
              <div className="text-367DE6 font-bold text-xl mb-3">✓ {t('pricing.benefits.contract.title')}</div>
              <div className="text-gray-400 text-base">{t('pricing.benefits.contract.description')}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="elegant-button text-xl px-10 py-6"
              onClick={() => window.open(contactInfo.whatsapp, '_blank')}
            >
              💬 {t('pricing.cta.consult')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>
            <button
              className="elegant-button-outline text-xl px-10 py-6"
              onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
            >
              📧 {t('pricing.cta.info')}
            </button>
          </div>

          <p className="text-gray-500 text-base mt-8">
            {t('pricing.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  )
})

PricingBanner.displayName = 'PricingBanner'

export { PricingBanner }

