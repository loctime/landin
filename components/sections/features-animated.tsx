'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Brain, Zap, Target, TrendingUp, Shield, Rocket } from 'lucide-react'
import { useTranslations } from '@/hooks/use-translations'

export const FeaturesAnimated = () => {
  const { t } = useTranslations()
  const features = [
    {
      icon: Brain,
      title: t('features.animated.feature1.title'),
      description: t('features.animated.feature1.description'),
      color: "from-purple-500 to-pink-500",
      stats: "99.9%",
      label: t('features.animated.feature1.label')
    },
    {
      icon: Zap,
      title: t('features.animated.feature2.title'),
      description: t('features.animated.feature2.description'),
      color: "from-yellow-500 to-orange-500",
      stats: "<100ms",
      label: t('features.animated.feature2.label')
    },
    {
      icon: Target,
      title: t('features.animated.feature3.title'),
      description: t('features.animated.feature3.description'),
      color: "from-blue-500 to-cyan-500",
      stats: "100%",
      label: t('features.animated.feature3.label')
    },
    {
      icon: TrendingUp,
      title: t('features.animated.feature4.title'),
      description: t('features.animated.feature4.description'),
      color: "from-green-500 to-emerald-500",
      stats: "∞",
      label: t('features.animated.feature4.label')
    },
    {
      icon: Shield,
      title: t('features.animated.feature5.title'),
      description: t('features.animated.feature5.description'),
      color: "from-red-500 to-rose-500",
      stats: "256-bit",
      label: t('features.animated.feature5.label')
    },
    {
      icon: Rocket,
      title: t('features.animated.feature6.title'),
      description: t('features.animated.feature6.description'),
      color: "from-indigo-500 to-purple-500",
      stats: "24/7",
      label: t('features.animated.feature6.label')
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Fondo personalizado invertido responsive */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/fondo33.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scaleY(-1)',
        }}
      />
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Efectos de líneas estáticas tecnológicas - Responsive */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Líneas verticales decorativas - Más sutiles en móvil */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-300/20 sm:via-cyan-300/30 to-transparent"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-300/20 sm:via-cyan-300/30 to-transparent"></div>
        <div className="hidden sm:block absolute left-1/6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        <div className="hidden sm:block absolute left-5/6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        
        {/* Líneas horizontales decorativas - Más sutiles en móvil */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 sm:via-cyan-300/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 sm:via-cyan-300/30 to-transparent"></div>
        <div className="hidden sm:block absolute top-1/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        <div className="hidden sm:block absolute top-5/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        
        {/* Líneas diagonales sutiles - Solo en desktop */}
        <div className="hidden lg:block absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform rotate-12 origin-left"></div>
        <div className="hidden lg:block absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-400/10 to-transparent transform -rotate-12 origin-right"></div>
        
        {/* Líneas diagonales en las esquinas - Solo en desktop */}
        <div className="hidden lg:block absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent transform rotate-45 origin-left"></div>
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-cyan-300/20 to-transparent transform -rotate-45 origin-right"></div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent transform -rotate-45 origin-left"></div>
        <div className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-blue-300/20 to-transparent transform rotate-45 origin-right"></div>
      </div>
      
      <div className="elegant-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="elegant-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
              Características Revolucionarias
            </span>
          </h2>
          <p className="elegant-subtitle text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Tecnología de punta diseñada para transformar tu negocio
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="h-full"
              >
                <Card className="relative bg-gradient-to-br from-slate-800/60 via-slate-900/80 to-slate-800/60 border border-gray-700/30 p-4 sm:p-6 overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 h-full backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20">
                  {/* Gradient Background dinámico */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Patrón radial sutil */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Contenido */}
                  <div className="relative z-10">
                    {/* Header con icono y título */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                          {feature.title}
                        </h3>
                        <div className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${feature.color} rounded-full text-white text-xs sm:text-sm font-semibold inline-block`}>
                          {feature.stats}
                        </div>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                      {feature.description}
                    </p>

                    {/* Label inferior */}
                    <div className="flex justify-end">
                      <span className={`text-xs font-medium px-2 sm:px-3 py-1 bg-gray-800/50 border border-gray-600/30 rounded-full text-gray-300`}>
                        {feature.label}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicador simplificado al final */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm">
            <span>{t('features.animated.more')}</span>
            <Rocket className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

