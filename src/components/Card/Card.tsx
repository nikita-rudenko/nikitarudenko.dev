import { ReactNode } from 'react'

import * as Styled from './Card.styled'
import CardTitle from './CardTitle'

type Props = {
  children: ReactNode
  title?: string
  href?: string
  className?: string
}

const Card = ({ children, title, href, className }: Props) => {
  return (
    <Styled.Card className={className}>
      {title && <CardTitle title={title} href={href} />}
      {children}
    </Styled.Card>
  )
}

export default Card
