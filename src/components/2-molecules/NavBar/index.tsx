import Link from "next/link"
import { useState } from "react"
import { warnAndReturnNull } from "@/shared/helpers"
import { Component, PageUrls } from "@/shared/types"
import { useWindowSize } from "src/hooks/useWindowSize"
import { tabletSize } from "@/shared/consts"
import { Button } from "@/components/1-atoms/Button"
import { CloseIcon } from "@/components/1-atoms/Icons/CloseIcon"
import { HamburgerIcon } from "@/components/1-atoms/Icons/HamburgerIcon"

export interface NavBarItem {
  href: string
  text: string
}
interface NavBarProps extends Component {
  data: NavBarItem[]
  currentPath: PageUrls
}

export function NavBar({ data, currentPath, className = "" }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { width } = useWindowSize()

  if (!width) return warnAndReturnNull("width is undefined")

  function handleHamburgerClick() {
    setIsMenuOpen(true)
  }

  function handleXClick() {
    setIsMenuOpen(false)
  }

  const isMobileScreenSize = tabletSize > width

  return (
    <>
      {isMobileScreenSize && (
        <span className="flex justify-end">
          {isMenuOpen ? (
            <Button className="z-10 pl-0 m-8" onClick={handleXClick} variant="unset">
              <CloseIcon />
            </Button>
          ) : (
            <Button className="z-10 pl-0 m-8" onClick={handleHamburgerClick} variant="unset">
              <HamburgerIcon />
            </Button>
          )}
        </span>
      )}
      {isMenuOpen && (
        <nav
          className={`pt-[118px] font-primary text-base letter-spacing-[2.7px] uppercase text-white backdrop-blur-sm bg-space-gray/10 h-screen md:h-[90px] absolute right-0 top-0 w-[60%] z-0 ${className}`}
        >
          <ul className="flex flex-col">
            {data.map(({ href, text }, index) => {
              const navNumber = index < 10 ? `0${index}` : index
              const resolvedText = `/${text.toLowerCase()}`
              const resolvedCurrentPath = currentPath === "/" ? "/home" : currentPath
              const linkStyle =
                resolvedCurrentPath === resolvedText ? `border-white` : `border-transparent`

              return (
                <Link href={href} key={`${index}-${text}`}>
                  <li className={`px-8 py-4  cursor-pointer border-r-[3px] ${linkStyle}`}>
                    <b className="pr-2">{navNumber}</b>
                    {text}
                  </li>
                </Link>
              )
            })}
          </ul>
        </nav>
      )}
      {!isMobileScreenSize && (
        <nav
          className={`font-primary text-base letter-spacing-[2.7px] uppercase text-white backdrop-blur-sm bg-space-gray/10 h-screen md:h-[90px] absolute right-0 top-0 md:top-10 w-[65%] md:px-20 z-0 ${className}`}
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
      )}
    </>
  )
}
