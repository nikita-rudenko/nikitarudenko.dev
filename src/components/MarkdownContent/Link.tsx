import NextLink from 'next/link'

import { TSpreadProps } from '@typings/commonPropTypes'

const Link = ({ children, ...props }: TSpreadProps) => {
  const { href } = props

  const AnchorElement = (
    <a
      {...props}
      tabIndex={0}
      className="font-bold text-indigo-800 cursor-pointer dark:text-indigo-400 hover:underline"
    >
      {children}
    </a>
  )

  if (href) {
    if (href.startsWith('http')) {
      return AnchorElement
    }

    if (href.startsWith('/')) {
      return <NextLink href={href}>{AnchorElement}</NextLink>
    }
  }

  return <span>{children}</span>
}

export default Link
