import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface PageLayoutProps extends Component {
  children: ReactNode
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div
      className={`grid grid-cols-12 h-screen bg-scroll font-primary text-center max-w-[1200px] pt-24 lg:text-left py-6 md:pt-[140px] lg:pt-[212px] lg:mx-auto ${className}`}
    >
      {children}
    </div>
  )
}
