import path from "path"
import { promises as fs } from "fs"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const jsonDirectory: string = path.join(process.cwd(), "src/json")
  const fileContents: string = await fs.readFile(`${jsonDirectory}/data.json`, "utf8")
  console.log({ fileContents })
  res.status(200).json(JSON.parse(fileContents))
}
