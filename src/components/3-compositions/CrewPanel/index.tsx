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
    <div className="flex flex-col col-span-full flex-wrap content-center md:content-normal -mb-6">
      <SpaceSubheading className="order-1 md:order-none" number="02">
        Meet your crew
      </SpaceSubheading>
      <Text
        className="uppercase order-4 md:order-none self-center md:py-4"
        theme="serif"
        color="text-space-gray"
        sizeOverride="text-[16px] md:text-[24px] lg:text-[32px]"
      >
        {role}
      </Text>
      <Text
        className="order-5 md:order-none uppercase lg:leading-[50px] self-center md:pb-4"
        theme="serif"
        sizeOverride="text-[24px] md:text-[40px] lg:text-[56px]"
      >
        {name}
      </Text>
      <Text className="order-6 md:order-none pt-4 px-6 self-center">{bio}</Text>
      <CrewSlider className="py-4 md:py-8 space-x-4 order-3 md:order-none">
        {data.map(({ name }, index) => (
          <ButtonSlider
            key={`${name} ${index}}`}
            active={data[currentIndex].name === name}
            onClick={() => handleOnClick(index)}
          />
        ))}
      </CrewSlider>
      <div className="w-[327px] h-[223px] md:w-[450px] md:h-[459px] relative order-2 md:order-none border-b-2 border-b-space-dark-gray md:border-b-transparent -z-10 mx-auto">
        <NextImage
          className="object-contain md:fixed md:top-10 md:object-bottom"
          src={webp}
          fallbackSrc={png}
          alt={`${name}, ${role}`}
          fill
        />
      </div>
    </div>
  )
}

function CrewSlider({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
