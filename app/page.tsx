"use client"

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  Navigation,
  HeroSection,
  ProcessSection,
  AgentsSection,
  StatsSection,
  TestimonialsSection,
  FAQSection,
  UrgencySection,
  Footer,
} from '@/components/sections'

export default function HomePage() {
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ProcessSection />
      <AgentsSection />
      <TestimonialsSection />
      <FAQSection />
      <UrgencySection />
      <Footer />
    </div>
  )
}
