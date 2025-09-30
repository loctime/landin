'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SidebarContentProps extends React.ComponentProps<'div'> {}

export const SidebarContent = React.memo<SidebarContentProps>(({ 
  className, 
  ...props 
}) => {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className
      )}
      {...props}
    />
  )
})

SidebarContent.displayName = 'SidebarContent'
