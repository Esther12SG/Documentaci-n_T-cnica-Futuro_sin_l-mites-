import { NextResponse } from "next/server"

// Mock in-memory database for progress
const progresoUsuarios: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { id_usuario, id_recurso, estado, puntuacion } = body

    const nuevoProgreso = {
      id_progreso: progresoUsuarios.length + 1,
      id_usuario,
      id_recurso,
      estado: estado || "iniciado",
      puntuacion: puntuacion || 0,
      fecha_ultima_actividad: new Date().toISOString(),
    }

    progresoUsuarios.push(nuevoProgreso)

    return NextResponse.json(nuevoProgreso, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Error al registrar progreso" }, { status: 500 })
  }
}
