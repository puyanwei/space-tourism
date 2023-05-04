import { Tab } from "@/components/1-atoms/Tab"
import { Text } from "@/components/1-atoms/Text"
import { warnAndReturnNull } from "@/shared/helpers"
import { Component } from "@/shared/types"
import { Heading } from "@/components/1-atoms/Heading"
import { PlanetStatistics } from "@/components/2-molecules/PlanetStatistics"
import { ReactNode, useState } from "react"
import { NextImage } from "@/components/1-atoms/NextImage"

interface Destination {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

interface PlanetPanelProps extends Component {
  data: Destination[]
}

export function PlanetPanel({ data }: PlanetPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  return (
    <div className="grid grid-cols-2 text-white ">
      <NextImage src={webp} fallbackSrc={png} alt={name} width="445" height="445" />
      <div className="max-w-[445px]">
        <TabGroup className="space-x-12">
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
        <Heading level="h2">{name}</Heading>
        <Text className="mb-12">{description}</Text>
        <PlanetStatistics distance={distance} travelTime={travel} />
      </div>
    </div>
  )
}

function TabGroup({ children, className }: { children: ReactNode; className: string }) {
  return <div className={className}>{children}</div>
}
