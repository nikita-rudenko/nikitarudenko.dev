import { AppProps } from 'next/app'
import { StyleSheetManager, ThemeProvider } from 'styled-components'

import '@styles/tailwind.css'
import '@styles/fonts.css'
import { ThemeContextProvider } from '@context/ThemeContext'
import GlobalStyles from '@styles/GlobalStyles'
import theme from '@styles/theme'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <StyleSheetManager
      disableVendorPrefixes={process.env.NODE_ENV === 'development'}
    >
      <ThemeProvider theme={theme}>
        <ThemeContextProvider>
          <Component {...pageProps} />
        </ThemeContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default App
