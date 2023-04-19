import { Component } from "@/shared/types"

interface NavTextProps extends Component {
  children: string
}

export function NavText({ className = "", children }: NavTextProps) {
  return <span className={`font-barlow text-base tracking-[2.7px] ${className}`}>{children}</span>
}
