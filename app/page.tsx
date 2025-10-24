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
  FeaturesAnimated,
} from '@/components/sections'

export default function HomePage() {
  useScrollAnimation()

  return (
    <div className="min-h-screen elegant-gradient">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AgentsSection />
      <ProcessSection />
      <FeaturesAnimated />
      <AboutSection />
      <PricingBanner />
      <TestimonialsSection />
      <FAQSection />
      <UrgencySection />
      <Footer />
    </div>
  )
}
