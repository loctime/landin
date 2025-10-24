'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { agents, companyLogos } from '@/data/homepage-data'
import { Sparkles, Zap } from 'lucide-react'
import { useTranslations } from '@/hooks/use-translations'

const AgentsSection = React.memo(() => {
  const { t } = useTranslations()
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
    <section id="servicios" className="py-8 sm:py-12 bg-black relative overflow-hidden">
      {/* Efectos de fondo estáticos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-opptim-green rounded-full blur-3xl opacity-0.03" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-0.03" />

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
            <Zap className="w-4 h-4 text-opptim-green" />
            <span className="text-opptim-green text-sm font-medium">{t('agents.poweredBy')}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('agents.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('agents.subtitle')}
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
            {t('agents.sectors')}
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
                {t(`agents.sectorsList.${logo.key}`)}
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
                <SpotlightCard
                  spotlightColor="16, 185, 129" // opptim-green RGB
                  className={`
                    relative p-4 sm:p-6 text-center cursor-pointer h-full
                    hover:border-opptim-green/60 transition-all duration-300
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
                      <div className="bg-gradient-to-r from-opptim-green to-emerald-400 text-black px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg shadow-opptim-green/50">
                        <Sparkles className="w-3 h-3" />
                        {t('agents.popular')}
                      </div>
                    </motion.div>
                  )}

                  {/* Avatar con animaciones */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="relative mb-4 mx-auto"
                  >
                    <div className="relative">

                      <div className="w-16 h-16 flex items-center justify-center mx-auto text-3xl relative z-10">
                        {agent.avatar.includes('.png') || agent.avatar.includes('.jpg') || agent.avatar.includes('.svg') ? (
                          <Image 
                            src={agent.avatar} 
                            alt={agent.name}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        ) : (
                          agent.avatar
                        )}
                      </div>
                    </div>
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
                      {t(`agents.agent${index + 1}.name`)}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.05, color: "#10b981" }}
                      className="text-opptim-green text-sm font-medium mb-3"
                    >
                      {t(`agents.agent${index + 1}.specialty`)}
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-400 text-xs leading-relaxed"
                    >
                      {t(`agents.agent${index + 1}.description`)}
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
                </SpotlightCard>
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
