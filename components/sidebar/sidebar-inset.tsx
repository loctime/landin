'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SidebarInsetProps extends React.ComponentProps<'main'> {}

export const SidebarInset = React.memo<SidebarInsetProps>(({ 
  className, 
  ...props 
}) => {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        'bg-background relative flex w-full flex-1 flex-col',
        'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
        className
      )}
      {...props}
    />
  )
})

SidebarInset.displayName = 'SidebarInset'
