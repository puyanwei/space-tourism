import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface TabProps extends Component {
  children: ReactNode
  active?: boolean
  buttonTextClassName?: string
}

export function Tab({ className, buttonTextClassName = "", children, active = false }: TabProps) {
  const activeStyle = active ? `border-white` : `border-transparent hover:border-space-gray`
  return (
    <button
      className={`uppercase font-barlow font-semibold tracking-[2.7px] text-white ${className}`}
    >
      <span className={`py-2 border-b-[3px] ${buttonTextClassName} ${activeStyle}`}>
        {children}
      </span>
    </button>
  )
}
