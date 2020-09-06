import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'
import { ReactNode } from 'react'

import NavLink from '@components/NavLink'

type Props = {
  href: string
  label: string
  emoji: string | ReactNode
}

function HeaderLink({ label, href, emoji }: Props) {
  const { pathname } = useRouter()

  return (
    <NavLink
      key={label}
      href={href}
      className={clsx(
        'px-3 py-2 border-2 border-gray-500 border-opacity-25 rounded-md',
        `/${pathname.split('/')[1]}` === href &&
          'bg-gray-200 dark:bg-monochrome-700'
      )}
    >
      <span className="flex items-center justify-center mr-1">{emoji}</span>
      <span>{label}</span>
    </NavLink>
  )
}

export default HeaderLink
