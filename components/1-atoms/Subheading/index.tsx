import { Component } from "@/shared/types"

interface SubheadingProps extends Component {
  children: string
  font: "bellefair" | "barlow"
}

export function Subheading({ className = "", children, font }: SubheadingProps) {
  return <p className={`${font} ${className}`}>{children}</p>
}
