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
  const [planet, setPlanet] = useState(data[currentIndex])
  const { width } = useWindowSize()

  if (!width) return warnAndReturnNull("width is undefined")
  if (!data.length) return warnAndReturnNull("data is empty")

  function handleOnClick(index: number) {
    setCurrentIndex(index)
    setPlanet(data[index])
  }

  const {
    name,
    description,
    distance,
    travel,
    images: { png, webp },
  } = planet

  const imageSize = resolveImageSize(width, 170, 300, 445)
  const tagSize = width > desktopSize ? "h2" : "h3"

  return (
    <>
      <div className="flex flex-col flex-wrap content-center col-span-full md:gap-4 lg:grid lg:grid-cols-12">
        <SpaceSubheading className="self-center lg:col-span-full lg:pl-16" number="01">
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
        <div className="lg:col-start-7 xl:col-start-8 lg:col-end-12 xl:col-end-13 lg:flex lg:flex-col lg:pb-8">
          <TabGroup className="flex justify-center py-4 space-x-4 lg:justify-start">
            {data.map(({ name }, index) => (
              <Tab
                active={planet.name === name}
                key={`${name}-${index}`}
                onClick={() => handleOnClick(index)}
              >
                {name}
              </Tab>
            ))}
          </TabGroup>
          <Heading level={tagSize}>{name}</Heading>
          <Text className="pb-8 px-6 lg:px-0 border-b-[1px] border-space-dark-gray md:self-center lg:self-start lg:h-[170px]">
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
