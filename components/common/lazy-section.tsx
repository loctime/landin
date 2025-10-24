'use client'

import React, { Suspense, lazy } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  HeroSkeleton, 
  StatsSkeleton, 
  FeaturesSkeleton, 
  ProcessSkeleton, 
  TestimonialsSkeleton, 
  AgentsSkeleton, 
  AboutSkeleton, 
  FAQSkeleton, 
  SectionSkeleton 
} from './skeleton-loaders'

interface LazySectionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
}

const DefaultFallback = () => <SectionSkeleton />

export const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <DefaultFallback />,
  className = ""
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  )
}

// Lazy loaders para secciones pesadas con skeleton loaders específicos
export const LazyProcessSection = lazy(() => 
  import('@/components/sections/process-section').then(module => ({
    default: module.ProcessSection
  }))
)

export const LazyFeaturesAnimated = lazy(() => 
  import('@/components/sections/features-animated').then(module => ({
    default: module.FeaturesAnimated
  }))
)

export const LazyTestimonialsSection = lazy(() => 
  import('@/components/sections/testimonials-section').then(module => ({
    default: module.TestimonialsSection
  }))
)

export const LazyAgentsSection = lazy(() => 
  import('@/components/sections/agents-section').then(module => ({
    default: module.AgentsSection
  }))
)

// Componentes lazy con skeleton loaders específicos
export const LazyProcessSectionWithSkeleton = () => (
  <Suspense fallback={<ProcessSkeleton />}>
    <LazyProcessSection />
  </Suspense>
)

export const LazyFeaturesAnimatedWithSkeleton = () => (
  <Suspense fallback={<FeaturesSkeleton />}>
    <LazyFeaturesAnimated />
  </Suspense>
)

export const LazyTestimonialsSectionWithSkeleton = () => (
  <Suspense fallback={<TestimonialsSkeleton />}>
    <LazyTestimonialsSection />
  </Suspense>
)

export const LazyAgentsSectionWithSkeleton = () => (
  <Suspense fallback={<AgentsSkeleton />}>
    <LazyAgentsSection />
  </Suspense>
)
