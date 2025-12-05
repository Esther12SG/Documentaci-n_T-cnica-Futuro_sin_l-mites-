"use client"

import { StudyNavigation } from "@/components/study-navigation"
import { CourseCard } from "@/components/course-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Zap, BookOpen } from "lucide-react"

export default function ProgramacionPage() {
  const fundamentalsCourses = [
    {
      title: "Introducción a Python",
      description:
        "Aprende los conceptos básicos de programación con Python, el lenguaje más amigable para principiantes.",
      duration: "4 semanas",
      students: 5200,
      lessons: 20,
      difficulty: "Principiante" as const,
      progress: 45,
    },
    {
      title: "HTML & CSS Básico",
      description: "Domina los fundamentos de la web. Crea tus primeras páginas web desde cero.",
      duration: "3 semanas",
      students: 6800,
      lessons: 18,
      difficulty: "Principiante" as const,
    },
    {
      title: "Lógica de Programación",
      description: "Aprende a pensar como programador. Algoritmos, variables y estructuras de datos.",
      duration: "5 semanas",
      students: 4100,
      lessons: 25,
      difficulty: "Principiante" as const,
    },
  ]

  const intermediateCourses = [
    {
      title: "JavaScript Interactivo",
      description: "Domina JavaScript y crea aplicaciones web interactivas y dinámicas.",
      duration: "6 semanas",
      students: 3400,
      lessons: 30,
      difficulty: "Intermedio" as const,
      progress: 60,
    },
    {
      title: "React desde Cero",
      description: "Aprende React, la librería más popular para construir interfaces modernas.",
      duration: "7 semanas",
      students: 2800,
      lessons: 35,
      difficulty: "Intermedio" as const,
    },
    {
      title: "Bases de Datos SQL",
      description: "Diseña y gestiona bases de datos con SQL. Fundamental para desarrollo profesional.",
      duration: "5 semanas",
      students: 2100,
      lessons: 22,
      difficulty: "Intermedio" as const,
    },
  ]

  const advancedCourses = [
    {
      title: "Full Stack Development",
      description: "Conviértete en desarrollador full stack. Frontend, backend y bases de datos.",
      duration: "10 semanas",
      students: 1200,
      lessons: 50,
      difficulty: "Avanzado" as const,
    },
    {
      title: "Desarrollo de APIs",
      description: "Diseña y construye APIs RESTful profesionales con Node.js y Express.",
      duration: "8 semanas",
      students: 980,
      lessons: 40,
      difficulty: "Avanzado" as const,
    },
  ]

  return (
    <>
      <StudyNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/20 to-primary/10 border-b border-primary/30 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold">Programación</h1>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Domina el arte de crear software. Desde conceptos fundamentales hasta desarrollo profesional con
              tecnologías modernas.
            </p>
          </div>
        </section>

        {/* Learning Stats */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Cursos Disponibles</p>
                    <p className="text-2xl font-bold">12+</p>
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
                    <p className="text-2xl font-bold">150+</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Proyectos Prácticos</p>
                    <p className="text-2xl font-bold">8+</p>
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
                    <CourseCard key={idx} {...course} color="primary" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="intermediate" className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Cursos Intermedios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {intermediateCourses.map((course, idx) => (
                    <CourseCard key={idx} {...course} color="secondary" />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Cursos Avanzados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advancedCourses.map((course, idx) => (
                    <CourseCard key={idx} {...course} color="accent" />
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
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                <h3 className="text-xl font-bold mb-4">Documentación</h3>
                <p className="text-foreground/70 mb-6">
                  Acceso a documentación oficial de lenguajes y frameworks populares.
                </p>
                <Button className="bg-primary hover:bg-primary/90">Explorar Docs</Button>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
                <h3 className="text-xl font-bold mb-4">Comunidad</h3>
                <p className="text-foreground/70 mb-6">
                  Únete a foros y comunidades donde puedes hacer preguntas y colaborar.
                </p>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Unirse Comunidad
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
