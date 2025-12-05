import { NextResponse } from "next/server"

// Mock data for areas
const areas = [
  {
    id_area: 1,
    nombre_area: "Programación",
    descripcion: "Introducción al desarrollo de software y lógica computacional.",
    icono: "/icons/code.svg",
  },
  {
    id_area: 2,
    nombre_area: "Diseño Gráfico",
    descripcion: "Creatividad visual y comunicación gráfica.",
    icono: "/icons/design.svg",
  },
  {
    id_area: 3,
    nombre_area: "Arquitectura",
    descripcion: "Diseño de espacios y estructuras innovadoras.",
    icono: "/icons/architecture.svg",
  },
]

export async function GET() {
  return NextResponse.json(areas, { status: 200 })
}
