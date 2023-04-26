import { Heading } from "@/components/1-atoms/Heading"
import { Subheading } from "@/components/1-atoms/Subheading"

export default function Home() {
  return (
    <div className="h-screen bg-scroll bg-black bg-cover font-primary bg-earth-sm md:bg-earth-md lg:bg-earth-lg">
      <main>
        <Subheading theme="primary">So, you want to travel to</Subheading>
        <Heading level="h1">Space</Heading>
      </main>
    </div>
  )
}
