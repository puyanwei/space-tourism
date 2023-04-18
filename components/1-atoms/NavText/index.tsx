import { Component } from "@/shared/types"

interface NavTextProps extends Component {
  children: string
}

export function NavText({ className = "", children }: NavTextProps) {
  return (
    <span className={`font-barlow uppercase text-[16px] tracking-[2.7px] ${className}`}>
      {children}
    </span>
  )
}
