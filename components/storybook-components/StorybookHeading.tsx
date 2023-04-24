import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface StorybookHeadingProps extends Component {
  children: ReactNode
}

export function StorybookHeading({ children, className = "", testId }: StorybookHeadingProps) {
  return (
    <span className={`text-2xl font-light ${className}`} data-testid={testId}>
      {children}
    </span>
  )
}
