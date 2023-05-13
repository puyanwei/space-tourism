import type { Meta, StoryObj } from "@storybook/react"
import { Subheading as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Typography",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Subheadings: Story = {
  render: () => (
    <div className="space-y-2">
      <Component className="subheading" theme="serif">
        384,400 KM
      </Component>
      <br />
      <Component className="subheading" theme="primary">
        AVG. DISTANCE
      </Component>
    </div>
  ),
}
