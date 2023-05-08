import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface PageLayoutProps extends Component {
  children: ReactNode
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div
      className={`flex flex-col lg:grid h-screen lg:grid-cols-2 bg-scroll font-primary text-center pt-24 lg:pt-50 lg:text-left md:pt-[180px] lg:pt-[212px] px-6 ${className}`}
    >
      {children}
    </div>
  )
}
