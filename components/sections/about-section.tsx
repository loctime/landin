'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Target, Lightbulb, Users } from 'lucide-react'
import { useTranslations } from '@/hooks/use-translations'

const AboutSection = React.memo(() => {
  const { t } = useTranslations()
  return (
    <section id="sobre-nosotros" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Image - Optimized with next/image */}
      <div className="absolute inset-0">
        <Image
          src="/fondo44.webp"
          alt="Background pattern"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>
      
      {/* Tech Grid Lines - Comentado para mostrar la imagen de fondo */}
      {/* <div className="absolute inset-0 elegant-grid opacity-30"></div> */}
      
      {/* Additional decorative lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
      </div>
      
      {/* Tech Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-300/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-cyan-400/4 rounded-full blur-2xl animate-pulse animation-delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-400/6 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('about.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t('about.subtitle')}
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
                    {t('about.history.title')}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 leading-relaxed"
                  >
                    {t('about.history.content')}
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
                      {t('about.mission.title')}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-300 leading-relaxed"
                    >
                      {t('about.mission.content')}
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
                      {t('about.team.title')}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-300 leading-relaxed"
                    >
                      {t('about.team.content')}
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

