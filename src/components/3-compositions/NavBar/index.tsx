import { warnAndReturnNull } from "@/shared/helpers"
import { Component, PageUrls } from "@/shared/types"
import { useWindowSize } from "src/hooks/useWindowSize"
import { tabletSize } from "@/shared/consts"
import { NavBarMobile } from "./NavBarMobile"
import { NavBarDesktop } from "./NavBarDesktop"

export interface NavBarItem {
  href: string
  text: string
}
export interface NavBarProps extends Component {
  data: NavBarItem[]
  currentPath: PageUrls
}

export function NavBar({ data, currentPath }: NavBarProps) {
  const { width } = useWindowSize()
  if (!width) return warnAndReturnNull("width is undefined")

  const isMobileScreenSize = tabletSize > width

  return (
    <>
      {isMobileScreenSize ? (
        <NavBarMobile data={data} currentPath={currentPath} />
      ) : (
        <NavBarDesktop data={data} currentPath={currentPath} />
      )}
    </>
  )
}
