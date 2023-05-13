import type { Meta, StoryObj } from "@storybook/react"
import { SpaceSubheading as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Molecules/Space Subheading",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const SpaceSubheading: Story = {
  render: () => <Component number="01">Pick your destination</Component>,
}
