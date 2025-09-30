'use client'

import React from 'react'
import { stats } from '@/data/homepage-data'

const StatsSection = React.memo(() => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 to-black border-y border-emerald-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center scroll-animate opacity-0 translate-y-8">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

StatsSection.displayName = 'StatsSection'

export { StatsSection }
