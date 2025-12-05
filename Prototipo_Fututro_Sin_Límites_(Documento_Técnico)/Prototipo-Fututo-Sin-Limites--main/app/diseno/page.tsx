"use client"

import { StudyNavigation } from "@/components/study-navigation"
import { CourseCard } from "@/components/course-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Zap, BookOpen } from "lucide-react"

export default function DisenoPage() {
  const fundamentalsCourses = [
    {
      title: "Principios del Diseño",
      description: "Aprende los conceptos fundamentales del diseño visual, composición y teoría del color.",
      duration: "4 semanas",
      students: 4200,
      lessons: 16,
      difficulty: "Principiante" as const,
    },
    {
      title: "Introducción a Figma",
      description: "Domina Figma, la herramienta más popular para diseño de interfaces en 2025.",
      duration: "3 semanas",
      students: 5100,
      lessons: 15,
      difficulty: "Principiante" as const,
      progress: 70,
    },
    {
      title: "Tipografía y Fuentes",
      description: "Selecciona y utiliza tipografía de manera efectiva en tus diseños.",
      duration: "2 semanas",
      students: 2900,
      lessons: 10,
      difficulty: "Principiante" as const,
    },
  ]

  const intermediateCourses = [
    {
      title: "UI/UX Design",
      description: "Diseña interfaces hermosas y funcionales con mejores prácticas de UX.",
      duration: "6 semanas",
      students: 2600,
      lessons: 28,
      difficulty: "Intermedio" as const,
    },
    {
      title: "Adobe Photoshop Profesional",
      description: "Edición de imágenes profesional y diseño gráfico con Photoshop.",
      duration: "5 semanas",
      students: 1800,
      lessons: 24,
      difficulty: "Intermedio" as const,
    },
    {
      title: "Branding y Identidad",
      description: "Crea identidades visuales poderosas y consistentes para marcas.",
      duration: "6 semanas",
      students: 1400,
      lessons: 22,
      difficulty: "Intermedio" as const,
    },
  ]

  const advancedCourses = [
    {
      title: "Motion Graphics",
      description: "Crea animaciones profesionales y efectos visuales dinámicos.",
      duration: "8 semanas",
      students: 980,
      lessons: 36,
      difficulty: "Avanzado" as const,
    },
    {
      title: "Diseño de Experiencia Interactiva",
      description: "Prototipos interactivos y experiencias de usuario avanzadas.",
      duration: "7 semanas",
      students: 750,
      lessons: 32,
      difficulty: "Avanzado" as const,
    },
  ]

  return (
    <>
      <StudyNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Header */}
        <section className="bg-gradient-to-r from-secondary/20 to-secondary/10 border-b border-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center">
                <Palette className="w-6 h-6 text-secondary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold">Diseño Gráfico</h1>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Domina el arte visual. Desde principios de diseño hasta herramientas profesionales como Figma y Adobe.
            </p>
          </div>
        </section>

        {/* Learning Stats */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Cursos Disponibles</p>
                    <p className="text-2xl font-bold">10+</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Horas de Contenido</p>
                    <p className="text-2xl font-bold">120+</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Proyectos Prácticos</p>
                    <p className="text-2xl font-bold">6+</p>
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
                    <CourseCard key={idx} {...course} color="secondary" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="intermediate" className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Cursos Intermedios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {intermediateCourses.map((course, idx) => (
                    <CourseCard key={idx} {...course} color="accent" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Cursos Avanzados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advancedCourses.map((course, idx) => (
                    <CourseCard key={idx} {...course} color="primary" />
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
              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
                <h3 className="text-xl font-bold mb-4">Inspiración de Diseño</h3>
                <p className="text-foreground/70 mb-6">Explora miles de diseños profesionales para inspirarte.</p>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Explorar Galería
                </Button>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
                <h3 className="text-xl font-bold mb-4">Herramientas Recomendadas</h3>
                <p className="text-foreground/70 mb-6">Acceso a software profesional y recursos de diseño.</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Ver Herramientas</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
