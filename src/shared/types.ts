import { backgroundImageMap } from "./consts"

export interface Component {
  className?: string
  style?: string
  testId?: string
}

export type Page = keyof typeof backgroundImageMap
export type ScreenSize = keyof (typeof backgroundImageMap)[Page]
export type BackgroundImageUrl = (typeof backgroundImageMap)[Page][ScreenSize]

export type PageUrls = `/${Page}` | "/"
