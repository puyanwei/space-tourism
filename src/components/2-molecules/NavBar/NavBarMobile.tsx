import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/1-atoms/Button"
import { CloseIcon } from "@/components/1-atoms/Icons/CloseIcon"
import { HamburgerIcon } from "@/components/1-atoms/Icons/HamburgerIcon"
import { Component } from "@/shared/types"
import { data } from "autoprefixer"
import { NavBarProps } from "."

export function NavBarMobile({ data, currentPath, className = "" }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleHamburgerClick() {
    setIsMenuOpen(true)
  }

  function handleXClick() {
    setIsMenuOpen(false)
  }

  return (
    <>
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
        </nav>
      )}
    </>
  )
}
