'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { TrendingUp, Users, Clock, Award, Zap, Target } from 'lucide-react'

export const StatsAnimated = () => {
  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'Clientes Activos',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      description: 'Confiando en nuestra tecnología'
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: '%',
      label: 'Satisfacción',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20',
      description: 'Clientes altamente satisfechos'
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'Disponibilidad',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      description: 'Operación continua sin parar'
    },
    {
      icon: Award,
      value: 150,
      suffix: '+',
      label: 'Proyectos',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      description: 'Completados exitosamente'
    },
    {
      icon: Zap,
      value: 99.9,
      suffix: '%',
      label: 'Uptime',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      description: 'Disponibilidad garantizada'
    },
    {
      icon: Target,
      value: 85,
      suffix: '%',
      label: 'Eficiencia',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      description: 'Mejora en productividad'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </motion.div>
            <span className="text-emerald-400 text-sm font-medium">Resultados Comprobados</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Números que{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Hablan por Sí Solos
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Datos reales de nuestro impacto en el mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="relative bg-gray-900/50 border-gray-700/50 p-6 sm:p-8 overflow-hidden group hover:border-emerald-500/50 transition-all duration-500">
                  {/* Efecto de fondo pulsante */}
                  <motion.div
                    animate={{
                      opacity: [0.05, 0.15, 0.05],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className={`absolute inset-0 ${stat.bgColor}`}
                  />

                  {/* Círculos decorativos flotantes */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-2xl"
                  />

                  {/* Icono animado */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -15, 15, 0],
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-6"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`absolute inset-0 ${stat.bgColor} blur-xl opacity-50`}
                    />
                    <div className={`relative ${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Número animado con contador */}
                  <div className="relative z-10 mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      color={stat.color}
                      index={index}
                    />
                  </div>

                  {/* Label */}
                  <h3 className={`text-xl font-bold ${stat.color} mb-2 relative z-10`}>
                    {stat.label}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-400 text-sm relative z-10">
                    {stat.description}
                  </p>

                  {/* Barra de progreso animada */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 origin-left"
                  />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente auxiliar para animar números
const AnimatedCounter = ({ value, suffix, color, index }: { value: number; suffix: string; color: string; index: number }) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="flex items-baseline"
    >
      <motion.span
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.3,
        }}
        className={`text-5xl sm:text-6xl font-bold ${color}`}
      >
        {count}
      </motion.span>
      <motion.span
        className={`text-3xl font-bold ${color} ml-1`}
      >
        {suffix}
      </motion.span>
    </motion.div>
  )
}

