import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class Document extends NextDocument<{ css: string }> {
  render() {
    const { NODE_ENV, SPLITBEE_ENABLED = '' } = process.env

    return (
      <Html lang="en">
        <Head>
          {NODE_ENV === 'production' && JSON.parse(SPLITBEE_ENABLED) && (
            <script async src="https://cdn.splitbee.io/sb.js" />
          )}
        </Head>
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
