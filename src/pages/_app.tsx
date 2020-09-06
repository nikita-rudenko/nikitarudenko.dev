import { AppProps } from 'next/app'
import useDarkMode from 'use-dark-mode'

import '@styles/tailwind.css'
import '@styles/fonts.css'

const App = ({ Component, pageProps }: AppProps) => {
  useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  })

  return <Component {...pageProps} />
}

export default App
