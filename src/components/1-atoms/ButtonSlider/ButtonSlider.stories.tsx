import type { Meta, StoryObj } from "@storybook/react"
import { ButtonSlider } from "."
import { StorybookHeading } from "@/components/storybook-components/StorybookHeading"

const meta: Meta<typeof ButtonSlider> = {
  title: "Atoms",
  component: ButtonSlider,
}

export default meta
type Story = StoryObj<typeof ButtonSlider>

function handleOnClick() {
  console.warn("Button slider clicked")
}

export const ButtonSliders: Story = {
  render: () => (
    <div>
      <StorybookHeading className="text-black">Active/Hover/Idle</StorybookHeading>
      <div className="flex space-x-4 my-4">
        <ButtonSlider onClick={handleOnClick} active={true} />
        <ButtonSlider onClick={handleOnClick} className="!bg-space-gray" />
        <ButtonSlider onClick={handleOnClick} />
      </div>
      <StorybookHeading className="text-black">Vertical Version</StorybookHeading>
      <div className="flex flex-col space-y-4 my-4">
        <ButtonSlider onClick={handleOnClick} active={true} version="vertical">
          1
        </ButtonSlider>
        <ButtonSlider onClick={handleOnClick} className="!border-2" version="vertical">
          2
        </ButtonSlider>
        <ButtonSlider onClick={handleOnClick} version="vertical">
          3
        </ButtonSlider>
      </div>
    </div>
  ),
}
