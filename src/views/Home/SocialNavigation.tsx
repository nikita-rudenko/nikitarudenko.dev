import Link from 'next/link'

import Card from '@components/Card'
import { SOCIAL_LINKS_LIST } from '@constants/links'

import * as Styled from './_shared/Nav.styled'

const SocialNavigation = () => {
  return (
    <Styled.NavContainer>
      {SOCIAL_LINKS_LIST.map(({ label, href, icon }) => (
        <Card key={label}>
          <Link href={href} passHref>
            <Styled.NavLink>
              <Styled.NavIconWrapper>{icon}</Styled.NavIconWrapper>
              <span>{label}</span>
            </Styled.NavLink>
          </Link>
        </Card>
      ))}
    </Styled.NavContainer>
  )
}

export default SocialNavigation
