import clsx from 'clsx'
import { ReactNode } from 'react'

import CardTitle from './CardTitle'

type Props = {
  children: ReactNode
  title?: string
  href?: string
  className?: string
}

const Card = (props: Props) => {
  const { children, title, className, href } = props

  return (
    <div
      className={clsx(
        className,
        'bg-white rounded-md shadow-md overflow-hidden dark:bg-monochrome-800'
      )}
    >
      {title && <CardTitle title={title} href={href} />}
      {children}
    </div>
  )
}

export default Card
