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
      <LeftPanel className="flex flex-col md:mx-8 pl-[15%]">
        <PageHeading className="pb-32">
          <SpaceSubheading number="03">Space launch 101</SpaceSubheading>
        </PageHeading>
        <div className="grid grid-cols-4">
          <CrewSlider className="flex flex-col col-span-1 space-y-6">
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
          <div className="grid col-span-3">
            <Text className="uppercase">The Terminology...</Text>
            <Text
              className="uppercase py-6"
              theme="serif"
              sizeOverride="text-[24px] md:text-[40px] lg:text-[56px]"
            >
              {name}
            </Text>
            <Text className="max-w-[444px]">{description}</Text>
            <div className="hidden md:flex md:flex-grow md:show" />
          </div>
        </div>
      </LeftPanel>
      <RightPanel className="hidden md:show md:flex md:flex-col md:relative md:mx-auto">
        <NextImage
          className="object-contain justify-self-end flex"
          src={resolvedImage}
          fallbackSrc={resolvedImage}
          alt={name}
          width={imageWidth}
          height={imageHeight}
        />
      </RightPanel>
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
