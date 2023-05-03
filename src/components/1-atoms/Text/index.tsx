import { Component } from "@/shared/types"

interface TextProps extends Component {
  children: string
  theme?: "primary" | "serif"
}

export function Text({ className = "", children, theme = "primary" }: TextProps) {
  return (
    <p
      className={`font-primary text-[15px] md:text-[16px] lg:text-[18px] text-white leading-7 lg:leading-8 tracking-wider font-${theme} ${className}`}
    >
      {children}
    </p>
  )
}
