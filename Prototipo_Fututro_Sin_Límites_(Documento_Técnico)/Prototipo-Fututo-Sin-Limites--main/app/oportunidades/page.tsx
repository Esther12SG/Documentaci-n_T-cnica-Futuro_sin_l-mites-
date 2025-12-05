"use client"

import { StudyNavigation } from "@/components/study-navigation"
import { UniversityCard } from "@/components/university-card"
import { JobCard } from "@/components/job-card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Briefcase, TrendingUp, Users } from "lucide-react"

export default function OportunidadesPage() {
  const universities = [
    {
      name: "Universidad da Vinci de Guatemala",
      location: "Ciudad de Guatemala",
      website: "https://davinci.edu.gt",
      specialties: ["Ingeniería en Sistemas", "Diseño Digital", "Arquitectura"],
      scholarships: true,
      studentsEnrolled: 15000,
    },
    {
      name: "Universidad de San Carlos",
      location: "Ciudad de Guatemala",
      website: "https://usac.edu.gt",
      specialties: ["Ingeniería", "Ciencias", "Humanidades"],
      scholarships: true,
      studentsEnrolled: 45000,
    },
    {
      name: "Universidad Galileo",
      location: "Ciudad de Guatemala",
      website: "https://galileo.edu",
      specialties: ["Tecnología", "Negocios", "Diseño"],
      scholarships: true,
      studentsEnrolled: 12000,
    },
    {
      name: "Universidad Mariano Gálvez",
      location: "Ciudad de Guatemala",
      website: "https://umg.edu.gt",
      specialties: ["Ingeniería", "Administración", "Educación"],
      scholarships: true,
      studentsEnrolled: 18000,
    },
    {
      name: "Universidad Rafael Landívar",
      location: "Ciudad de Guatemala",
      website: "https://url.edu.gt",
      specialties: ["Ingeniería", "Arquitectura", "Diseño"],
      scholarships: true,
      studentsEnrolled: 14000,
    },
    {
      name: "Universidad del Valle",
      location: "Altiplano Occidental",
      website: "https://univalle.edu.gt",
      specialties: ["Ingeniería", "Computación", "Tecnología"],
      scholarships: true,
      studentsEnrolled: 8000,
    },
  ]

  const jobOpportunities = [
    {
      title: "Desarrollador Frontend Junior",
      company: "Tech Solutions Guatemala",
      location: "Ciudad de Guatemala / Remoto",
      salary: "Q8,000 - Q12,000",
      type: "Tiempo Completo" as const,
      skills: ["React", "JavaScript", "CSS", "HTML"],
    },
    {
      title: "Diseñador UX/UI",
      company: "Creative Digital",
      location: "Remoto",
      salary: "Q10,000 - Q15,000",
      type: "Tiempo Completo" as const,
      skills: ["Figma", "UI Design", "Prototipado", "Diseño Responsivo"],
    },
    {
      title: "Pasante de Programación",
      company: "Innovatech",
      location: "Ciudad de Guatemala",
      salary: "Q3,500 - Q5,000",
      type: "Pasantía" as const,
      skills: ["Python", "SQL", "Git", "APIs"],
    },
    {
      title: "Asistente de Arquitecto",
      company: "Proyectos Globales S.A.",
      location: "Ciudad de Guatemala",
      salary: "Q6,000 - Q9,000",
      type: "Tiempo Completo" as const,
      skills: ["AutoCAD", "Revit", "SketchUp", "Diseño 3D"],
    },
    {
      title: "Freelancer - Diseño Gráfico",
      company: "Varias Empresas",
      location: "Remoto",
      salary: "Por proyecto",
      type: "Freelance" as const,
      skills: ["Photoshop", "Illustrator", "Creatividad", "Adobe Suite"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "Remoto",
      salary: "Q15,000 - Q25,000",
      type: "Tiempo Completo" as const,
      skills: ["React", "Node.js", "MongoDB", "Deployment"],
    },
  ]

  const scholarships = [
    {
      name: "Beca Fundación Empresaria",
      description: "Apoyo integral para estudiantes de comunidades rurales",
      coverage: "100% colegiatura",
      requirements: "Promedio +80, comunidad rural",
    },
    {
      name: "Beca TechLead Guatemala",
      description: "Enfocada en carreras tecnológicas",
      coverage: "80% colegiatura + estipendio",
      requirements: "Interés en programación, entrevista",
    },
    {
      name: "Beca USAID Guatemala",
      description: "Programa internacional de becas",
      coverage: "Hasta 100% según perfil",
      requirements: "Ciudadanía, análisis socioeconómico",
    },
  ]

  return (
    <>
      <StudyNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/30 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold">Oportunidades</h1>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Descubre universidades, becas y empleos para iniciar tu carrera en tecnología, diseño y arquitectura.
            </p>
          </div>
        </section>

        {/* Opportunities Overview */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Universidades</p>
                    <p className="text-2xl font-bold">50+</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Empleos Activos</p>
                    <p className="text-2xl font-bold">200+</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Becas Disponibles</p>
                    <p className="text-2xl font-bold">15+</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="universities" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="universities" className="gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Universidades
                </TabsTrigger>
                <TabsTrigger value="jobs" className="gap-2">
                  <Briefcase className="w-4 h-4" />
                  Empleos
                </TabsTrigger>
                <TabsTrigger value="scholarships" className="gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Becas
                </TabsTrigger>
              </TabsList>

              <TabsContent value="universities" className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Universidades en Guatemala</h2>
                  <p className="text-foreground/60 mb-8">
                    Principales instituciones educativas con programas en tecnología, diseño y arquitectura.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {universities.map((uni) => (
                    <UniversityCard key={uni.name} {...uni} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Oportunidades Laborales</h2>
                  <p className="text-foreground/60 mb-8">
                    Empleos y pasantías disponibles en empresas locales e internacionales.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {jobOpportunities.map((job) => (
                    <JobCard key={job.title} {...job} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="scholarships" className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Programas de Becas</h2>
                  <p className="text-foreground/60 mb-8">
                    Acceso a educación superior a través de programas de becas completas o parciales.
                  </p>
                </div>
                <div className="space-y-6">
                  {scholarships.map((scholarship) => (
                    <Card
                      key={scholarship.name}
                      className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{scholarship.name}</h3>
                          <p className="text-foreground/70 mb-4">{scholarship.description}</p>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-primary">Cobertura:</p>
                            <p className="text-foreground/70">{scholarship.coverage}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary">Requisitos:</p>
                            <p className="text-foreground/70">{scholarship.requirements}</p>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">Obtener Más Información</Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Resources */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Recursos Útiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                <h3 className="text-xl font-bold mb-4">Guía de Postulación</h3>
                <p className="text-foreground/70 mb-6">
                  Aprende cómo escribir un CV efectivo, preparar entrevistas y destacar como candidato.
                </p>
                <Button className="bg-primary hover:bg-primary/90">Acceder Guía</Button>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
                <h3 className="text-xl font-bold mb-4">Comunidad de Estudiantes</h3>
                <p className="text-foreground/70 mb-6">
                  Conecta con otros estudiantes, comparte experiencias y obtén recomendaciones.
                </p>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Unirse Ahora</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
