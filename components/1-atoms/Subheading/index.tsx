import { Component } from "@/shared/types"

interface SubheadingProps extends Component {
  children: string
  theme: "bellefair" | "barlow"
}
export function Subheading({ className = "", children, theme }: SubheadingProps) {
  return <div className={`text-3xl font-${theme} text-white ${className}`}>{children}</div>
}
