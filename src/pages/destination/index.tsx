import fs from "fs"
import { PlanetPanel } from "@/components/3-compositions/PlanetPanel"
import { Data } from "@/shared/types"
import { GetStaticProps } from "next"
import { HeadTitle } from "@/components/1-atoms/HeadTitle"

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
    <>
      <HeadTitle title="Space Tourism - Pick Your Destination" meta="Space Tourism Destination" />
      <PlanetPanel data={destinations} />
    </>
  )
}
