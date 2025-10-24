'use client'

import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card'

// Skeleton para Hero Section
export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-6">
      <Skeleton className="h-16 w-3/4 mx-auto" />
      <Skeleton className="h-8 w-1/2 mx-auto" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-32" />
      </div>
    </div>
  </div>
)

// Skeleton para Stats Section
export const StatsSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <Card key={i} className="p-6 text-center">
        <Skeleton className="h-8 w-16 mx-auto mb-2" />
        <Skeleton className="h-4 w-24 mx-auto" />
      </Card>
    ))}
  </div>
)

// Skeleton para Features Section
export const FeaturesSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <Card key={i} className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Skeleton className="h-12 w-12 rounded-xl" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-end mt-4">
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </Card>
    ))}
  </div>
)

// Skeleton para Process Section
export const ProcessSkeleton = () => (
  <div className="space-y-8">
    <div className="text-center">
      <Skeleton className="h-12 w-96 mx-auto mb-4" />
      <Skeleton className="h-6 w-64 mx-auto" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="text-center">
          <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
          <Skeleton className="h-6 w-32 mx-auto mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mx-auto" />
        </div>
      ))}
    </div>
  </div>
)

// Skeleton para Testimonials Section
export const TestimonialsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 3 }).map((_, i) => (
      <Card key={i} className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div>
            <Skeleton className="h-4 w-24 mb-1" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex mt-4">
          {Array.from({ length: 5 }).map((_, j) => (
            <Skeleton key={j} className="h-4 w-4 rounded mr-1" />
          ))}
        </div>
      </Card>
    ))}
  </div>
)

// Skeleton para Agents Section
export const AgentsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <Card key={i} className="p-6">
        <div className="text-center">
          <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4" />
          <Skeleton className="h-6 w-32 mx-auto mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-8 w-24 mx-auto rounded-full" />
        </div>
      </Card>
    ))}
  </div>
)

// Skeleton para About Section
export const AboutSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <Skeleton className="h-12 w-80" />
      <Skeleton className="h-6 w-64" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="text-center">
            <Skeleton className="h-12 w-12 rounded-full mx-auto mb-2" />
            <Skeleton className="h-4 w-20 mx-auto" />
          </div>
        ))}
      </div>
    </div>
    <div className="relative">
      <Skeleton className="h-96 w-full rounded-lg" />
    </div>
  </div>
)

// Skeleton para FAQ Section
export const FAQSkeleton = () => (
  <div className="space-y-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <Card key={i} className="p-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-6 w-6 rounded" />
        </div>
      </Card>
    ))}
  </div>
)

// Skeleton genérico para secciones
export const SectionSkeleton = ({ 
  title = true, 
  subtitle = true, 
  content = "grid" 
}: {
  title?: boolean
  subtitle?: boolean
  content?: "grid" | "list" | "cards"
}) => (
  <div className="space-y-8">
    {(title || subtitle) && (
      <div className="text-center space-y-4">
        {title && <Skeleton className="h-12 w-96 mx-auto" />}
        {subtitle && <Skeleton className="h-6 w-64 mx-auto" />}
      </div>
    )}
    
    {content === "grid" && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="p-6">
            <Skeleton className="h-32 w-full mb-4" />
            <Skeleton className="h-5 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-2/3" />
          </Card>
        ))}
      </div>
    )}
    
    {content === "list" && (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 p-4 border rounded-lg">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    )}
    
    {content === "cards" && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="p-4">
            <Skeleton className="h-20 w-full mb-3" />
            <Skeleton className="h-4 w-3/4 mb-1" />
            <Skeleton className="h-3 w-1/2" />
          </Card>
        ))}
      </div>
    )}
  </div>
)
