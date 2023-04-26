import { Component } from "@/shared/types"

export interface IconWrapperProps extends Component {
  icon: JSX.Element
}

export function IconWrapper({ className = ``, icon }: IconWrapperProps) {
  return <span className={`flex items-center pl-1 ${className}`}>{icon}</span>
}
