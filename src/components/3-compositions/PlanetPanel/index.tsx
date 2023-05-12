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
import { desktopSize } from "@/shared/consts"

interface PlanetPanelProps extends Component {
  data: Destinations[]
}

export function PlanetPanel({ data }: PlanetPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { width } = useWindowSize()

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
  const tagSize = width > desktopSize ? "h2" : "h3"
  return (
    <>
      <div className="col-span-full flex flex-col flex-wrap content-center md:gap-4 lg:grid lg:grid-cols-12">
        <SpaceSubheading className="lg:col-span-full self-center" number="01">
          Pick your destination
        </SpaceSubheading>
        <div className="relative mx-auto lg:mx-0 lg:col-start-2 lg:col-end-6 lg:pt-8">
          <NextImage
            src={webp}
            fallbackSrc={png}
            alt={name}
            width={`${imageSize}`}
            height={`${imageSize}`}
          />
        </div>
        <div className="lg:col-start-8 lg:col-end-13 lg:flex lg:flex-col lg:pb-8">
          <TabGroup className="flex space-x-4 justify-center lg:justify-start py-4">
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
          <Heading level={tagSize}>{name}</Heading>
          <Text className="pb-8 px-6 lg:px-0 border-b-[1px] border-space-dark-gray md:self-center lg:self-start">
            {description}
          </Text>
          <PlanetStatistics
            className="p-6 md:self-center lg:self-start lg:p-0 lg:pt-4"
            distance={distance}
            travelTime={travel}
          />
        </div>
      </div>
    </>
  )
}

function TabGroup({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
