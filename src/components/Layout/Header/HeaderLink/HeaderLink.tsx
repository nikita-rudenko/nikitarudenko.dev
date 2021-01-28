import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import * as Styled from './HeaderLink.styled'

type Props = {
  href: string
  label: string
  emoji: string | ReactNode
}

const HeaderLink = ({ label, href, emoji }: Props) => {
  const { pathname } = useRouter()

  return (
    <NextLink href={href} passHref>
      <Styled.Link isActive={`/${pathname.split('/')[1]}` === href}>
        <span>{emoji}</span>
        <span>{label}</span>
      </Styled.Link>
    </NextLink>
  )
}

export default HeaderLink
