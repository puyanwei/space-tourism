import { Component, Page, PageUrls } from "@/shared/types"
import Link from "next/link"

export interface NavBarItem {
  href: string
  text: string
}
interface NavBarProps extends Component {
  data: NavBarItem[]
  currentPath: PageUrls
}

export function NavBar({ data, currentPath, className = "" }: NavBarProps) {
  return (
    <nav
      className={`font-primary text-base letter-spacing-[2.7px] uppercase text-white backdrop-blur-sm bg-space-gray/10 h-screen md:h-[90px] absolute right-0 top-0 md:top-10 w-[65%] md:px-20 ${className}`}
    >
      <ul className="flex flex-col md:flex-row md:gap-10 md:px-8 md:justify-evenly">
        {data.map(({ href, text }, index) => {
          const navNumber = index < 10 ? `0${index}` : index
          const resolvedText = `/${text.toLowerCase()}`
          const resolvedCurrentPath = currentPath === "/" ? "/home" : currentPath
          const linkStyle =
            resolvedCurrentPath === resolvedText
              ? `border-white`
              : `md:hover:border-white/50 md:border-transparent border-transparent`

          return (
            <Link href={href} key={`${index}-${text}`}>
              <li
                className={`px-8 py-4 md:py-8 md:px-0 cursor-pointer md:border-b-[3px] md:border-r-transparent md:hover:border-r-transparent border-r-[3px] ${linkStyle}`}
              >
                <b className="pr-2">{navNumber}</b>
                {text}
              </li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}
