import { useRouter } from "next/router"

import { Button } from "@/components/1-atoms/Button"
import { Heading } from "@/components/1-atoms/Heading"
import { Subheading } from "@/components/1-atoms/Subheading"
import { Text } from "@/components/1-atoms/Text"

export default function Home() {
  const router = useRouter()

  function handleClick() {
    router.push("/destination")
  }

  return (
    <div className="flex flex-col lg:grid h-screen lg:grid-cols-2 lg:grid-rows-2 bg-scroll font-primary text-center justify-items-center lg:place-items-center pt-16 lg:pb-[131px] lg:text-left md:pt-[225px] px-4">
      <main className="lg:row-start-2 lg:pl-[165px]">
        <Subheading theme="primary">So, you want to travel to</Subheading>
        <Heading level="h1">Space</Heading>
        <Text className="max-w-[327px] md:max-w-[450px] mx-auto">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </Text>
      </main>
      <div className="lg:pl-[40%] lg:pt-[20%] lg:row-start-2 mt-[81px]">
        <Button variant="explore" onClick={handleClick}>
          Explore
        </Button>
      </div>
    </div>
  )
}
