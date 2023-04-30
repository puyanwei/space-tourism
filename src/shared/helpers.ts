import { backgroundImageMap, desktopSize, tabletSize } from "./consts"
import { BackgroundImageUrl, Page, PageUrls } from "./types"

export function resolveBackgroundImage(width: number, page: PageUrls): BackgroundImageUrl {
  const resolvedPage = page === "/" ? "home" : (page.slice(1) as Page)
  if (width > desktopSize) return backgroundImageMap[resolvedPage]["lg"]
  if (width > tabletSize) return backgroundImageMap[resolvedPage]["md"]
  return backgroundImageMap[resolvedPage]["sm"]
}

export function warnAndReturnNull(warning: string) {
  console.warn(warning)
  return null
}
