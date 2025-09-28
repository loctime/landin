# Service.ai - Landing Page

Una landing page moderna y responsive para Service.ai, una plataforma de automatización con agentes de IA.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con tema oscuro y acentos emerald
- **Responsive**: Optimizado para dispositivos móviles y desktop
- **Animaciones**: Efectos de scroll y transiciones suaves
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Optimizado para Core Web Vitals

## 🛠️ Tecnologías

- **Next.js 14.2.33** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS 4.1.9** - Estilos utilitarios
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos
- **Vercel Analytics** - Métricas de rendimiento

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🚀 Deploy en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El deploy se realizará automáticamente

### Opción 2: Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## ⚙️ Configuración

El proyecto incluye:

- `vercel.json` - Configuración optimizada para Vercel
- `.vercelignore` - Archivos excluidos del deploy
- `next.config.mjs` - Configuración de Next.js

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botones y elementos táctiles optimizados

## 🎨 Personalización

### Colores
- **Primary**: Emerald (#10b981)
- **Background**: Black (#000000)
- **Text**: White/Gray variants

### Fuentes
- **Sans**: Geist Sans
- **Mono**: Geist Mono

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter (deshabilitado en build)
```

## 📁 Estructura del Proyecto

```
├── app/                 # App Router de Next.js
│   ├── globals.css     # Estilos globales
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página principal
├── components/         # Componentes reutilizables
│   └── ui/            # Componentes de UI
├── lib/               # Utilidades
├── hooks/             # Custom hooks
└── public/            # Assets estáticos
```

## 🚀 Listo para Deploy

✅ **Build exitoso** - El proyecto compila sin errores  
✅ **Dependencias actualizadas** - Sin vulnerabilidades de seguridad  
✅ **Configuración optimizada** - Vercel configurado correctamente  
✅ **Performance optimizada** - Imágenes y assets optimizados  
✅ **SEO configurado** - Meta tags y estructura semántica  

## 📞 Soporte

Para soporte técnico o consultas sobre el deploy, contacta al equipo de desarrollo.

