import type { Preview } from "@storybook/react"
import "../src/pages/styles.css"

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Atoms", ["Colors", "Typography", "Icons", "*"], "Molecules", "Compositions"],
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
}

export default preview
