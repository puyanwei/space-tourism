import { ReactNode, useState } from "react"
import { Tab } from "@/components/1-atoms/Tab"
import { Text } from "@/components/1-atoms/Text"
import { warnAndReturnNull } from "@/shared/helpers"
import { Component, Destinations } from "@/shared/types"
import { Heading } from "@/components/1-atoms/Heading"
import { PlanetStatistics } from "@/components/2-molecules/PlanetStatistics"
import { NextImage } from "@/components/1-atoms/NextImage"

interface PlanetPanelProps extends Component {
  data: Destinations[]
  children: ReactNode
}

export function PlanetPanel({ data, children }: PlanetPanelProps) {
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
    <>
      <LeftPanel className="grid grid-cols-1">
        <div className="pl-60">{children}</div>
        <NextImage
          className="justify-self-end"
          src={webp}
          fallbackSrc={png}
          alt={name}
          width="445"
          height="445"
        />
      </LeftPanel>
      <RightPanel className="max-w-[445px] pt-24">
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
      </RightPanel>
    </>
  )
}

function TabGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}
function RightPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}
function LeftPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}
