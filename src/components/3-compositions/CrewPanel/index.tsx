import { ReactNode, useState } from "react"
import { Tab } from "@/components/1-atoms/Tab"
import { Text } from "@/components/1-atoms/Text"
import { resolveImageSize, warnAndReturnNull } from "@/shared/helpers"
import { Component, Crew, Destinations, WithChildren } from "@/shared/types"
import { Heading } from "@/components/1-atoms/Heading"
import { PlanetStatistics } from "@/components/2-molecules/PlanetStatistics"
import { NextImage } from "@/components/1-atoms/NextImage"
import { useWindowSize } from "src/hooks/useWindowSize"
import { desktopSize, tabletSize } from "@/shared/consts"
import { SpaceSubheading } from "@/components/2-molecules/SpaceSubheading"
import { ButtonSlider } from "@/components/1-atoms/ButtonSlider"

interface CrewPanalProps extends Component {
  data: Crew[]
}

export function CrewPanel({ data }: CrewPanalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { width } = useWindowSize()
  if (!width) return warnAndReturnNull("screen width is empty")
  if (!data.length) return warnAndReturnNull("data is empty")

  function handleOnClick(index: number) {
    setCurrentIndex(index)
  }

  const {
    name,
    images: { png, webp },
    role,
    bio,
  } = data[currentIndex]

  return (
    <div className="flex flex-col col-span-full flex-wrap content-center">
      <SpaceSubheading className="order-1 md:order-none" number="02">
        Meet your crew
      </SpaceSubheading>
      <Text
        className="uppercase order-4 md:order-none"
        theme="serif"
        color="text-space-gray"
        sizeOverride="text-[16px] md:text-[24px] lg:text-[32px]"
      >
        {role}
      </Text>
      <Text
        className="order-5 md:order-none uppercase lg:leading-[50px]"
        theme="serif"
        sizeOverride="text-[24px] md:text-[40px] lg:text-[56px]"
      >
        {name}
      </Text>
      <Text className="order-6 md:order-none pt-4 mx-6">{bio}</Text>
      <div className="hidden md:flex md:flex-grow md:show" />
      <CrewSlider className="py-4 space-x-4 md:pt-0 md:pb-24 order-3 md:order-none">
        {data.map(({ name }, index) => (
          <ButtonSlider
            key={`${name} ${index}}`}
            active={data[currentIndex].name === name}
            onClick={() => handleOnClick(index)}
          />
        ))}
      </CrewSlider>
      <div className="h-[223px] w-[327px] relative order-2 md:order-none border-b-2 border-b-space-dark-gray -z-10 mx-6">
        <NextImage
          className="object-contain md:fixed md:bottom-0"
          src={webp}
          fallbackSrc={png}
          alt={`${name}, ${role}`}
          fill
        />
      </div>
    </div>
  )
}

function RightPanel({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
function LeftPanel({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
function CrewSlider({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
