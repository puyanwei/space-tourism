import type { Meta, StoryObj } from "@storybook/react"
import { SpaceSubheading } from "."

const meta: Meta<typeof SpaceSubheading> = {
  title: "Molecules/Space Subheadings",
  component: SpaceSubheading,
}

export default meta
type Story = StoryObj<typeof SpaceSubheading>

export const SpaceSubheadings: Story = {
  render: () => <SpaceSubheading number="01">Pick your destination</SpaceSubheading>,
}
