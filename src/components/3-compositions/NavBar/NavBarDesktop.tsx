import Link from "next/link"
import { NavBarProps } from "."

export function NavBarDesktop({ data, currentPath, className = "" }: NavBarProps) {
  return (
    <nav
      className={`font-primary text-base letter-spacing-[2.7px] uppercase text-white backdrop-blur-sm bg-space-gray/10 h-[90px] absolute right-0 md:top-0 lg:top-10 w-[65%] px-20 ${className}`}
    >
      <ul className="flex gap-10 px-8 justify-evenly">
        {data.map(({ href, text }, index) => {
          const navNumber = index < 10 ? `0${index}` : index
          const resolvedText = `/${text.toLowerCase()}`
          const resolvedCurrentPath = currentPath === "/" ? "/home" : currentPath
          const linkStyle =
            resolvedCurrentPath === resolvedText
              ? `border-white`
              : `hover:border-white/50 border-transparent`

          return (
            <li className={`cursor-pointer border-b-[3px] ${linkStyle}`} key={`${index}-${text}`}>
              <Link href={href} className="inline-block py-8">
                <span className="hidden pr-2 font-bold lg:inline">{navNumber}</span>
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
