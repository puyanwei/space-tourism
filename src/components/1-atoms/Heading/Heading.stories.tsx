import type { Meta, StoryObj } from "@storybook/react"
import { Heading as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Typography",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Headings: Story = {
  render: () => (
    <div className="uppercase">
      <Component level="h1">Earth</Component>
      <Component level="h2">Venus 2</Component>
      <Component level="h3">Jupiter & Saturn</Component>
      <br />
      <Component level="h4">Uranus, Neptune & Pluto</Component>
      <br />
      <Component level="h5">So you want to travel to space</Component>
    </div>
  ),
}
