import { useContext, useEffect, useState } from 'react'

import { ThemeContext } from '@context/ThemeContext'

import MoonIcon from './MoonIcon'
import SunIcon from './SunIcon'

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [theme, toggleTheme] = useContext(ThemeContext)

  useEffect(() => {
    setIsDarkMode(theme === 'dark')
  }, [setIsDarkMode, theme])

  return (
    <div
      tabIndex={0}
      role="radio"
      className="flex items-center justify-center p-2 border-2 border-gray-500 border-opacity-25 rounded-md cursor-pointer hover:bg-monochrome-100 text-monochrome-700 dark:text-white dark:hover:bg-monochrome-700"
      onClick={toggleTheme}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </div>
  )
}

export default DarkModeToggle
