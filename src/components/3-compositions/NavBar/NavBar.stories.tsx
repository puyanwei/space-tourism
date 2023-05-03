import type { Meta, StoryObj } from "@storybook/react"
import { NavBar } from "."
import { data, active, hover, idle } from "./consts"

const meta: Meta<typeof NavBar> = {
  title: "Compositions/Navigation Bar",
  component: NavBar,
}

export default meta
type Story = StoryObj<typeof NavBar>

export const NavigationBar: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <NavBar data={data} currentPath="/" />
    </div>
  ),
}
