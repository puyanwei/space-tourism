import { Text } from "@/components/1-atoms/Text"
import { Component } from "@/shared/types"

interface PlanetStatisticsProps extends Component {
  distance: string
  travelTime: string
}

export function PlanetStatistics({ distance, travelTime }: PlanetStatisticsProps) {
  return (
    <div className="uppercase border-t-[1px] border-space-dark-gray grid grid-cols-2  py-4">
      <Text className="lg:text-sm">Avg. Distance</Text>
      <Text className="lg:text-sm">Est. Travel Time</Text>
      <Text className="lg:text-[28px]" theme="serif">
        {distance}
      </Text>
      <Text className="lg:text-[28px]" theme="serif">
        {travelTime}
      </Text>
    </div>
  )
}
