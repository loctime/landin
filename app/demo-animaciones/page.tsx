import { FeaturesAnimated, StatsAnimated, InteractiveCards } from '@/components/sections'
import { Navigation } from '@/components/sections/navigation'

export default function DemoAnimaciones() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero con animación */}
      <section className="pt-32 pb-16 px-4 text-center bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Componentes{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Animados
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Explora nuestros componentes con animaciones fluidas y profesionales
          </p>
        </div>
      </section>

      {/* Componentes animados */}
      <FeaturesAnimated />
      <StatsAnimated />
      <InteractiveCards />
    </main>
  )
}

