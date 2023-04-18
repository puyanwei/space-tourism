import { StorybookHeading } from "../storybook -components/StorybookHeading"

const meta = {
  title: "Atoms/Theme Colors",
}

export default meta

export const ThemeColors = {
  render: () => (
    <div className="p-2 space-y-4 text-black bg-slate-200">
      <StorybookHeading>Space Black (#0b0d17)</StorybookHeading>
      <div className="w-12 h-12 bg-space-black" />
      <StorybookHeading>Space Light Blue (#d0d6f9)</StorybookHeading>
      <div className="w-12 h-12 bg-space-light-blue" />
      <StorybookHeading>Space White (#ffffff)</StorybookHeading>
      <div className="w-12 h-12 bg-space-white" />
    </div>
  ),
}
