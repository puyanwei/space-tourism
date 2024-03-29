import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface SubheadingProps extends Component {
  children: ReactNode
  theme?: "primary" | "serif"
}
export function Subheading({ className = "", children, theme = "primary" }: SubheadingProps) {
  return (
    <p
      className={`tracking-[4.72px] uppercase text-base md:text-xl lg:text-[28px] text-white font-${theme} ${className}`}
    >
      {children}
    </p>
  )
}
