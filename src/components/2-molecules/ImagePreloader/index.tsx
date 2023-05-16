import { NextImage } from "@/components/1-atoms/NextImage"

interface ImagePreloaderProps {
  imageUrls: string[]
}

export function ImagePreloader({ imageUrls }: ImagePreloaderProps) {
  return (
    <>
      {imageUrls.map((url, index) => (
        <NextImage
          className="hidden"
          src={url}
          fallbackSrc={url}
          alt="image preloader"
          height="0"
          width="0"
          key={index}
          priority={true}
        />
      ))}
    </>
  )
}
