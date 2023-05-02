import { Component } from "@/shared/types"

interface TextProps extends Component {
  children: string
}

export function Text({ className = "", children }: TextProps) {
  return (
    <p className={`font-primary text-[18px] text-white leading-8 tracking-wider ${className}`}>
      {children}
    </p>
  )
}
