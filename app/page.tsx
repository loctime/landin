"use client"

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  Navigation,
  HeroSection,
  StatsSection,
  AboutSection,
  PricingBanner,
  FAQSection,
  UrgencySection,
  Footer,
} from '@/components/sections'
import {
  LazySection,
  LazyProcessSectionWithSkeleton,
  LazyFeaturesAnimatedWithSkeleton,
  LazyTestimonialsSectionWithSkeleton,
  LazyAgentsSectionWithSkeleton,
  ErrorBoundary,
} from '@/components/common'

export default function HomePage() {
  useScrollAnimation()

  return (
    <div className="min-h-screen elegant-gradient">
      <ErrorBoundary>
        <Navigation />
        <HeroSection />
        <StatsSection />
      </ErrorBoundary>
      
      {/* Lazy load heavy sections for better performance with specific skeleton loaders */}
      <ErrorBoundary>
        <LazyAgentsSectionWithSkeleton />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <LazyProcessSectionWithSkeleton />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <LazyFeaturesAnimatedWithSkeleton />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <AboutSection />
        <PricingBanner />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <LazyTestimonialsSectionWithSkeleton />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <FAQSection />
        <UrgencySection />
        <Footer />
      </ErrorBoundary>
    </div>
  )
}
