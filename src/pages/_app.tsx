import { AppProps } from 'next/app'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

import '@styles/fonts.css'
import GlobalStyles from '@styles/GlobalStyles'
import theme from '@styles/theme'
import { print as PrintStyles } from '@views/Resume/Resume.styled'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <StyleSheetManager
      disableVendorPrefixes={process.env.NODE_ENV === 'development'}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
        <PrintStyles />
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default App
