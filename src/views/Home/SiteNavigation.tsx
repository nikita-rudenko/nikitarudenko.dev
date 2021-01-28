import Link from 'next/link'

import Card from '@components/Card'
import { INTERNAL_LINKS_LIST } from '@constants/links'

import * as Styled from './_shared/Nav.styled'

const SiteNavigation = () => {
  return (
    <Styled.NavContainer>
      {INTERNAL_LINKS_LIST.slice(1, Infinity).map(({ label, href, icon }) => (
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

export default SiteNavigation
