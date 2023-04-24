import { Component } from "@/shared/types"

interface ButtonSliderProps extends Component {
  active?: boolean
}

export function ButtonSlider({ className, active = false }: ButtonSliderProps) {
  const activeStyle = active ? `bg-white` : `bg-space-dark-gray`
  return (
    <button
      className={`h-[15px] w-[15px] rounded-full hover:bg-space-gray ${activeStyle} ${className}`}
    ></button>
  )
}
