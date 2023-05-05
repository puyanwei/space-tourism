import { Component } from "@/shared/types"
import { ReactNode } from "react"

interface TabProps extends Component {
  children: ReactNode
  active: boolean
  buttonTextClassName?: string
  onClick: () => void
}

export function Tab({
  className = "",
  buttonTextClassName = "",
  children,
  active = false,
  onClick,
}: TabProps) {
  const activeStyle = active
    ? `border-white text-white`
    : `border-transparent hover:border-space-gray text-space-light-blue`
  return (
    <button className={`uppercase font-primary tracking-[2.7px] ${className}`}>
      <span
        className={`py-2 border-b-[3px] ${buttonTextClassName} ${activeStyle}`}
        onClick={onClick}
      >
        {children}
      </span>
    </button>
  )
}
