'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Brain, Zap, Target, TrendingUp, Shield, Rocket } from 'lucide-react'

export const FeaturesAnimated = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Inteligente",
      description: "Algoritmos de última generación que aprenden de cada interacción",
      color: "from-purple-500 to-pink-500",
      stats: "99.9%",
      label: "Precisión"
    },
    {
      icon: Zap,
      title: "Ultra Rápido",
      description: "Respuestas en milisegundos para una experiencia fluida",
      color: "from-yellow-500 to-orange-500",
      stats: "<100ms",
      label: "Respuesta"
    },
    {
      icon: Target,
      title: "Personalizado",
      description: "Adaptado específicamente a las necesidades de tu negocio",
      color: "from-blue-500 to-cyan-500",
      stats: "100%",
      label: "Adaptable"
    },
    {
      icon: TrendingUp,
      title: "Escalable",
      description: "Crece con tu empresa sin límites de capacidad",
      color: "from-green-500 to-emerald-500",
      stats: "∞",
      label: "Ilimitado"
    },
    {
      icon: Shield,
      title: "Seguro",
      description: "Máxima protección de datos con encriptación de nivel militar",
      color: "from-red-500 to-rose-500",
      stats: "256-bit",
      label: "Encriptación"
    },
    {
      icon: Rocket,
      title: "Innovador",
      description: "Tecnología de vanguardia actualizada constantemente",
      color: "from-indigo-500 to-purple-500",
      stats: "24/7",
      label: "Actualización"
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
    <section className="py-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Características{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Revolucionarias
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Tecnología de punta diseñada para transformar tu negocio
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
            <span>Y mucho más</span>
            <Rocket className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

