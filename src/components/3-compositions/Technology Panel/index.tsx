import { useState } from "react"
import { Text } from "@/components/1-atoms/Text"
import { warnAndReturnNull } from "@/shared/helpers"
import { Component, Technology, WithChildren } from "@/shared/types"
import { NextImage } from "@/components/1-atoms/NextImage"
import { useWindowSize } from "src/hooks/useWindowSize"
import { desktopSize } from "@/shared/consts"
import { SpaceSubheading } from "@/components/2-molecules/SpaceSubheading"
import { ButtonSlider } from "@/components/1-atoms/ButtonSlider"
import { ImagePreloader } from "@/components/2-molecules/ImagePreloader"

interface TechnologyPanelProps extends Component {
  data: Technology[]
}

export function TechnologyPanel({ data }: TechnologyPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [technology, setTechnology] = useState(data[currentIndex])
  const { width } = useWindowSize()

  if (!width) return warnAndReturnNull("width is undefined")
  if (!data.length) return warnAndReturnNull("data is empty")

  function handleOnClick(index: number) {
    setCurrentIndex(index)
    setTechnology(data[index])
  }

  const {
    name,
    images: { portrait, landscape },
    description,
  } = technology

  const resolvedImage = width > desktopSize ? portrait : landscape
  const imageUrls = data.reduce((accumulator: string[], currentValue) => {
    const array: string[] = []
    array.push(currentValue.images.portrait)
    array.push(currentValue.images.landscape)
    return [...accumulator, ...array]
  }, [])

  return (
    <>
      <div className="flex flex-col col-span-full lg:grid lg:grid-cols-12 lg:col-span-full lg:pl-8">
        <ImagePreloader imageUrls={imageUrls} />
        <SpaceSubheading className="md:pl-16 lg:col-span-full lg:pl-0" number="03">
          Space launch 101
        </SpaceSubheading>
        <div className="lg:hidden relative aspect-[768/310] -z-10">
          <NextImage
            className="object-cover"
            src={resolvedImage}
            fallbackSrc={resolvedImage}
            alt={name}
            fill
            loading="eager"
          />
        </div>
        <div className="lg:col-span-7 lg:grid lg:grid-cols-6">
          <CrewSlider className="py-6 space-x-4 lg:space-x-0 lg:space-y-6 lg:col-span-1 lg:flex lg:flex-col">
            {data.map(({ name }, index) => (
              <ButtonSlider
                version="vertical"
                key={`${name} ${index}}`}
                active={technology.name === name}
                onClick={() => handleOnClick(index)}
              >
                {index + 1}
              </ButtonSlider>
            ))}
          </CrewSlider>
          <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-start lg:pl-6">
            <Text className="pb-4 mx-auto uppercase lg:mx-0">The Terminology...</Text>
            <Text
              className="py-6 pt-2 mx-auto uppercase lg:mx-0 "
              theme="serif"
              sizeOverride="text-[24px] md:text-[40px] lg:text-[56px] lg:leading-snug lg:max-w-[360px] xl:max-w-lg"
              color="text-white"
            >
              {name}
            </Text>
            <Text className="max-w-[444px] px-6 mx-auto lg:mx-0 lg:px-0  lg:max-w-[360px] xl:max-w-lg">
              {description}
            </Text>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-5">
          <div className="hidden md:flex md:flex-grow" />
          <div className=" lg:h-[527px] lg:w-[515px] w-full lg:fixed lg:right-0 lg:bottom-24">
            <NextImage
              className="lg:object-contain lg:object-right"
              src={resolvedImage}
              fallbackSrc={resolvedImage}
              alt={name}
              fill
              loading="eager"
            />
          </div>
        </div>
      </div>
    </>
  )
}

function CrewSlider({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
