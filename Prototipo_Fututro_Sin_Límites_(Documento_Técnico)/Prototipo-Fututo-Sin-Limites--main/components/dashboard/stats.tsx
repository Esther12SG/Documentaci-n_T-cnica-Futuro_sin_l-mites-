"use client"

import { Card } from "@/components/ui/card"
import { Clock, BookOpen, Trophy, Flame } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground/60 mb-1">Horas Aprendidas</p>
            <p className="text-3xl font-bold">32.5</p>
            <p className="text-xs text-foreground/50 mt-2">Esta semana: 8.5h</p>
          </div>
          <Clock className="w-8 h-8 text-primary/40" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground/60 mb-1">Cursos en Progreso</p>
            <p className="text-3xl font-bold">3</p>
            <p className="text-xs text-foreground/50 mt-2">1 completado</p>
          </div>
          <BookOpen className="w-8 h-8 text-secondary/40" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground/60 mb-1">Puntos Totales</p>
            <p className="text-3xl font-bold">2,450</p>
            <p className="text-xs text-foreground/50 mt-2">Rango: Plata</p>
          </div>
          <Trophy className="w-8 h-8 text-accent/40" />
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-orange-100/20 to-orange-50/20 dark:from-orange-950/20 dark:to-orange-900/20 border border-orange-200/50 dark:border-orange-800/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground/60 mb-1">Racha Actual</p>
            <p className="text-3xl font-bold">7</p>
            <p className="text-xs text-foreground/50 mt-2">días consecutivos</p>
          </div>
          <Flame className="w-8 h-8 text-orange-500/40" />
        </div>
      </Card>
    </div>
  )
}
