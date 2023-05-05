import { SpaceSubheading } from "@/components/2-molecules/SpaceSubheading"
import { PlanetPanel } from "."
import { mockData } from "./const"

const meta = {
  title: "Compositions/Planets Panel",
}

export const PlanetsPanel = {
  render: () => (
    <div className="flex flex-col lg:grid h-screen lg:grid-cols-2 bg-scroll font-primary">
      <PlanetPanel data={mockData}>
        <SpaceSubheading number="01">Pick your destination</SpaceSubheading>
      </PlanetPanel>
    </div>
  ),
}

export default meta
