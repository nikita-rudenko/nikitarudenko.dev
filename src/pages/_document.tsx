import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class Document extends NextDocument<{ css: string }> {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script src="/noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
