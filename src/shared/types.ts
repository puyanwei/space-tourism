import { ReactNode } from "react"
import { backgroundImageMap } from "./consts"

export interface Component {
  className?: string
  style?: string
  testId?: string
}

export interface WithChildren extends Component {
  children: ReactNode
}

export type Page = keyof typeof backgroundImageMap
export type ScreenSize = keyof (typeof backgroundImageMap)[Page]
export type BackgroundImageUrl = (typeof backgroundImageMap)[Page][ScreenSize]
export type PageUrls = `/${Page}` | "/"

interface Images {
  png: string
  webp: string
}

export interface Destinations {
  name: string
  images: Images
  description: string
  distance: string
  travel: string
}

export interface Crew {
  name: string
  images: Images
  role: string
  bio: string
}

export interface Technology {
  name: string
  images: {
    portrait: string
    landscape: string
  }
  description: string
}

export interface Data {
  destinations: Destinations[]
  crew: Crew[]
  technology: Technology[]
}

export interface DataProps {
  data: Data
}
