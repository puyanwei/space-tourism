import { StorybookHeading } from "@/components/storybook-components/StorybookHeading"
import { IconWrapper } from "."
import { Logo } from "./Logo"
import { Close } from "./Close"
import { Hamburger } from "./Hamburger"

const meta = {
  title: "Atoms",
}

export default meta

export const Icons = {
  render: () => (
    <div className="grid grid-cols-2 gap-2">
      <StorybookHeading className="mb-0 text-left">Logo</StorybookHeading>
      <IconWrapper className="place-self-center" icon={<Logo />} />
      <StorybookHeading className="mb-0">Icon Close</StorybookHeading>
      <IconWrapper className="place-self-center" icon={<Close />} />
      <StorybookHeading className="mb-0">Menu Hamburger</StorybookHeading>
      <IconWrapper className="place-self-center" icon={<Hamburger />} />
    </div>
  ),
}
