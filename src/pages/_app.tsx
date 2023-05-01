import { NavBar } from "@/components/2-molecules/NavBar"
import "./styles.css"
import type { AppProps } from "next/app"
import { Logo } from "@/components/1-atoms/Icons/Logo"
import { IconWrapper } from "@/components/1-atoms/Icons"
import { usePathname } from "next/navigation"
import { BackgroundImage } from "@/components/1-atoms/BackgroundImage"
import { resolveBackgroundImage, warnAndReturnNull } from "@/shared/helpers"
import { useWindowSize } from "src/hooks/useWindowSize"
import { PageUrls } from "@/shared/types"
import { navbar } from "@/shared/consts"

export const metadata = {
  title: "Space Tourism",
  description: "Explore Space Tourism",
}

function MyApp({ Component, pageProps }: AppProps) {
  const currentPath = usePathname() ?? ""
  const { width } = useWindowSize()

  if (!width) return warnAndReturnNull("width is undefined")
  if (!currentPath) return warnAndReturnNull("currentPath url is an empty string")

  const backgroundImageUrl = resolveBackgroundImage(width, currentPath as PageUrls)
  return (
    <div className="relative">
      <BackgroundImage url={backgroundImageUrl} />
      <Logo className="fixed left-14 top-14 className scale-[.835] md:scale-100" />
      <div className="z-10 fixed border-[1px] border-space-dark-gray top-[85px] left-[13%] w-[35%]" />
      <NavBar data={navbar} currentPath={currentPath as PageUrls} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
