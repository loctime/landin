'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Palette, Type, Layout, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ConfigProps {
  onConfigChange?: (config: any) => void
}

interface ConfigState {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  content: {
    companyName: string
    heroTitle: string
    heroSubtitle: string
    ctaText: string
  }
  agents: Array<{
    name: string
    specialty: string
    avatar: string
  }>
  animations: {
    scrollSpeed: string
    fadeInDelay: number
    hoverEffects: boolean
  }
}

const colorPresets = [
  { name: "Emerald Tech", primary: "#10b981", accent: "#34d399" },
  { name: "Blue Corporate", primary: "#3b82f6", accent: "#60a5fa" },
  { name: "Purple Creative", primary: "#8b5cf6", accent: "#a78bfa" },
  { name: "Orange Energy", primary: "#f97316", accent: "#fb923c" },
  { name: "Pink Modern", primary: "#ec4899", accent: "#f472b6" },
]

export const ConfigPanel = React.memo<ConfigProps>(({ onConfigChange }) => {
  const [config, setConfig] = React.useState<ConfigState>({
    colors: {
      primary: "#10b981",
      secondary: "#1f2937",
      accent: "#34d399",
      background: "#000000",
      text: "#ffffff",
    },
    content: {
      companyName: "Orbyn.AI",
      heroTitle: "Eleva tu negocio con agentes de IA",
      heroSubtitle: "Lidera el futuro. Optimiza tu presente",
      ctaText: "Comenzar Ahora",
    },
    agents: [
      { name: "Orion", specialty: "Atención al Cliente", avatar: "🤖" },
      { name: "Nova", specialty: "Llamadas Entrantes", avatar: "👩‍💼" },
      { name: "Echo", specialty: "Gestor de Reservas", avatar: "👨‍💻" },
      { name: "Astra", specialty: "Automatizar Recordatorios", avatar: "🚀" },
      { name: "Iris", specialty: "Análisis Avanzado", avatar: "👁️" },
    ],
    animations: {
      scrollSpeed: "normal",
      fadeInDelay: 100,
      hoverEffects: true,
    },
  })

  const updateConfig = React.useCallback((section: keyof ConfigState, key: string, value: any) => {
    setConfig(prev => {
      const newConfig = {
        ...prev,
        [section]: {
          ...prev[section],
          [key]: value,
        },
      }
      onConfigChange?.(newConfig)
      return newConfig
    })
  }, [onConfigChange])

  return (
    <div className="fixed right-4 top-20 w-80 max-h-[80vh] overflow-y-auto z-50">
      <Card className="bg-gray-900/95 backdrop-blur-md border-emerald-500/30 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Zap className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-semibold text-white">Personalizar Sitio</h3>
        </div>

        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="colors" className="text-xs">
              <Palette className="w-3 h-3" />
            </TabsTrigger>
            <TabsTrigger value="content" className="text-xs">
              <Type className="w-3 h-3" />
            </TabsTrigger>
            <TabsTrigger value="agents" className="text-xs">
              <Layout className="w-3 h-3" />
            </TabsTrigger>
            <TabsTrigger value="effects" className="text-xs">
              <Zap className="w-3 h-3" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-4">
            <div>
              <Label className="text-white text-sm mb-2 block">Presets de Color</Label>
              <div className="grid grid-cols-1 gap-2">
                {colorPresets.map((preset, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="justify-start border-gray-700 hover:border-emerald-500/50 bg-transparent"
                    onClick={() => {
                      updateConfig("colors", "primary", preset.primary)
                      updateConfig("colors", "accent", preset.accent)
                    }}
                  >
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: preset.primary }} />
                    <span className="text-xs text-white">{preset.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label className="text-white text-sm">Color Primario</Label>
                <Input
                  type="color"
                  value={config.colors.primary}
                  onChange={(e) => updateConfig("colors", "primary", e.target.value)}
                  className="h-8 bg-gray-800 border-gray-700"
                />
              </div>
              <div>
                <Label className="text-white text-sm">Color de Acento</Label>
                <Input
                  type="color"
                  value={config.colors.accent}
                  onChange={(e) => updateConfig("colors", "accent", e.target.value)}
                  className="h-8 bg-gray-800 border-gray-700"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <div>
              <Label className="text-white text-sm">Nombre de la Empresa</Label>
              <Input
                value={config.content.companyName}
                onChange={(e) => updateConfig("content", "companyName", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <Label className="text-white text-sm">Título Principal</Label>
              <Textarea
                value={config.content.heroTitle}
                onChange={(e) => updateConfig("content", "heroTitle", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white h-20"
              />
            </div>
            <div>
              <Label className="text-white text-sm">Subtítulo</Label>
              <Input
                value={config.content.heroSubtitle}
                onChange={(e) => updateConfig("content", "heroSubtitle", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <Label className="text-white text-sm">Texto del Botón</Label>
              <Input
                value={config.content.ctaText}
                onChange={(e) => updateConfig("content", "ctaText", e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </TabsContent>

          <TabsContent value="agents" className="space-y-4">
            <div>
              <Label className="text-white text-sm mb-2 block">Agentes IA</Label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {config.agents.map((agent, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-gray-800 rounded">
                    <span className="text-lg">{agent.avatar}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs font-medium truncate">{agent.name}</div>
                      <div className="text-gray-400 text-xs truncate">{agent.specialty}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="w-full border-emerald-500/30 text-emerald-400 bg-transparent"
            >
              Agregar Agente
            </Button>
          </TabsContent>

          <TabsContent value="effects" className="space-y-4">
            <div>
              <Label className="text-white text-sm">Velocidad de Animación</Label>
              <Select
                value={config.animations.scrollSpeed}
                onValueChange={(value) => updateConfig("animations", "scrollSpeed", value)}
              >
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="slow">Lenta</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="fast">Rápida</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-white text-sm">Retraso de Aparición (ms)</Label>
              <Input
                type="number"
                value={config.animations.fadeInDelay}
                onChange={(e) => updateConfig("animations", "fadeInDelay", Number.parseInt(e.target.value))}
                className="bg-gray-800 border-gray-700 text-white"
                min="0"
                max="1000"
                step="50"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-4 border-t border-gray-700">
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black">Aplicar Cambios</Button>
        </div>
      </Card>
    </div>
  )
})

ConfigPanel.displayName = 'ConfigPanel'
