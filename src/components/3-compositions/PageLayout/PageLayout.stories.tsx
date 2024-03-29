import { PageLayout as Component } from "."

const meta = {
  title: "Atoms/Page Layout",
  component: Component,
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const PageLayout = {
  render: () => (
    <Component className="border-2 border-white">
      {array.map((element, index) => {
        const color = index % 2 === 0 ? `bg-blue-200` : `bg-slate-200`
        return (
          <div className={`${color} h-full w-full flex justify-center items-center`} key={index}>
            Grid Column {1 * index + 1}
          </div>
        )
      })}
    </Component>
  ),
}

export default meta
