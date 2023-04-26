import type { Meta, StoryObj } from "@storybook/react"
import { Subheading } from "."

const meta: Meta<typeof Subheading> = {
  title: "Atoms/Typography",
  component: Subheading,
}

export default meta
type Story = StoryObj<typeof Subheading>

export const Subheadings: Story = {
  render: () => (
    <div className="space-y-2">
      <Subheading className="subheading" theme="serif">
        384,400 KM
      </Subheading>
      <br />
      <Subheading className="subheading" theme="primary">
        AVG. DISTANCE
      </Subheading>
    </div>
  ),
}
