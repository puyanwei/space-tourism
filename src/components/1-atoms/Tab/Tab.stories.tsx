import type { Meta, StoryObj } from "@storybook/react"
import { Tab as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

function handleClick() {
  console.warn("clicked")
}

export const Tabs: Story = {
  render: () => (
    <div className="flex gap-4">
      <Component active={false} onClick={handleClick}>
        Idle
      </Component>
      <Component onClick={handleClick} active={true}>
        Active
      </Component>
      <Component active={false} onClick={handleClick} buttonTextClassName="!border-b-space-gray">
        Hover
      </Component>
    </div>
  ),
}
