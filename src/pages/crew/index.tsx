import { HeadTitle } from "@/components/1-atoms/HeadTitle"
import { CrewPanel } from "@/components/3-compositions/CrewPanel"
import { Data } from "@/shared/types"
import fs from "fs"
import { GetStaticProps } from "next"

interface CrewProps {
  data: Data
}

export const getStaticProps: GetStaticProps<CrewProps> = async () => {
  const jsonData = fs.readFileSync("src/json/data.json").toString()
  const data = (await JSON.parse(jsonData)) as Data

  return {
    props: {
      data,
    },
  }
}

export default function Crew({ data }: CrewProps) {
  const { crew } = data
  return (
    <>
      <HeadTitle title="Space Tourism - Meet Your Crew!" meta="Space Tourism Crew" />
      <CrewPanel data={crew} />
    </>
  )
}
