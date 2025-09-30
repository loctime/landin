'use client'

import React from 'react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface SidebarSeparatorProps extends React.ComponentProps<typeof Separator> {}

export const SidebarSeparator = React.memo<SidebarSeparatorProps>(({ 
  className, 
  ...props 
}) => {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('bg-sidebar-border mx-2 w-auto', className)}
      {...props}
    />
  )
})

SidebarSeparator.displayName = 'SidebarSeparator'
