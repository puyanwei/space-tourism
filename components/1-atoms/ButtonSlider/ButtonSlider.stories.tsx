import type { Meta, StoryObj } from "@storybook/react"
import { ButtonSlider } from "."
import { StorybookHeading } from "@/components/storybook-components/StorybookHeading"

const meta: Meta<typeof ButtonSlider> = {
  title: "Atoms",
  component: ButtonSlider,
}

export default meta
type Story = StoryObj<typeof ButtonSlider>

export const ButtonSliders: Story = {
  render: () => (
    <div>
      <StorybookHeading>Active/Hover/Idle</StorybookHeading>
      <div className="flex space-x-4 my-4">
        <ButtonSlider active />
        <ButtonSlider className="!bg-space-gray" />
        <ButtonSlider />
      </div>
    </div>
  ),
}
