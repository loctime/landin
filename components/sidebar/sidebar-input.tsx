'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface SidebarInputProps extends React.ComponentProps<typeof Input> {}

export const SidebarInput = React.memo<SidebarInputProps>(({ 
  className, 
  ...props 
}) => {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn('bg-background h-8 w-full shadow-none', className)}
      {...props}
    />
  )
})

SidebarInput.displayName = 'SidebarInput'
