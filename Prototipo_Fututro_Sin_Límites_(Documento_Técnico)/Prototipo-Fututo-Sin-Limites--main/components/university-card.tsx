"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Globe, Users } from "lucide-react"

interface UniversityCardProps {
  name: string
  location: string
  website: string
  specialties: string[]
  scholarships: boolean
  studentsEnrolled: number
}

export function UniversityCard({
  name,
  location,
  website,
  specialties,
  scholarships,
  studentsEnrolled,
}: UniversityCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition border-border">
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-foreground/70 mb-2">Especialidades:</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-1 text-sm text-foreground/60">
            <Users className="w-4 h-4" />
            <span>{studentsEnrolled}+ estudiantes</span>
          </div>
          {scholarships && (
            <Badge className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200">Becas</Badge>
          )}
        </div>

        <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Globe className="w-4 h-4" />
            Visitar Sitio
          </a>
        </Button>
      </div>
    </Card>
  )
}
