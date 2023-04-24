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
      <NavBar navBar={data} />
      <br />
      <br />
      <div className="max-w-xs">
        <NavBar navBar={active} className="!border-white" />
      </div>
      <div className="max-w-xs">
        <NavBar navBar={hover} className="!border-white/50" />
      </div>
      <div className="max-w-xs">
        <NavBar navBar={idle} />
      </div>
    </div>
  ),
}
