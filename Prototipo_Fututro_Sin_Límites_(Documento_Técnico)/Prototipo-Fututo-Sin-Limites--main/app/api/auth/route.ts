import { type NextRequest, NextResponse } from "next/server"

// Authentication API endpoints
// This would integrate with a real authentication service in production

export async function POST(req: NextRequest) {
  try {
    const { action, email, password } = await req.json()

    if (action === "login") {
      // In production, verify credentials against database
      // For now, return mock data
      return NextResponse.json({
        success: true,
        user: {
          id: "1",
          email,
          firstName: "Alex",
          lastName: "Pérez",
        },
        token: "mock-jwt-token-" + Date.now(),
      })
    }

    if (action === "signup") {
      // In production, create new user in database
      return NextResponse.json(
        {
          success: true,
          user: {
            id: "1",
            email,
            firstName: "",
            lastName: "",
          },
        },
        { status: 201 },
      )
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
