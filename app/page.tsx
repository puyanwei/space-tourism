import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 text-5xl">
      Space Tourism
      <div className="bg-white text-space-black">Space black</div>
      <div className="text-space-light-blue font-barlow">Space light blue in font barlow</div>
      <div className="text-space-white font-bellefair">Space white in font bellefair</div>
    </main>
  )
}
