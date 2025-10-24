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
        {/* Layout con pricing y video */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
            
            {/* Elegant Pricing Card */}
            <div className="elegant-card p-4 sm:p-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 elegant-card px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-36D6E6" />
                <span className="text-36D6E6 font-semibold text-sm">{t('pricing.badge')}</span>
              </div>

              {/* Título */}
              <h2 className="elegant-title text-3xl sm:text-4xl md:text-5xl text-white mb-3">
                {t('pricing.title')}{' '}
                <span className="elegant-text-gradient">
                  {t('pricing.price')}
                </span>
              </h2>

              <p className="elegant-subtitle text-lg sm:text-xl text-gray-300 mb-6">
                {t('pricing.subtitle')}
              </p>

              {/* Beneficios */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
                <div className="elegant-card p-4">
                  <div className="text-36D6E6 font-bold text-lg mb-2">✓ {t('pricing.benefits.setup.title')}</div>
                  <div className="text-gray-400 text-sm">{t('pricing.benefits.setup.description')}</div>
                </div>
                <div className="elegant-card p-4">
                  <div className="text-45C789 font-bold text-lg mb-2">✓ {t('pricing.benefits.support.title')}</div>
                  <div className="text-gray-400 text-sm">{t('pricing.benefits.support.description')}</div>
                </div>
                <div className="elegant-card p-4">
                  <div className="text-367DE6 font-bold text-lg mb-2">✓ {t('pricing.benefits.contract.title')}</div>
                  <div className="text-gray-400 text-sm">{t('pricing.benefits.contract.description')}</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="elegant-button text-lg px-8 py-4"
                  onClick={() => window.open(contactInfo.whatsapp, '_blank')}
                >
                  💬 {t('pricing.cta.consult')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  className="elegant-button-outline text-lg px-8 py-4"
                  onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
                >
                  📧 {t('pricing.cta.info')}
                </button>
              </div>

              <p className="text-gray-500 text-sm mt-6">
                {t('pricing.disclaimer')}
              </p>
            </div>

            {/* Sección del video demo */}
            <div className="relative flex justify-center">
              {/* Contenedor del video con efectos */}
              <div className="relative group max-w-sm w-full">
                {/* Efectos de fondo para el video */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/10 via-transparent to-teal-500/10 rounded-2xl"></div>
                
                {/* Video container */}
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-3 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                  <div className="aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 w-full relative">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjcwMCIgdmlld0JveD0iMCAwIDQwMCA3MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTU2NWU2O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFkNGJhYztzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWU0MDk2O3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjM1MCIgcj0iNjAiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cG9seWdvbiBwb2ludHM9IjE3NSwzMjAgMjI1LDM1MCAxNzUsMzgwIiBmaWxsPSIjMTU2NWU2Ii8+Cjwvc3ZnPg=="
                    >
                      <source src="/demo chatbot.mp4" type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                  
                  {/* Overlay con información del video */}
                  <div className="absolute top-2 left-4 right-4 z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-medium">Demo en vivo</span>
                    </div>
                    <h3 className="text-white text-sm font-semibold">Chatbot en acción</h3>
                  </div>
                  
                  {/* Efectos de brillo en las esquinas */}
                  <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-tl-2xl"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-blue-400/30 to-transparent rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr from-teal-400/30 to-transparent rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-purple-400/30 to-transparent rounded-br-2xl"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

PricingBanner.displayName = 'PricingBanner'

export { PricingBanner }

