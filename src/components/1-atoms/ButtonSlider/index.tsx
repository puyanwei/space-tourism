import { Component } from "@/shared/types"
import { ReactNode } from "react"

const styleMap = {
  horizontal: {
    default: `h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] rounded-full hover:bg-space-gray`,
    idle: `bg-space-dark-gray`,
    active: `bg-white`,
  },
  vertical: {
    default: `h-10 w-10 lg:h-20 lg:w-20 rounded-full font-serif border-transparent text-base lg:text-[32px]`,
    idle: `text-white bg-black border-[1px] border-white hover:border-2 hover:bg-black hover:text-white`,
    active: `bg-white border-[1px] border-black hover:border-2 hover:bg-white hover:text-black`,
  },
}
interface ButtonSliderProps extends Component {
  active?: boolean
  version?: "horizontal" | "vertical"
  children?: ReactNode
  onClick: () => void
}

export function ButtonSlider({
  className = "",
  active = false,
  version = "horizontal",
  children = "",
  onClick,
}: ButtonSliderProps) {
  const baseStyle = styleMap[version].default
  const activeStyle = active ? styleMap[version].active : styleMap[version].idle
  return (
    <button className={`${baseStyle} ${activeStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
