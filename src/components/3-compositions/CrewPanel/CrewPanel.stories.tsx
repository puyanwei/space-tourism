import { CrewPanel } from "."
import { mockData } from "./const"
import { PageLayout } from "../PageLayout"

const meta = {
  title: "Compositions/The Crew Panel",
}

export const TheCrewPanel = {
  render: () => (
    <PageLayout className="pt-0 m:pt-0 lg:pt-0">
      <CrewPanel data={mockData} />
    </PageLayout>
  ),
}

export default meta
