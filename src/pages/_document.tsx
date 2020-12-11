import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
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
