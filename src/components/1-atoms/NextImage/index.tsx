import { useState } from "react"
import { Component } from "@/shared/types"
import Image from "next/image"

interface NextImageProps extends Component {
  src: string
  fallbackSrc: string
  alt: string
  width?: SafeNumber
  height?: SafeNumber
  sizes?: string
  fill?: boolean
  priority?: boolean
  loading?: "lazy" | "eager" | undefined
}

type SafeNumber = number | `${number}`

export function NextImage({
  className,
  src,
  fallbackSrc,
  alt,
  width,
  height,
  sizes,
  fill = false,
  priority = false,
  loading = "lazy",
}: NextImageProps) {
  const [onError, setOnError] = useState(false)

  function handleOnError() {
    setOnError(true)
  }

  function resolveLeadingSlash(url: string): string {
    const resolvedUrl = url[0] === "." ? url.slice(1) : url
    return resolvedUrl
  }

  return (
    <Image
      className={className}
      src={onError ? resolveLeadingSlash(fallbackSrc) : resolveLeadingSlash(src)}
      width={width}
      height={height}
      alt={alt}
      onError={handleOnError}
      sizes={sizes}
      fill={fill}
      quality="100"
      priority={priority}
      loading={loading}
    />
  )
}
