import { StorybookHeading } from "@/components/storybook-components/StorybookHeading"
import { IconWrapper } from "."
import { Logo } from "./Logo"

const meta = {
  title: "Atoms",
}

export default meta

export const Icons = {
  render: () => (
    <div className="p-2 space-y-4">
      <StorybookHeading>Icons</StorybookHeading>
      <IconWrapper icon={<Logo />} />
    </div>
  ),
}
