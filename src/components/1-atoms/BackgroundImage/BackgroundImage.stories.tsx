import type { Meta, StoryObj } from "@storybook/react"
import { BackgroundImage as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const BackgroundImage: Story = {
  render: () => <Component url={"assets/home/background-home-desktop.jpg"} />,
}
