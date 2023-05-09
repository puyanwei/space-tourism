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
      <LeftPanel className="col-span-full mx-auto">
        <SpaceSubheading number="01">Pick your destination</SpaceSubheading>
        <NextImage
          className="mx-auto"
          src={webp}
          fallbackSrc={png}
          alt={name}
          width={`${imageSize}`}
          height={`${imageSize}`}
        />
      </LeftPanel>
      <RightPanel className="col-span-full">
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
        <Text className="pb-8">{description}</Text>
        <PlanetStatistics distance={distance} travelTime={travel} />
      </RightPanel>
    </>
  )
}

function TabGroup({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
function RightPanel({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
function LeftPanel({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
