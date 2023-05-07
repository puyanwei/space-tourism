import { Component } from "@/shared/types"

const styleMap = {
  horizontal: {
    default: `h-[15px] w-[15px] rounded-full hover:bg-space-gray`,
    idle: `bg-space-dark-gray`,
    active: `bg-white`,
  },
  vertical: {
    default: `h-20 w-20 rounded-full bg-black border-[1px] border-white hover:border-2  hover:bg-black hover:text-white font-bellefair border-transparent text-2xl`,
    idle: `text-white`,
    active: `bg-white text-black`,
  },
}
interface ButtonSliderProps extends Component {
  active?: boolean
  version?: "horizontal" | "vertical"
  children?: string
  onClick: () => void
}

export function ButtonSlider({
  className,
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
