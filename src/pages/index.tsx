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
    <>
      <main className="col-span-full">
        <Subheading theme="primary">So, you want to travel to</Subheading>
        <Heading level="h1">Space</Heading>
        <Text className="px-6">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </Text>
      </main>
      <div className="col-span-full flex flex-col">
        <div className="flex flex-grow lg:hidden" />
        <div className="pb-8">
          <Button variant="explore" onClick={handleClick}>
            Explore
          </Button>
        </div>
      </div>
    </>
  )
}
