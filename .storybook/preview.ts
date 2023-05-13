import type { Preview } from "@storybook/react"
import "../src/pages/styles.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
    options: {
      storySort: {
        order: ["Atoms", ["Typography", "Colors", "Icons", "*"], "Molecules", "Compositions"],
      },
    },
  },
}

export default preview
