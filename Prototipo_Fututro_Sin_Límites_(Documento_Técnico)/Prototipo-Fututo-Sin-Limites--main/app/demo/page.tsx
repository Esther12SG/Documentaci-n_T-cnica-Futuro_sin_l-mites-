"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code2, Zap } from "lucide-react"

interface Area {
  id_area: number
  nombre_area: string
  descripcion: string
  icono: string
}

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

export default function DemoPage() {
  const [areas, setAreas] = useState<Area[]>([])
  const [recursos, setRecursos] = useState<Recurso[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"areas" | "recursos">("areas")
  const [showResponse, setShowResponse] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const areasResponse = await fetch("/api/areas")
        const areasData = await areasResponse.json()
        setAreas(areasData)

        const recursosResponse = await fetch("/api/recursos?id_area=1")
        const recursosData = await recursosResponse.json()
        setRecursos(recursosData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="min-h-screen bg-background pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-6xl sm:text-7xl font-black mb-6">
              <span className="gradient-text">Demo Técnico API</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl">
              Demostración de cómo el frontend consume los endpoints REST de la plataforma Futuro Sin Límite
            </p>
          </div>

          <div className="flex gap-4 mb-12 flex-wrap">
            <Button
              onClick={() => setActiveTab("areas")}
              variant={activeTab === "areas" ? "default" : "outline"}
              className="rounded-full px-8 py-6 text-lg font-bold"
            >
              <Code2 className="mr-2 w-5 h-5" />
              GET /api/areas
            </Button>
            <Button
              onClick={() => setActiveTab("recursos")}
              variant={activeTab === "recursos" ? "default" : "outline"}
              className="rounded-full px-8 py-6 text-lg font-bold"
            >
              <Code2 className="mr-2 w-5 h-5" />
              GET /api/recursos
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-foreground/70 text-lg">Cargando datos del API...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-black mb-6 gradient-text">Solicitud HTTP</h2>
                <Card className="p-8 bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/50 h-full">
                  {activeTab === "areas" ? (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Método</p>
                        <div className="bg-background rounded p-3 font-mono text-sm text-green-400">GET</div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Endpoint</p>
                        <div className="bg-background rounded p-3 font-mono text-sm text-blue-400 break-all">
                          /api/areas
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Descripción</p>
                        <p className="text-foreground/70">
                          Devuelve un array de todas las áreas profesionales disponibles.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Código de Ejemplo</p>
                        <div className="bg-background rounded p-3 font-mono text-xs overflow-x-auto text-yellow-300">
                          <pre>{`fetch('/api/areas')
  .then(res => res.json())
  .then(data => console.log(data))`}</pre>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Método</p>
                        <div className="bg-background rounded p-3 font-mono text-sm text-green-400">GET</div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Endpoint</p>
                        <div className="bg-background rounded p-3 font-mono text-sm text-blue-400 break-all">
                          /api/recursos?id_area=1&tipo=video&nivel=principiante
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Parámetros Query</p>
                        <div className="space-y-2 text-sm text-foreground/70">
                          <p>
                            <span className="text-primary">id_area</span>: número - Filtrar por área
                          </p>
                          <p>
                            <span className="text-primary">tipo</span>: video, articulo, juego
                          </p>
                          <p>
                            <span className="text-primary">nivel</span>: principiante, intermedio, avanzado
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6 gradient-text">Respuesta JSON</h2>
                <Card className="p-8 bg-gradient-to-br from-secondary/15 to-secondary/5 border border-secondary/50 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-semibold text-secondary">Status Code: 200 OK</p>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setShowResponse(!showResponse)}
                      className="rounded-full"
                    >
                      {showResponse ? "Ocultar" : "Mostrar"}
                    </Button>
                  </div>

                  {showResponse && (
                    <div className="bg-background rounded p-4 overflow-x-auto max-h-96 overflow-y-auto">
                      <pre className="font-mono text-xs text-green-400 whitespace-pre-wrap break-words">
                        {activeTab === "areas" ? JSON.stringify(areas, null, 2) : JSON.stringify(recursos, null, 2)}
                      </pre>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          )}

          <div className="mt-20">
            <h2 className="text-4xl font-black mb-12 gradient-text">Otros Endpoints Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/50">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">POST /api/registro</h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      Registra nuevo usuario. Valida datos y evita correos duplicados.
                    </p>
                    <div className="bg-background rounded p-3 font-mono text-xs text-yellow-300 mb-4 overflow-x-auto">
                      <pre>{`{
  "nombre": "Juan Pérez",
  "correo": "juan@email.com",
  "password": "segura123",
  "rol": "estudiante",
  "comunidad": "Aldea San Lucas"
}`}</pre>
                    </div>
                    <p className="text-xs text-foreground/60">Status: 201 | 400 | 409</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/50">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">POST /api/progreso</h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      Registra progreso del usuario en recursos específicos.
                    </p>
                    <div className="bg-background rounded p-3 font-mono text-xs text-yellow-300 mb-4 overflow-x-auto">
                      <pre>{`{
  "id_usuario": 1,
  "id_recurso": 5,
  "estado": "completado",
  "puntuacion": 95
}`}</pre>
                    </div>
                    <p className="text-xs text-foreground/60">Status: 201 Created</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="mt-20 p-12 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/50">
            <h3 className="text-2xl font-black mb-4">Información Técnica</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  Endpoints construidos con <span className="text-primary font-semibold">NextResponse.json()</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  Datos almacenados en <span className="text-primary font-semibold">arrays en memoria</span> (mock)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  Modelo SQL en PostgreSQL: <span className="text-primary font-semibold">database/schema.sql</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  Frontend consume APIs con React hooks en{" "}
                  <span className="text-primary font-semibold">Client Component</span>
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </main>
  )
}
