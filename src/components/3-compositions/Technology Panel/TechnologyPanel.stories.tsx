import { TechnologyPanel } from "."
import { mockData } from "./const"
import { PageLayout } from "../PageLayout"

const meta = {
  title: "Compositions/Space Tech Panel",
}

export const SpaceTechPanel = {
  render: () => (
    <PageLayout className="pt-0 m:pt-0 lg:pt-0">
      <TechnologyPanel data={mockData} />
    </PageLayout>
  ),
}

export default meta
