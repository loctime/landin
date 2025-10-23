'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Target, Lightbulb, Users } from 'lucide-react'

const AboutSection = React.memo(() => {
  return (
    <section id="sobre-nosotros" className="py-16 sm:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-opptim-green rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Sobre <span className="text-opptim-green">Nosotros</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Somos expertos en automatización inteligente con IA
          </p>
        </motion.div>

        {/* Historia */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-900/50 border-opptim-green/20 p-6 sm:p-8 hover:border-opptim-green/40 transition-colors duration-300 relative overflow-hidden">
              {/* Partículas decorativas */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-0 right-0 w-32 h-32 bg-opptim-green/10 rounded-full blur-2xl"
              />

              <div className="flex items-start gap-4 mb-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-opptim-green/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Lightbulb className="w-6 h-6 text-opptim-green" />
                  </motion.div>
                </motion.div>
                <div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white mb-4"
                  >
                    Nuestra Historia
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 leading-relaxed"
                  >
                    El proyecto nació con la idea de ayudar a pequeñas y medianas empresas a aprovechar la inteligencia artificial sin necesidad de grandes inversiones. Comenzamos ofreciendo chatbots básicos para atención al cliente y, con el tiempo, fuimos ampliando nuestros servicios a automatizaciones completas de procesos internos, integraciones con CRM y estrategias de IA conversacional. Hoy, trabajamos con empresas de distintos sectores, ayudándolas a digitalizarse y mantenerse competitivas.
                  </motion.p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Misión y Equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-900/50 border-opptim-turquoise/20 p-6 sm:p-8 hover:border-opptim-turquoise/40 transition-colors duration-300 h-full relative overflow-hidden">
                {/* Efecto de fondo */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-opptim-turquoise/10"
                />

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-opptim-turquoise/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Target className="w-6 h-6 text-opptim-turquoise" />
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-bold text-white mb-4"
                    >
                      Nuestra Misión
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-300 leading-relaxed"
                    >
                      Democratizar el acceso a la inteligencia artificial, ayudando a empresas de todos los tamaños a automatizar sus procesos y mejorar la experiencia de sus clientes.
                    </motion.p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Equipo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-900/50 border-opptim-blue/20 p-6 sm:p-8 hover:border-opptim-blue/40 transition-colors duration-300 h-full relative overflow-hidden">
                {/* Efecto de fondo */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                  className="absolute inset-0 bg-opptim-blue/10"
                />

                <div className="flex items-start gap-4 mb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-opptim-blue/20 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Users className="w-6 h-6 text-opptim-blue" />
                    </motion.div>
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-2xl font-bold text-white mb-4"
                    >
                      Nuestro Equipo
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-300 leading-relaxed"
                    >
                      Contamos con un equipo de expertos técnicos en IA, comprometidos con ofrecer soluciones innovadoras y personalizadas para cada cliente. Nuestra pasión es transformar negocios mediante la automatización inteligente.
                    </motion.p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

AboutSection.displayName = 'AboutSection'

export { AboutSection }

