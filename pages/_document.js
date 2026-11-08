import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="en" dir="ltr">
    <Head>
      {/* Matches the "bg" token for each palette in styles/configuration/_configuration.module.colors.scss */}
      <meta name="theme-color" content="#f3f3f0" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#1c1c1c" media="(prefers-color-scheme: dark)" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
