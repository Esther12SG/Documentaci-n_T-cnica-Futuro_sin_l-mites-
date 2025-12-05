"use client"

import { StudyNavigation } from "@/components/study-navigation"
import { DashboardStats } from "@/components/dashboard/stats"
import { ProgressChart } from "@/components/dashboard/progress-chart"
import { Achievements } from "@/components/dashboard/achievements"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { User, Settings, LogOut, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const activeCourses = [
    {
      name: "Python Básico",
      progress: 37.5,
      nextLesson: "Condicionales (if, else, elif)",
      lastAccess: "Hace 2 días",
    },
    {
      name: "Figma Básico",
      progress: 50,
      nextLesson: "Componentes y Reutilización",
      lastAccess: "Hoy",
    },
    {
      name: "AutoCAD Fundamentos",
      progress: 15,
      nextLesson: "Introducción a AutoCAD",
      lastAccess: "Hace 1 semana",
    },
  ]

  const recommendedCourses = [
    { name: "JavaScript Interactivo", area: "Programación", difficulty: "Intermedio" },
    { name: "UI/UX Design", area: "Diseño", difficulty: "Intermedio" },
    { name: "Revit BIM", area: "Arquitectura", difficulty: "Avanzado" },
  ]

  return (
    <>
      <StudyNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/30 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">Bienvenido, Alex</h1>
                <p className="text-foreground/60">Continúa tu viaje de aprendizaje</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Settings className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Alexander Pérez</p>
                <p className="text-sm text-foreground/60">estudiante.alex@education.com</p>
                <Badge className="mt-2">Miembro Plata</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Stats */}
            <DashboardStats />

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Mi Progreso</TabsTrigger>
                <TabsTrigger value="courses">Cursos Activos</TabsTrigger>
                <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8 mt-8">
                <ProgressChart />
                <Achievements />
              </TabsContent>

              {/* Active Courses Tab */}
              <TabsContent value="courses" className="space-y-6 mt-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Cursos en Progreso</h2>
                  <p className="text-foreground/60">Continúa donde lo dejaste</p>
                </div>
                <div className="space-y-4">
                  {activeCourses.map((course) => (
                    <Card key={course.name} className="p-6 bg-card border-border hover:shadow-md transition">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{course.name}</h3>
                          <p className="text-sm text-foreground/60 mb-4">
                            Próxima lección: <span className="font-semibold">{course.nextLesson}</span>
                          </p>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${course.progress}%` }} />
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-2xl font-bold text-primary">{course.progress}%</p>
                          <p className="text-xs text-foreground/60">{course.lastAccess}</p>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
                        Continuar Curso <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Recommendations Tab */}
              <TabsContent value="recommendations" className="space-y-6 mt-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Recomendado Para Ti</h2>
                  <p className="text-foreground/60">Basado en tu actividad y intereses</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendedCourses.map((course) => (
                    <Card key={course.name} className="p-6 bg-card border-border hover:shadow-md transition">
                      <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2">{course.name}</h3>
                        <div className="flex gap-2 mb-4">
                          <Badge variant="secondary">{course.area}</Badge>
                          <Badge variant="outline">{course.difficulty}</Badge>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">Ver Curso</Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Accesos Rápidos</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Link href="/juegos">
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition cursor-pointer">
                  <p className="font-semibold mb-2">Juegos Educativos</p>
                  <p className="text-sm text-foreground/60">Practica jugando</p>
                </Card>
              </Link>
              <Link href="/oportunidades">
                <Card className="p-6 bg-card border-border hover:border-secondary/50 transition cursor-pointer">
                  <p className="font-semibold mb-2">Oportunidades</p>
                  <p className="text-sm text-foreground/60">Universidades y empleos</p>
                </Card>
              </Link>
              <Link href="/programacion">
                <Card className="p-6 bg-card border-border hover:border-accent/50 transition cursor-pointer">
                  <p className="font-semibold mb-2">Todos los Cursos</p>
                  <p className="text-sm text-foreground/60">Explora nuevas áreas</p>
                </Card>
              </Link>
              <Link href="/">
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition cursor-pointer">
                  <p className="font-semibold mb-2">Comunidad</p>
                  <p className="text-sm text-foreground/60">Conecta con otros</p>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
