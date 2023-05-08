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

  const imageWidth = resolveImageSize(width, 327, 532, 681)
  const imageHeight = resolveImageSize(width, 327, 443, 568)
  return (
    <>
      <LeftPanel className="flex flex-col lg:pl-48 h-screen lg:h-full">
        <PageHeading className="mx-auto lg:mx-0 pb-10 order-1 lg:order-none">
          <SpaceSubheading number="02">Meet your crew</SpaceSubheading>
        </PageHeading>
        <div className="relative w-full h-[223px] order-2 lg:order-none border-b-space-dark-gray border-b-2 lg:border-b-0 -z-10 pointer-events-none">
          <NextImage
            className="lg:hidden object-contain"
            src={webp}
            fallbackSrc={png}
            alt={name}
            fill
          />
        </div>
        <Text
          className="uppercase text-space-gray lg:pt-[150px] order-4 lg:order-none"
          theme="serif"
          sizeOverride="text-[16px] lg:text-[32px]"
        >
          {role}
        </Text>
        <Text className="order-5 lg:order-none text-[24px] uppercase pb-4" theme="serif">
          {name}
        </Text>
        <Text className="max-w-md order-6 lg:order-none pb-16">{bio}</Text>
        <CrewSlider className="py-6 space-x-4 lg:pt-0 lg:pb-8 order-3 lg:order-none">
          {data.map(({ name }, index) => (
            <ButtonSlider
              key={`${name} ${index}}`}
              active={data[currentIndex].name === name}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </CrewSlider>
      </LeftPanel>
      <RightPanel className="hidden lg:show lg:flex lg:flex-col lg:relative">
        <NextImage className="object-contain pr-48" src={webp} fallbackSrc={png} alt={name} fill />
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
