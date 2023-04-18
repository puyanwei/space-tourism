import "./globals.css"
import { Bellefair, Barlow_Condensed } from "next/font/google"

const bellefair = Bellefair({ subsets: ["latin"], weight: "400", variable: "--font-bellefair" })

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
})

export const metadata = {
  title: "Space Tourism",
  description: "Explore Space Tourism",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bellefair.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
