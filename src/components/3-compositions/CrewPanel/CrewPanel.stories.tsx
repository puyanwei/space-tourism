import { CrewPanel as Component } from "."
import { mockData } from "./const"
import { PageLayout } from "../PageLayout"

const meta = {
  title: "Compositions/Crew Panel",
}

export const CrewPanel = {
  render: () => (
    <PageLayout className="pt-0 m:pt-0 lg:pt-0">
      <Component data={mockData} />
    </PageLayout>
  ),
}

export default meta
