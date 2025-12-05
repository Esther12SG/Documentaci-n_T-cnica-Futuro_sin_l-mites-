"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, Users, BookOpen } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  duration: string
  students: number
  lessons: number
  difficulty: "Principiante" | "Intermedio" | "Avanzado"
  progress?: number
  color: "primary" | "secondary" | "accent"
}

export function CourseCard({
  title,
  description,
  duration,
  students,
  lessons,
  difficulty,
  progress,
  color,
}: CourseCardProps) {
  const colorClasses = {
    primary: "from-primary/10 to-primary/5 border-primary/30 hover:border-primary/60",
    secondary: "from-secondary/10 to-secondary/5 border-secondary/30 hover:border-secondary/60",
    accent: "from-accent/10 to-accent/5 border-accent/30 hover:border-accent/60",
  }

  const buttonClasses = {
    primary: "bg-primary hover:bg-primary/90",
    secondary: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
    accent: "bg-accent hover:bg-accent/90 text-accent-foreground",
  }

  return (
    <Card className={`p-6 bg-gradient-to-br ${colorClasses[color]} border transition`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm mb-4">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2 text-foreground/60">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-foreground/60">
          <Users className="w-4 h-4" />
          <span>{students}+ estudiantes</span>
        </div>
        <div className="flex items-center gap-2 text-foreground/60">
          <BookOpen className="w-4 h-4" />
          <span>{lessons} lecciones</span>
        </div>
        <div>
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-foreground/10">{difficulty}</span>
        </div>
      </div>

      {progress !== undefined && (
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Progreso</span>
            <span className="text-sm text-foreground/60">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      <Button className={`w-full ${buttonClasses[color]}`}>
        {progress !== undefined ? "Continuar Curso" : "Comenzar Curso"}
      </Button>
    </Card>
  )
}
