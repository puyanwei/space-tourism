import { NavBar } from "@/components/2-molecules/NavBar"
import "./styles.css"
import type { AppProps } from "next/app"
import { Logo } from "@/components/1-atoms/Icons/Logo"
import { IconWrapper } from "@/components/1-atoms/Icons"

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
  return (
    <>
      <div className="fixed left-14 top-14">
        <IconWrapper icon={<Logo />} />
        <div className="fixed border-[1px] border-space-dark-gray top-[85px] left-[13%] w-[35%]" />
      </div>
      <NavBar className="fixed right-0 top-10 w-[55%] px-20" data={navBar} currentPath="/" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
