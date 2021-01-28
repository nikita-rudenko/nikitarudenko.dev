import { INTERNAL_LINKS_LIST } from '@constants/links'

import HeaderLink from '../HeaderLink'
import * as Styled from './NavDesktop.styled'

const NavDesktop = () => {
  return (
    <Styled.Nav>
      {INTERNAL_LINKS_LIST.map(({ href, label, emoji }) => {
        return (
          <HeaderLink key={label} label={label} href={href} emoji={emoji} />
        )
      })}
    </Styled.Nav>
  )
}

export default NavDesktop
