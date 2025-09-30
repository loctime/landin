'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { processSteps, benefits } from '@/data/homepage-data'

const ProcessSection = React.memo(() => {
  return (
    <section id="proceso" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Automatiza con IA en solo <span className="text-emerald-400">3 pasos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-emerald-500/20 p-6 sm:p-8 scroll-animate opacity-0 translate-y-8 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="mb-6">{step.visual}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 text-pretty">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gray-900/30 border-emerald-500/10 p-4 sm:p-6 text-center scroll-animate opacity-0 translate-y-8 hover:bg-gray-900/50 transition-all duration-300"
            >
              <benefit.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h4 className="text-white font-medium text-sm">{benefit.title}</h4>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})

ProcessSection.displayName = 'ProcessSection'

export { ProcessSection }
