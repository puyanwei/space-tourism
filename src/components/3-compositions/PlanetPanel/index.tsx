import { Tab } from "@/components/1-atoms/Tab"
import { warnAndReturnNull } from "@/shared/helpers"
import { Component } from "@/shared/types"

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
    <div className="grid grid-cols-2 text-white">
      <div>IMAGE GOES HERE</div>
      <div className="space-x-12">
        {data.map(({ name }, index) => (
          <Tab key={`${name}-${index}`}>{name}</Tab>
        ))}
      </div>
    </div>
  )
}
