import { Component } from "@/shared/types"

const headingVariants = {
  h1: "font-serif text-[150px]",
  h2: "font-serif text-[100px]",
  h3: "font-serif text-[56px]",
  h4: "font-serif text-[32px]",
  h5: "font-primary text-[28px] tracking-[4.75px]",
} as const

type headingLevel = keyof typeof headingVariants

interface HeadingProps extends Component {
  children: string
  level: headingLevel
}

export function Heading({ className = "", children, level }: HeadingProps) {
  const Tag = level

  return (
    <Tag className={`${headingVariants[level]} uppercase text-white ${className}`}>{children}</Tag>
  )
}
