'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ThemeToggleProps extends React.ComponentProps<typeof Button> {
  theme?: 'light' | 'dark' | 'system'
  onThemeChange?: (theme: 'light' | 'dark' | 'system') => void
}

export const ThemeToggle = React.memo<ThemeToggleProps>(({
  theme = 'system',
  onThemeChange,
  className,
  ...props
}) => {
  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
    onThemeChange?.(newTheme)
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className={cn('h-9 w-9', className)}
      {...props}
    >
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
})

ThemeToggle.displayName = 'ThemeToggle'
