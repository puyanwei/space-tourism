import type { Meta, StoryObj } from "@storybook/react"
import { Tab } from "."

const meta: Meta<typeof Tab> = {
  title: "Atoms",
  component: Tab,
}

export default meta
type Story = StoryObj<typeof Tab>

function handleClick() {
  console.warn("clicked")
}

export const Tabs: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tab active={false} onClick={handleClick}>
        Idle
      </Tab>
      <Tab onClick={handleClick} active={true}>
        Active
      </Tab>
      <Tab active={false} onClick={handleClick} buttonTextClassName="!border-b-space-gray">
        Hover
      </Tab>
    </div>
  ),
}
