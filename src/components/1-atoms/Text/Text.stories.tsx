import type { Meta, StoryObj } from "@storybook/react"
import { Text as Component } from "."

const meta: Meta<typeof Component> = {
  title: "Atoms/Typography",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const Text: Story = {
  render: () => (
    <Component>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sequi inventore dolore dolor
      pariatur? Aperiam dolore veniam facilis. Eveniet quo voluptatum sed totam ea culpa dicta
      voluptates dolorum corporis ipsa.
    </Component>
  ),
}
