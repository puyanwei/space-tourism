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
    <div className="flex flex-col col-span-full flex-wrap content-center md:content-normal -mb-6 lg:grid lg:grid-cols-12">
      <div className="grid grid-cols-1 lg:col-span-7 md:flex md:flex-col">
        <SpaceSubheading className="md:pl-16 lg:pl-0" number="02">
          Meet your crew
        </SpaceSubheading>
        <div className="md:hidden relative w-[327px] h-[223px] border-b-2 border-b-space-dark-gray -z-10 mx-auto lg:col-start-8">
          <NextImage
            className="object-contain"
            src={webp}
            fallbackSrc={png}
            alt={`${name}, ${role}`}
            fill
          />
        </div>
        <Text
          className="uppercase  self-center lg:self-start md:py-4"
          theme="serif"
          color="text-space-gray"
          sizeOverride="text-[16px] md:text-[24px] lg:text-[32px]"
        >
          {role}
        </Text>
        <Heading
          className="uppercase lg:leading-[50px] self-center lg:self-start md:pb-4"
          level={tagSize}
        >
          {name}
        </Heading>
        <Text className="pt-4 px-6 lg:px-0 self-center lg:self-start lg:max-w-md">{bio}</Text>
        <div className="hidden lg:show lg:flex lg:flex-grow" />
        <CrewSlider className="py-4 md:py-8 space-x-4 ">
          {data.map(({ name }, index) => (
            <ButtonSlider
              key={`${name} ${index}}`}
              active={data[currentIndex].name === name}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </CrewSlider>
      </div>
      <div className="hidden md:block relative md:w-[450px] md:h-[315px] lg:w-[568px] lg:h-[670px]  border-b-2 border-b-space-dark-gray md:border-b-transparent -z-10 mx-auto lg:col-start-8">
        <NextImage
          className="object-contain md:fixed md:top-10 lg:top-20 md:object-bottom"
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
