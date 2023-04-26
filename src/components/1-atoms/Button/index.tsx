import { Component } from "@/shared/types"
import { ReactNode } from "react"

const styleMap = {
  default: `rounded-2xl text-white bg-black font-primary text-base px-6 py-3 font-bold hover:bg-white hover:text-black`,
  explore: `rounded-full text-space-black bg-white font-serif aspect-square h-[274px] text-[32px] outline outline-0 hover:outline-[88px] outline-space-gray`,
}

interface ButtonProps extends Component {
  children: ReactNode
  onClick?: () => void
  variant?: keyof typeof styleMap
}

export function Button({ className, children, onClick, variant = "default" }: ButtonProps) {
  const style = "uppercase transition-all duration-300 ease-in-out"
  return (
    <button className={`${style} ${styleMap[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
