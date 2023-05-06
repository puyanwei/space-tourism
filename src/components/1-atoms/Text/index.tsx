import { Component } from "@/shared/types"

interface TextProps extends Component {
  children: string
  theme?: "primary" | "serif"
  sizeOverride?: string
}

export function Text({ className = "", children, theme = "primary", sizeOverride }: TextProps) {
  const resolvedSize = sizeOverride || "text-[15px] md:text-[16px] lg:text-[18px]"
  return (
    <p
      className={`font-primary text-space-light-blue leading-7 lg:leading-8 tracking-wider ${resolvedSize} font-${theme} ${className}`}
    >
      {children}
    </p>
  )
}
