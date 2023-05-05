import { Subheading } from "@/components/1-atoms/Subheading"
import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface SpaceSubheadingProps extends Component {
  number: string
  children: ReactNode
}

export function SpaceSubheading({ number, children }: SpaceSubheadingProps) {
  return (
    <span className="flex">
      <Subheading className="text-space-dark-gray font-bold">{number}</Subheading>
      <Subheading className="pl-7">{children}</Subheading>
    </span>
  )
}
