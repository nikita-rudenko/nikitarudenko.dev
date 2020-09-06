import clsx from 'clsx'
import { ReactNode, useContext } from 'react'

import { ThemeContext } from '@context/ThemeContext'
import getThemeGradient from '@utils/getThemeGradient'

type Props = {
  children: ReactNode
}

const MainSection = ({ children }: Props): JSX.Element => {
  const [theme] = useContext(ThemeContext)

  return (
    <section
      className={clsx(
        'px-4 py-8 md:py-16 bg-monochrome-400',
        getThemeGradient(theme)
      )}
    >
      <div className="grid max-w-screen-md grid-cols-1 gap-3 mx-auto md:gap-5 sm:grid-cols-2">
        {children}
      </div>
    </section>
  )
}

export default MainSection
