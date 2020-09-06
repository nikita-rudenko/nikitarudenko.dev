import clsx from 'clsx'

import s from './NavMobileIcon.module.css'

const NavMobileIcon = ({ isOpen, setIsOpen }: any) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(s.navIcon, isOpen && s.open)}
    >
      <span className="bg-monochrome-900 dark:bg-white"></span>
      <span className="bg-monochrome-900 dark:bg-white"></span>
      <span className="bg-monochrome-900 dark:bg-white"></span>
      <span className="bg-monochrome-900 dark:bg-white"></span>
    </div>
  )
}

export default NavMobileIcon
