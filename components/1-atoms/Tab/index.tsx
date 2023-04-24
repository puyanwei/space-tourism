import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface TabProps extends Component {
  children: ReactNode
  active?: boolean
}

export function Tab({ className, children, active = false }: TabProps) {
  const activeStyle = active ? `border-white` : `border-transparent hover:border-space-gray`
  return (
    <button className={`uppercase font-barlow font-semibold tracking-[2.7px]  ${className}`}>
      <span className={`py-2 border-b-[3px] ${activeStyle}`}>{children}</span>
    </button>
  )
}
