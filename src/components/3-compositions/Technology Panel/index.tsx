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
  if (!width) return warnAndReturnNull("screen width is empty")
  if (!data.length) return warnAndReturnNull("data is empty")

  function handleOnClick(index: number) {
    setCurrentIndex(index)
  }

  const {
    name,
    images: { portrait, landscape },
    description,
  } = data[currentIndex]

  const imageWidth = resolveImageSize(width, 327, 456, 681)
  const imageHeight = resolveImageSize(width, 327, 572, 568)
  const resolvedImage = width > tabletSize ? portrait : landscape
  return (
    <>
      <div className="flex flex-col col-span-full content-center flex-wrap">
        <SpaceSubheading className="order-1 lg:order-none" number="03">
          Space launch 101
        </SpaceSubheading>
        <CrewSlider className="order-3 lg:order-none space-x-4 py-6">
          {data.map(({ name }, index) => {
            console.log(data[currentIndex].name, name)
            return (
              <ButtonSlider
                version="vertical"
                key={`${name} ${index}}`}
                active={data[currentIndex].name === name}
                onClick={() => handleOnClick(index)}
              >
                {index + 1}
              </ButtonSlider>
            )
          })}
        </CrewSlider>
        <Text className="uppercase order-4 lg:order-none mx-auto">The Terminology...</Text>
        <Text
          className="uppercase py-6 order-5 lg:order-none pt-2 mx-auto"
          theme="serif"
          sizeOverride="text-[24px] md:text-[40px] lg:text-[56px]"
        >
          {name}
        </Text>
        <Text className="max-w-[444px] order-6 lg:order-none mx-6">{description}</Text>
        <div className="hidden md:flex md:flex-grow md:show" />
        <div className="order-2 lg:order-none relative aspect-[375/170] w-full -z-10">
          <NextImage
            className="object-cover"
            src={resolvedImage}
            fallbackSrc={resolvedImage}
            alt={name}
            fill
          />
        </div>
      </div>
    </>
  )
}

function RightPanel({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
function LeftPanel({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
function PageHeading({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
function CrewSlider({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
