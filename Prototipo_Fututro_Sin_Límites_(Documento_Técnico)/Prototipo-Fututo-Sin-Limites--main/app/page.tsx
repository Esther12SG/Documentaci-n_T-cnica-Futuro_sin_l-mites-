"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Code2, Palette, Building2, ArrowRight, Users, Zap, Target, Rocket } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg animate-glow">
              <Rocket className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-2xl gradient-text">Futuro Sin Límite</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#areas" className="text-foreground/70 hover:text-primary transition font-medium">
              Áreas
            </Link>
            <Link href="#oportunidades" className="text-foreground/70 hover:text-primary transition font-medium">
              Oportunidades
            </Link>
            <Link href="#cursos" className="text-foreground/70 hover:text-primary transition font-medium">
              Cursos
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg font-semibold">
              Acceso Gratuito
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Premium Design */}
      <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-40"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 mb-16">
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-4 text-balance leading-tight">
                <span className="gradient-text">Tu Futuro</span>
                <br />
                <span className="text-white">Sin Límites</span>
              </h1>
              <p className="text-lg sm:text-2xl text-foreground/70 max-w-3xl mx-auto text-balance mt-6 leading-relaxed">
                Plataforma educativa completamente gratuita. Aprende programación, diseño gráfico, arquitectura y más.
                Acceso ilimitado a cursos interactivos, juegos educativos, y oportunidades reales. Integrable en
                colegios y universidades.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-primary-foreground px-10 py-7 text-lg font-bold rounded-full">
                Acceder Gratis <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="px-10 py-7 text-lg font-bold rounded-full border-primary/50 hover:border-primary bg-transparent"
              >
                Para Instituciones
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="glass-effect rounded-2xl p-8 card-hover group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-6 group-hover:scale-125 transition">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">100% Gratuito</h3>
              <p className="text-foreground/70">
                Acceso ilimitado a todo el contenido sin costo. No hay membresías ni pagos ocultos.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 card-hover group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-yellow-500 flex items-center justify-center mb-6 group-hover:scale-125 transition">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Para Instituciones</h3>
              <p className="text-foreground/70">
                Integrable en colegios y universidades. Herramienta educativa lista para usar en aulas.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 card-hover group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center mb-6 group-hover:scale-125 transition">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">Oportunidades Reales</h3>
              <p className="text-foreground/70">
                Conecta con becas, empleos y las mejores universidades. Totalmente sin costo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section - Premium Cards */}
      <section id="areas" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6">
              <span className="gradient-text">Explora Nuestras Áreas</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Elige tu camino y comienza tu transformación hoy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <Card className="p-10 h-full bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/50 hover:border-primary card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-8 group-hover:scale-125 transition">
                  <Code2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-black mb-4 gradient-text">Programación</h3>
                <p className="text-foreground/70 mb-8 text-lg">
                  Domina Python, JavaScript, React y construye proyectos del mundo real desde el día uno.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-sm text-foreground/60 font-medium">✓ Fundamentos a Avanzado</p>
                  <p className="text-sm text-foreground/60 font-medium">✓ Desarrollo Web y Móvil</p>
                  <p className="text-sm text-foreground/60 font-medium">✓ IA y Automatización</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:shadow-lg font-bold">
                  Comenzar <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>

            <div className="group cursor-pointer">
              <Card className="p-10 h-full bg-gradient-to-br from-secondary/15 to-secondary/5 border border-secondary/50 hover:border-secondary card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-yellow-500 flex items-center justify-center mb-8 group-hover:scale-125 transition">
                  <Palette className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-black mb-4 gradient-text">Diseño Gráfico</h3>
                <p className="text-foreground/70 mb-8 text-lg">
                  Crea diseños visuales impactantes con Adobe, Figma y conviértete en un profesional digital.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-sm text-foreground/60 font-medium">✓ UI/UX y Branding</p>
                  <p className="text-sm text-foreground/60 font-medium">✓ Adobe Creative Suite</p>
                  <p className="text-sm text-foreground/60 font-medium">✓ Animación Digital</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-secondary to-yellow-500 hover:shadow-lg font-bold">
                  Comenzar <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>

            <div className="group cursor-pointer">
              <Card className="p-10 h-full bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/50 hover:border-accent card-hover">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center mb-8 group-hover:scale-125 transition">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-black mb-4 gradient-text">Arquitectura</h3>
                <p className="text-foreground/70 mb-8 text-lg">
                  Diseña espacios e infraestructuras innovadoras con herramientas profesionales de última generación.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-sm text-foreground/60 font-medium">✓ Diseño y Renderizado</p>
                  <p className="text-sm text-foreground/60 font-medium">✓ AutoCAD y 3D Studio</p>
                  <p className="text-sm text-foreground/60 font-medium">✓ Sostenibilidad</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-accent to-blue-500 hover:shadow-lg font-bold">
                  Comenzar <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl font-black mb-8 gradient-text">¿Listo para romper límites?</h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Únete a miles de estudiantes que ya están transformando sus vidas con educación de calidad mundial.
            Completamente gratuito. Para estudiantes y centros educativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-primary-foreground px-12 py-8 text-xl font-bold rounded-full">
              Comenzar Ahora <Rocket className="ml-3 w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              className="px-12 py-8 text-xl font-bold rounded-full border-primary/50 hover:border-primary hover:bg-primary/5 bg-transparent"
            >
              Integrar en Colegio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-white">Plataforma</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Juegos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Aprende</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Programación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Diseño
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Arquitectura
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Comunidad</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Foro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Oportunidades
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-foreground/60">
            <p className="font-semibold">© 2025 Futuro Sin Límite - Transformando la educación tecnológica</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
