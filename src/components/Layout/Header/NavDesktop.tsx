import DarkModeToggle from '@components/DarkModeToggle'
import { INTERNAL_LINKS_LIST } from '@constants/links'

import HeaderLink from './HeaderLink'

const NavDesktop = () => {
  return (
    <nav className="relative justify-center hidden max-w-screen-md grid-flow-col gap-6 py-4 mx-auto text-sm font-bold md:flex font-body md:text-base">
      {INTERNAL_LINKS_LIST.map(({ href, label, emoji }) => {
        return (
          <HeaderLink key={label} label={label} href={href} emoji={emoji} />
        )
      })}

      <div className="absolute right-0">
        <DarkModeToggle />
      </div>
    </nav>
  )
}

export default NavDesktop
