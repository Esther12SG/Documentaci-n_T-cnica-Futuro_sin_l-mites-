import { NextResponse } from "next/server"

// Mock data for recursos
const todosRecursos = [
  {
    id_recurso: 1,
    titulo: "Python para Principiantes",
    descripcion: "Aprende los fundamentos de Python desde cero",
    tipo: "video",
    url_recurso: "/cursos/python-basico",
    nivel: "principiante",
    id_area: 1,
    es_juego: false,
  },
  {
    id_recurso: 2,
    titulo: "JavaScript Interactivo",
    descripcion: "Domina JavaScript con ejercicios prácticos",
    tipo: "video",
    url_recurso: "/cursos/javascript",
    nivel: "principiante",
    id_area: 1,
    es_juego: false,
  },
  {
    id_recurso: 3,
    titulo: "Code Quiz - Desafío de Programación",
    descripcion: "Juego interactivo para practicar programación",
    tipo: "juego",
    url_recurso: "/juegos",
    nivel: "principiante",
    id_area: 1,
    es_juego: true,
  },
  {
    id_recurso: 4,
    titulo: "Fundamentos de Diseño",
    descripcion: "Principios básicos del diseño gráfico",
    tipo: "articulo",
    url_recurso: "/aprende/diseno",
    nivel: "principiante",
    id_area: 2,
    es_juego: false,
  },
  {
    id_recurso: 5,
    titulo: "Figma Básico",
    descripcion: "Crea diseños profesionales con Figma",
    tipo: "video",
    url_recurso: "/cursos/figma-basico",
    nivel: "principiante",
    id_area: 2,
    es_juego: false,
  },
  {
    id_recurso: 6,
    titulo: "Color Match - Juego de Colores",
    descripcion: "Aprende códigos de color jugando",
    tipo: "juego",
    url_recurso: "/juegos",
    nivel: "principiante",
    id_area: 2,
    es_juego: true,
  },
  {
    id_recurso: 7,
    titulo: "Conceptos de Arquitectura",
    descripcion: "Historia y teoría de la arquitectura",
    tipo: "articulo",
    url_recurso: "/aprende/arquitectura",
    nivel: "principiante",
    id_area: 3,
    es_juego: false,
  },
  {
    id_recurso: 8,
    titulo: "AutoCAD Fundamentals",
    descripcion: "Diseño en 2D y 3D con AutoCAD",
    tipo: "video",
    url_recurso: "/cursos/autocad",
    nivel: "intermedio",
    id_area: 3,
    es_juego: false,
  },
  {
    id_recurso: 9,
    titulo: "Architecture Shapes - Juego de Formas",
    descripcion: "Identifica formas arquitectónicas",
    tipo: "juego",
    url_recurso: "/juegos",
    nivel: "principiante",
    id_area: 3,
    es_juego: true,
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id_area = searchParams.get("id_area")
  const tipo = searchParams.get("tipo")
  const nivel = searchParams.get("nivel")

  let recursos = todosRecursos

  if (id_area) {
    recursos = recursos.filter((r) => r.id_area === Number.parseInt(id_area))
  }

  if (tipo) {
    recursos = recursos.filter((r) => r.tipo === tipo)
  }

  if (nivel) {
    recursos = recursos.filter((r) => r.nivel === nivel)
  }

  return NextResponse.json(recursos, { status: 200 })
}
