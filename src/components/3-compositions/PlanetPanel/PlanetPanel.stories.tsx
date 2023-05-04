import { PlanetPanel } from "."
import { mockData } from "./const"

const meta = {
  title: "Compositions/Planets Panel",
}

export const PlanetsPanel = {
  render: () => <PlanetPanel data={mockData} />,
}

export default meta
