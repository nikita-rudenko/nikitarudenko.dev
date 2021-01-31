import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  href: string
  label: string
  icon: ReactNode
  className?: string
}

const ExtLink = ({ href, label, icon, className }: Props) => {
  return (
    <a
      href={href}
      style={{ display: 'flex', justifyContent: 'center' }}
      className={clsx(
        'flex leading-6 text-sm items-center px-2 py-1 font-bold text-white rounded-md hover:opacity-75',
        className
      )}
    >
      <span className="mr-1">{label}</span>
      {icon}
    </a>
  )
}

export default ExtLink
