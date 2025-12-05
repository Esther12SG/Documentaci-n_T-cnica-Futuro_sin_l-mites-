"use client"

import { StudyNavigation } from "@/components/study-navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeQuiz } from "@/components/games/code-quiz"
import { ColorMatch } from "@/components/games/color-match"
import { ArchitectureShapes } from "@/components/games/architecture-shapes"
import { Gamepad2, Trophy, Zap } from "lucide-react"
import Link from "next/link"

export default function GamesPage() {
  return (
    <>
      <StudyNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-b border-primary/30 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold">Aprende Jugando</h1>
            </div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Juegos educativos interactivos para consolidar tus conocimientos en programación, diseño y arquitectura.
            </p>
          </div>
        </section>

        {/* Leaderboard Preview */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Trophy className="w-6 h-6 text-secondary" />
                Tus Logros
              </h2>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">2,450 pts</p>
                <p className="text-sm text-foreground/60">Puntuación total</p>
              </div>
            </div>
          </div>
        </section>

        {/* Games */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="programming" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="programming">Programación</TabsTrigger>
                <TabsTrigger value="design">Diseño</TabsTrigger>
                <TabsTrigger value="architecture">Arquitectura</TabsTrigger>
              </TabsList>

              <TabsContent value="programming" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Programación Interactiva</h2>
                  <p className="text-foreground/60 mb-8">
                    Prueba tus conocimientos de Python y lógica de programación.
                  </p>
                </div>
                <CodeQuiz />
              </TabsContent>

              <TabsContent value="design" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Teoría del Color</h2>
                  <p className="text-foreground/60 mb-8">Aprende a identificar códigos de color hexadecimales y RGB.</p>
                </div>
                <ColorMatch />
              </TabsContent>

              <TabsContent value="architecture" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Formas Arquitectónicas</h2>
                  <p className="text-foreground/60 mb-8">
                    Identifica formas geométricas y sus propiedades arquitectónicas.
                  </p>
                </div>
                <ArchitectureShapes />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* More Games Coming */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Próximamente</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-2 border-dashed border-border hover:border-primary/50 transition">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Memory Shapes</h3>
                <p className="text-sm text-foreground/60">Memoriza y empareja figuras geométricas.</p>
              </Card>
              <Card className="p-6 bg-card border-2 border-dashed border-border hover:border-secondary/50 transition">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-bold mb-2">Design Sprint</h3>
                <p className="text-sm text-foreground/60">Diseña bajo presión de tiempo.</p>
              </Card>
              <Card className="p-6 bg-card border-2 border-dashed border-border hover:border-accent/50 transition">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Código Secreto</h3>
                <p className="text-sm text-foreground/60">Decodifica mensajes con algoritmos.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Domina tu Área</h2>
            <p className="text-lg text-foreground/60 mb-8">Sigue nuestros cursos para profundizar tus conocimientos.</p>
            <Link href="/programacion">
              <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg">Ver Cursos</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
