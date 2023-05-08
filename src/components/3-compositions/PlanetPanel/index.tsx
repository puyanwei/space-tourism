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
      <LeftPanel className="grid grid-cols-1 lg:justify-self-center lg:pl-[5%]">
        <PageHeading className="justify-self-center md:justify-self-start md:pl-[6%]">
          <SpaceSubheading number="01">Pick your destination</SpaceSubheading>
        </PageHeading>
        <NextImage
          className="justify-self-center lg:pt-16 py-8"
          src={webp}
          fallbackSrc={png}
          alt={name}
          width={`${imageSize}`}
          height={`${imageSize}`}
        />
      </LeftPanel>
      <RightPanel className="max-w-[400px] md:max-w-[600px] mx-auto lg:mx-0 lg:max-w-[445px] lg:pt-24 px-6 md:px-0 md:pb-8 lg:pb-0">
        <TabGroup className="space-x-8 lg:space-x-12 pb-8 lg:pb-4">
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
        <Heading className="lg:text-[100px]" level="h3">
          {name}
        </Heading>
        <Text className="mb-12">{description}</Text>
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
function PageHeading({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
