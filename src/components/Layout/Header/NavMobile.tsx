import clsx from 'clsx'
import { useState } from 'react'

import DarkModeToggle from '@components/DarkModeToggle'
import { INTERNAL_LINKS_LIST } from '@constants/links'

import HeaderLink from './HeaderLink'
import NavMobileIcon from './NavMobileIcon'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav
        className={clsx(
          'block md:hidden fixed inset-0 h-full z-40',
          isOpen && 'opacity-100',
          !isOpen && 'pointer-events-none'
        )}
      >
        <div
          className={clsx(
            'flex justify-center items-center flex-col inset-0 opacity-0 bg-white dark:bg-monochrome-800 dark:text-white h-full transition-opacity duration-500',
            isOpen && 'opacity-100'
          )}
        >
          <div className="flex flex-col items-center gap-4 text-lg font-bold font-body">
            {INTERNAL_LINKS_LIST.map(({ href, label, emoji }) => {
              return (
                <HeaderLink
                  key={label}
                  emoji={emoji}
                  href={href}
                  label={label}
                />
              )
            })}
          </div>

          <div className="mt-8">
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      <div className="fixed bottom-0 right-0 z-40 block p-4 bg-white border-t-2 border-l-2 rounded-tl-lg shadow-md dark:bg-monochrome-700 dark:text-white md:hidden border-mononchrome-700">
        <NavMobileIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  )
}

export default NavMobile
