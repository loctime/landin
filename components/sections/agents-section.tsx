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
    <section id="servicios" className="elegant-section elegant-gradient relative overflow-hidden">
      {/* Elegant Background Effects */}
      <div className="absolute inset-0 elegant-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-36D6E6/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-45C789/5 rounded-full blur-3xl" />

      <div className="elegant-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 elegant-card px-6 py-3 mb-8"
          >
            <Zap className="w-5 h-5 text-36D6E6" />
            <span className="text-36D6E6 text-base font-medium">{t('agents.poweredBy')}</span>
          </motion.div>

          <h2 className="elegant-title text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Nuestros <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent">agentes</span>
          </h2>
        </motion.div>

        {/* Elegant 2x2 Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="elegant-grid-2x2 max-w-4xl mx-auto"
        >
          {agents.slice(0, 4).map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="elegant-grid-item elegant-hover-lift"
            >
              <div className="w-20 h-20 flex items-center justify-center mx-auto text-4xl mb-6">
                {agent.avatar.includes('.png') || agent.avatar.includes('.jpg') || agent.avatar.includes('.svg') ? (
                  <Image 
                    src={agent.avatar} 
                    alt={agent.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                ) : (
                  agent.avatar
                )}
              </div>
              
              <h3 className="elegant-title text-2xl text-white mb-4">
                {t(`agents.agent${index + 1}.name`)}
              </h3>
              
              <p className="text-gray-300 text-lg mb-6">
                {t(`agents.agent${index + 1}.description`)}
              </p>
              
              <button className="elegant-button">
                Más...
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

AgentsSection.displayName = 'AgentsSection'

export { AgentsSection }
