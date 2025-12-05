// Database schema documentation for Explora Tu Futuro platform
// This defines the structure for storing user data, courses, progress, and opportunities

export interface User {
  id: string
  email: string
  password: string
  firstName: string
  lastName: string
  profileImage?: string
  createdAt: Date
  updatedAt: Date
}

export interface CourseEnrollment {
  id: string
  userId: string
  courseId: string
  enrolledAt: Date
  completedAt?: Date
  progress: number
  lastAccessedAt: Date
}

export interface LessonProgress {
  id: string
  userId: string
  lessonId: string
  courseId: string
  completed: boolean
  completedAt?: Date
  timeSpent: number
}

export interface StudentAchievement {
  id: string
  userId: string
  achievementId: string
  unlockedAt: Date
}

export interface Course {
  id: string
  title: string
  description: string
  area: "Programación" | "Diseño" | "Arquitectura"
  difficulty: "Principiante" | "Intermedio" | "Avanzado"
  duration: number
  instructor: string
  lessons: Lesson[]
  studentsEnrolled: number
  createdAt: Date
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  description: string
  duration: number
  type: "video" | "practice" | "project"
  order: number
  videoUrl?: string
  content?: string
}

export interface Achievement {
  id: string
  name: string
  description: string
  type: string
  requirement: number
  iconColor: string
}

export interface University {
  id: string
  name: string
  location: string
  website: string
  specialties: string[]
  scholarships: boolean
  studentsEnrolled: number
}

export interface JobOpportunity {
  id: string
  title: string
  company: string
  location: string
  salary: string
  type: "Pasantía" | "Tiempo Completo" | "Freelance"
  skills: string[]
  postedAt: Date
  expiresAt: Date
}
