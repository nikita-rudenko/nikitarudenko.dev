import { useState } from 'react'

import { INTERNAL_LINKS_LIST } from '@constants/links'

import HeaderLink from '../HeaderLink'
import * as Styled from './NavMobile.styled'
import NavMobileToggle from './NavMobileToggle'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Styled.Overlay isOpen={isOpen}>
        <Styled.Navigation isOpen={isOpen}>
          <Styled.NavigationList>
            {INTERNAL_LINKS_LIST.map(({ href, label, icon }) => {
              return (
                <HeaderLink
                  key={label}
                  emoji={icon}
                  href={href}
                  label={label}
                />
              )
            })}
          </Styled.NavigationList>
        </Styled.Navigation>
      </Styled.Overlay>

      <NavMobileToggle isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default NavMobile
