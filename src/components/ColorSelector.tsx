import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Palette } from "lucide-react"

interface ColorOption {
  name: string
  value: string
  hex: string
  image: string
  available: boolean
}

interface ColorSelectorProps {
  bikeName: string
  colors: ColorOption[]
  onColorChange: (color: ColorOption) => void
  selectedColor: ColorOption
}

export function ColorSelector({ bikeName, colors, onColorChange, selectedColor }: ColorSelectorProps) {
  // Only show the color circles, no popup or button
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-sm font-medium text-gray-700">Color:</span>
      <div className="flex items-center gap-2">
        {colors.map((color) => (
          <div
            key={color.value}
            className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm"
            style={{ backgroundColor: color.hex }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  )
} 