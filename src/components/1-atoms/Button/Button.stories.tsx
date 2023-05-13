import type { Meta, StoryObj } from "@storybook/react"
import { Button as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Buttons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 m-4 text-center">
      <div>
        <Component>Default</Component>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Component variant="explore">Explore</Component>
      </div>
    </div>
  ),
}
