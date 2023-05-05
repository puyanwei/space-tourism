import fs from "fs"
import { SpaceSubheading } from "@/components/2-molecules/SpaceSubheading"
import { PlanetPanel } from "@/components/3-compositions/PlanetPanel"
import { Data } from "@/shared/types"

export function getStaticProps() {
  const jsonData = fs.readFileSync("src/json/data.json").toString()
  const data = JSON.parse(jsonData) as Data

  return {
    props: {
      data,
    },
  }
}

export default function Destination({ data }: { data: Data }) {
  const { destinations } = data
  return (
    <PlanetPanel data={destinations}>
      <SpaceSubheading number="01">Pick your destination</SpaceSubheading>
    </PlanetPanel>
  )
}
