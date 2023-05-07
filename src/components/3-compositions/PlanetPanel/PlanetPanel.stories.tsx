import { PlanetPanel } from "."
import { mockData } from "./const"
import { PageLayout } from "../PageLayout"

const meta = {
  title: "Compositions/Planets Panel",
}

export const PlanetsPanel = {
  render: () => (
    <PageLayout className="pt-0 m:pt-0 lg:pt-0">
      <PlanetPanel data={mockData} />
    </PageLayout>
  ),
}

export default meta
