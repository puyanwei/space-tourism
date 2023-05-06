import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface PageLayoutProps extends Component {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col lg:grid h-screen lg:grid-cols-2 bg-scroll font-primary text-center pt-6 lg:pt-72 lg:pb-[131px] lg:text-left md:pt-[212px] px-4 lg:gap-48">
      {children}
    </div>
  )
}
