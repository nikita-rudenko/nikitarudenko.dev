import { INTERNAL_LINKS_LIST } from '@constants/links'

import HeaderLink from '../HeaderLink'
import * as Styled from './NavDesktop.styled'

const NavDesktop = () => {
  return (
    <Styled.Nav>
      {INTERNAL_LINKS_LIST.map(({ href, label, icon }) => {
        return <HeaderLink key={label} label={label} href={href} emoji={icon} />
      })}
    </Styled.Nav>
  )
}

export default NavDesktop
