import { Component } from "@/shared/types"

const headingVariants = {
  h1: "font-bellfair text-[150px]",
  h2: "font-bellfair text-[100px]",
  h3: "font-bellfair text-[56px]",
  h4: "font-bellfair text-[32px]",
  h5: "font-barlow text-[28px] tracking-[4.75px]",
} as const

type headingLevel = keyof typeof headingVariants

interface HeadingProps extends Component {
  children: string
  level: headingLevel
}

export function Heading({ className = "", children, level }: HeadingProps) {
  const Tag = level

  return <Tag className={`${headingVariants[level]} ${className}`}>{children}</Tag>
}
