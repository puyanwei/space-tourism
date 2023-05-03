import path from "path"
import { promises as fs } from "fs"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  //Find the absolute path of the json directory
  const jsonDirectory: string = path.join(process.cwd(), "src/json")
  console.log({ jsonDirectory })
  //Read the json data file data.json
  const fileContents: string = await fs.readFile(`${jsonDirectory}/data.json`, "utf8")
  res.status(200).json(JSON.parse(fileContents))
}
