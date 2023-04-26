import type { Meta, StoryObj } from "@storybook/react"
import { Heading } from "."

const meta: Meta<typeof Heading> = {
  title: "Atoms/Typography",
  component: Heading,
}

export default meta
type Story = StoryObj<typeof Heading>

export const Headings: Story = {
  render: () => (
    <div className="uppercase">
      <Heading level="h1">Earth</Heading>
      <Heading level="h2">Venus 2</Heading>
      <Heading level="h3">Jupiter & Saturn</Heading>
      <br />
      <Heading level="h4">Uranus, Neptune & Pluto</Heading>
      <br />
      <Heading level="h5">So you want to travel to space</Heading>
    </div>
  ),
}
