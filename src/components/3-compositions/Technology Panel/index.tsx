import { useState } from "react"
import { Text } from "@/components/1-atoms/Text"
import { resolveImageSize, warnAndReturnNull } from "@/shared/helpers"
import { Component, Crew, Destinations, Technology, WithChildren } from "@/shared/types"
import { NextImage } from "@/components/1-atoms/NextImage"
import { useWindowSize } from "src/hooks/useWindowSize"
import { desktopSize, tabletSize } from "@/shared/consts"
import { SpaceSubheading } from "@/components/2-molecules/SpaceSubheading"
import { ButtonSlider } from "@/components/1-atoms/ButtonSlider"

interface TechnologyPanelProps extends Component {
  data: Technology[]
}

export function TechnologyPanel({ data }: TechnologyPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { width } = useWindowSize()
  if (!data.length) return warnAndReturnNull("data is empty")

  function handleOnClick(index: number) {
    setCurrentIndex(index)
  }

  const {
    name,
    images: { portrait, landscape },
    description,
  } = data[currentIndex]

  const resolvedImage = width > desktopSize ? portrait : landscape
  return (
    <>
      <div className="grid grid-cols-1 col-span-full content-center lg:content-normal flex-wrap lg:grid lg:grid-cols-12 lg:col-span-full">
        <SpaceSubheading className="md:pl-16 lg:col-span-full" number="03">
          Space launch 101
        </SpaceSubheading>
        <div className="lg:hidden relative aspect-[768/310] -z-10">
          <NextImage
            className="object-cover"
            src={resolvedImage}
            fallbackSrc={resolvedImage}
            alt={name}
            fill
          />
        </div>
        <div className="lg:col-span-7 lg:grid lg:grid-cols-6">
          <CrewSlider className="space-x-4 lg:space-x-0 lg:space-y-6 py-6 lg:col-span-1 lg:flex lg:flex-col">
            {data.map(({ name }, index) => (
              <ButtonSlider
                version="vertical"
                key={`${name} ${index}}`}
                active={data[currentIndex].name === name}
                onClick={() => handleOnClick(index)}
              >
                {index + 1}
              </ButtonSlider>
            ))}
          </CrewSlider>
          <div className="lg:col-span-5 lg:flex lg:flex-col lg:justify-start lg:pl-6">
            <Text className="uppercase mx-auto lg:mx-0 pb-4">The Terminology...</Text>
            <Text
              className="uppercase py-6 pt-2 mx-auto lg:mx-0"
              theme="serif"
              sizeOverride="text-[24px] md:text-[40px] lg:text-[56px]"
            >
              {name}
            </Text>
            <Text className="max-w-[444px] px-6 mx-auto lg:mx-0 lg:px-0  lg:max-w-[470px]">
              {description}
            </Text>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-5">
          <div className="hidden md:flex md:flex-grow" />
          <div className=" lg:h-[527px] lg:w-[515px] w-full -z-10 lg:fixed lg:right-0 lg:bottom-24">
            <NextImage
              className="lg:object-contain lg:object-right"
              src={resolvedImage}
              fallbackSrc={resolvedImage}
              alt={name}
              fill
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
