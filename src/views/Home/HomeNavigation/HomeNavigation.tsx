import Link from 'next/link'

import { INTERNAL_LINKS_LIST } from '@constants/links'

import * as Styled from './HomeNavigation.styled'

const HomeNavigation = () => {
  return (
    <Styled.NavigationContainer>
      {INTERNAL_LINKS_LIST.slice(1, Infinity).map(({ label, href, emoji }) => (
        <Styled.Card key={label}>
          <Link href={href} passHref>
            <Styled.NavLink>
              <Styled.EmojiWrapper>{emoji}</Styled.EmojiWrapper>
              <span>{label}</span>
            </Styled.NavLink>
          </Link>
        </Styled.Card>
      ))}
    </Styled.NavigationContainer>
  )
}

export default HomeNavigation
