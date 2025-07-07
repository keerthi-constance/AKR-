"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CompanyCardProps {
  name: string
  description: string
  icon?: string
  image?: string
}

export function CompanyCard({ name, description, icon, image }: CompanyCardProps) {
  return (
    <Card className="glass-card p-6 cosmic-hover group overflow-hidden relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

      <div className="relative z-10 space-y-4">
        {image ? (
          <div className="w-full h-48 rounded-xl overflow-hidden relative">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ) : (
          icon && (
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )
        )}
        <div>
          <h3 className="text-xl font-old-english text-foreground mb-3 group-hover:gradient-text transition-all duration-300 leading-tight">
            {name}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300 font-medium">
            {description}
          </p>
        </div>
        <Button
          size="sm"
          className="w-full bg-gradient-primary hover:bg-gradient-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          onClick={() => {
            if (name === "AKR & SONS (PVT) LTD") {
              window.location.href = "/akr-sons-bike-store"
            }
          }}
        >
          {name === "AKR & SONS (PVT) LTD" ? "Visit Bike Store" : "Learn More"}
        </Button>
      </div>
    </Card>
  )
}
