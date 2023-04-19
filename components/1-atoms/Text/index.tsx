import { Component } from "@/shared/types"

interface TextProps extends Component {
  children: string
}

export function Text({ className = "", children }: TextProps) {
  return <p className={`font-barlow text-[18px] ${className}`}>{children}</p>
}
