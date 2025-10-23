'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { agents, companyLogos } from '@/data/homepage-data'

const AgentsSection = React.memo(() => {
  return (
    <section id="servicios" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Nuestros <span className="text-opptim-green">servicios</span> de IA
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones de automatización inteligente para optimizar tu negocio
          </p>
        </div>

        {/* Logos de sectores */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16 scroll-animate opacity-0 translate-y-8">
          <div className="text-gray-500 text-sm font-medium">Sectores que confían en nosotros:</div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-60">
            {companyLogos.map((logo, index) => (
              <div key={index} className="bg-gray-800 px-4 py-2 rounded text-gray-300 text-sm font-medium border border-opptim-green/20">
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className={`
                bg-gray-900/50 border-opptim-green/20 p-4 sm:p-6 text-center scroll-animate opacity-0 translate-y-8 
                hover:border-opptim-green/60 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer
                ${agent.featured ? "border-opptim-green/60 bg-gray-900/70 scale-105 ring-2 ring-opptim-green/30" : ""}
              `}
            >
              <div className="w-16 h-16 bg-opptim-green/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {agent.avatar}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{agent.name}</h3>
              <p className="text-opptim-green text-sm font-medium mb-3">{agent.specialty}</p>
              <p className="text-gray-400 text-xs text-pretty">{agent.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})

AgentsSection.displayName = 'AgentsSection'

export { AgentsSection }
