import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface StorybookHeadingProps extends Component {
  children: ReactNode
}

export function StorybookHeading({ children, className = "", testId }: StorybookHeadingProps) {
  return (
    <h1 className={`text-2xl font-barlow text-white my-4 ${className}`} data-testid={testId}>
      {children}
    </h1>
  )
}
