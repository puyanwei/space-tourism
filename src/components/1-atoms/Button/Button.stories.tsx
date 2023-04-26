import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "."

const meta: Meta<typeof Button> = {
  title: "Atoms",
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Buttons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 m-4 text-center">
      <div>
        <Button>Default</Button>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Button variant="explore">Explore</Button>
      </div>
    </div>
  ),
}
