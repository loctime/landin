"use client"

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  Navigation,
  HeroSection,
  StatsSection,
  ProcessSection,
  AgentsSection,
  AboutSection,
  PricingBanner,
  TestimonialsSection,
  FAQSection,
  UrgencySection,
  Footer,
  InteractiveCards,
} from '@/components/sections'

export default function HomePage() {
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AgentsSection />
      <AboutSection />
      <PricingBanner />
      <ProcessSection />
      {/* Stack tecnológico interactivo */}
      <InteractiveCards />
      <TestimonialsSection />
      <FAQSection />
      <UrgencySection />
      <Footer />
    </div>
  )
}
