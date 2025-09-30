'use client'

import React from 'react'
import { Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const UrgencySection = React.memo(() => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900/20 to-black border-y border-emerald-500/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="scroll-animate opacity-0 translate-y-8">
          <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/30 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-8 h-8 text-black" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Oferta de Lanzamiento
                </h3>
                <p className="text-emerald-400 font-semibold">
                  Solo quedan 47 cupos disponibles
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Setup <span className="text-emerald-400">GRATIS</span> + 30 días de soporte
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg">
              Valor normal: $2,500 • <span className="line-through">Tu precio: $0</span> 
              <span className="text-emerald-400 font-bold"> • Ahorro: 100%</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-black font-bold px-8 py-4 text-lg">
                🔥 Aprovechar Oferta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 mt-6">
              ⏰ Oferta válida solo hasta el 31 de enero, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

UrgencySection.displayName = 'UrgencySection'

export { UrgencySection }
