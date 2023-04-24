import { StorybookHeading } from "../storybook-components/StorybookHeading"

const meta = {
  title: "Atoms/Colors",
}

export default meta

export const Colors = {
  render: () => (
    <div className="p-2 space-y-4 text-black bg-slate-200">
      <StorybookHeading>Space Black (#0b0d17)</StorybookHeading>
      <div className="w-12 h-12 rounded-md bg-space-black" />
      <StorybookHeading>Space Light Blue (#d0d6f9)</StorybookHeading>
      <div className="w-12 h-12 rounded-md bg-space-light-blue" />
      <StorybookHeading>Space White (#ffffff)</StorybookHeading>
      <div className="w-12 h-12 rounded-md bg-space-white" />
    </div>
  ),
}
