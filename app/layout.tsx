import "./globals.css"

export const metadata = {
  title: "Space Tourism",
  description: "Explore Space Tourism",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
