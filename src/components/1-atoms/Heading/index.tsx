import { Component } from "@/shared/types"

const headingVariants = {
  h1: "font-bellefair text-[150px]",
  h2: "font-bellefair text-[100px]",
  h3: "font-bellefair text-[56px]",
  h4: "font-bellefair text-[32px]",
  h5: "font-primary text-[28px] tracking-[4.75px]",
} as const

type headingLevel = keyof typeof headingVariants

interface HeadingProps extends Component {
  children: string
  level: headingLevel
}

export function Heading({ className = "", children, level }: HeadingProps) {
  const Tag = level

  return <Tag className={`${headingVariants[level]} text-white ${className}`}>{children}</Tag>
}
