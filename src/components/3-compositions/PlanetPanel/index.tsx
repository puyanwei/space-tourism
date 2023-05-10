import { useState } from "react"
import { Tab } from "@/components/1-atoms/Tab"
import { Text } from "@/components/1-atoms/Text"
import { resolveImageSize, warnAndReturnNull } from "@/shared/helpers"
import { Component, Destinations, WithChildren } from "@/shared/types"
import { Heading } from "@/components/1-atoms/Heading"
import { PlanetStatistics } from "@/components/2-molecules/PlanetStatistics"
import { NextImage } from "@/components/1-atoms/NextImage"
import { useWindowSize } from "src/hooks/useWindowSize"
import { SpaceSubheading } from "@/components/2-molecules/SpaceSubheading"

interface PlanetPanelProps extends Component {
  data: Destinations[]
}

export function PlanetPanel({ data }: PlanetPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { width } = useWindowSize()
  if (!width) return warnAndReturnNull("screen width is empty")
  if (!data.length) return warnAndReturnNull("data is empty")

  function handleOnClick(index: number) {
    setCurrentIndex(index)
  }

  const {
    name,
    description,
    distance,
    travel,
    images: { png, webp },
  } = data[currentIndex]

  const imageSize = resolveImageSize(width, 170, 300, 445)
  return (
    <>
      <div className="col-span-full flex flex-col flex-wrap content-center md:content-normal md:gap-4">
        <SpaceSubheading className="pt-0 pb-12 md:ml-16 md:mr-0" number="01">
          Pick your destination
        </SpaceSubheading>
        <NextImage
          className="mx-auto"
          src={webp}
          fallbackSrc={png}
          alt={name}
          width={`${imageSize}`}
          height={`${imageSize}`}
        />
        <TabGroup className="flex space-x-4 justify-center py-4">
          {data.map(({ name }, index) => (
            <Tab
              active={data[currentIndex].name === name}
              key={`${name}-${index}`}
              onClick={() => handleOnClick(index)}
            >
              {name}
            </Tab>
          ))}
        </TabGroup>
        <Heading level="h3">{name}</Heading>
        <Text className="pb-8 px-6 border-b-[1px] border-space-dark-gray md:self-center">
          {description}
        </Text>
        <PlanetStatistics className="p-6 md:self-center" distance={distance} travelTime={travel} />
      </div>
    </>
  )
}

function TabGroup({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
