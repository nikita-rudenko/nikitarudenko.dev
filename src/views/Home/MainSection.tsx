import clsx from 'clsx'
import { ReactNode } from 'react'

import useCurrentMode from '@hooks/useCurrentMode'

type Props = {
  children: ReactNode
}

const MainSection = ({ children }: Props): JSX.Element => {
  const mode = useCurrentMode()

  return (
    <section
      className={clsx(
        'px-4 py-8 md:py-16 bg-monochrome-400',
        mode && `gradient-${mode}`
      )}
    >
      <div className="grid max-w-screen-md grid-cols-1 gap-3 mx-auto md:gap-5 sm:grid-cols-2">
        {children}
      </div>
    </section>
  )
}

export default MainSection
