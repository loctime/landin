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
    <section className="py-12 sm:py-16 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Características{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Revolucionarias
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto"
          >
            Tecnología de punta diseñada para transformar tu negocio
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="h-full"
              >
                <Card className="relative bg-gray-900/50 border-gray-700/50 p-4 sm:p-6 overflow-hidden group hover:border-emerald-500/50 transition-colors duration-500 h-full">
                  {/* Gradient Background animado */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Partículas flotantes */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                    animate={{
                      y: [0, 15, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />

                  {/* Icono con animación */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-4"
                  >
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 blur-xl`}
                    />
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>

                  {/* Contenido */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 relative z-10 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats animados */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative z-10"
                  >
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} px-3 py-1.5 rounded-full`}>
                      <motion.span
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="text-white font-bold text-base"
                      >
                        {feature.stats}
                      </motion.span>
                      <span className="text-white/80 text-xs">{feature.label}</span>
                    </div>
                  </motion.div>

                  {/* Efecto de brillo en hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicador animado al final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-2 text-emerald-400 font-medium"
          >
            <span>Y mucho más</span>
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Rocket className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

