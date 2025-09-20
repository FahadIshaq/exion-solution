"use client"
import { cn } from "@/lib/utils"

export const GridBackground = ({
  className,
  gridSize = 50,
}: {
  className?: string
  gridSize?: number
}) => {
  return (
    <div
      className={cn("absolute inset-0 opacity-20", className)}
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--border)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
      }}
    />
  )
}
