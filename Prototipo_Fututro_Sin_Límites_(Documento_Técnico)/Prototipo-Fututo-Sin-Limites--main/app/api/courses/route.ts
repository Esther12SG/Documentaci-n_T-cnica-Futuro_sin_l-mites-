import { type NextRequest, NextResponse } from "next/server"

// Courses API endpoints
// Returns course data for the platform

const mockCourses = [
  {
    id: "python-basico",
    title: "Python Básico",
    description: "Aprende los conceptos fundamentales de programación con Python",
    area: "Programación",
    difficulty: "Principiante",
    duration: 4,
    instructor: "Carlos Rodríguez",
    studentsEnrolled: 5200,
    lessons: 8,
  },
  {
    id: "figma-basico",
    title: "Figma Básico",
    description: "Diseño de interfaces desde cero con Figma",
    area: "Diseño",
    difficulty: "Principiante",
    duration: 3,
    instructor: "María González",
    studentsEnrolled: 4100,
    lessons: 6,
  },
  {
    id: "autocad-fundamentos",
    title: "AutoCAD Fundamentos",
    description: "Aprende a usar AutoCAD para diseño arquitectónico",
    area: "Arquitectura",
    difficulty: "Principiante",
    duration: 5,
    instructor: "Jorge López",
    studentsEnrolled: 2800,
    lessons: 10,
  },
]

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const area = searchParams.get("area")
    const difficulty = searchParams.get("difficulty")

    let courses = mockCourses

    if (area) {
      courses = courses.filter((c) => c.area === area)
    }

    if (difficulty) {
      courses = courses.filter((c) => c.difficulty === difficulty)
    }

    return NextResponse.json({ success: true, courses })
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const courseData = await req.json()

    // In production, validate and save to database
    return NextResponse.json(
      {
        success: true,
        course: {
          id: "course-" + Date.now(),
          ...courseData,
          createdAt: new Date(),
        },
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
