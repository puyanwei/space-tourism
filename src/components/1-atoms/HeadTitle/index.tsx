import Head from "next/head"

interface HeadTitleProps {
  title: string
  meta: string
}

export function HeadTitle({ title, meta }: HeadTitleProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta property={`og:${meta}`} content={title} key={meta} />
    </Head>
  )
}
