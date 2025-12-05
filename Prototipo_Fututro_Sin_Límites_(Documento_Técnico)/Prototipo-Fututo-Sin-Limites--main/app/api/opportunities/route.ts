import { type NextRequest, NextResponse } from "next/server"

// Opportunities API endpoints
// Returns universities and job opportunities

const mockUniversities = [
  {
    id: "univdavinci",
    name: "Universidad da Vinci de Guatemala",
    location: "Ciudad de Guatemala",
    website: "https://davinci.edu.gt",
    specialties: ["Ingeniería en Sistemas", "Diseño Digital", "Arquitectura"],
    scholarships: true,
    studentsEnrolled: 15000,
  },
]

const mockJobs = [
  {
    id: "job-1",
    title: "Desarrollador Frontend Junior",
    company: "Tech Solutions Guatemala",
    location: "Ciudad de Guatemala / Remoto",
    salary: "Q8,000 - Q12,000",
    type: "Tiempo Completo",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    postedAt: new Date(),
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  },
]

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const type = searchParams.get("type")

    if (type === "universities") {
      return NextResponse.json({ success: true, data: mockUniversities })
    }

    if (type === "jobs") {
      return NextResponse.json({ success: true, data: mockJobs })
    }

    return NextResponse.json({
      success: true,
      data: {
        universities: mockUniversities,
        jobs: mockJobs,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
