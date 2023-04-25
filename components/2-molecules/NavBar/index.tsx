import { Component } from "@/shared/types"
import Link from "next/link"

export interface NavBarItem {
  href: string
  text: string
}
interface NavBarProps extends Component {
  data: NavBarItem[]
  currentPath: string
}

export function NavBar({ data, currentPath, className }: NavBarProps) {
  return (
    <nav className="font-barlow text-base letter-spacing-[2.7px] uppercase">
      <ul className="flex gap-10 px-8 bg-space-black justify-evenly">
        {data.map(({ href, text }, index) => {
          const navNumber = index < 10 ? `0${index}` : index
          const resolvedText = `/${text.toLowerCase()}`
          const linkStyle =
            currentPath === resolvedText
              ? `border-white`
              : `hover:border-white/50 border-transparent`

          return (
            <li
              className={`py-8 cursor-pointer border-b-[3px] ${linkStyle} ${className}`}
              key={`${index}-${text}`}
            >
              <Link href={href}>
                <b className="pr-2">{navNumber}</b>
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
