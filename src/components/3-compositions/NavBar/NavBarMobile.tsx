import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/1-atoms/Button"
import { CloseIcon } from "@/components/1-atoms/Icons/CloseIcon"
import { HamburgerIcon } from "@/components/1-atoms/Icons/HamburgerIcon"
import { NavBarProps } from "."

export function NavBarMobile({ data, currentPath, className = "" }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleHamburgerClick() {
    setIsMenuOpen(true)
  }

  function handleXClick() {
    setIsMenuOpen(false)
  }

  const slideAnimation = isMenuOpen
    ? `translate-x-0 from opacity-0 to opacity-100`
    : `translate-x-full from opacity-100 to opacity-0`

  const pointerEventStatus = isMenuOpen ? `pointer-events-auto` : `pointer-events-none`

  return (
    <div>
      <span className="flex justify-end">
        {isMenuOpen ? (
          <Button className="fixed z-10 pl-0 m-8" onClick={handleXClick} variant="unset">
            <CloseIcon />
          </Button>
        ) : (
          <Button className="fixed z-10 pl-0 m-8" onClick={handleHamburgerClick} variant="unset">
            <HamburgerIcon />
          </Button>
        )}
      </span>
      <div className={`fixed inset-0 overflow-hidden pointer-events-none ${pointerEventStatus}`}>
        <menu
          className={`pt-[118px] font-primary text-base letter-spacing-[2.7px] uppercase text-white backdrop-blur-2xl bg-space-gray/10 h-screen md:h-[90px] absolute right-0 top-0 w-[60%] z-0 transform ease-in-out duration-300 ${slideAnimation} ${className}`}
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
                  <li
                    className={`px-8 py-4  cursor-pointer border-r-[3px] ${linkStyle}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <b className="pr-2">{navNumber}</b>
                    {text}
                  </li>
                </Link>
              )
            })}
          </ul>
        </menu>
      </div>
    </div>
  )
}
