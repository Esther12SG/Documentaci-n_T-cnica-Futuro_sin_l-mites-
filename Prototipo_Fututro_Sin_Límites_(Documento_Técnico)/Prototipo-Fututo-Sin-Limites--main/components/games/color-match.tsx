"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RotateCcw } from "lucide-react"

interface ColorPair {
  name: string
  hex: string
  rgb: string
}

const colorPairs: ColorPair[] = [
  { name: "Rojo", hex: "#FF0000", rgb: "rgb(255, 0, 0)" },
  { name: "Azul", hex: "#0000FF", rgb: "rgb(0, 0, 255)" },
  { name: "Verde", hex: "#00FF00", rgb: "rgb(0, 255, 0)" },
  { name: "Amarillo", hex: "#FFFF00", rgb: "rgb(255, 255, 0)" },
]

export function ColorMatch() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [displayFormat, setDisplayFormat] = useState<"hex" | "rgb">("hex")
  const [options, setOptions] = useState<ColorPair[]>([])

  const currentPair = colorPairs[current]
  const colorValue = displayFormat === "hex" ? currentPair.hex : currentPair.rgb

  useEffect(() => {
    generateOptions()
  }, [current])

  const generateOptions = () => {
    const shuffled = [...colorPairs].sort(() => Math.random() - 0.5).slice(0, 4)
    if (!shuffled.includes(currentPair)) {
      shuffled[0] = currentPair
    }
    setOptions(shuffled.sort(() => Math.random() - 0.5))
  }

  const handleAnswer = (pair: ColorPair) => {
    if (pair === currentPair) {
      setScore(score + 1)
      setDisplayFormat(Math.random() > 0.5 ? "hex" : "rgb")
      if (current < colorPairs.length - 1) {
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

  return (
    <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
      {!gameOver ? (
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-4">
              <span className="text-sm font-semibold text-secondary">Aciertos: {score}</span>
              <span className="text-sm font-semibold text-secondary">
                {current + 1} de {colorPairs.length}
              </span>
            </div>
            <Progress value={((current + 1) / colorPairs.length) * 100} className="h-2" />
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg text-foreground/70">¿Qué color es?</p>
            <div className="flex justify-center gap-6">
              <div
                className="w-24 h-24 rounded-lg border-4 border-border"
                style={{ backgroundColor: currentPair.rgb }}
              />
              <div className="flex items-center">
                <code className="text-2xl font-bold text-foreground">{colorValue}</code>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {options.map((pair) => (
              <button
                key={pair.name}
                onClick={() => handleAnswer(pair)}
                className="p-4 rounded-lg border-2 border-border hover:border-secondary/50 transition text-sm font-semibold"
              >
                {pair.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-5xl font-bold text-secondary">
              {score}/{colorPairs.length}
            </p>
            <p className="text-lg text-foreground/70">¡Experto en Color!</p>
          </div>
          <p className="text-foreground/60">Comprende bien los valores de color en web.</p>
          <Button
            onClick={handleReset}
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Jugar Otra Vez
          </Button>
        </div>
      )}
    </Card>
  )
}
