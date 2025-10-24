'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { stats } from '@/data/homepage-data'
import { Sparkles } from 'lucide-react'
import { Particles } from '@/components/ui/particles'
import { useTranslations } from '@/hooks/use-translations'

const StatsSection = React.memo(() => {
  const { t } = useTranslations()
  const colors = [
    { text: 'text-opptim-green', bg: 'bg-opptim-green/20', gradient: 'from-emerald-500 to-green-500' },
    { text: 'text-opptim-turquoise', bg: 'bg-opptim-turquoise/20', gradient: 'from-cyan-500 to-teal-500' },
    { text: 'text-opptim-blue', bg: 'bg-opptim-blue/20', gradient: 'from-blue-500 to-indigo-500' },
    { text: 'text-opptim-green', bg: 'bg-opptim-green/20', gradient: 'from-emerald-500 to-green-500' }
  ]
  
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 to-black border-y border-opptim-green/20 relative overflow-hidden">
      {/* Efectos de fondo con partículas */}
      <Particles
        color="#00ff9d"
        particleCount={5000}
        particleSize={8}
        animate={false}
        className="absolute inset-0 opacity-60"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center relative"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                {/* Círculo decorativo */}
                <div className={`absolute inset-0 ${colors[index].bg} rounded-full blur-2xl opacity-30`} />

                {/* Número animado */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3 + index * 0.15,
                  }}
                  className="relative"
                >
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${colors[index].text} mb-2`}>
                    {stat.number}
                  </div>
                  
                  {/* Sparkles decorativo */}
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2">
                      <Sparkles className={`w-4 h-4 ${colors[index].text}`} />
                    </div>
                  )}
                </motion.div>

                {/* Label con animación */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className="text-gray-300 text-sm sm:text-base relative"
                >
                  {stat.key ? t(`stats.${stat.key}`) : stat.label}
                </motion.div>

                {/* Línea decorativa animada */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6 + index * 0.15,
                  }}
                  className={`h-1 bg-gradient-to-r ${colors[index].gradient} rounded-full mx-auto mt-4 w-16 origin-center`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

StatsSection.displayName = 'StatsSection'

export { StatsSection }
