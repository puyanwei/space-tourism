import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "."

const meta: Meta<typeof Text> = {
  title: "Atoms/Typography",
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Texts: Story = {
  render: () => (
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sequi inventore dolore dolor
      pariatur? Aperiam dolore veniam facilis. Eveniet quo voluptatum sed totam ea culpa dicta
      voluptates dolorum corporis ipsa.
    </Text>
  ),
}
