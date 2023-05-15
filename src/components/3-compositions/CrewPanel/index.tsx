import { useState } from "react"
import { Text } from "@/components/1-atoms/Text"
import { warnAndReturnNull } from "@/shared/helpers"
import { Component, Crew, WithChildren } from "@/shared/types"
import { Heading } from "@/components/1-atoms/Heading"
import { NextImage } from "@/components/1-atoms/NextImage"
import { useWindowSize } from "src/hooks/useWindowSize"
import { mobileSize } from "@/shared/consts"
import { SpaceSubheading } from "@/components/2-molecules/SpaceSubheading"
import { ButtonSlider } from "@/components/1-atoms/ButtonSlider"

interface CrewPanalProps extends Component {
  data: Crew[]
}

export function CrewPanel({ data }: CrewPanalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { width } = useWindowSize()

  if (!width) return warnAndReturnNull("width is undefined")
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

  const tagSize = width > mobileSize ? "h3" : "h5"

  return (
    <div className="flex flex-col -mb-6 col-span-full lg:grid lg:grid-cols-12 lg:justify-end">
      <div className="relative flex flex-col lg:pl-16 lg:col-span-7">
        <SpaceSubheading className="md:pl-16 lg:pl-0" number="02">
          Meet your crew
        </SpaceSubheading>
        <div className="md:hidden relative w-[327px] h-[223px] border-b-2 border-b-space-dark-gray mx-auto lg:col-start-8">
          <NextImage
            className="object-contain"
            src={webp}
            fallbackSrc={png}
            alt={`${name}, ${role}`}
            fill
          />
        </div>
        <Text
          className="self-center uppercase lg:self-start lg:py-4 lg:pt-32"
          theme="serif"
          color="text-space-gray"
          sizeOverride="text-[16px] md:text-[24px] lg:text-[32px]"
        >
          {role}
        </Text>
        <Heading
          className="uppercase lg:leading-[50px] self-center lg:self-start lg:pb-8"
          level={tagSize}
        >
          {name}
        </Heading>
        <Text className="h-[150px] md:h-full py-16 md:py-0 self-center px-6 pt-4 md:pt-0 lg:px-0 lg:self-start lg:max-w-md">
          {bio}
        </Text>
        <CrewSlider className="py-4 space-x-4 md:py-8 lg:absolute lg:bottom-10 lg:left-50">
          {data.map(({ name }, index) => (
            <ButtonSlider
              key={`${name} ${index}}`}
              active={data[currentIndex].name === name}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </CrewSlider>
      </div>
      <div className="hidden md:block relative md:w-full md:h-full lg:w-[568px] lg:h-[670px] border-b-2 border-b-space-dark-gray md:border-b-transparent mx-auto lg:col-start-8 lg:self-end">
        <NextImage
          className="object-contain md:fixed lg:top-20 md:object-bottom"
          src={webp}
          fallbackSrc={png}
          alt={`${name}, ${role}`}
          fill
        />
      </div>
    </div>
  )
}

function CrewSlider({ children, className = "" }: WithChildren) {
  return <div className={className}>{children}</div>
}
