'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SidebarHeaderProps extends React.ComponentProps<'div'> {}

export const SidebarHeader = React.memo<SidebarHeaderProps>(({ 
  className, 
  ...props 
}) => {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
})

SidebarHeader.displayName = 'SidebarHeader'
