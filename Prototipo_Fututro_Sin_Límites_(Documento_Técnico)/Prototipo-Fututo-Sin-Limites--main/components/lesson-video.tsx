"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video } from "lucide-react"

interface LessonVideoProps {
  title: string
  duration: number
  description: string
  videoUrl?: string
  isCompleted?: boolean
}

export function LessonVideo({ title, duration, description, videoUrl, isCompleted }: LessonVideoProps) {
  return (
    <Card className="p-6 bg-card border-border hover:shadow-md transition">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Video className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-foreground/60 mb-2">{description}</p>
          <p className="text-xs text-foreground/50">{duration} minutos</p>
        </div>
      </div>
      {isCompleted && <div className="mb-4 text-xs font-semibold text-green-600 dark:text-green-400">✓ Completado</div>}
      <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
        <Video className="w-4 h-4" />
        Ver Lección
      </Button>
    </Card>
  )
}
