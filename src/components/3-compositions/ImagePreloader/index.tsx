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
          height="1"
          width="1"
          key={index}
          priority={true}
        />
      ))}
    </>
  )
}
