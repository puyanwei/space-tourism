import { StorybookHeading } from "@/components/storybook-components/StorybookHeading"
import { IconWrapper as Component } from "."
import { Logo } from "./Logo"
import { CloseIcon } from "./CloseIcon"
import { HamburgerIcon } from "./HamburgerIcon"

const meta = {
  title: "Atoms",
}

export default meta

export const Icons = {
  render: () => (
    <div className="grid grid-cols-2 gap-2 max-w-sm">
      <StorybookHeading className="mb-0 text-left">Logo</StorybookHeading>
      <Component className="place-self-center" icon={<Logo />} />
      <StorybookHeading className="mb-0">Icon Close</StorybookHeading>
      <Component className="place-self-center" icon={<CloseIcon />} />
      <StorybookHeading className="mb-0">Menu Hamburger</StorybookHeading>
      <Component className="place-self-center" icon={<HamburgerIcon />} />
    </div>
  ),
}
