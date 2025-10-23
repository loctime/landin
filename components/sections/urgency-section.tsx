'use client'

import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactInfo } from '@/data/homepage-data'

const UrgencySection = React.memo(() => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-opptim-green/10 to-black border-y border-opptim-green/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="scroll-animate opacity-0 translate-y-8">
          <div className="bg-gradient-to-r from-opptim-green/10 to-opptim-turquoise/10 border border-opptim-green/30 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-opptim-green rounded-full flex items-center justify-center mr-4">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Primera Consulta Gratis
                </h3>
                <p className="text-opptim-green font-semibold">
                  Análisis personalizado sin compromiso
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Descubre cómo la IA puede <span className="text-opptim-green">transformar</span> tu negocio
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg">
              Analizamos tu negocio y te mostramos exactamente cómo automatizar tus procesos
              <span className="text-opptim-green font-bold"> • Totalmente gratis</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-opptim-green hover:bg-opptim-green/90 active:bg-opptim-green/80 text-black font-bold px-8 py-4 text-lg"
                onClick={() => window.open(contactInfo.whatsapp, '_blank')}
              >
                💬 Solicitar Consulta Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 mt-6">
              ✓ Sin compromiso • ✓ 100% personalizado • ✓ Respuesta en menos de 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

UrgencySection.displayName = 'UrgencySection'

export { UrgencySection }
