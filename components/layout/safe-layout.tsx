'use client'

import { ReactNode, useEffect, useState } from 'react'
import { HydrationBoundary } from '@/components/common'

interface SafeLayoutProps {
  children: ReactNode
}

export function SafeLayout({ children }: SafeLayoutProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-background">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <HydrationBoundary fallback={
      <div className="min-h-screen bg-background">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </div>
    }>
      {children}
    </HydrationBoundary>
  )
}
