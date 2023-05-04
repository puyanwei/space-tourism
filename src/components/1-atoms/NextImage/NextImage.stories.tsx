import { NextImage } from "."

const meta = {
  title: "Atoms/Image",
}

export const Image = {
  render: () => (
    <NextImage
      src="./assets/destination/image-moon.png"
      fallbackSrc="./assets/destination/image-moon.webp"
      alt="The moon"
      width="445"
      height="445"
    />
  ),
}

export default meta
