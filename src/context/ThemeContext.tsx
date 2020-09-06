import { createContext, useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'

import { TRenderProps } from '@typings/commonPropTypes'
import { TThemeVariants } from '@typings/themeTypes'

type TThemeContext = [TThemeVariants | '', () => void]

const ThemeContext = createContext<TThemeContext>(['', () => null])

function ThemeContextProvider({ children }: TRenderProps) {
  const [currentTheme, setCurrentTheme] = useState<TThemeVariants | ''>('')
  const { value: isDarkMode, toggle: toggleTheme } = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  })

  useEffect(() => {
    if (process.browser) {
      setCurrentTheme(isDarkMode ? 'dark' : 'light')
    } else {
      setCurrentTheme('')
    }
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={[currentTheme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
