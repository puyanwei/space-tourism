import type { Meta, StoryObj } from "@storybook/react"
import { NavBar } from "."
import { data, active, hover, idle } from "./consts"

const meta: Meta<typeof NavBar> = {
  title: "Molecules/Navigation Bar",
  component: NavBar,
}

export default meta
type Story = StoryObj<typeof NavBar>

export const NavigationBar: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <NavBar data={data} currentPath="/" />
      <br />
      <br />
      <div className="max-w-xs">
        <NavBar data={active} currentPath="/active" />
      </div>
      <div className="max-w-xs">
        <NavBar data={hover} className="!border-white/50" currentPath="/" />
      </div>
      <div className="max-w-xs">
        <NavBar data={idle} currentPath="/" />
      </div>
    </div>
  ),
}
