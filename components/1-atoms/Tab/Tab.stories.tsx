import type { Meta, StoryObj } from "@storybook/react"
import { Tab } from "."

const meta: Meta<typeof Tab> = {
  title: "Atoms",
  component: Tab,
}

export default meta
type Story = StoryObj<typeof Tab>

export const Tabs: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tab>Idle</Tab>
      <Tab active>Active</Tab>
    </div>
  ),
}
