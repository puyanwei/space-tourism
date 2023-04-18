import { AppProps } from "next/app"
import "./globals.css"
import { Bellefair, Barlow_Condensed } from "next/font/google"

const bellefair = Bellefair({ subsets: ["latin"], weight: "400", variable: "--font-bellefair" })
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <main className={`${bellefair.variable}`}>
    <>
      <style jsx global>
        {`
          :root {
            --font-bellefair: ${bellefair.style.fontFamily};
            --font-barlow: ${barlow.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
    // </main>
  )
}
