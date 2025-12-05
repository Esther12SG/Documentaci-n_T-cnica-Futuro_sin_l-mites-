"use client"

import { StudyNavigation } from "@/components/study-navigation"
import { CourseContent } from "@/components/course-content"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code2, Users, Clock, Award } from "lucide-react"

export default function PythonBasicoPage() {
  const lessons = [
    {
      id: 1,
      title: "Introducción a Python y Configuración",
      duration: 15,
      description: "Aprende qué es Python y cómo instalarlo en tu computadora.",
      type: "video" as const,
      completed: true,
    },
    {
      id: 2,
      title: "Variables y Tipos de Datos",
      duration: 20,
      description: "Entender variables, strings, números y listas en Python.",
      type: "video" as const,
      completed: true,
    },
    {
      id: 3,
      title: "Práctica: Crea tu Primer Programa",
      duration: 30,
      description: "Ejercicio práctico para escribir tu primer programa en Python.",
      type: "practice" as const,
      completed: true,
    },
    {
      id: 4,
      title: "Condicionales (if, else, elif)",
      duration: 25,
      description: "Aprende a tomar decisiones en tu código con condicionales.",
      type: "video" as const,
      completed: false,
    },
    {
      id: 5,
      title: "Bucles (for y while)",
      duration: 25,
      description: "Automatiza tareas repetitivas con bucles.",
      type: "video" as const,
      completed: false,
    },
    {
      id: 6,
      title: "Práctica: Calculadora Simple",
      duration: 40,
      description: "Proyecto: Construye una calculadora funcional en Python.",
      type: "project" as const,
      completed: false,
    },
    {
      id: 7,
      title: "Funciones y Reutilización de Código",
      duration: 22,
      description: "Crea funciones reutilizables para código más limpio.",
      type: "video" as const,
      completed: false,
    },
    {
      id: 8,
      title: "Proyecto Final: Juego de Números",
      duration: 60,
      description: "Crea tu primer juego interactivo en Python.",
      type: "project" as const,
      completed: false,
    },
  ]

  return (
    <>
      <StudyNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/20 to-primary/10 border-b border-primary/30 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-primary/30 flex items-center justify-center">
                <Code2 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold">Python Básico</h1>
                <p className="text-foreground/60 mt-1">Desde cero hasta tu primer programa</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-foreground/60">Estudiantes</p>
                    <p className="font-bold">5.2k+</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-foreground/60">Duración</p>
                    <p className="font-bold">4 semanas</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-foreground/60">Nivel</p>
                    <p className="font-bold">Principiante</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <Badge>Gratis</Badge>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <CourseContent courseName="Python Básico" lessons={lessons} progress={37.5} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                <h3 className="font-bold mb-4">Requisitos</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Computadora (Windows, Mac o Linux)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Conexión a internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ganas de aprender</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
                <h3 className="font-bold mb-4">Qué Aprenderás</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Conceptos fundamentales de programación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Dominio de la sintaxis de Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Crear programas interactivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Resolver problemas con código</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-bold mb-4">Instructor</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Carlos Rodríguez</p>
                    <p className="text-xs text-foreground/60">Ingeniero Senior</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">
                  Con 10+ años de experiencia enseñando programación a estudiantes de todas edades.
                </p>
              </Card>

              <Button className="w-full bg-primary hover:bg-primary/90 py-6">Descargar Certificado</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
