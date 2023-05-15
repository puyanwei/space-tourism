import fs from "fs"
import { TechnologyPanel } from "@/components/3-compositions/Technology Panel"
import { Data } from "@/shared/types"
import { GetStaticProps } from "next"
import { HeadTitle } from "@/components/1-atoms/HeadTitle"

interface TechnologyProps {
  data: Data
}

export const getStaticProps: GetStaticProps<TechnologyProps> = async () => {
  const jsonData = fs.readFileSync("src/json/data.json").toString()
  const data = (await JSON.parse(jsonData)) as Data

  return {
    props: {
      data,
    },
  }
}

export default function Technology({ data }: TechnologyProps) {
  const { technology } = data
  return (
    <>
      <HeadTitle title="Space Tourism - Technology" meta="Space Tourism Technology" />
      <TechnologyPanel data={technology} />
    </>
  )
}
