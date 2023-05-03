import { PlanetStatistics } from "."

const meta = {
  title: "Molecules/Planet Statistics Panel",
}

const mockData = {
  distance: "384,400 km",
  travelTime: "3 days",
} as const

const { distance, travelTime } = mockData

export const PlanetStatisticsPanel = {
  render: () => (
    <div className="p-2 space-y-4 max-w-md">
      <PlanetStatistics distance={distance} travelTime={travelTime} />
    </div>
  ),
}

export default meta
