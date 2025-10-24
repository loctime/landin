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
      {/* Fondo personalizado invertido */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/fondo33.png)',
          transform: 'scaleY(-1)',
        }}
      />
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {t('features.animated.title')}
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            {t('features.animated.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                className="h-full"
              >
                <Card className="relative bg-gray-900/50 border-gray-700/50 p-3 sm:p-4 overflow-hidden group hover:border-emerald-500/50 transition-colors duration-300 h-full">
                  {/* Gradient Background estático */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Línea superior: Icono, Título y Stats */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center shadow-md`}>
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${feature.color} px-2 py-1 rounded-full`}>
                      <span className="text-white font-bold text-xs">
                        {feature.stats}
                      </span>
                      <span className="text-white/80 text-xs">{feature.label}</span>
                    </div>
                  </div>

                  {/* Descripción abajo */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
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

