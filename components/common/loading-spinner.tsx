'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'dots' | 'pulse' | 'bounce'
  color?: 'primary' | 'secondary' | 'accent'
}

export const LoadingSpinner = React.memo<LoadingSpinnerProps>(({
  size = 'md',
  variant = 'default',
  color = 'primary',
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  }

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex space-x-1', className)} {...props}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={cn(
              'rounded-full bg-current animate-pulse',
              sizeClasses[size],
              colorClasses[color]
            )}
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1s',
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div
        className={cn(
          'rounded-full bg-current animate-pulse',
          sizeClasses[size],
          colorClasses[color],
          className
        )}
        {...props}
      />
    )
  }

  if (variant === 'bounce') {
    return (
      <div className={cn('flex space-x-1', className)} {...props}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={cn(
              'rounded-full bg-current animate-bounce',
              sizeClasses[size],
              colorClasses[color]
            )}
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    )
  }

  // Default spinner
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-current border-t-transparent',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...props}
    />
  )
})

LoadingSpinner.displayName = 'LoadingSpinner'
