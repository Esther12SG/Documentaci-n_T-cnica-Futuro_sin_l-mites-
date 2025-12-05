import { type NextRequest, NextResponse } from "next/server"

// Student progress API endpoints
// Tracks course completion, lesson progress, and achievements

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get("userId")

    // In production, fetch from database
    const mockProgress = {
      userId,
      totalHoursLearned: 32.5,
      coursesInProgress: 3,
      coursesCompleted: 1,
      totalPoints: 2450,
      currentStreak: 7,
      enrollments: [
        {
          courseId: "python-basico",
          progress: 37.5,
          lastAccessed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        },
        {
          courseId: "figma-basico",
          progress: 50,
          lastAccessed: new Date(),
        },
        {
          courseId: "autocad-fundamentos",
          progress: 15,
          lastAccessed: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      ],
    }

    return NextResponse.json({ success: true, data: mockProgress })
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { userId, courseId, lessonId, completed } = await req.json()

    // In production, update progress in database
    return NextResponse.json({
      success: true,
      data: {
        userId,
        courseId,
        lessonId,
        completed,
        updatedAt: new Date(),
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
