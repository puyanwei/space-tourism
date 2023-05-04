import Image from "next/image"
import { Tab } from "@/components/1-atoms/Tab"
import { Text } from "@/components/1-atoms/Text"
import { warnAndReturnNull } from "@/shared/helpers"
import { Component } from "@/shared/types"
import { Heading } from "@/components/1-atoms/Heading"
import { PlanetStatistics } from "@/components/2-molecules/PlanetStatistics"

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
  if (!data.length) return warnAndReturnNull("data is empty")
  return (
    <div className="grid grid-cols-2 text-white ">
      <Image
        src="https://picsum.photos/seed/picsum/445"
        alt="placeholder image"
        width="445"
        height="445"
      />
      <div className="max-w-[445px]">
        <div className="space-x-12">
          {data.map(({ name }, index) => (
            <Tab key={`${name}-${index}`}>{name}</Tab>
          ))}
        </div>
        <Heading level="h2">Moon</Heading>
        <Text className="mb-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam libero ea quae
          blanditiis accusamus sit, enim eveniet! Facere inventore magnam voluptatum tempora laborum
          consequatur libero possimus! Aut saepe molestias obcaecati.
        </Text>
        <PlanetStatistics distance="384,000 km" travelTime="3 days" />
      </div>
    </div>
  )
}
