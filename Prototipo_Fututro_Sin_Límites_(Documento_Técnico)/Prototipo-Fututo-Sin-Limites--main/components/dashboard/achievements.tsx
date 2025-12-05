"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Zap, BookOpen, Code2, Palette, Building2 } from "lucide-react"

interface Achievement {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  unlocked: boolean
  unlockedDate?: string
  progress?: number
}

export function Achievements() {
  const achievements: Achievement[] = [
    {
      id: "first-step",
      name: "Primer Paso",
      description: "Completar tu primer curso",
      icon: <BookOpen className="w-6 h-6" />,
      unlocked: true,
      unlockedDate: "2025-01-15",
    },
    {
      id: "streak-7",
      name: "Racha de 7 Días",
      description: "Aprende 7 días consecutivos",
      icon: <Zap className="w-6 h-6" />,
      unlocked: true,
      unlockedDate: "2025-01-20",
    },
    {
      id: "coder",
      name: "Programador Novato",
      description: "Completar 5 cursos de programación",
      icon: <Code2 className="w-6 h-6" />,
      unlocked: false,
      progress: 60,
    },
    {
      id: "designer",
      name: "Diseñador Emergente",
      description: "Completar 3 cursos de diseño",
      icon: <Palette className="w-6 h-6" />,
      unlocked: false,
      progress: 33,
    },
    {
      id: "architect",
      name: "Visionario del Espacio",
      description: "Completar 2 cursos de arquitectura",
      icon: <Building2 className="w-6 h-6" />,
      unlocked: false,
      progress: 0,
    },
    {
      id: "master",
      name: "Maestro Versátil",
      description: "Completar cursos en 3 áreas diferentes",
      icon: <Trophy className="w-6 h-6" />,
      unlocked: false,
      progress: 67,
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Logros</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className={`p-6 border-border transition ${
              achievement.unlocked
                ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30"
                : "bg-card opacity-50"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-3 rounded-lg ${achievement.unlocked ? "bg-primary/20" : "bg-muted"}`}>
                {achievement.icon}
              </div>
              {achievement.unlocked && (
                <Badge className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200">
                  Desbloqueado
                </Badge>
              )}
            </div>
            <h3 className="font-bold mb-1">{achievement.name}</h3>
            <p className="text-xs text-foreground/60 mb-3">{achievement.description}</p>
            {!achievement.unlocked && achievement.progress !== undefined && (
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Progreso</span>
                  <span>{achievement.progress}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all" style={{ width: `${achievement.progress}%` }} />
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
