import { useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'

import MoonIcon from './MoonIcon'
import SunIcon from './SunIcon'

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { toggle, value } = useDarkMode()

  useEffect(() => {
    setIsDarkMode(value)
  }, [setIsDarkMode, value])

  return (
    <div
      tabIndex={0}
      role="radio"
      className="flex items-center justify-center p-2 border-2 border-gray-500 border-opacity-25 rounded-md cursor-pointer hover:bg-monochrome-100 text-monochrome-700 dark:text-white dark:hover:bg-monochrome-700"
      onClick={toggle}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </div>
  )
}

export default DarkModeToggle
