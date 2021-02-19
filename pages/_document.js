import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    //const { pathname } = ctx;
    //const lang = pathname.startsWith("/de") ? "de" : "en";
    const lang = "en"; /// this would be dynamic when i18n is used
    const dir = "ltr"; /// this would be dynamic someday of new culture is added and requires "rtl"
    return { ...initialProps, lang, dir }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument