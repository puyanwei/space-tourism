import { backgroundImageMap, desktopSize, tabletSize } from "./consts"
import { BackgroundImageUrl, Page, PageUrls } from "./types"

export function resolveBackgroundImage(screenWidth: number, page: PageUrls): BackgroundImageUrl {
  const resolvedPage = page === "/" ? "home" : (page.slice(1) as Page)
  if (screenWidth > desktopSize) return backgroundImageMap[resolvedPage]["lg"]
  if (screenWidth > tabletSize) return backgroundImageMap[resolvedPage]["md"]
  return backgroundImageMap[resolvedPage]["sm"]
}

export function warnAndReturnNull(warning: string) {
  console.warn(warning)
  return null
}
