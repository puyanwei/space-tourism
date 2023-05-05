import { PageLayout } from "."

const meta = {
  title: "Atoms/Page Layout Wrapper",
}

export const PageLayoutWrapper = {
  render: () => (
    <PageLayout className="border-2 border-white">
      <div className="bg-blue-800 h-full w-full flex justify-center items-center">Section One</div>
      <div className="bg-green-800 h-full w-full flex justify-center items-center">Section Two</div>
    </PageLayout>
  ),
}

export default meta
