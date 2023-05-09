import { ReactNode, useState } from "react"
import { Tab } from "@/components/1-atoms/Tab"
import { Text } from "@/components/1-atoms/Text"
import { resolveImageSize, warnAndReturnNull } from "@/shared/helpers"
import { Component, Crew, Destinations, WithChildren } from "@/shared/types"
import { Heading } from "@/components/1-atoms/Heading"
import { PlanetStatistics } from "@/components/2-molecules/PlanetStatistics"
import { NextImage } from "@/components/1-atoms/NextImage"
import { useWindowSize } from "src/hooks/useWindowSize"
import { desktopSize, tabletSize } from "@/shared/consts"
import { SpaceSubheading } from "@/components/2-molecules/SpaceSubheading"
import { ButtonSlider } from "@/components/1-atoms/ButtonSlider"

interface CrewPanalProps extends Component {
  data: Crew[]
}

export function CrewPanel({ data }: CrewPanalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { width } = useWindowSize()
  if (!width) return warnAndReturnNull("screen width is empty")
  if (!data.length) return warnAndReturnNull("data is empty")

  function handleOnClick(index: number) {
    setCurrentIndex(index)
  }

  const {
    name,
    images: { png, webp },
    role,
    bio,
  } = data[currentIndex]

  const imageWidth = resolveImageSize(width, 327, 456, 681)
  const imageHeight = resolveImageSize(width, 327, 572, 568)
  return (
    <>
      <LeftPanel className="flex flex-col md:mx-8 lg:pl-[15%]">
        <PageHeading className="mx-auto md:mx-0 lg:mx-0 pb-10 md:pb-6 order-1 md:order-none">
          <SpaceSubheading number="02">Meet your crew</SpaceSubheading>
        </PageHeading>
        <div className="md:hidden relative w-full h-[223px] order-2 md:order-none border-b-space-dark-gray border-b-2 md:border-b-0 -z-10 pointer-events-none">
          <NextImage className="object-contain" src={webp} fallbackSrc={png} alt={name} fill />
        </div>
        <Text
          className="uppercase text-space-gray lg:pt-[150px] order-4 md:order-none pb-6"
          theme="serif"
          sizeOverride="text-[16px] md:text-[24px] lg:text-[32px]"
        >
          {role}
        </Text>
        <Text
          className="order-5 md:order-none uppercase pb-8 lg:leading-[50px]"
          theme="serif"
          sizeOverride="text-[24px] md:text-[40px] lg:text-[56px]"
        >
          {name}
        </Text>
        <Text className="max-w-md order-6 md:order-none pb-16 md:pb-8 mx-auto lg:mx-0">{bio}</Text>
        <div className="hidden md:flex md:flex-grow md:show" />
        <CrewSlider className="py-6 space-x-4 md:pt-0 md:pb-24 order-3 md:order-none">
          {data.map(({ name }, index) => (
            <ButtonSlider
              key={`${name} ${index}}`}
              active={data[currentIndex].name === name}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </CrewSlider>
      </LeftPanel>
      <RightPanel className="hidden md:show md:flex md:flex-col md:relative md:mx-auto">
        <NextImage
          className="object-contain lg:pr-48 fixed bottom-0"
          src={webp}
          fallbackSrc={png}
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
