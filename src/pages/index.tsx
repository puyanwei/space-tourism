import { BackgroundImage } from "@/components/1-atoms/BackgroundImage"
import { Button } from "@/components/1-atoms/Button"
import { Heading } from "@/components/1-atoms/Heading"
import { Subheading } from "@/components/1-atoms/Subheading"
import { Text } from "@/components/1-atoms/Text"
import { useWindowSize } from "src/hooks/useWindowSize"

type Urls = keyof typeof backgroundImageMap
type BackgroundImageUrl = (typeof backgroundImageMap)[Urls]

const backgroundImageMap = {
  lg: "/assets/home/background-home-desktop.jpg",
  md: "/assets/home/background-home-tablet.jpg",
  sm: "/assets/home/background-home-mobile.jpg",
} as const

export default function Home() {
  const { width } = useWindowSize()
  if (!width) return null

  function resolveBackgroundImage(width: number): BackgroundImageUrl {
    if (width > 1440) return backgroundImageMap.lg
    if (width > 768) return backgroundImageMap.md
    return backgroundImageMap.sm
  }

  const backgroundImageUrl = resolveBackgroundImage(width)

  return (
    <div className={`grid h-screen grid-cols-2 grid-rows-2 bg-scroll font-primary`}>
      <BackgroundImage url={backgroundImageUrl} />
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
