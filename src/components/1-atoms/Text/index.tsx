import { Component } from "@/shared/types"

interface TextProps extends Component {
  children: string
  theme?: "primary" | "serif"
  sizeOverride?: string
  color?: string
}

export function Text({
  className = "",
  children,
  theme = "primary",
  sizeOverride,
  color = `text-space-light-blue`,
}: TextProps) {
  const resolvedSize = sizeOverride || "text-[15px] md:text-[16px] lg:text-[18px]"
  return (
    <p
      className={`max-w-md md:max-w-[573px] font-primary leading-7 lg:leading-8 tracking-wider ${color} ${resolvedSize} font-${theme} ${className}`}
    >
      {children}
    </p>
  )
}
