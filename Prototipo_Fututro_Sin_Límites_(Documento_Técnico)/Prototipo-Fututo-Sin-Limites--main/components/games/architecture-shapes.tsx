"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RotateCcw } from "lucide-react"

interface ArchShape {
  name: string
  description: string
  properties: string[]
}

const shapes: ArchShape[] = [
  {
    name: "Cubo",
    description: "Forma de 6 caras cuadradas",
    properties: ["Estable", "Simétrico", "Eficiente en espacio"],
  },
  {
    name: "Esfera",
    description: "Forma circular perfecta en todas direcciones",
    properties: ["Aerodinámica", "Resistencia estructural", "Acústica"],
  },
  {
    name: "Cilindro",
    description: "Dos círculos conectados por una superficie lateral",
    properties: ["Resistencia", "Economía material", "Flexible"],
  },
  {
    name: "Pirámide",
    description: "Base poligonal con caras triangulares",
    properties: ["Estabilidad", "Visibilidad", "Ahorro de material"],
  },
]

export function ArchitectureShapes() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [options, setOptions] = useState<ArchShape[]>([])

  useEffect(() => {
    generateOptions()
  }, [current])

  const generateOptions = () => {
    const correct = shapes[current]
    const shuffled = [...shapes].sort(() => Math.random() - 0.5).slice(0, 4)
    if (!shuffled.includes(correct)) {
      shuffled[0] = correct
    }
    setOptions(shuffled.sort(() => Math.random() - 0.5))
  }

  const handleAnswer = (shape: ArchShape) => {
    if (shape === shapes[current]) {
      setScore(score + 1)
      if (current < shapes.length - 1) {
        setCurrent(current + 1)
      } else {
        setGameOver(true)
      }
    }
  }

  const handleReset = () => {
    setCurrent(0)
    setScore(0)
    setGameOver(false)
    generateOptions()
  }

  const currentShape = shapes[current]

  return (
    <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
      {!gameOver ? (
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-4">
              <span className="text-sm font-semibold text-accent">Aciertos: {score}</span>
              <span className="text-sm font-semibold text-accent">
                {current + 1} de {shapes.length}
              </span>
            </div>
            <Progress value={((current + 1) / shapes.length) * 100} className="h-2" />
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg text-foreground/70 font-semibold">¿Qué forma es?</p>
            <p className="text-foreground/60">{currentShape.description}</p>
            <div className="bg-foreground/5 p-4 rounded-lg">
              <p className="text-sm font-semibold text-foreground/70">Propiedades:</p>
              <ul className="text-sm text-foreground/60 mt-2 space-y-1">
                {currentShape.properties.map((prop, idx) => (
                  <li key={idx}>• {prop}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {options.map((shape) => (
              <button
                key={shape.name}
                onClick={() => handleAnswer(shape)}
                className="p-4 rounded-lg border-2 border-border hover:border-accent/50 transition font-semibold text-sm"
              >
                {shape.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-5xl font-bold text-accent">
              {score}/{shapes.length}
            </p>
            <p className="text-lg text-foreground/70">¡Geómetra Maestro!</p>
          </div>
          <p className="text-foreground/60">Entiendes excelentemente las formas arquitectónicas.</p>
          <Button onClick={handleReset} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
            <RotateCcw className="w-4 h-4" />
            Jugar Otra Vez
          </Button>
        </div>
      )}
    </Card>
  )
}
