import { useState } from "react"
import { Component } from "@/shared/types"
import Image from "next/image"

interface NextImageProps extends Component {
  src: string
  fallbackSrc: string
  alt: string
  width: SafeNumber
  height: SafeNumber
}

type SafeNumber = number | `${number}`

export function NextImage({ src, fallbackSrc, alt, width, height }: NextImageProps) {
  const [onError, setOnError] = useState(false)

  function handleOnError() {
    setOnError(true)
  }
  return (
    <Image
      src={onError ? fallbackSrc : src}
      alt={alt}
      width={width}
      height={height}
      onError={handleOnError}
    />
  )
}
