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

  const imageSize = resolveImageSize(width)
  return (
    <>
      <LeftPanel className="flex flex-col">
        <PageHeading>
          <SpaceSubheading number="02">Meet your crew</SpaceSubheading>
        </PageHeading>
        <Text>{role}</Text>
        <Heading level="h4">{name}</Heading>
        <Text>{bio}</Text>
        <CrewSliders>
          {data.map(({ name }, index) => (
            <ButtonSlider
              key={`${name} ${index}}`}
              active={data[currentIndex].name === name}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </CrewSliders>
      </LeftPanel>
      <RightPanel className="">
        <NextImage
          className="justify-self-center"
          src={webp}
          fallbackSrc={png}
          alt={name}
          width={`${imageSize}`}
          height={`${imageSize}`}
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
function CrewSliders({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
