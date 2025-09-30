'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SidebarFooterProps extends React.ComponentProps<'div'> {}

export const SidebarFooter = React.memo<SidebarFooterProps>(({ 
  className, 
  ...props 
}) => {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
})

SidebarFooter.displayName = 'SidebarFooter'
