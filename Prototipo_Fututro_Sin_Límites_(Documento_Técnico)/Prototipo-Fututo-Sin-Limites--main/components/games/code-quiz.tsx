"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"

interface Question {
  id: number
  question: string
  code: string
  options: string[]
  correct: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué imprime este código Python?",
    code: "x = 5\nprint(x * 2 + 3)",
    options: ["5", "10", "13", "8"],
    correct: 2,
    explanation: "5 * 2 = 10, luego 10 + 3 = 13",
  },
  {
    id: 2,
    question: "¿Cuál es el resultado?",
    code: "lista = [1, 2, 3]\nprint(len(lista))",
    options: ["1", "2", "3", "[1,2,3]"],
    correct: 2,
    explanation: "len() retorna la cantidad de elementos en la lista: 3",
  },
  {
    id: 3,
    question: "¿Qué tipo de dato es?",
    code: 'x = "Hola"',
    options: ["int", "float", "string", "list"],
    correct: 2,
    explanation: "Las comillas indican que es una cadena de texto (string)",
  },
]

export function CodeQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)
  const [gameOver, setGameOver] = useState(false)

  const handleAnswer = (optionIndex: number) => {
    if (answered) return

    setSelected(optionIndex)
    setAnswered(true)

    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswered(false)
      setSelected(null)
    } else {
      setGameOver(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setScore(0)
    setAnswered(false)
    setSelected(null)
    setGameOver(false)
  }

  const question = questions[currentQuestion]

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
      {!gameOver ? (
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-4">
              <span className="text-sm font-semibold text-primary">
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm font-semibold text-primary">{score} correctas</span>
            </div>
            <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{question.question}</h3>
            <div className="bg-foreground/5 p-4 rounded-lg font-mono text-sm mb-6 border border-border overflow-x-auto">
              <pre className="text-foreground">{question.code}</pre>
            </div>
          </div>

          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={answered}
                className={`w-full p-4 text-left rounded-lg border-2 transition ${
                  selected === idx
                    ? idx === question.correct
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "border-red-500 bg-red-50 dark:bg-red-950"
                    : answered && idx === question.correct
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {answered && idx === question.correct && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {answered && selected === idx && idx !== question.correct && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {answered && (
            <div className="bg-foreground/5 p-4 rounded-lg border border-foreground/20">
              <p className="text-sm">
                <strong>Explicación:</strong> {question.explanation}
              </p>
            </div>
          )}

          {answered && (
            <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90">
              {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Siguiente"}
            </Button>
          )}
        </div>
      ) : (
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-5xl font-bold text-primary">
              {score}/{questions.length}
            </p>
            <p className="text-lg text-foreground/70">¡Genial!</p>
          </div>
          <p className="text-foreground/60">
            {score === questions.length
              ? "Respuestas perfectas. Eres un programador de élite."
              : score >= 2
                ? "Muy bien. Entiendes los conceptos básicos."
                : "Necesitas practicar más. Intenta de nuevo."}
          </p>
          <Button onClick={handleReset} className="w-full bg-primary hover:bg-primary/90 gap-2">
            <RotateCcw className="w-4 h-4" />
            Intentar Nuevamente
          </Button>
        </div>
      )}
    </Card>
  )
}
