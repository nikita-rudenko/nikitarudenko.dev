import Link from 'next/link'
import { ReactNode } from 'react'

import * as Styled from './ContentCard.styled'

type Props = {
  children: ReactNode
  title: string
  href?: string
  className?: string
}

const ContentCard = ({ children, title, href, className }: Props) => {
  return (
    <Styled.Wrapper className={className}>
      <Styled.Title as="h3">
        {href ? (
          <Link href={href} passHref>
            <Styled.TitleContent as="a">{title}</Styled.TitleContent>
          </Link>
        ) : (
          <Styled.TitleContent as="span">{title}</Styled.TitleContent>
        )}
      </Styled.Title>
      {children}
    </Styled.Wrapper>
  )
}

export default ContentCard
