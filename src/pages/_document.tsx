import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html className="scroll-smooth scroll-pt-16 h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
