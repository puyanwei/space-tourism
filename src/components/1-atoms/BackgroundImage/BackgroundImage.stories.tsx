import type { Meta, StoryObj } from "@storybook/react"
import { BackgroundImage } from "."

const meta: Meta<typeof BackgroundImage> = {
  title: "Atoms",
  component: BackgroundImage,
}

export default meta
type Story = StoryObj<typeof BackgroundImage>

export const BackgroundImages: Story = {
  render: () => <BackgroundImage url={"assets/home/background-home-desktop.jpg"} />,
}
