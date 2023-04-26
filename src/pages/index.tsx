import { Button } from "@/components/1-atoms/Button"
import { Heading } from "@/components/1-atoms/Heading"
import { Subheading } from "@/components/1-atoms/Subheading"
import { Text } from "@/components/1-atoms/Text"

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-2 grid-rows-2 bg-scroll bg-black bg-cover font-primary bg-earth-sm md:bg-earth-md lg:bg-earth-lg">
      <main className="row-start-2 pl-[165px]">
        <Subheading theme="primary">So, you want to travel to</Subheading>
        <Heading level="h1">Space</Heading>
        <Text className="max-w-[450px]">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </Text>
      </main>
      <div className="pl-[400px] pt-[100px] row-start-2">
        <Button className="" variant="explore">
          Explore
        </Button>
      </div>
    </div>
  )
}
