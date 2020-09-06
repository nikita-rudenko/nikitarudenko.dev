import { useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'

function useCurrentMode() {
  const [currentMode, setCurrentMode] = useState('')
  const { value } = useDarkMode()

  useEffect(() => {
    if (process.browser) {
      setCurrentMode(value ? 'dark' : 'light')
    } else {
      setCurrentMode('')
    }
  }, [value])

  return currentMode
}

export default useCurrentMode
