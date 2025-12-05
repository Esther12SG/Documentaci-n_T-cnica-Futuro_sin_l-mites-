import { NextResponse } from "next/server"

// Mock in-memory database for users
const usuarios: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, correo, password, rol, comunidad, grado_escolar } = body

    // Validaciones
    if (!nombre || !correo || !password) {
      return NextResponse.json({ error: "Nombre, correo y contraseña son requeridos" }, { status: 400 })
    }

    // Verificar si el correo ya existe
    const usuarioExistente = usuarios.find((u) => u.correo === correo)
    if (usuarioExistente) {
      return NextResponse.json({ error: "El correo ya está registrado" }, { status: 409 })
    }

    // Crear nuevo usuario
    const nuevoUsuario = {
      id_usuario: usuarios.length + 1,
      nombre,
      correo,
      password: "***", // En producción, esto sería hasheado
      rol: rol || "estudiante",
      comunidad: comunidad || "no especificada",
      grado_escolar: grado_escolar || "no especificado",
      fecha_registro: new Date().toISOString(),
    }

    usuarios.push(nuevoUsuario)

    return NextResponse.json(
      {
        message: "Usuario registrado con éxito",
        usuario: {
          id_usuario: nuevoUsuario.id_usuario,
          nombre: nuevoUsuario.nombre,
          correo: nuevoUsuario.correo,
          rol: nuevoUsuario.rol,
          fecha_registro: nuevoUsuario.fecha_registro,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
