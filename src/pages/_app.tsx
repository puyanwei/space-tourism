import { NavBar } from "@/components/2-molecules/NavBar"
import "./styles.css"
import type { AppProps } from "next/app"

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
      <NavBar className="fixed right-0 top-10 w-[55%] px-20" data={navBar} currentPath="/" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
