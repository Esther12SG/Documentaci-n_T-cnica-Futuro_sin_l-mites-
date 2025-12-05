"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { LessonVideo } from "@/components/lesson-video"
import { BookOpen, Code, Award } from "lucide-react"

interface Lesson {
  id: number
  title: string
  duration: number
  description: string
  type: "video" | "practice" | "project"
  completed: boolean
}

interface CourseContentProps {
  courseName: string
  lessons: Lesson[]
  progress: number
}

export function CourseContent({ courseName, lessons, progress }: CourseContentProps) {
  const completedLessons = lessons.filter((l) => l.completed).length

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{courseName}</h2>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              {completedLessons}/{lessons.length}
            </p>
            <p className="text-sm text-foreground/60">Lecciones completadas</p>
          </div>
        </div>
        <Progress value={progress} className="h-3" />
      </Card>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all" className="gap-2">
            <BookOpen className="w-4 h-4" />
            Todo
          </TabsTrigger>
          <TabsTrigger value="videos" className="gap-2">
            <Code className="w-4 h-4" />
            Videos
          </TabsTrigger>
          <TabsTrigger value="practice" className="gap-2">
            <Award className="w-4 h-4" />
            Práctica
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {lessons.map((lesson) => (
            <LessonVideo
              key={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
              description={lesson.description}
              isCompleted={lesson.completed}
            />
          ))}
        </TabsContent>

        <TabsContent value="videos" className="space-y-4 mt-6">
          {lessons
            .filter((l) => l.type === "video")
            .map((lesson) => (
              <LessonVideo
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                description={lesson.description}
                isCompleted={lesson.completed}
              />
            ))}
        </TabsContent>

        <TabsContent value="practice" className="space-y-4 mt-6">
          {lessons
            .filter((l) => l.type === "practice" || l.type === "project")
            .map((lesson) => (
              <LessonVideo
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                description={lesson.description}
                isCompleted={lesson.completed}
              />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
