"use client"

import { StudyNavigation } from "@/components/study-navigation"
import { CourseCard } from "@/components/course-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Zap, BookOpen } from "lucide-react"

export default function ArquitecturaPage() {
  const fundamentalsCourses = [
    {
      title: "Principios de Diseño Arquitectónico",
      description: "Aprende los fundamentos del diseño de espacios, composición y funcionalidad.",
      duration: "4 semanas",
      students: 2800,
      lessons: 18,
      difficulty: "Principiante" as const,
    },
    {
      title: "Introducción a AutoCAD",
      description: "Domina AutoCAD, el software estándar para diseño y planos arquitectónicos.",
      duration: "5 semanas",
      students: 3600,
      lessons: 22,
      difficulty: "Principiante" as const,
      progress: 35,
    },
    {
      title: "Historia de la Arquitectura",
      description: "Comprende los movimientos y estilos arquitectónicos a través de la historia.",
      duration: "3 semanas",
      students: 1900,
      lessons: 12,
      difficulty: "Principiante" as const,
    },
  ]

  const intermediateCourses = [
    {
      title: "Modelado 3D en SketchUp",
      description: "Crea modelos 3D profesionales de edificios y espacios interiores.",
      duration: "6 semanas",
      students: 2200,
      lessons: 28,
      difficulty: "Intermedio" as const,
    },
    {
      title: "Diseño Bioclimático",
      description: "Aprende a diseñar edificios sostenibles y eficientes energéticamente.",
      duration: "5 semanas",
      students: 1600,
      lessons: 20,
      difficulty: "Intermedio" as const,
    },
    {
      title: "Visualización Arquitectónica",
      description: "Crea renderizados profesionales y visualizaciones de tus proyectos.",
      duration: "6 semanas",
      students: 1400,
      lessons: 25,
      difficulty: "Intermedio" as const,
    },
  ]

  const advancedCourses = [
    {
      title: "Proyecto Integral: Diseño de Edificio",
      description: "Desarrolla un proyecto completo desde conceptualización hasta presentación final.",
      duration: "10 semanas",
      students: 680,
      lessons: 45,
      difficulty: "Avanzado" as const,
    },
    {
      title: "Revit BIM Profesional",
      description: "Modelado BIM (Building Information Modeling) con Revit para arquitectos.",
      duration: "8 semanas",
      students: 520,
      lessons: 38,
      difficulty: "Avanzado" as const,
    },
  ]

  return (
    <>
      <StudyNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Header */}
        <section className="bg-gradient-to-r from-accent/20 to-accent/10 border-b border-accent/30 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold">Arquitectura</h1>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Diseña el futuro. Aprende desde principios de diseño hasta software profesional y prácticas sostenibles.
            </p>
          </div>
        </section>

        {/* Learning Stats */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Cursos Disponibles</p>
                    <p className="text-2xl font-bold">9+</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Horas de Contenido</p>
                    <p className="text-2xl font-bold">140+</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Proyectos Prácticos</p>
                    <p className="text-2xl font-bold">7+</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses by Level */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="fundamentals" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="fundamentals">Principiante</TabsTrigger>
                <TabsTrigger value="intermediate">Intermedio</TabsTrigger>
                <TabsTrigger value="advanced">Avanzado</TabsTrigger>
              </TabsList>

              <TabsContent value="fundamentals" className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Cursos Fundamentales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fundamentalsCourses.map((course, idx) => (
                    <CourseCard key={idx} {...course} color="accent" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="intermediate" className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Cursos Intermedios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {intermediateCourses.map((course, idx) => (
                    <CourseCard key={idx} {...course} color="primary" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Cursos Avanzados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advancedCourses.map((course, idx) => (
                    <CourseCard key={idx} {...course} color="secondary" />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Resources */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Recursos Adicionales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
                <h3 className="text-xl font-bold mb-4">Portafolio de Proyectos</h3>
                <p className="text-foreground/70 mb-6">
                  Construye tu portafolio y muestra tus proyectos a posibles empleadores.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Crear Portafolio</Button>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                <h3 className="text-xl font-bold mb-4">Mentoría Profesional</h3>
                <p className="text-foreground/70 mb-6">
                  Conéctate con arquitectos profesionales para orientación y consejos.
                </p>
                <Button className="bg-primary hover:bg-primary/90">Solicitar Mentor</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
