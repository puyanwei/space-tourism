import { Text } from "@/components/1-atoms/Text"
import { Component } from "@/shared/types"

interface PlanetStatisticsProps extends Component {
  distance: string
  travelTime: string
}

export function PlanetStatistics({ distance, travelTime }: PlanetStatisticsProps) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 uppercase py-4 md:gap-2">
      <Text className="order-1 md:order-none lg:text-sm py-2 md:py-0 ">Avg. Distance</Text>
      <Text className="order-3 md:order-none lg:text-sm py-2 md:py-0 ">Est. Travel Time</Text>
      <Text
        className="order-2 md:order-none pb-4 md:py-0 text-white"
        theme="serif"
        sizeOverride="text-[28px]"
      >
        {distance}
      </Text>
      <Text className="order-4 md:order-none text-white" theme="serif" sizeOverride="text-[28px]">
        {travelTime}
      </Text>
    </div>
  )
}
