import type { Meta, StoryObj } from "@storybook/react"
import { NavBar as Component } from "."
import { data } from "./consts"

const meta: Meta<typeof Component> = {
  title: "Compositions/Navigation Bar",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

export const NavigationBar: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Component data={data} currentPath="/" />
    </div>
  ),
}
