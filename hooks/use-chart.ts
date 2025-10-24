'use client'

import { useMemo } from 'react'
import type { ChartConfig } from '@/components/ui/chart'

export function useChartConfig(config: ChartConfig) {
  return useMemo(() => config, [config])
}

export function useChartColors(config: ChartConfig) {
  return useMemo(() => {
    return Object.entries(config).reduce((acc, [key, itemConfig]) => {
      if (itemConfig.theme || itemConfig.color) {
        acc[key] = (itemConfig.color || itemConfig.theme) as string | Record<string, string>
      }
      return acc
    }, {} as Record<string, string | Record<string, string>>)
  }, [config])
}

export function useChartTheme(config: ChartConfig, theme: 'light' | 'dark' = 'light') {
  return useMemo(() => {
    return Object.entries(config).reduce((acc, [key, itemConfig]) => {
      if (itemConfig.theme) {
        acc[key] = itemConfig.theme[theme] || itemConfig.theme.light
      } else if (itemConfig.color) {
        acc[key] = itemConfig.color
      }
      return acc
    }, {} as Record<string, string>)
  }, [config, theme])
}
