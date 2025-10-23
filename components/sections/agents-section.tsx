'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { agents, companyLogos } from '@/data/homepage-data'
import { Sparkles, Zap } from 'lucide-react'

const AgentsSection = React.memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const itemTransition = {
    duration: 0.5,
    ease: "easeOut" as const,
  }

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Efectos de fondo animados */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-opptim-green rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-opptim-green/10 border border-opptim-green/30 px-4 py-2 rounded-full mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-opptim-green" />
            </motion.div>
            <span className="text-opptim-green text-sm font-medium">Powered by AI</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Nuestros <span className="text-opptim-green">servicios</span> de IA
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones de automatización inteligente para optimizar tu negocio
          </p>
        </motion.div>

        {/* Logos de sectores con animación */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 text-sm font-medium"
          >
            Sectores que confían en nosotros:
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8"
          >
            {companyLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={itemTransition}
                whileHover={{ scale: 1.08, y: -3 }}
                className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-300 text-sm font-medium border border-opptim-green/20 hover:border-opptim-green/50 transition-colors cursor-pointer"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid de agentes con animaciones mejoradas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          {agents.map((agent, index) => (
            <motion.div key={index} variants={itemVariants} transition={itemTransition}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="h-full"
              >
                <Card
                  className={`
                    relative bg-gradient-to-b from-gray-900/80 to-gray-900/50 backdrop-blur-sm
                    border-opptim-green/20 p-4 sm:p-6 text-center cursor-pointer h-full
                    hover:border-opptim-green/60 transition-colors duration-300 overflow-hidden
                    ${agent.featured ? "border-opptim-green/60 ring-2 ring-opptim-green/30" : ""}
                  `}
                >
                  {/* Badge de destacado con animación */}
                  {agent.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className="absolute -top-1 -right-1 z-10"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 12, -12, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="bg-gradient-to-r from-opptim-green to-emerald-400 text-black px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg shadow-opptim-green/50"
                      >
                        <Sparkles className="w-3 h-3" />
                        Popular
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Efecto de brillo de fondo */}
                  <motion.div
                    animate={{
                      opacity: [0.03, 0.08, 0.03],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-opptim-green/10 to-transparent"
                  />

                  {/* Partículas flotantes */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute top-4 right-4 w-16 h-16 bg-opptim-green/20 rounded-full blur-xl"
                  />

                  {/* Avatar con animaciones */}
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -8, 8, 0],
                      transition: { duration: 0.5 },
                    }}
                    className="relative mb-4 mx-auto"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className="relative"
                    >
                      {/* Anillo pulsante */}
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0 bg-opptim-green rounded-full"
                      />
                      
                      {/* Anillo giratorio para featured */}
                      {agent.featured && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute -inset-2 border-2 border-dashed border-opptim-green/40 rounded-full"
                        />
                      )}

                      <div className="w-16 h-16 bg-gradient-to-br from-opptim-green/30 to-opptim-green/10 rounded-full flex items-center justify-center mx-auto text-3xl relative z-10 backdrop-blur-sm border border-opptim-green/30">
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        >
                          {agent.avatar}
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Contenido */}
                  <motion.div className="relative z-10">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-lg sm:text-xl font-bold text-white mb-2"
                    >
                      {agent.name}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.05, color: "#10b981" }}
                      className="text-opptim-green text-sm font-medium mb-3"
                    >
                      {agent.specialty}
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-400 text-xs leading-relaxed"
                    >
                      {agent.description}
                    </motion.p>
                  </motion.div>

                  {/* Línea decorativa animada en la parte inferior */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-opptim-green to-transparent origin-center"
                  />

                  {/* Brillo en hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-opptim-green/0 via-opptim-green/5 to-opptim-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      y: ['100%', '-100%'],
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
      </div>
    </section>
  )
})

AgentsSection.displayName = 'AgentsSection'

export { AgentsSection }
