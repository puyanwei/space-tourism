import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      Space Tourism
      <div className="bg-white text-space-black">Space black</div>
      <div className="bg-white text-space-light-blue">Space light blue</div>
      <div className="text-space-white">Space white</div>
    </main>
  )
}
