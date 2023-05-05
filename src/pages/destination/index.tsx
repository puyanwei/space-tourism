import fs from "fs"
import { SpaceSubheading } from "@/components/2-molecules/SpaceSubheading"
import { PlanetPanel } from "@/components/3-compositions/PlanetPanel"
import { Data } from "@/shared/types"
import { GetStaticProps, GetStaticPropsResult } from "next"

interface DestinationsProps {
  data: Data
}

export const getStaticProps: GetStaticProps<DestinationsProps> = async () => {
  const jsonData = fs.readFileSync("src/json/data.json").toString()
  const data = (await JSON.parse(jsonData)) as Data

  return {
    props: {
      data,
    },
  }
}

export default function Destination({ data }: DestinationsProps) {
  const { destinations } = data
  return (
    <PlanetPanel data={destinations}>
      <SpaceSubheading number="01">Pick your destination</SpaceSubheading>
    </PlanetPanel>
  )
}
