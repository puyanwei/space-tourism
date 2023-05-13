import type { Meta, StoryObj } from "@storybook/react"
import { ButtonSlider as Component } from "."
import { StorybookHeading } from "@/components/storybook-components/StorybookHeading"

const meta: Meta<typeof Component> = {
  title: "Atoms",
  component: Component,
}

export default meta
type Story = StoryObj<typeof Component>

function handleOnClick() {
  console.warn("Button slider clicked")
}

export const ButtonSliders: Story = {
  render: () => (
    <div>
      <StorybookHeading className="text-black">Active/Hover/Idle</StorybookHeading>
      <div className="flex space-x-4 my-4">
        <Component onClick={handleOnClick} active={true} />
        <Component onClick={handleOnClick} className="!bg-space-gray" />
        <Component onClick={handleOnClick} />
      </div>
      <StorybookHeading className="text-black">Vertical Version</StorybookHeading>
      <div className="flex flex-col space-y-4 my-4">
        <Component onClick={handleOnClick} active={true} version="vertical">
          1
        </Component>
        <Component onClick={handleOnClick} className="!border-2" version="vertical">
          2
        </Component>
        <Component onClick={handleOnClick} version="vertical">
          3
        </Component>
      </div>
    </div>
  ),
}
