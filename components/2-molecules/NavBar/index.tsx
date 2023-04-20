import { Component } from "@/shared/types"
import Link from "next/link"
import { useState, MouseEvent } from "react"

export interface NavBarItem {
  href: string
  text: string
}
interface NavBarProps extends Component {
  navBar: NavBarItem[]
}

export function NavBar({ navBar, className }: NavBarProps) {
  const [activeLink, setActiveLink] = useState("")

  function handleClick(e: MouseEvent<HTMLLIElement>) {
    const target = e.target as HTMLLIElement
    setActiveLink(target.innerText.toUpperCase())
  }

  return (
    <nav className="font-barlow text-base letter-spacing-[2.7px] uppercase">
      <ul className="flex gap-10 px-8 bg-space-black justify-evenly">
        {navBar.map(({ href, text }, index) => {
          const navNumber = index < 10 ? `0${index}` : index
          const resolvedLinkText = `${navNumber}${text}`.toUpperCase()
          const linkStyle =
            activeLink === resolvedLinkText
              ? `border-b-[3px] border-white`
              : `hover:border-b-[3px] hover:border-white/50`

          return (
            <li
              className={`py-8 cursor-pointer ${linkStyle} ${className}`}
              key={`${index}-${text}`}
              onClick={handleClick}
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
