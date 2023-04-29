import { NavBar } from "@/components/2-molecules/NavBar"
import "./styles.css"
import type { AppProps } from "next/app"
import { Logo } from "@/components/1-atoms/Icons/Logo"
import { IconWrapper } from "@/components/1-atoms/Icons"
import { usePathname } from "next/navigation"
import { BackgroundImage } from "@/components/1-atoms/BackgroundImage"
import { resolveBackgroundImage } from "@/shared/helpers"
import { useWindowSize } from "src/hooks/useWindowSize"
import { PageUrls } from "@/shared/types"

export const metadata = {
  title: "Space Tourism",
  description: "Explore Space Tourism",
}

const navBar = [
  { href: "/", text: "Home" },
  { href: "/destination", text: "Destination" },
  { href: "/crew", text: "Crew" },
  { href: "/technology", text: "Technology" },
]

function MyApp({ Component, pageProps }: AppProps) {
  const currentPath = usePathname() ?? ""
  const { width } = useWindowSize()

  if (!width) {
    new Error("width is undefined")
    return null
  }
  if (!currentPath) {
    new Error("currentPath url is an empty string")
    return null
  }

  const backgroundImageUrl = resolveBackgroundImage(width, currentPath as PageUrls)
  return (
    <>
      <BackgroundImage url={backgroundImageUrl} />
      <div className="fixed left-14 top-14">
        <IconWrapper icon={<Logo />} />
      </div>
      <div className="z-10 fixed border-[1px] border-space-dark-gray top-[85px] left-[13%] w-[35%]" />
      <NavBar
        className="fixed right-0 top-10 w-[55%] px-20"
        data={navBar}
        currentPath={currentPath as PageUrls}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
