"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code2, Palette, Building2 } from "lucide-react"
import Link from "next/link"

interface Area {
  id_area: number
  nombre_area: string
  descripcion: string
  icono: string
}

const iconMap: { [key: string]: React.ReactNode } = {
  Programación: <Code2 className="w-8 h-8" />,
  "Diseño Gráfico": <Palette className="w-8 h-8" />,
  Arquitectura: <Building2 className="w-8 h-8" />,
}

export default function AreasPage() {
  const [areas, setAreas] = useState<Area[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch("/api/areas")
        const data = await response.json()
        setAreas(data)
      } catch (error) {
        console.error("Error fetching areas:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAreas()
  }, [])

  return (
    <main className="min-h-screen bg-background pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl sm:text-7xl font-black mb-6">
              <span className="gradient-text">Áreas de Especialización</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Explora todas las áreas profesionales disponibles en nuestra plataforma
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-foreground/70">Cargando áreas...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {areas.map((area) => (
                <Card
                  key={area.id_area}
                  className="p-10 bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/50 card-hover group h-full flex flex-col"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-8 group-hover:scale-125 transition text-white">
                    {iconMap[area.nombre_area]}
                  </div>
                  <h3 className="text-2xl font-black mb-4 gradient-text">{area.nombre_area}</h3>
                  <p className="text-foreground/70 mb-8 flex-grow">{area.descripcion}</p>
                  <Link href={`/cursos?area=${area.id_area}`}>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg font-bold">
                      Ver Cursos <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
