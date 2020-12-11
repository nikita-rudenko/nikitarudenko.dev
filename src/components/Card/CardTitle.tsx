import Link from 'next/link'

import * as Styled from './Card.styled'

type Props = {
  title: string
  href?: string
}

const CardTitle = ({ title, href }: Props) => {
  return (
    <Styled.Title as="h3">
      {href ? (
        <Link href={href} passHref>
          <Styled.TitleContent as="a">{title}</Styled.TitleContent>
        </Link>
      ) : (
        <Styled.TitleContent as="span">{title}</Styled.TitleContent>
      )}
    </Styled.Title>
  )
}

export default CardTitle
