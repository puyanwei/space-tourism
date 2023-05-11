import { Subheading } from "@/components/1-atoms/Subheading"
import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface SpaceSubheadingProps extends Component {
  number: string
  children: ReactNode
}

export function SpaceSubheading({ number, children, className = "" }: SpaceSubheadingProps) {
  return (
    <span className={`flex mx-auto pt-2 pb-6 md:pt-0 md:pb-12 md:ml-0 md:mr-0 ${className}`}>
      <Subheading className="text-space-dark-gray font-bold">{number}</Subheading>
      <Subheading className="pl-7">{children}</Subheading>
    </span>
  )
}
