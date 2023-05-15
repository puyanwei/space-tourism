export const desktopSize = 1024
export const tabletSize = 768
export const mobileSize = 640

export const navbar = [
  { href: "/", text: "Home" },
  { href: "/destination", text: "Destination" },
  { href: "/crew", text: "Crew" },
  { href: "/technology", text: "Technology" },
]

export const backgroundImageMap = {
  home: {
    lg: "/assets/home/background-home-desktop.avif",
    md: "/assets/home/background-home-tablet.avif",
    sm: "/assets/home/background-home-mobile.avif",
  },
  destination: {
    lg: "/assets/destination/background-destination-desktop.avif",
    md: "/assets/destination/background-destination-tablet.avif",
    sm: "/assets/destination/background-destination-mobile.avif",
  },
  crew: {
    lg: "/assets/crew/background-crew-desktop.avif",
    md: "/assets/crew/background-crew-tablet.avif",
    sm: "/assets/crew/background-crew-mobile.avif",
  },
  technology: {
    lg: "/assets/technology/background-technology-desktop.avif",
    md: "/assets/technology/background-technology-tablet.avif",
    sm: "/assets/technology/background-technology-mobile.avif",
  },
} as const
