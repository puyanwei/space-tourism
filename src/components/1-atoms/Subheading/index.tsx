import { Component } from "@/shared/types"

interface SubheadingProps extends Component {
  children: string
  theme?: "primary" | "serif"
}
export function Subheading({ className = "", children, theme = "primary" }: SubheadingProps) {
  return (
    <div
      className={`tracking-[4.72px] uppercase text-base md:text-xl lg:text-3xl font-${theme} text-white ${className}`}
    >
      {children}
    </div>
  )
}
