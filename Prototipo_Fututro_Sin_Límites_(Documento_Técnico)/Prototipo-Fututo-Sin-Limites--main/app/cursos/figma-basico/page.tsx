"use client"

import { StudyNavigation } from "@/components/study-navigation"
import { CourseContent } from "@/components/course-content"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Users, Clock, Award } from "lucide-react"

export default function FigmaBasicoPage() {
  const lessons = [
    {
      id: 1,
      title: "Introducción a Figma",
      duration: 18,
      description: "Conoce Figma y cómo registrarse en la plataforma.",
      type: "video" as const,
      completed: true,
    },
    {
      id: 2,
      title: "Navegación y Herramientas Básicas",
      duration: 22,
      description: "Aprende las herramientas esenciales de Figma.",
      type: "video" as const,
      completed: true,
    },
    {
      id: 3,
      title: "Práctica: Tu Primer Diseño",
      duration: 35,
      description: "Crea tu primer diseño simple en Figma.",
      type: "practice" as const,
      completed: true,
    },
    {
      id: 4,
      title: "Componentes y Reutilización",
      duration: 25,
      description: "Crea componentes reutilizables para diseños consistentes.",
      type: "video" as const,
      completed: false,
    },
    {
      id: 5,
      title: "Prototipado Interactivo",
      duration: 28,
      description: "Crea prototipos interactivos y animaciones simples.",
      type: "video" as const,
      completed: false,
    },
    {
      id: 6,
      title: "Proyecto: Diseño de App Móvil",
      duration: 50,
      description: "Diseña una aplicación móvil completa desde cero.",
      type: "project" as const,
      completed: false,
    },
  ]

  return (
    <>
      <StudyNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Header */}
        <section className="bg-gradient-to-r from-secondary/20 to-secondary/10 border-b border-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-secondary/30 flex items-center justify-center">
                <Palette className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold">Figma Básico</h1>
                <p className="text-foreground/60 mt-1">Diseño de interfaces desde cero</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-xs text-foreground/60">Estudiantes</p>
                    <p className="font-bold">4.1k+</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-xs text-foreground/60">Duración</p>
                    <p className="font-bold">3 semanas</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-card/50">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-secondary" />
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
              <CourseContent courseName="Figma Básico" lessons={lessons} progress={50} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
                <h3 className="font-bold mb-4">Requisitos</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Cuenta de Figma (gratuita)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Navegador web moderno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Ratón (recomendado)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
                <h3 className="font-bold mb-4">Qué Aprenderás</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Interfaz y herramientas de Figma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Crear diseños web y móvil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Sistemas de diseño</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Prototipos interactivos</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-bold mb-4">Instructora</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">María González</p>
                    <p className="text-xs text-foreground/60">Diseñadora UX/UI</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70">
                  Diseñadora profesional con experiencia en startups y empresas Fortune 500.
                </p>
              </Card>

              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6">
                Descargar Certificado
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
