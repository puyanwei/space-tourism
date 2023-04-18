const meta = {
  title: "Atoms/Theme Colors",
}

export default meta

export const ThemeColors = {
  render: () => (
    <div className="p-2 space-y-2 text-black bg-slate-200">
      <h1>Space Black (#0b0d17)</h1>
      <div className="w-12 h-12 bg-space-black" />
      <h1>Space Light Blue (#d0d6f9)</h1>
      <div className="w-12 h-12 bg-space-light-blue" />
      <h1>Space White (#ffffff)</h1>
      <div className="w-12 h-12 bg-space-white" />
    </div>
  ),
}
