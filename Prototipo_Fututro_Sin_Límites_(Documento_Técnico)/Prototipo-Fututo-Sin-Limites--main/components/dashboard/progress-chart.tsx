"use client"

import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

const progressData = [
  { week: "Sem 1", completed: 3, total: 8 },
  { week: "Sem 2", completed: 6, total: 8 },
  { week: "Sem 3", completed: 8, total: 8 },
  { week: "Sem 4", completed: 6, total: 10 },
  { week: "Sem 5", completed: 4, total: 10 },
]

const pointsData = [
  { date: "Lun", points: 150 },
  { date: "Mar", points: 200 },
  { date: "Mié", points: 180 },
  { date: "Jue", points: 250 },
  { date: "Vie", points: 300 },
  { date: "Sab", points: 280 },
]

export function ProgressChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6 bg-card border-border">
        <h3 className="font-bold text-lg mb-4">Lecciones Completadas por Semana</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="week" stroke="var(--color-foreground)" />
            <YAxis stroke="var(--color-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: `1px solid var(--color-border)`,
              }}
            />
            <Legend />
            <Bar dataKey="completed" fill="var(--color-primary)" name="Completadas" />
            <Bar dataKey="total" fill="var(--color-muted)" name="Total" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="font-bold text-lg mb-4">Puntos Ganados (Esta Semana)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={pointsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="date" stroke="var(--color-foreground)" />
            <YAxis stroke="var(--color-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: `1px solid var(--color-border)`,
              }}
            />
            <Line type="monotone" dataKey="points" stroke="var(--color-secondary)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
