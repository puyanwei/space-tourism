import Image from "next/image"
import { Component } from "@/shared/types"

interface BackgroundImageProps extends Component {
  url: string
}

export function BackgroundImage({ url }: BackgroundImageProps) {
  return (
    <Image
      className="fixed pointer-events-none -z-10"
      src={url}
      alt="background image of earth from space"
      fill
    />
  )
}