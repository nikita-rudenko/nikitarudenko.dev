import { AppProps } from 'next/app'

import { ThemeContextProvider } from '@context/ThemeContext'
import '@styles/tailwind.css'
import '@styles/fonts.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}

export default App
