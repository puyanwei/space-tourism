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
    <div className="flex flex-col col-span-full flex-wrap content-center md:content-normal -mb-6 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-7 md:flex md:flex-col">
        <SpaceSubheading className="order-1 md:order-none md:pl-16 lg:pl-0" number="02">
          Meet your crew
        </SpaceSubheading>
        <Text
          className="uppercase order-4 md:order-none self-center lg:self-start md:py-4"
          theme="serif"
          color="text-space-gray"
          sizeOverride="text-[16px] md:text-[24px] lg:text-[32px]"
        >
          {role}
        </Text>
        <Heading
          className="order-5 md:order-none uppercase lg:leading-[50px] self-center lg:self-start md:pb-4"
          level="h3"
        >
          {name}
        </Heading>
        <Text className="order-6 md:order-none pt-4 px-6 lg:px-0 self-center lg:self-start lg:max-w-md">
          {bio}
        </Text>
        <div className="hidden lg:show lg:flex lg:flex-grow" />
        <CrewSlider className="py-4 md:py-8 space-x-4 order-3 md:order-none">
          {data.map(({ name }, index) => (
            <ButtonSlider
              key={`${name} ${index}}`}
              active={data[currentIndex].name === name}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </CrewSlider>
      </div>
      <div className="relative w-[327px] h-[223px] md:w-[450px] md:h-[315px] lg:w-[568px] lg:h-[670px] order-2 md:order-none border-b-2 border-b-space-dark-gray md:border-b-transparent -z-10 mx-auto lg:col-start-8">
        <NextImage
          className="object-contain md:fixed md:top-10 lg:top-20 md:object-bottom"
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
