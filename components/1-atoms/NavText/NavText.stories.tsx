import type { Meta, StoryObj } from "@storybook/react"
import { NavText } from "."

const meta: Meta<typeof NavText> = {
  title: "Atoms/Typography",
  component: NavText,
}

export default meta
type Story = StoryObj<typeof NavText>

export const NavigationText: Story = {
  render: () => <NavText>EUROPA</NavText>,
}
