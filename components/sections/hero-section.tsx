'use client'

import React from 'react'
import { Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = React.memo(() => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Robot placeholder */}
        <div className="scroll-animate opacity-0 translate-y-8 mb-8 sm:mb-12">
          <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-b from-gray-700 to-gray-900 rounded-full flex items-center justify-center border-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/20">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-400" />
            </div>
          </div>
        </div>

        <div className="scroll-animate opacity-0 translate-y-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Automatiza tu negocio y{" "}
            <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              multiplica
            </span>{" "}
            tus
            <br />
            resultados 24/7
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty px-4">
            Agentes de IA que manejan clientes, reservas y ventas mientras tú duermes. 
            <span className="text-emerald-400 font-semibold"> +300% más leads</span> en 30 días.
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-12 text-sm sm:text-base">
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              Sin setup técnico
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              Resultados en 48h
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
              Soporte 24/7
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-black font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto touch-target">
              🚀 Empezar Gratis - 14 días
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 active:bg-emerald-500/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto touch-target"
            >
              📹 Ver Demo en Vivo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export { HeroSection }
