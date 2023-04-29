import { backgroundImageMap } from "./consts"
import { BackgroundImageUrl, Page, PageUrls } from "./types"

export function resolveBackgroundImage(width: number, page: PageUrls): BackgroundImageUrl {
  const resolvedPage = page === "/" ? "home" : (page.slice(1) as Page)
  if (width > 1440) return backgroundImageMap[resolvedPage]["lg"]
  if (width > 768) return backgroundImageMap[resolvedPage]["md"]
  return backgroundImageMap[resolvedPage]["sm"]
}
