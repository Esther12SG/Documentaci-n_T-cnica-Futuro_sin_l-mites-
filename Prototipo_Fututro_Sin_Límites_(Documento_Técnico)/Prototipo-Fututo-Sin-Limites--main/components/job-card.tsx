"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, DollarSign } from "lucide-react"

interface JobCardProps {
  title: string
  company: string
  location: string
  salary: string
  type: "Pasantía" | "Tiempo Completo" | "Freelance"
  skills: string[]
}

export function JobCard({ title, company, location, salary, type, skills }: JobCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition border-border">
      <div className="mb-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <Badge variant="outline">{type}</Badge>
        </div>
        <p className="text-foreground/70 font-semibold">{company}</p>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-foreground/60">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-foreground/60">
          <DollarSign className="w-4 h-4" />
          <span>{salary}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-foreground/70 mb-2">Habilidades requeridas:</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
        <Briefcase className="w-4 h-4" />
        Aplicar Ahora
      </Button>
    </Card>
  )
}
