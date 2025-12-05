"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Play, Gamepad2, BookOpen } from "lucide-react"

interface Recurso {
  id_recurso: number
  titulo: string
  descripcion: string
  tipo: string
  url_recurso: string
  nivel: string
  id_area: number
  es_juego: boolean
}

function CursosContent() {
  const searchParams = useSearchParams()
  const area = searchParams.get("area")

  const [recursos, setRecursos] = useState<Recurso[]>([])
  const [loading, setLoading] = useState(true)
  const [filtro, setFiltro] = useState("todos")

  useEffect(() => {
    const fetchRecursos = async () => {
      try {
        let url = "/api/recursos"
        if (area) {
          url += `?id_area=${area}`
        }
        const response = await fetch(url)
        const data = await response.json()
        setRecursos(data)
      } catch (error) {
        console.error("Error fetching recursos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecursos()
  }, [area])

  const recursosFiltrados =
    filtro === "todos"
      ? recursos
      : filtro === "juegos"
        ? recursos.filter((r) => r.es_juego)
        : recursos.filter((r) => !r.es_juego)

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case "video":
        return <Play className="w-5 h-5" />
      case "juego":
        return <Gamepad2 className="w-5 h-5" />
      case "articulo":
        return <BookOpen className="w-5 h-5" />
      default:
        return <PlayIcon className="w-5 h-5" />
    }
  }

  const getLevelColor = (nivel: string) => {
    switch (nivel) {
      case "principiante":
        return "bg-green-500/20 text-green-400"
      case "intermedio":
        return "bg-yellow-500/20 text-yellow-400"
      case "avanzado":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-blue-500/20 text-blue-400"
    }
  }

  return (
    <main className="min-h-screen bg-background pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-6xl sm:text-7xl font-black mb-6">
              <span className="gradient-text">Cursos y Recursos</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl">
              Acceso a contenido educativo de calidad: videos, juegos interactivos y artículos
            </p>
          </div>

          {/* Filtros */}
          <div className="flex gap-4 mb-12 flex-wrap">
            <Button
              onClick={() => setFiltro("todos")}
              variant={filtro === "todos" ? "default" : "outline"}
              className="rounded-full"
            >
              Todos
            </Button>
            <Button
              onClick={() => setFiltro("juegos")}
              variant={filtro === "juegos" ? "default" : "outline"}
              className="rounded-full"
            >
              Juegos
            </Button>
            <Button
              onClick={() => setFiltro("otros")}
              variant={filtro === "otros" ? "default" : "outline"}
              className="rounded-full"
            >
              Videos y Artículos
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-foreground/70">Cargando recursos...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recursosFiltrados.map((recurso) => (
                <Card
                  key={recurso.id_recurso}
                  className="p-6 bg-gradient-to-br from-card to-card/50 border border-border card-hover group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      {getTipoIcon(recurso.tipo)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(recurso.nivel)}`}>
                      {recurso.nivel}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-primary transition">
                    {recurso.titulo}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6 flex-grow">{recurso.descripcion}</p>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg font-bold">
                    Acceder <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>
          )}

          {recursosFiltrados.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-foreground/70 text-lg">No hay recursos disponibles con los filtros seleccionados</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default function CursosPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <CursosContent />
    </Suspense>
  )
}

function PlayIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
  )
}
